<%-- 
    Document   : Principal
    Created on : 8/11/2023, 7:32:54 p. m.
    Author     : Johan
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <title>Pagina Principal</title>
    </head>
    <style>
        .navbar{
            background-color: #114E38;
        }
        .container p{
            font-size: 1.8rem;
        }
        .container h1{
            color: #114E38;
            font-size: 5rem;
            margin-top: 4rem;
        }
    </style>
    <body style="color: forestgreen">
        <nav class="navbar navbar-dark ">
            <a style="color: #DADFB9" class="navbar-toggler"><span class="navbar-toggler-icon"></span>Home</a>
            <div class="dropdown">
                <a style="color: #DADFB9" href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Cerrar Seccion</a>
                <div class="dropdown-menu text-center">
                    <a><img src="img/foto de perfil.webp" height="80" width="80"></a><br>
                    <a>Usuario</a>
                    <a>example@gmail.com</a>
                    <div class="dropdown-divider"></div>
                    <a href="index.jsp" class="dropdown-item">Salir</a>
                </div>
            </div>
        </nav>
        <div class="container mt-4 text-center">
            <h1>GREENBOX</h1>
         <p>
        conectamos a los consumidores directamente con los productores evitando
        a los <br />
        intermediarios brindando mayor calidad a menor precio.
            </p>
            <img src="img/fondo verduras.jpeg" height="500" width="700"/>
        </div>
        
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    </body>
</html>
