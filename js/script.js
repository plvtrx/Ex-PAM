const btn1 = document.getElementById("um");
const btn2 = document.getElementById("dois");
const btn3 = document.getElementById("tres");
const btn4 = document.getElementById("quatro");
const btn5 = document.getElementById("cinco");
const btn6 = document.getElementById("seis");
const btn7 = document.getElementById("sete");
const btn8 = document.getElementById("oito");
const btn9 = document.getElementById("nove");
const btn10 = document.getElementById("dez");

const img = document.getElementById("animal");

const aleatorio = Math.floor(Math.random() * 10);

if (aleatorio == 0) {
    img.setAttribute("src", "../img/bode.jpg")
} else if (aleatorio == 1) {
    img.setAttribute("src", "../img/cobra.jpg")
} else if (aleatorio == 2) {
    img.setAttribute("src", "../img/dragao-de-komodo.jpg")
} else if (aleatorio == 3) {
    img.setAttribute("src", "../img/galinha.jpg")
} else if (aleatorio == 4) {
    img.setAttribute("src", "../img/gorila.jpg")
} else if (aleatorio == 5) {
    img.setAttribute("src", "../img/hipopotamo.jpg")
} else if (aleatorio == 6) {
    img.setAttribute("src", "../img/jacare.jpg")
} else if (aleatorio == 7) {
    img.setAttribute("src", "../img/leao.jpg")
} else if (aleatorio == 8) {
    img.setAttribute("src", "../img/macaco.jpg")
} else {
    img.setAttribute("src", "../img/vaca.jpg")
}

img.addEventListener("animationend", ()=>{
    img.style.animation = "none";
});

btn1.addEventListener("click", () => {
    setTimeout(function(){
        img.setAttribute("src", "../img/bode.jpg");
    },1500);
    img.style.animation = "fade 3s forwards";
});
btn2.addEventListener("click", () => {
    setTimeout(function(){
        img.setAttribute("src", "../img/galinha.jpg");
    },1500);
    img.style.animation = "fade 3s forwards";
});
btn3.addEventListener("click", () => {
    setTimeout(function(){
        img.setAttribute("src", "../img/cobra.jpg");
    },1500);
    img.style.animation = "fade 3s forwards";
});
btn4.addEventListener("click", () => {
    setTimeout(function(){
        img.setAttribute("src", "../img/gorila.jpg");
    },1500);
    img.style.animation = "fade 3s forwards";
});
btn5.addEventListener("click", () => {
    setTimeout(function(){
        img.setAttribute("src", "../img/hipopotamo.jpg");
    },1500);
    img.style.animation = "fade 3s forwards";
});
btn6.addEventListener("click", () => {
    setTimeout(function(){
        img.setAttribute("src", "../img/jacare.jpg");
    },1500);
    img.style.animation = "fade 3s forwards";
});
btn7.addEventListener("click", () => {
    setTimeout(function(){
        img.setAttribute("src", "../img/leao.jpg");
    },1500);
    img.style.animation = "fade 3s forwards";
});
btn8.addEventListener("click", () => {
    setTimeout(function(){
        img.setAttribute("src", "../img/macaco.jpg");
    },1500);
    img.style.animation = "fade 3s forwards";
});
btn9.addEventListener("click", () => {
    setTimeout(function(){
        img.setAttribute("src", "../img/vaca.jpg");
    },1500);
    img.style.animation = "fade 3s forwards";
});
btn10.addEventListener("click", () => {
    setTimeout(function(){
        img.setAttribute("src", "../img/dragao-de-komodo.jpg");
    },1500);
    img.style.animation = "fade 3s forwards";
});
