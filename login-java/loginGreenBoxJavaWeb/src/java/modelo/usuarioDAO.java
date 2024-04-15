/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package modelo;

import java.sql.PreparedStatement;
import java.sql.Connection;
import java.sql.ResultSet;
public class usuarioDAO implements Validar{

    Connection con;
    Conexion cn = new Conexion();
    PreparedStatement ps;
    ResultSet rs;
    int r;
    
    @Override
    public int Validar(usuario user) {
        String sql="Select * from usuarios where email=? and password=?";
        try {
            con=cn.getConnection();
            ps=con.prepareStatement(sql);
            ps.setString(1, user.getUsuarios());
             ps.setString(2, user.getEmail());
            rs=ps.executeQuery();
            while(rs.next()){
                r=r+1;
                user.setUsuarios(rs.getString("email"));
                user.setEmail(rs.getString("password"));
            }
            if(r==1){
                return 1;
            }else{
                return 0;
            }
        } catch (Exception e) {
            return 0;
        }
        
    }

    
}
