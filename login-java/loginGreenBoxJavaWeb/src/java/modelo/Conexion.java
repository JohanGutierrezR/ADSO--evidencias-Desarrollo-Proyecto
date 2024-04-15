/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package modelo;

import java.sql.Connection;
import java.sql.DriverManager;

/**
 *
 * @author Johan
 */
public class Conexion {
    
    Connection con;
     public Connection conectar(){
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            con = (Connection) DriverManager.getConnection("jdbc:mysql://localhost:3306/login1","root","");
            System.out.println("CONECTADO");
        } catch (Exception e) {
            System.out.println("ERROR DE CONEXION BD");
        }
        return con;
    }
}
