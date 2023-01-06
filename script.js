let input = document.querySelector(".counter");
let span = document.querySelector(".tamanho-auto");
const mouse = document.querySelector(".password");
const visi = document.querySelector(".click")
let counteinerTwo = document.querySelector(".counteiner-two");
let newPassword;
let copiedAlertVisible = false;


input.addEventListener("input", tamanho)
mouse.addEventListener("mouseover", visible)

//outra forma de ativar a função tamanho setInterval(()=>{tamanho()}, 1)


function tamanho() {
    span.textContent = input.value;
    
}

function visible() {
    visi.style.visibility = "visible";
    visi.style.transitionDelay = "0.2s"
}

function senha() {
    let pass = "";
    const letternum = "ABCDEFGHIJKLMNOPQRSTUVWXYZ@&" + "abcdefghijklmnopqrstuvwxyz0123456789"
    let i = 0;

    while (i < input.value) {
    
        let positionRandom = Math.floor(Math.random()*letternum.length)
        pass += letternum.charAt(positionRandom)
        i++
    }
    counteinerTwo.style.visibility = "visible"
    mouse.textContent = pass;
    newPassword = pass;
}


function copyPassword() {
    navigator.clipboard.writeText(newPassword); 
    
}












  
