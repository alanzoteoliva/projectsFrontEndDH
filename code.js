const img = 'https://cdn1.vectorstock.com/i/thumb-large/22/50/developer-line-icon-outline-vector-30762250.jpg'
/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
    datosPersona.nombre = prompt("Ingrese su nombre");
    const anioNacimiento = parseInt( prompt("Ingrese su año de nacimiento"));

      while(anioNacimiento > 2023 || anioNacimiento< 1900) {
        anioNacimiento = parseInt(prompt("Año inválido, ingresa nuevamente"));
    }

    datosPersona.edad = 2023 - anioNacimiento;
    datosPersona.ciudad = prompt("Ingrese nombre de su ciudad");
    datosPersona.interesPorJs = confirm("¿Está interesado en JavaScript?");
    
}
console.log(datosPersona);

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
    const nombre = document.querySelector("#nombre");
    const edad = document.querySelector("#edad");
    const ciudad = document.querySelector("#ciudad");
    const interesPorJs = document.querySelector("#javascript");

    nombre.innerText = datosPersona.nombre;
    edad.innerText = datosPersona.edad;
    ciudad.innerText = datosPersona.ciudad;
    interesPorJs.innerText = datosPersona.interesPorJs;
      if (datosPersona.interesPorJs == true){
        interesPorJs.innerText = "Si";
      } else {
        interesPorJs.innerText = "No";
      } 
}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */

  const tarjeta = document.querySelector("#fila");
  tarjeta.innerHTML = '';
  listado.forEach(e => {
    tarjeta.innerHTML += 
                      `<li class = "caja">
                          <img src = "${e.imgUrl}" alt="${e.lenguajes}">
                          <p class = "lenguajes"> ${e.lenguajes}</p>
                          <p class = "bimestre"> ${e.bimestre}</p>
                      </li>`
})
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  const temas = document.querySelector("#sitio");
  temas.classList.toggle("dark")
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

window.addEventListener("keydown", texto);
function texto (e){
  const sobreMi = document.querySelector("#sobre-mi");
  const tecla = e.key.toLowerCase();
  if (tecla == 'f'){
    sobreMi.removeAttribute('class', 'oculto')
  }
}