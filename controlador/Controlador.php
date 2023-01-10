<?php
require_once "../Modelo/modelo.php";
$Usuario = new Usuario();



switch ($_GET["op"]) {

case 'usuario':
$nombre = $_POST[nombre];
$usuario = $_POST[usuario];
$telefono = $_POST[telefono];


$insertar = $Usuario->guardar($nombre, $usuario, $telefono);

if($insertar == true){
    echo "Registro exitoso";
}
if($insertar == false){
    echo "No se registro";
}

break;
}
?>

