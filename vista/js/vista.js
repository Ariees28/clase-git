function guardar(e) {
  e.preventDefault();
  var nombre = $("#nombre").val();
  var usuario = $("#usuario").val();
  var telefono = $("#telefono").val();
  $.post(
    "controlador/Controlador.php?op=prueba",
    { nombre: nombre, usuario: usuario, telefono: telefono },
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
    $("#telefono").val() == ""
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
