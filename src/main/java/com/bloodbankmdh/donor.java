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
@WebServlet("/donor")
public class donor extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
  	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		try {
			PrintWriter out=response.getWriter();
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/bank","root","Sairam@123!");
			String a=request.getParameter("did");
			String b=request.getParameter("dname");
			String c=request.getParameter("dage");
			String d=request.getParameter("dweight");
			String e=request.getParameter("dgender");
			String f=request.getParameter("dno");
			String g=request.getParameter("dadd");
			String h=request.getParameter("dgroup");
			String i=request.getParameter("daadhar");
			PreparedStatement ps=con.prepareStatement("insert into bank.blood_donor values(?,?,?,?,?,?,?,?,?)");
			ps.setString(1, a);
			ps.setString(2, b);
			ps.setString(3, c);
			ps.setString(4, d);
			ps.setString(5, e);
			ps.setString(6, f);
			ps.setString(7, g);
			ps.setString(8, h);
			ps.setString(9, i);
			
			int rs=ps.executeUpdate();
			if (rs > 0)
			{
				
				RequestDispatcher rd= request.getRequestDispatcher("index.html");
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
