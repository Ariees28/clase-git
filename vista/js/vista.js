function guardar(e) {
  e.preventDefault();
  var nombre = $("#nombre").val();
  var usuario = $("#usuario").val();
  var contra = $("#contraseña").val();
  $.post(
    "controlador/Controlador.php?op=prueba",
    { nombre: nombre, usuario: usuario, contra: contraseña},
    function (res) {
      alert(res);
    }
  );
}
function validarFormulaio() {
  var x = true;
  if (
    $("#nombre").val() == "" ||
    $("#usuario").val() == "" ||
    $("#contraseña").val() == ""
  ) {
    x = false;
  }
  return x;
}
$("#guardar").click(function (e) {
  //agregue codigo
  e.preventDefault();
  if (validarFormulaio() == true) {
    guardar(e);
    console.log("GUARDADO CORRECTAMENTE");
  } else {
    console.log("Error,HAY CAMPOS VACIOS");
  }
});
