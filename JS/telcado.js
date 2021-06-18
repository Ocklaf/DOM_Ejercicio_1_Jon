const d = document
let x = 0, y = 0

export function shortcuts(e){
/*     console.log(e.type)
    console.log(e.key)
    console.log(e.keyCode)
    console.log(`ctrl: ${e.ctrlKey}`)
    console.log(`shift: ${e.shiftKey}`)
    console.log(`alt: ${e.altKey}`) */

    if(e.altKey && e.key === "a") alert("Has lanzado un Alert con teclado")
    if(e.altKey && e.key === "p") alert("Has lanzado un Prompt con teclado")
    if(e.altKey && e.key === "c") alert("Has lanzado un Confirm con teclado")
} 

export function moveBall(e, ball, stage){
    const $ball = d.querySelector(ball),
         $stage = d.querySelector(stage),
         limitBall = $ball.getBoundingClientRect(), //Buscar en MDN
         limitStage = $stage.getBoundingClientRect()


    switch(e.keyCode){ //recogemos el código de las teclas de las flechas
        case 37://left
            if(limitBall.left > limitStage.left){
                e.preventDefault()
                x--
            }
        break
        
        case 38: //up
            if(limitBall.top > limitStage.top){
                e.preventDefault()
                y--
            }
        break

        case 39://right
            if(limitBall.right < limitStage.right){
                e.preventDefault()
                x++
            }
        break

        case 40://down
            if(limitBall.bottom < limitStage.bottom){
                e.preventDefault()
                y++
            }
        break

        default:
        break
    }

    $ball.style.transform = `translate(${x*10}px, ${y*10}px)`
    
}