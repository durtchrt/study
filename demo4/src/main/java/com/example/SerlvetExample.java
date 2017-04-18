package com.example;

import java.io.*;

import javax.servlet.*;
import javax.servlet.http.*;

public class SerlvetExample extends HttpServlet{
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        ServletOutputStream output = resp.getOutputStream();
        resp.addHeader("Content-Type", "text/html");
        output.println("<html>");
        output.println("<head>");
        output.println("</head>");
        output.println("<body>");
        output.println("Hello KSUG!!!");
        output.println("</body>");
        output.println("</html>");
        output.flush();
        output.close();
    }
}
