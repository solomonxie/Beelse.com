
function GFslideShow(photoFeed, container, options) {
  this.feedUrl = photoFeed;
  if (typeof container == "string") {
    container = document.getElementById(container);
  }
  this.container = container;
  this.parseOptions(options);
  this.setup();
}

// Thumbnail size preferences.

GFslideShow.THUMBNAILS_SMALL = "small";
GFslideShow.THUMBNAILS_MEDIUM = "medium";
GFslideShow.THUMBNAILS_LARGE = "large";

// Thumbnail tag names and namespaces.

// MediaRSS.
GFslideShow.MRSS_THUMBNAIL_TAG = "thumbnail";
GFslideShow.MRSS_THUMBNAIL_NS  = "http://search.yahoo.com/mrss/";

// iTunes.
GFslideShow.ITMS_THUMBNAIL_TAG = "coverArt";
GFslideShow.ITMS_THUMBNAIL_NS  = "http://phobos.apple.com/rss/1.0/modules/itms/";

// MediaRSS is default.
GFslideShow.DEFAULT_THUMBNAIL_TAG = GFslideShow.MRSS_THUMBNAIL_TAG;
GFslideShow.DEFAULT_THUMBNAIL_NS  = GFslideShow.MRSS_THUMBNAIL_NS;

// Default display timings, all in milliseconds.
GFslideShow.DEFAULT_DISPLAY_TIME = 3000;
GFslideShow.DEFAULT_TRANSISTION_TIME = 1000;
GFslideShow.DEFAULT_TRANSISTION_STEP = 25;

GFslideShow.DEFAULT_PAUSE_PNG = "http://www.google.com/uds/solutions/slideshow/pause.png";
GFslideShow.DEFAULT_PLAY_PNG = google.loader.ServiceBase + "/solutions/slideshow/play.png";

