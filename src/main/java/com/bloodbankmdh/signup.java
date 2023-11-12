package com.bloodbankmdh;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class learnerservlet
 */
@WebServlet("/signup")
public class signup extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
  	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		try {
			PrintWriter out=response.getWriter();
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/bank","root","Sairam@123!");//Connection is happening here
			String n=request.getParameter("rname");
			String e=request.getParameter("remail");
			String p=request.getParameter("rpwd");
			PreparedStatement ps=con.prepareStatement("insert into bank.login_and_signup values(?,?,?)");
			ps.setString(1, n);
			ps.setString(2, e);
			ps.setString(3, p);
			int rs=ps.executeUpdate();
			if (rs > 0)
			{
				
				RequestDispatcher rd= request.getRequestDispatcher("login.html");
				rd.forward(request, response);
			}
			else
			{
				out.println("<font color=red size=18> Not validated!!</font>");
				out.println("<a href=learner.jsp>");
			}
		} catch (ClassNotFoundException | SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
