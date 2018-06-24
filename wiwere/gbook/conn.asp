<%
dim conn,connstr
on error resume next
Connstr="DRIVER=Microsoft Access Driver (*.mdb);DBQ="+server.mappath("DataBase/DB.mdb")
Set Conn=Server.CreateObject("ADODB.Connection") 
conn.Open connstr
If Err Then
err.Clear
Set Conn = Nothing
Response.Write "数据库连接出错，请检查连接字串。"
Response.End
End If
%>
