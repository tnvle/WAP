package edu.mum.wap.controller;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@WebFilter(filterName = "CheckoutFilter", urlPatterns = "/checkout")
public class CheckoutFilter implements Filter {
    public void destroy() {
    }

    public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain) throws ServletException, IOException {
        HttpServletRequest request = (HttpServletRequest)req;
        HttpSession session = request.getSession(false);
        if(session != null && session.getAttribute("user_info") != null) {
            chain.doFilter(req, resp);
        }
        else
            ((HttpServletResponse)resp).sendRedirect("/login");
    }

    public void init(FilterConfig config) throws ServletException {

    }

}
