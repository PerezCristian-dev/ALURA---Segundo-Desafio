
let newwordbutton = document.querySelector(".bt_add_word");
newwordbutton.addEventListener("click",function newpage (){
    window.location.href = "/addnewword.html"
});

let startbutton = document.querySelector(".bt_start_game");
startbutton.addEventListener("click",function newpage (){

    window.location.href = "/game.html"
    //prompt("Please select a topic", "1: Countries, 2: Programing Lenguage")
    //window.location.href = "file:///E:/Programacion/Desafios/Segundo%20Desafio/addnewword.html"
});


let newgame = document.getElementById("#bt_start_game");
function newpage (){
    window.location.href = "/game.html"
    //prompt("Please select a topic", "1: Countries, 2: Programing Lenguage")   //window.location.href = "file:///E:/Programacion/Desafios/Segundo%20Desafio/addnewword.html"
};


function saveword (){
    let newPalabra = document.getElementById ("txt_toencrypt").value;
    console.log(newPalabra);
    localStorage.setItem ("palabraNueva", newPalabra);
    alert("Tu palabra a sido guardada");
    document.getElementById ("txt_toencrypt").value = "";
};

