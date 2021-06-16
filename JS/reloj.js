const d = document

export function digitalClock(clock, btnPlay, btnStop){
    let clockTempo //se declara global para poderla usar en cada if

    d.addEventListener("click", (e) =>{
        if(e.target.matches(btnPlay)){ //busca coincidencia
            clockTempo = setInterval(() =>{ //almacenamos setInterval para poderlo parar luego
                let clockHour = new Date().toLocaleTimeString() //hora y segundos formato legible
                d.querySelector(clock).innerHTML = `<h3>${clockHour}<\h3>`//incrusta directamente etiquetas y contenido y cada vez lo machaca (innerHTML) sobreescribe el contenido previo
            }, 1000) //refrescamos el innerHTML cada segundo

            e.target.disabled = true //activamos la propiedad disabled del botón
        }

        if(e.target.matches(btnStop)){
            d.querySelector(clock).innerHTML = null //vaciamos con un null enviado con innerHTML
            clearInterval(clockTempo) //paramos el setInterval
            d.querySelector(btnPlay).disabled = false //desactivamos la propiedad disabled
        }
    })

}

//sound ya lleva la ruta del archivo mp3 a reproducir desde index_dom.js
export function alarm(sound, btnPlay, btnStop){
    let alarmTempo

    const $alarm = d.createElement("audio") //creamos la etiqueta audio y la guardamos en la variable
    $alarm.src = sound //añadimos la propiedad src al elemento audio, sound contiene la ruta

    d.addEventListener("click", (e) =>{
        if(e.target.matches(btnPlay)){ 
            alarmTempo = setTimeout(()=>{
                $alarm.play() //método play de la API audio
            }, 2000) //le dejamos un retardo de 2 segundos tras pulsar el botón hasta que suene la alarma
        
            e.target.disabled = true //activamos la propiedad disabled del botón para dejarlo desactivado/gris
        }
        
        if(e.target.matches(btnStop)){
            clearTimeout(alarmTempo) //paramos el intérvalo
            $alarm.pause() //NO existe stop, lo pausamos
            $alarm.currentTime = 0 //y lo devolvemos al segundo 0 (inicio)
            d.querySelector(btnPlay).disabled = false //desactivamos la propiedad disabled
        }
    })
}
