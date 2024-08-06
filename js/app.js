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

// let misReservas = JSON.parse(localStorage.getItem('reservas')) || [];

let misReservas = []

let contenedorReservas = document.querySelector("#contenedorReservas");

let imputBoton = document.querySelector("#boton");


imputBoton.addEventListener('click', (evento) => {
    
    evento.preventDefault();             

    let inputNombre = document.querySelector("#nombre").value;
    let inputEmail = document.querySelector("#email").value;
    let inputFecha = document.querySelector("#fecha").value;
    let inputHorario = document.querySelector("#horario").value;
    let inputPredio = document.querySelector("#predio").value;
    let inputDeporte = document.querySelector("#deporte").value;


     misReservas.push(new Reservas(
        inputNombre,
        inputEmail,
        inputFecha,
        inputHorario,
        inputPredio,
        inputDeporte
    ));

    contenedorReservas.innerHTML = "", 

    


    misReservas.forEach((reserva)=> {
            
        let copia = document.querySelector("#reservaTemplate").content.cloneNode(true);
        
        copia.querySelector(".reservaNombre").textContent += reserva.nombre
        copia.querySelector(".reservaEmail").textContent += reserva.email
        copia.querySelector(".reservaFecha").textContent += reserva.fecha
        copia.querySelector(".reservaHorario").textContent += reserva.horario
        copia.querySelector(".reservaPredio").textContent += reserva.predio
        copia.querySelector(".reservaDeporte").textContent += reserva.deporte
    
        
        let btnEliminar = copia.querySelector(".eliminar");
        let btnConfirmar = copia.querySelector(".confirmar");
        let seccion = copia.querySelector("#reserva")

        contenedorReservas.append(copia);
        
        btnConfirmar.addEventListener(`click`, ()=> {
            localStorage.setItem('reservas', JSON.stringify(misReservas));
            seccion.classList.remove('plantilla');
            seccion.innerHTML = '';
        });
       

        btnEliminar.addEventListener('click', () => {
            seccion.classList.remove('plantilla');
            seccion.innerHTML = '';
            localStorage.removeItem('reservas')
        });


    })
});


