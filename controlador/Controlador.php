require_once "Modelo/modelo.php";
$guardarN= new Usuario();



switch ($_GET["op"]) {

case 'usuario':
$nombre = $_POST[nombre];
$usuario = $_POST[usuario];
$telefono = $_POST[telefono];


$insertar = $guardarN->guardar($nombre, $usuario, $telefono);

if($insertar == true){
    echo "Registro exitoso";
}

break;
}

