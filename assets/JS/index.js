function cronometro (){
    const relogio = document.querySelector('.relogio');
const pausar = document.querySelector('.pausar');
const iniciar = document.querySelector('.iniciar');
const zerar = document.querySelector('.zerar');
 

function showCronometer(segundos) {
    let data = new Date(segundos);
    return data.toLocaleTimeString('pt-BR',
        {
            hour12: false, timeZone: 'GMT'
        });
}

function executCronometer() {
    timer = setInterval(function () {
        miliSegunds += 1000;
        relogio.innerText = showCronometer(miliSegunds);
    }, 1000);
}

function piscar(){
    
        pisca0 = setInterval(function() {
            relogio.innerText = showCronometer(miliSegunds);
        }, 1000)

        pisca1 = setInterval(function() {
            relogio.innerText = "Pausado";
        }, 2000)
    
}

function naoPiscar(){
    clearInterval(pisca0);
    clearInterval(pisca1);
}

let miliSegunds = 0;
let timer;
let pisca0
let pisca1

document.addEventListener('click', function (e) {
    const elementClicad = e.target;

    if (elementClicad.classList.contains('iniciar')) {
        relogio.classList.remove('pausado');
        naoPiscar()
        clearInterval(timer);
        executCronometer();
    }

    if (elementClicad.classList.contains('pausar')) {
        clearInterval(timer);
        relogio.classList.add('pausado');
        naoPiscar();
        piscar();
    }

    if (elementClicad.classList.contains('zerar')) {
        relogio.classList.remove('pausado');
        naoPiscar()
        clearInterval(timer);
        miliSegunds = 0;
        relogio.innerText = "00:00:00";
    }
})

/*
iniciar.addEventListener('click', function (event) {
    clearInterval(timer);
    executCronometer();
});

pausar.addEventListener('click', function (event) {
    clearInterval(timer);
    relogio.style.color = rgb(206, 20, 20);
})

zerar.addEventListener('click', function (event) {
    clearInterval(timer);
    miliSegunds = 0;
    relogio.innerText = "00:00:00";
});
*/




}

cronometro ();