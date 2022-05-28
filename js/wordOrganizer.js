let elcuerpo = document.querySelector("body");
let eltexto = document.querySelector ("#eltexto");
let eltextoPalabra = document.querySelector ("#lapalabra");
let toytyping = [];
let palabra;
let palabramuestra = [];
let topic = Math.round(Math.random()*2);
let nonallowKeys = ["Control", "CapsLock", "control", "Ctrl", "Tab", "Shift", "Enter", "Alt", "Backspace", "1", "2", "3","4","5","6", "7", "8", "9", "0", ",", ".", "/", ";","'","[","]","`"];
let topic1 = ["republica dominicana", "panama", "cuba", "haiti", "argentina", "venezuela", "costa rica", "nicaragua", "guatemala"];
let topic2 = ["alura", "programacion", "javascript", "html", "css"];
let word = 0;
let times = 4;

let body = document.querySelector(".encrypt_button");
    body.addEventListener ("click",function(){
    let juego = document.querySelector("#juego");
    juego.classList.remove ("invisible");
    let menu = document.querySelector("#menuJuego");    
    menu.classList.add ("invisible");
}); 

//Topic and Word Picker//   

    if (topic==1){
        palabra = topic1[Math.round(Math.random()*(topic1.length-1))];
        alert("El Tema es PAISES");
        topic1.push (localStorage.getItem("palabraNueva"));
        console.log (topic1);
        
    }else{
        palabra = topic2[Math.round(Math.random()*(topic2.length-1))];
        alert("El Tema es PROGRAMACION");
        topic2.push (localStorage.getItem("palabraNueva"));

        console.log (topic2);
    }
    function palabraarray (cantidad){
        for (x=0; x<palabra.length;x++){    
        palabramuestra.push ("");
        }
    }
    palabraarray();

function linecreate (x){
        //Lugar donde agregar la linea//
        let lugar = document.querySelector("#theletter");
        //elemento img donde tengo ya la linea como png//
        let linea = document.createElement("img");
        linea.className = "linea";
        linea.src = "images/palabra1.png";
        linea.setAttribute ("id", "linea" + x);
        //añadiendo la linea al lugar ("un div con id = theletter")//
        let textBox = document.createElement ("textarea");
        textBox.className = "box";
        textBox.setAttribute ("id", "box" + x);
        textBox.setAttribute ("readonly","true");
       // lugar.appendChild (linea);
        lugar.appendChild (textBox);
}

for (x=1; x <= palabra.length; x++){
    linecreate (x);
}

 
//Function to add parts to the body.
function addParts (){
    if(times<11){
        let part1 = document.querySelector (".invisibleparts" + (times - 3));
        let classtoadd = "ahorcado" + times;
        let classtoremove = "invisibleparts" + (times - 3);
        part1.classList.remove(classtoremove);
        part1.classList.add(classtoadd);
        times = times + 1
    }
};


function acknoledge (){
    document.getElementById('dialogbox').style.display = "none";
    document.getElementById ('dialogoverlay').style.display = "none";
    elcuerpo.addEventListener ("keydown", evento);
}

function playagain (){

    window.location.href = "file:///E:/Programacion/Desafios/Segundo%20Desafio/game.html"
    elcuerpo.addEventListener ("keydown", evento);
}

function customAlert (){
    this.render = function (dialog,alertType){
        var winW= window.innerWidth;
        var winH= window.innerHeight;
        var dialogoverlay = document.getElementById("dialogoverlay");
        var dialogbox = document.getElementById("dialogbox");
        dialogoverlay.style.display = "block";
        dialogoverlay.style.height = winH+"px";
        dialogbox.style.left = (winW/2) - (550 * .5)+"px";
        dialogbox.style.top = (winH/2) - (300 * .5)+"px";
        dialogbox.style.display="block";
        document.getElementById("dialogboxhead").innerHTML = "Alert"
        document.getElementById("dialogboxbody").innerHTML = dialog;
        document.getElementById("dialogboxfoot").innerHTML = '<button onclick = "'+alertType+ '()"">OK</buttom>';
    }
    this.ok = function(){ 
    }
}

let evento = function (event){
    let theletter = event.key;
    console.log (theletter);

    if (nonallowKeys.indexOf(theletter)>0){

    }else {
        if(toytyping.indexOf(theletter)>=0){
            var alerta = new customAlert ()
            alerta.render("Ya has utilizazdo esta letra","acknoledge");
            elcuerpo.removeEventListener ("keydown", evento);
        }else if (palabra.indexOf(theletter)>=0){
        }else{
            toytyping.push (theletter);
            eltexto.textContent = toytyping.toString().replaceAll (",","");
        }
        
        if (palabra.indexOf (theletter)<0){
            addParts (); 
            if(times==11){
                var alerta = new customAlert ()
                alerta.render("Te Han Ahorcado!!!  </br> La palabra correcta era</br></br>" + palabra.toUpperCase()+ '</br></br><img height = 200px src= "images/dead'+Math.round(Math.random()*3)+'.gif">', "playagain");
            }   
        }else{
            let x=0;
            let y=0;
            do {
                x = palabra.indexOf(theletter, y);
                if(x<0){
                    x=-1;
                } else if (x >= 0 || palabramuestra [x]== ""){
                palabramuestra.splice(x,1,theletter);
                y=y+1;
                }
            }while (x >=0);

            for (x=0; x <= palabra.length; x++){
                let selector = "#box" + (x+1)
                let caja = document.querySelector (selector);
                caja.textContent = palabramuestra [x];

                let lapalabranueva = palabramuestra.toString().replaceAll (",","");
                console.log (lapalabranueva);
                if (palabra == lapalabranueva){
                    var alerta = new customAlert ()
                    alerta.render("Has ganado, la palabra correcta era </br></br>" + palabra.toUpperCase() +'</br></br><img height = 100px src= "images/'+palabra.toLowerCase()+'.png">', "playagain"); 
                    elcuerpo.removeEventListener ("keydown", evento);
                        }
                    }   
                }   
        }
};
//Event Listener check input and add to the Key used if not repeated.//
elcuerpo.addEventListener ("keydown", evento);


let startbutton = document.querySelector(".encrypt_button");
startbutton.addEventListener("click",function newpage (){

    window.location.href = "file:///E:/Programacion/Desafios/Segundo%20Desafio/game.html"
    //prompt("Please select a topic", "1: Countries, 2: Programing Lenguage")
    //window.location.href = "file:///E:/Programacion/Desafios/Segundo%20Desafio/addnewword.html"
});

let terminar = document.getElementById ("desistir");
terminar.addEventListener ("click", function(){
    window.location.href = "file:///E:/Programacion/Desafios/Segundo%20Desafio/thankyouforplaying.html"
});