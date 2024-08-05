
class Reservas {
    constructor(nombre, email, fecha, horario, predio, deporte) {
        this.nombre = nombre;
        this.email = email;
        this.fecha = fecha;
        this.horario = horario;
        this.predio = predio;
        this.deporte = deporte;
    }
}

let misReservas = JSON.parse(localStorage.getItem('reservas')) || [
    new Reservas()
];

let inputBoton = document.querySelector("#boton");

inputBoton.addEventListener('click', (evento) => {
    evento.preventDefault();

    let inputNombre = document.querySelector("#nombre").value;
    let inputEmail = document.querySelector("#email").value;
    let inputFecha = document.querySelector("#fecha").value;
    let inputHorario = document.querySelector("#horario").value;
    let inputPredio = document.querySelector("#predio").value;
    let inputDeporte = document.querySelector("#deporte").value;

    // PUSHEO LOS DATOS DENTRO DEL ARRAY
    misReservas.push(new Reservas(
        inputNombre,
        inputEmail,
        inputFecha,
        inputHorario,
        inputPredio,
        inputDeporte
    ));

    localStorage.setItem('reservas', JSON.stringify(misReservas));

    console.table(misReservas);
    misReservas.forEach((reserva) => {
        let copia = document.querySelector("#reservaTemplate").content.cloneNode(true);

        copia.querySelector(".reservaNombre").textContent = reserva.nombre;
        copia.querySelector(".reservaEmail").textContent = reserva.email;
        copia.querySelector(".reservaFecha").textContent = reserva.fecha;
        copia.querySelector(".reservaHorario").textContent = reserva.horario;
        copia.querySelector(".reservaPredio").textContent = reserva.predio;
        copia.querySelector(".reservaDeporte").textContent = reserva.deporte;

        contenedorReservas.appendChild(copia);
    })
});

let contenedorReservas = document.querySelector("#contenedorReservas");

// function renderReservas() {
//     // contenedorReservas.innerHTML = ""; // Limpiar el contenedor antes de renderizar

//     ;
// }

// Render inicial
// renderReservas();

// let botonBorrar = document.querySelector("#borrarReservas");

// botonBorrar.addEventListener('click', () => {
//     // Vaciar el array de reservas
//     misReservas = [];

//     // Eliminar del localStorage
//     localStorage.removeItem('reservas');

//     // Volver a renderizar las reservas
//     renderReservas();

//     console.log("Todas las reservas han sido borradas");
// });
