<% 
SName = Request.Form("name") 
SM =Request.Form("cont")
STime=Date()
SMsg = Replace(SM,"'","") 
SMsg = Replace(SM,"<","&lt;") 
SMsg = Replace(SM,">","&gt;") 
SSex= Request.Form("sex") 
if SName="" then SName="����"
if SMsg="" then  Response.Redirect("gbook.asp")
if len(SMsg)>150 then
response.write "���Թ����ˣ����������ԣ�"
response.End()
end if
%>
<!--#include file="conn.asp"-->
<%
	set rs=server.createobject("adodb.recordset")
	sql="select name,sex,time,content from liuyan"
	rs.open sql,conn,1,3
		rs.addnew
		rs("name")=SName
		rs("sex")=SSex
		rs("time")=STime
		rs("content")=SMsg
		rs.update
		rs.close
		set rs=nothing
		conn.close
		set conn=nothing
%>
<Script Language ="JavaScript">
alert("���Գɹ�!");
location='gbook.asp'; 
</Script> 