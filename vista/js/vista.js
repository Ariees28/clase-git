$(document).ready(function () {
  var error = "";
});
function guardar(e) {
  e.preventDefault();
  var nombre = $("#nombre").val();
  var usuario = $("#usuario").val();
  var telefono = $("#telefono").val();
  $.post(
    "../../controlador/Controlador.php?op=prueba",
    { nombre: nombre, usuario: usuario, telefono: telefono },
    function (res) {
      alert(res);
    }
  );
}
function validarFormulaio() {
  var x = true;
  error = "";
  if ($("#nombre").val() == "") {
    error = "el Nombre esta vacio y no deve ser asi., ";
    x = false;
  }
  if ($("#usuario").val() == "") {
    error = error + "el Usuario esta vacio., ";
    x = false;
  }
  if ($("#telefono").val() == "") {
    error = error+"el Telefono esta vacio y no deve ser asi.";
    x = false;
  }
  return x;
}
$("#guardar").click(function (e) {
  //agregue codigo
  e.preventDefault();
  if (validarFormulaio() == true) {
    guardar(e);
    alert("GUARDADO CORRECTAMENTE");
  } else {
    alert("Error,HAY CAMPOS VACIOS COMO: " + error);
  }
});