GFslideShow.prototype = {

  parseOptions: function(options) {
    // Default Options
    this.options = {
      numResults : google.feeds.Feed.MAX_ENTRIES,
      scaleImages : false,
      thumbnailTag : GFslideShow.DEFAULT_THUMBNAIL_TAG,
      thumbnailNamespace : GFslideShow.DEFAULT_THUMBNAIL_NS,
      thumbnailSize : GFslideShow.THUMBNAILS_LARGE,
      linkTarget : null,
      displayTime : GFslideShow.DEFAULT_DISPLAY_TIME,
      transitionTime : GFslideShow.DEFAULT_TRANSISTION_TIME,
      transitionStep : GFslideShow.DEFAULT_TRANSISTION_STEP,
      pauseOnHover : true,
      pauseImage : GFslideShow.DEFAULT_PAUSE_PNG,
      scalePauseImage : true,
      autoCleanup : true,
      thumbnailUrlResolver : null,
      transitionCallback : null,
      feedLoadCallback : null,
      imageClickCallback : null
    };

    if (options) {
      for (o in this.options) {
        if (typeof options[o] != "undefined") {
          this.options[o] = options[o];
        }
      }
    }
    // Override strange options
    if (this.options.displayTime < 100) {
      this.options.displayTime = 100;
    }
    // Calculated
    var ts = (this.options.transitionTime / this.options.transitionStep);
    this.delta = (1.0 / ts);

    // Flag to start
    this.started = false;
  },

  setup: function() {
    if (this.container == null) return;

    // fixme(dcollison): better ie detection..
    if (typeof window.ActiveXObject != "undefined") this.ie_mode = true;

    // Feeds..
    this.feed = new google.feeds.Feed(this.feedUrl);
    this.feed.setResultFormat(google.feeds.Feed.MIXED_FORMAT);
    this.feed.setNumEntries(this.options.numResults);
    this.feed.load(this.bind(GFslideShow.prototype.feedLoaded));
  },

  bind : function(method) {
    var self = this;
    var opt_args = [].slice.call(arguments, 1);
    return function() {
      var args = opt_args.concat([].slice.call(arguments));
      return method.apply(self, args);
    }
  },

  mouseOver: function(e) {
    var event = e || window.event;
    var relatedTarget = event.relatedTarget || event.fromElement;

    while(relatedTarget != null) {
      if (relatedTarget == this.container) {
        return;
      }
      relatedTarget = relatedTarget.parentNode;
    }

    this.display_paused = true;
    if (this.pauseImage) {
      this.pauseImage.style.visibility = "visible";
    }
  },

  mouseOut: function(e) {
    var event = e || window.event;
    var relatedTarget = event.relatedTarget || event.toElement;

    while(relatedTarget != null) {
      if (relatedTarget == this.container) {
        return;
      }
      relatedTarget = relatedTarget.parentNode;
     }

    this.display_paused = false;
    if (this.pauseImage) {
      this.pauseImage.style.visibility = "hidden";
    }
    if (this.display_timer == null && this.transition_timer == null) {
      // restart.
      this.displayNextPhoto();
    }
  },

  pauseAndCallout: function() {

    this.display_paused = true;
    if (this.pauseImage) {
      this.pauseImage.style.visibility = "visible";
    }

    // for some reason a mouseout happens
    // when we click and swap divs...
    this.container.onmouseout = null;
    this.options.imageClickCallback(this.entries[this.photo_index]);
  },

  resumeSlideShow: function() {
     if (this.options.pauseOnHover) {
       this.container.onmouseover = this.bind(GFslideShow.prototype.mouseOver);
       this.container.onmouseout = this.bind(GFslideShow.prototype.mouseOut);
     }
     this.display_paused = false;
     if (this.pauseImage) {
       this.pauseImage.style.visibility = "hidden";
     }
     if (this.display_timer == null && this.transition_timer == null) {
       // restart.
       this.displayNextPhoto();
     }
  },

  clearNode: function(node) {
    if (node == null) return;
    var child;
    while (child = node.firstChild) {
      node.removeChild(child);
    }
  },

  createSubContainer: function() {
    var div = document.createElement("div");
    div.style.width = "100%";
    div.style.height = "100%";
    div.style.position = "relative";
    div.style.overflow = "hidden";
    this.clearNode(this.container);
    this.container.appendChild(div);
    this.container = div;
  },

  grabThumb: function(thumbNodes) {
    var ti = 0;
    if (thumbNodes.length > 1) {
      // Use size hint.
      if (this.options.thumbnailSize == GFslideShow.THUMBNAILS_LARGE) {
        ti = thumbNodes.length - 1;
      } else if (this.options.thumbnailSize == GFslideShow.THUMBNAILS_MEDIUM) {
        ti = Math.floor(thumbNodes.length / 2);
      }
    }
    var node = thumbNodes[ti];
    var thumb = null;
    var attr = node.getAttributeNode("url");
    if (attr != null) {
      thumb = node.getAttributeNode("url").nodeValue;
    } else {
      thumb = node.firstChild.nodeValue;
    }
    return thumb;
  },

  processThumbs: function(opt_chunk, opt_timeout) {
    this.thumb_timer = null;
    var start = this.thumbs_index;
    var num = this.thumbs.length;
    var chunk = opt_chunk || 20;
    if (num > (start + chunk)) {
      num = (start + chunk);
      // schedule next batch.
      var cb = this.bind(GFslideShow.prototype.processThumbs);
      var to = opt_timeout || Math.round(this.options.displayTime / 2);
      this.thumb_timer = window.setTimeout(cb, to);
    }
    for (var i = start; i < num; i++) {
      var thumb = this.thumbs[i];
      var image = this.createImage(thumb);
      this.images.push(image);
      if (this.options.linkTarget) {
        var link = this.createLink(this.entries[i].link);
        link.appendChild(image);
        this.container.appendChild(link);
      } else {
        this.container.appendChild(image);
      }
      if (image.complete) {
        // We are already loaded and we have size dimensions.
        this.imageLoaded(image);
      } else {
        // We need to wait for the image to load..
        image.onload = this.bind(GFslideShow.prototype.imageLoaded, image);
      }
      this.thumbs_index++;
    }
  },

  feedLoaded: function(result) {
    if (this.options.feedLoadCallback) {
      this.options.feedLoadCallback(result);
    }

    if (result.error) {
      if (!this.options.feedLoadCallback) {
        this.container.innerHTML = "<center>feed could not be loaded.</center>";
      }
      return;
    }
    this.createSubContainer();
    if (this.container.offsetWidth) {
      // snapshot.
      this.width = this.container.offsetWidth;
      this.height = this.container.offsetHeight;
    }
    this.createPauseImage();
    this.images = [];
    this.entries = [];
    this.thumbs = [];
    this.thumbs_index = 0;
    var entries = result.feed.entries;
    for (var i = 0; i < entries.length; i++) {
      var thumb = null;
      if (this.options.thumbnailUrlResolver) {
        thumb = this.options.thumbnailUrlResolver(entries[i]);
      } else {
        var thumbNodes = google.feeds.getElementsByTagNameNS(
                           entries[i].xmlNode,
                           this.options.thumbnailNamespace,
                           this.options.thumbnailTag);
        if (thumbNodes && thumbNodes.length > 0) {
          thumb = this.grabThumb(thumbNodes);
        }
      }
      if (thumb) {
        this.thumbs.push(thumb);
        this.entries.push(entries[i]);
      }
    }
    // Attach mouse handlers if applicable for pausing.
    if (this.options.pauseOnHover && entries.length > 0) {
      this.container.onmouseover = this.bind(GFslideShow.prototype.mouseOver);
      this.container.onmouseout = this.bind(GFslideShow.prototype.mouseOut);
    }
    if (this.options.imageClickCallback) {
      this.container.onclick = this.bind(GFslideShow.prototype.pauseAndCallout);
    }

    this.processThumbs(2, 200); // Seed with 2 images and quick timeout for next chunk.
  },

  imageLoaded: function(image) {
    image.__gfloaded = true;
    this.adjustImage(image);

    // Once the first image is loaded, begin the slideshow..
    if (!this.started) {
      for (var i = 0; i < this.images.length; i++) {
        if (image == this.images[i]) {
          this.displayPhotos(i);
          if (this.options.transitionCallback) {
            this.options.transitionCallback(this.entries[i],
                                            this.options.transitionTime);
          }
        }
      }
    }
  },

  adjustImage: function(image) {
    // Scale if requested.
    if (this.options.scaleImages) {
      this.scaleImage(image);
    }
    // Center the image.
    this.centerImage(image);
  },

  scaleImage: function(image, opt_width, opt_height) {
    // These change when the first one is set, so we need to remember them.
    var width = opt_width || this.width;
    var height = opt_height || this.height;
    var imgW = image.offsetWidth;
    var imgH = image.offsetHeight;
    var scaleH = height / imgH;
    var scaleW = width / imgW;
    if (scaleH < scaleW) {
      image.style.height = height + "px";
      image.style.width = Math.round(imgW * scaleH) + "px";
    } else {
      image.style.width = width + "px";
      image.style.height = Math.round(imgH * scaleW) + "px";
    }
  },

  centerImage: function(image) {
    var oh = this.height - image.offsetHeight;
    var ow = this.width - image.offsetWidth;

    // Don't assume these are zero..
    image.style.top = "0px";
    image.style.left = "0px";

    // center the image
    if (oh > 0) {
      var ah = Math.round(oh/2);
      image.style.top = image.offsetTop + ah + "px";
    }
    if (ow > 0) {
      var aw = Math.round(ow/2);
      image.style.left = image.offsetLeft + aw + "px";
    }
  },

  createLink: function(href) {
    var link = document.createElement("a");
    link.setAttribute("href", href);
    if (this.options.linkTarget) {
      link.setAttribute("target", this.options.linkTarget);
    }
    return link;
  },

  createImage: function(src) {
    var image = document.createElement("img");
    image.style.position = "absolute";
    image.setAttribute("src", src);
    this.setOpacity(image, 0);
    return image;
  },

  adjustPauseImage: function(image) {
    if (this.options.scalePauseImage) {
      var height = Math.round(this.height * 0.33);
      var width = Math.round(this.width * 0.33);
      this.scaleImage(image, width, height);
    }
    this.placePauseImage(image);
  },

  placePauseImage: function(image) {
    var oh = this.height - image.offsetHeight;
    var ow = this.width - image.offsetWidth;

    // Don't assume these are zero..
    image.style.top = "0px";
    image.style.left = "0px";

    // center the image
    if (oh > 0) {
      var off = Math.round(this.height * 0.10);
      if (off < 15) off = 10;
      var ah = this.height - (image.offsetHeight + off);
      if (ah < 0) ah = 0;
      image.style.top = image.offsetTop + ah + "px";
    }
    if (ow > 0) {
      var aw = Math.round(ow/2);
      image.style.left = image.offsetLeft + aw + "px";
    }
  },

  createAlphaPauseImage: function(image) {
    // Work with offscreen version first to get the correct sizes and offsets..
    this.adjustPauseImage(image);

    var imgW = image.offsetWidth;
    var imgH = image.offsetHeight;
    var imgT = image.style.top;
    var imgL = image.style.left;

    // Now create real one.
    var element = null;
    if (this.ie_mode) {
      var src = this.options.pauseImage;
      element = document.createElement("div");
      element.style.filter = "progid:DXImageTransform.Microsoft." +
        "AlphaImageLoader(src='" + src + "', sizingMethod='scale')";
      element.style.position = "absolute";
      element.style.width = imgW + "px";
      element.style.height = imgH + "px";
      element.style.left = imgL;
      element.style.top = imgT;
    } else {
      element = image;
      element.style.opacity = "";
    }

    element.style.visibility = "hidden";
    element.style.zIndex = 222;

    if (element != image) {
      this.container.appendChild(element);
      this.container.removeChild(image);
    }
    this.pauseImage = element;
  },

  pauseImageLoaded: function(image) {
    this.createAlphaPauseImage(image);
  },

  createPauseImage: function(src) {
    if (!this.options.pauseOnHover) return;
    var pauseOff = this.createImage(this.options.pauseImage);
    this.container.appendChild(pauseOff);
    if (pauseOff.complete) {
      this.createAlphaPauseImage(pauseOff);
    } else {
      pauseOff.onload = this.bind(GFslideShow.prototype.pauseImageLoaded,
                                  pauseOff);
    }
  },

  clearTransitionTimer: function() {
    if (this.transition_timer) {
      clearInterval(this.transition_timer);
      this.transition_timer = null;
    }
  },

  setTransitionTimer: function() {
    this.clearTransitionTimer();
    var cb = this.bind(GFslideShow.prototype.transitionNextPhoto);
    this.transition_timer = window.setInterval(cb, this.options.transitionStep);
  },

  clearDisplayTimer: function() {
    if (this.display_timer) {
      clearTimeout(this.display_timer);
      this.display_timer = null;
    }
  },

  setDisplayTimer: function() {
    if (this.display_timer) return;
    var cb = this.bind(GFslideShow.prototype.displayNextPhoto);
    this.display_timer = window.setTimeout(cb, this.options.displayTime);
  },

  clearThumbTimer: function() {
    if (this.thumb_timer) {
      clearTimeout(this.thumb_timer);
      this.thumb_timer = null;
    }
  },

  displayPhotos: function(index) {
    this.photo_index = index;
    this.current = this.images[this.photo_index];
    this.setOpacity(this.current, 1);
    this.setDisplayTimer();
    this.started = true;
  },

  transitionNextPhoto: function() {
    if (this.current && this.next) {
      var cur_op = this.current.opacity - this.delta;
      var next_op = this.next.opacity + this.delta;

      this.setOpacity(this.current, cur_op);
      this.setOpacity(this.next, next_op);

      if (cur_op > 0) {
        return;
      }
    }

    // Finished.
    this.clearTransitionTimer();
    this.setOpacity(this.current, 0);
    this.setOpacity(this.next, 1);
    this.current = this.next;
    this.setDisplayTimer();
  },

  setNextPhoto: function() {
    var ci = this.photo_index;
    var done = false;
    while (!done && this.images.length != 0) {
      if (++this.photo_index >= this.images.length) {
        this.photo_index = 0;
      }
      var image = this.images[this.photo_index];
      if (image && image.__gfloaded) {
        this.next = image;
        done = true;
        if (this.options.transitionCallback) {
          this.options.transitionCallback(this.entries[this.photo_index],
                                          this.options.transitionTime);
        }
      } else {
        // Image not loaded for some reason, skip it. But don't loop forever.
        if (this.photo_index == ci) {
          this.next = this.images[0];
          done = true;
        }
      }
    }
  },

  clearPauseEvents: function() {
    this.container.onmouseover = null;
    this.container.onmouseout = null;
  },

  cleanup: function() {
    // Try to be gc friendly.
    this.clearTransitionTimer();
    this.clearDisplayTimer();
    this.clearThumbTimer();
    this.clearPauseEvents();
    this.clearNode(this.container);
    this.container = null;
  },

  displayNextPhoto: function() {
    if (!this.started) {
      return false;
    }

    this.display_timer = null;
    if (this.display_paused) return;

    // See if we have been orphaned and cleanup if needed.
    if ((!this.container || !this.container.parentNode) &&
        this.options.autoCleanup) {
      this.cleanup();
      return;
    }

    this.setNextPhoto();
    if (this.options.transitionTime >= this.options.transitionStep) {
      this.setTransitionTimer();
    } else {
      this.setOpacity(this.next, 1);
      this.setOpacity(this.current, 0);
      this.current = this.next;
      this.setDisplayTimer();
    }
  },

  setOpacity: function(image, opacity) {
    if (image == null) return;
    if (opacity > 1) opacity = 1;
    if (opacity < 0) opacity = 0;
    if (opacity == 0) {
      if (image.style.visibility != "hidden") {
        image.style.visibility = "hidden";
      }
    } else {
      if (image.style.visibility != "visible") {
        image.style.visibility = "visible";
      }
    }
    if (this.ie_mode) image.style.filter = "alpha(opacity=" + opacity*100 + ")";
    image.style.opacity = image.opacity = opacity;
  }

};
