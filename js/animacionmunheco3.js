let munheco = document.querySelector (".start_Main");
let elcuerpo = document.querySelector ("body");
let x = 4
let paises = ["Dominicana", "Venezuela", "Peru"];
let eltexto = document.querySelector ("#eltexto");
let eltextoPalabra = document.querySelector ("#lapalabra");
let toytyping = [];
let y = 0;
let palabra = "pais";
let palabramuestra = [];

function addParts (){
    if(x<11){
    let part1 = document.querySelector (".invisibleparts" + (x - 3));
    let classtoadd = "ahorcado" + x;
    let classtoremove = "invisibleparts" + (x - 3);
    part1.classList.remove(classtoremove);
    part1.classList.add(classtoadd);
    x = x + 1
    }
};

elcuerpo.addEventListener ("keydown", function (event){
    let theletter = event.key;
        if(toytyping.indexOf(event.key.toString())>=0){
            alert("key already used");
           
        }else{
            

            addParts();
            console.log (theletter + " added");
            toytyping.push (theletter);
            eltexto.textContent = toytyping.toString().replaceAll (",","");


        }
    

});









