<!--#include file="conn.asp"-->
<link href="font.css" rel=stylesheet type=text/css>
<style type="text/css">
<!--
#Layer1 {
	position:absolute;
	z-index:1;
	left: 562px;
	top: 67px;
}
-->
</style>
<table width="550" height="52" border="0" cellspacing="0">
<%
	Response.Write "<tr><td class='lan'><div>������Wiwere��������԰�,<a href='../index.htm'>������ﷵ��Wiwere��ҳ</a></div><div align='right'><b><a href=#fabiaoliuyan class='lan'>ǩд����</a></b></div></td></tr>"
	sql="select name,sex,time,content from liuyan order by id desc"
	set rs=server.createobject("adodb.recordset")
	set rs=conn.execute(sql)
	do while not rs.eof
	if rs("sex")="��" then 
	Response.Write "<tr><td class='lan'><div align='left'><b class='lan'>��"&rs("name")&"��</b>&nbsp;&nbsp;&nbsp;<a><img src='images/boy.gif' width='14' height='14'></a></div></td></tr>"
	else Response.Write "<tr><td class='lan'><div align='left'><b class='lan'>��"&rs("name")&"��</b>&nbsp;&nbsp;&nbsp;<a><img src='images/girl.gif' width='14' height='14'></a></div></td></tr>"
	end if
	Response.Write "<tr><td class='lan'><div align='left'><a>"&"&nbsp;&nbsp;&nbsp;"&rs("content")&"</a></div></td></tr>"
	Response.Write "<tr><td class='lan'><div align='right'><a>"&rs("time")&"</a></div><hr noshade size=0 color=#0265F9></td></tr>"
	rs.movenext
	loop
	if rs.eof and rs.bof then
	Response.Write "<div align=center><br><br><br><br><br><font color=""#666666"">Ŀǰ�����κ����ԣ�</font></div>"
	end if
	if not rs.eof or not rs.bof then
	end if
	rs.close
	set rs=nothing
%>
</table>
<a name="fabiaoliuyan"></a>
<form method="post" action="reply.asp">
  <table width="550" height="119" border="0" cellspacing="0">
    <tr>
      <td colspan="3" class="lan">����
        <input name="name" type="text" class="texts" size="8">
        &nbsp;&nbsp;�Ա�&nbsp;&nbsp;<span class="lan">��</span>
        <input name="sex" type="radio" value="��" checked>
        <span class="lan">Ů</span>
        <input type="radio" value="��" name="sex"></td>
    </tr>
    <tr>
      <td colspan="3"><textarea name="cont" cols="75" rows="6" class="areas" ></textarea></td>
    </tr>
    <tr>
      <td width="291" align="right"><input type="submit" class="buttons" value="    ����    "></td>
    </tr>
  </table>
</form>

<div id="Layer1">

<EMBED style="FILTER: FILTER:alpha(opacity=100,style=3) gray(50); WIDTH: 270px; HEIGHT: 50px;" 
				src="http://file.beelse.com/Music/%E5%BC%A0%E9%9C%87%E5%B2%B3-%E7%A7%98%E5%AF%86.mp3" 	
				type=audio/mpeg
				WIDTH="450px"
				height="50px"
				id="player" 
				LOOP="5" 
				AUTOSTART="1" 
				SHOWSTATUSBAR="2"
				controls=console> </EMBED>
</div>
