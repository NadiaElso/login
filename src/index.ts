let usuarioingresado: string = document.getElementById("usuario");
let claveingresada: string = document.getElementById("clave");

let usuario: string = "Juan";
let clave: string = "clavejuan";

let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  if (usuario === usuarioingresado.value && clave === claveingresada.value) {
    console.log("Bienvenido");
  } else {
    console.log("El usuario o la clave son incorrectos");
  }
});
