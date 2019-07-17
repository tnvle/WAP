<%--
  Created by IntelliJ IDEA.
  User: Ms Van
  Date: 7/11/2019
  Time: 10:46 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title>Login</title>
  </head>
  <body>

  <%
    Cookie cookie = null;
    Cookie[] cookies = null;
    String username="";
    String checked="";
    // Get an array of Cookies associated with this domain
    cookies = request.getCookies();
    if( cookies != null ){
      for (int i = 0; i < cookies.length; i++){
        cookie = cookies[i];
        if(cookie.getName().equals("username")){
          username = cookie.getValue( );
           checked="checked";
        }
      }
    }
    %>


  <form action="" method="POST">
    <h1>Login jsp</h1>
    <div><span style="width:70px; float:left">User name</span><input style="margin-left: 50px" type = "text" name="username" value="<%=username%>"/></div>
    <div style="margin-top: 10px"><span style="width:70px; float:left">Password</span><input style="margin-left: 50px" name = "pwd" type = "text"/></div>
    <div style="margin-top: 10px"><input style="width:70px; margin-left: 120px;" name="remember" type = "checkbox" value="remember" <%=checked%>/>Remember me</div>
    <div style="margin-top: 10px"><input style="width:70px; margin-left: 120px;" type = "submit" value="Login" /></div>

  </form>
  </body>
</html>
