import Model.MyDB;
import Model.User;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@WebFilter(filterName = "AuthenticateFilter",
        urlPatterns = { "/*"}
)
public class AuthenticateFilter implements Filter {

    public void destroy() {
    }

    public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain) throws ServletException, IOException {

        HttpServletRequest request = (HttpServletRequest)req;
        HttpSession session = request.getSession(false);
        String loginURI = request.getContextPath() +"/";// + "/login";

        boolean isLoggedIn = session != null && session.getAttribute("user") != null;
        boolean loginRequest = request.getRequestURI().equals(loginURI);

        if(isLoggedIn||loginRequest)
            chain.doFilter(req, resp);
        else
        {
            HttpServletResponse response = (HttpServletResponse) resp;
            response.sendRedirect(loginURI);
        }
    }

    public void init(FilterConfig config) throws ServletException {

    }

}
