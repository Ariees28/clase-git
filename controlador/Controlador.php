<?php
require_once "../Modelo/modelo.php";
$Usuario = new Usuario();



switch ($_GET["op"]) {

    case 'usuario':
        $nombre = $_POST['nombre'];
        $usuario = $_POST['usuario'];
        $telefono = $_POST['telefono'];


        $insertar = $Usuario->guardar($nombre, $usuario, $telefono);

        if($insertar == true){
            echo "Registro exitoso";
        }
        if($insertar == false){
            echo "No se registro";
        }

    break;

    case "prueba":
        $nombre = $_POST['nombre'];
        $usuario = $_POST['usuario'];
        $contra = $_POST['contra'];

        echo LimpiarInput($nombre);
    break;
}


function LimpiarInput($dato)
{ // limapiar datos y evitar inyecciones SQL
    $dato = trim($dato); //quita espacios en blanco al inicio y fin de la cadena
    $dato = stripslashes($dato); // elimina \
    $dato = htmlspecialchars($dato); // cambia <" por exadecimal:= Convierte caracteres especiales en entidades HTML
    return $dato;
}
