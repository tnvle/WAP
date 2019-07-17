import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.io.IOException;
import java.io.PrintWriter;
import Model.*;

//@WebServlet(name = "LoginServlet")
public class LoginServlet extends HttpServlet {
    MyDB myDB = new MyDB();
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String userName = request.getParameter("username");
        String pwd = request.getParameter("pwd");
        User user = new User(userName, pwd);

        if(myDB.validate(userName, pwd)){
            //create new session
            HttpSession session = request.getSession(); //creates new session if none exists
            session.setAttribute("user", user);

            String remember = request.getParameter("remember");
            if(remember != null){
                Cookie cookie = new Cookie("username", user.getUserName());
                cookie.setMaxAge(60*60*24*30); //in seconds response.addCookie(cookie);
                response.addCookie(cookie);
            }
            else{
                Cookie cookie = new Cookie("username", user.getUserName());
                cookie.setMaxAge(0); //in seconds response.addCookie(cookie);
                response.addCookie(cookie);
            }

            Cookie promoCookie = new Cookie("promo", "$100");
            promoCookie.setMaxAge(60*60*24*30); //in seconds response.addCookie(cookie);
            response.addCookie(promoCookie);

            RequestDispatcher dispatcher = request.getRequestDispatcher("home.jsp");
            dispatcher.forward(request,response);
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

//        PrintWriter out = response.getWriter();
//        out.print("<html><head><title>Login</title></head><body>");
//        out.print("<form method=\"POST\">");
//        out.print("<h1>Login servlet</h1>");
//        out.print("<div><span style=\"width:70px; float:left\">User name</span><input style=\"margin-left: 50px\" name=\"username\" type = \"text\"/></div>");
//        out.print("<div style=\"margin-top: 10px\"><span style=\"width:70px; float:left\">Password</span><input style=\"margin-left: 50px\" name = \"pwd\" type = \"text\"/></div>");
//        out.print("<div style=\"margin-top: 10px\"><input style=\"width:70px; margin-left: 120px;\" type = \"submit\" value=\"Login\" /></div>");
//        out.print("</form>");
//        out.print("</body></html>");


        RequestDispatcher dispatcher = request.getRequestDispatcher("index.jsp");
        dispatcher.forward(request,response);
    }
}
