

// Eu preciso criar um elemento com JS na grid

const corpo = document.body
const botao = document.querySelector(".botao")
const telaparent = document.querySelector(".screen-parent")
const tela = document.querySelector("#screen")
const score = document.querySelector(".score")

let scorevalue = 0
let contagembolinha = 0
botao.addEventListener("click", () => {


    botao.remove(); 

    
// Player

    let player = document.createElement("div");
    document.getElementById("screen").appendChild(player)
    player.classList.add("player")

    let xp = 1
    let yp = 1
    
    let contador = document.createElement("p");
    let contadorvalue = 10
    document.querySelector(".placar").appendChild(contador)
    contador.classList.add("contador")
    contador.textContent = `Contador: ${contadorvalue}`

// Player

// Objeto
    let objeto = document.createElement("div")
    document.getElementById("screen").appendChild(objeto)
    objeto.classList.add("objeto")


    let xo = Number(Math.floor(Math.random() * 20))
    let yo = Number(Math.floor(Math.random() * 20))

    objeto.style.gridRow = `${String(yo)}` 
    objeto.style.gridColumn = `${String(xo)}` 
    let killerp = -1
    let killerp2 = -1
// Objeto

  

// Keyboard
    // Captar os inputs do player(cima "w", baixo "s", esquerda "a", direita "d")
    window.addEventListener("keyup", function (event) {
    
        if(event.key === "w"  ){
            if(yp > 1){
                yp -= 1 
            }

    } else if(event.key === "s" ){
        if(yp < 20){
        yp += 1 }
       

    } else if(event.key === "d"){
        if(xp < 20){
        xp += 1}
    

    } else if(event.key === "a") {
        if(xp > 1){
        xp -= 1}

        }
        player.style.gridRow = `${String(yp)}` 
        player.style.gridColumn = `${String(xp)}`
 // Interação
        if(xp === xo && yo === yp){
            objeto.remove()
             scorevalue += 10
             contagembolinha += 1 
            score.textContent = `Score: ${String(scorevalue)}`
 

             objeto = document.createElement("div")
    document.getElementById("screen").appendChild(objeto)
    objeto.classList.add("objeto")


     xo = Number(1 + (Math.ceil(Math.random(1) * 19)))
     yo = Number(1 + (Math.ceil(Math.random(1) * 19)))

    objeto.style.gridRow = `${String(yo)}` 
    objeto.style.gridColumn = `${String(xo)}` 
    
            if(scorevalue < 100 ){
            contadorvalue = 10
        } else if( scorevalue >= 100){
            contadorvalue = 7
        }
            player.style.backgroundColor = "green"
        } 
 // Interação
    }


    
    
 );
// Keyboard
// Killer

function killer(){

    if(scorevalue >= 100 ) {
        let matador = document.createElement("div");
        matador.classList.add("matador")
        matador.style.backgroundColor = "red"
        matador.style.width = "100%"
        matador.style.height = "100%"
        telaparent.appendChild(matador);
        matador.style.gridRow = '1 / 21';

        killerp = xp + Math.trunc(Math.ceil(Math.random() * 2)) 
        matador.style.gridColumn = `${killerp}`; //Irá spawnar em uma coluna próxima em que o player estiver

        function killerslayer(){
            matador.remove();
            killerp = 0
        }
    
        setTimeout(killerslayer, 1000)

       
    } if(scorevalue >= 20){

        let matador = document.createElement("div");
        matador.classList.add("matador")
        matador.style.backgroundColor = "red"
        matador.style.width = "100%"
        matador.style.height = "100%"
        telaparent.appendChild(matador);
        matador.style.gridColumn = `1 / 21`

        killerp2 = yp + Math.trunc(Math.ceil(Math.random() * 2))
        matador.style.gridRow = `${killerp2}`

        function killerslayer(){
            matador.remove();
            killerp2 = 0
        }
    
        setTimeout(killerslayer, 1000)

    }
     
   
    
    
     setTimeout(killer, 3000) //Dar uma pausa de 3 segundos até spawnar o Killer

}

function matarplayer(){
    
    if(xp === killerp){
        tela.remove()
        telaparent.remove()
    }
    setTimeout(matarplayer, 200)
} 
function matarplayer2(){
    
    if(yp === killerp2){
        tela.remove()
        telaparent.remove()
    }
    setTimeout(matarplayer2, 200)
} 

setTimeout(matarplayer2, 200) // Chegar a cada 2 milisegundos a condição
setTimeout(matarplayer, 200) // Chegar a cada 2 milisegundos a condição
setTimeout(killer, 1000); //Checar(chamar a função) a cada meio segundo o valor do score



// Contador
function  contadorf(){
if(contadorvalue > 0){
    contadorvalue--;
    contador.textContent = `Contador: ${contadorvalue}`;
    

  
    setTimeout(contadorf, 1000) //Atualizar o valor(chamar a função) a cada 1 segundo
} else {
    tela.remove()
    }
}
contadorf()


})
