/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package modelo;

/**
 *
 * @author Johan
 */
public class usuario {
    
    int id;
    String usuarios;
    String email;

    public usuario() {
    }

    public usuario(int id, String usuarios, String email) {
        this.id = id;
        this.usuarios = usuarios;
        this.email = email;
    }

    public int getId() {
        return id;
    }

    public String getUsuarios() {
        return usuarios;
    }

    public String getEmail() {
        return email;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setUsuarios(String usuarios) {
        this.usuarios = usuarios;
    }

    public void setEmail(String email) {
        this.email = email;
    }
    
    
}
