<?php

class Conexion
{

    public static function conectar()
    {
        //$prueba = "jaja";
        $usuario = "root";
        $contra = "";
        $conn = new PDO("mysql:host=localhost;dbname=claseGit", $usuario, $contra);
        return $conn;
    }
}