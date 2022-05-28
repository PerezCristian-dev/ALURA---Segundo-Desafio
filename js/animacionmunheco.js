let munheco = document.querySelector (".start_Main");
let elcuerpo = document.querySelector ("body");
let x = 4
let paises = ["Dominicana", "Venezuela", ""]

elcuerpo.addEventListener("click", function (){
    if(x<11){
    let part1 = document.querySelector (".invisibleparts" + (x - 3));
    let classtoadd = "ahorcado" + x;
    let classtoremove = "invisibleparts" + (x - 3);
    part1.classList.remove(classtoremove);
    part1.classList.add(classtoadd);
    x = x + 1
    }else{
        alert("Perdiste, Please try again");
    } 
});




