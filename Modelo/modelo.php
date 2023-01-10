<?php
require "../conexion/conexion.php";
class Usuario{
    private $db;

    public function __construct(){
        $this->db = Conexion::conectar();
    }

    public function guardar($no, $us, $tel){
        $sql = $this->db->prepare("INSERT INTO tablaprueba (Tab_Nom, Tab_Usu, Tab_Tel) VALUE(?,?,?)");
        try{
            $sql->execute([$no, $us, $tel]);
            return $sql;
        }catch (Exception $e){
            return $e->getMessage();
        }
    }
}