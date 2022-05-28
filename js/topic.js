let body = document.querySelector(".encrypt_button");
body.addEventListener ("click",function(){
let country = document.querySelector("#radio-country");
    if (country.checked){
        topic = 1;
    }else {
        topic = 2;
    };
    window.location.href = "file:///E:/Programacion/Desafios/Segundo%20Desafio/game.html"
});

function saveWord (){
Let x = document.getElementById (".TextoGuardado");
localStorage.setItem (x);
};

