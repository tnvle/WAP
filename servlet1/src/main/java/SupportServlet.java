import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Random;

@WebServlet(name = "SupportServlet")
public class SupportServlet extends HttpServlet {

    Random rand = new Random();
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String name = request.getParameter("name");
        String email = request.getParameter("email");

        ServletContext sc = this.getServletContext();
        String supportEmail = sc.getInitParameter("support-email");

        int supportTicketID = rand.nextInt(100000);
        String msgFormat = "Thank you! %s for contacting us. We should receive reply from us with in 24 hrs in your email address %s. Let us know in our support email %s if you don&apos;t receive reply within 24 hrs. Please be sure to attach your reference %d in your email.\n";
        String msg  = String.format(msgFormat, name, email, supportEmail, supportTicketID);
        PrintWriter out = response.getWriter();
        out.print("<html><body>");
        out.print("<p style=\"width:500px; margin:auto; font-size:20px; margin-top:20px;\">" + msg + "</p>");
        out.print("</body></html>");
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        out.print("<html><head><title>Login</title></head><body>");
        out.print("<form title=\"CS Tech Support\" method=\"POST\">");
        out.print("<h1>CS Tech Support</h1>");
        out.print("<div><span style=\"width:50px; float:left\">Name</span><input style=\"margin-left: 50px\" name=\"name\" type = \"text\"/></div>");
        out.print("<div style=\"margin-top: 10px\"><span style=\"width:50px; float:left\">Address</span><input style=\"margin-left: 50px\" name = \"email\" type = \"text\"/></div>");
        out.print("<div style=\"margin-top: 10px\"><span style=\"width:50px; float:left\">Problem</span> <input style=\"margin-left: 50px\" name = \"problem\" type = \"text\"/></div>");
        out.print("<div style=\"margin-top: 10px\"><span style=\"width:50px; float:left\">Problem Description</span> <textarea style=\" margin-left: 50px; width:300px; height: 100px;\" name=\"txtarea\"></textarea></div>");
        out.print("<div style=\"margin-top: 10px\"><input style=\"width:50px; margin-left: 100px;\" type = \"submit\" value=\"Help\" /></div>");
        out.print("</form>");
        out.print("</body></html>");
    }
}
