document.addEventListener('DOMContentLoaded', () => {
    const sobre = document.getElementById('sobre');
    const pantalla1 = document.getElementById('pantalla-1');
    const pantalla2 = document.getElementById('pantalla-2');
    const cancion = document.getElementById('cancion');

    sobre.addEventListener('click', () => {
        pantalla1.classList.add('oculto');
        pantalla2.classList.remove('oculto');
        cancion.play();
    });


    const fechaFiesta = new Date("Jun 13, 2026 22:00:00").getTime();

    const actualizarCuentaRegresiva = setInterval(() => {
        const ahora = new Date().getTime();
        const distancia = fechaFiesta - ahora;

        const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

        document.getElementById("dias").innerHTML = dias < 10 ? "0" + dias : dias;
        document.getElementById("horas").innerHTML = horas < 10 ? "0" + horas : horas;
        document.getElementById("minutos").innerHTML = minutos < 10 ? "0" + minutos : minutos;
        document.getElementById("segundos").innerHTML = segundos < 10 ? "0" + segundos : segundos;

        if (distancia < 0) {
            clearInterval(actualizarCuentaRegresiva);
            document.getElementById("cuenta-regresiva").innerHTML = "<div style='font-size:1.5rem; font-weight:bold; color:#5d301b; padding:10px;'>¡Llegó el gran día!</div>";
        }
    }, 1000); 
});