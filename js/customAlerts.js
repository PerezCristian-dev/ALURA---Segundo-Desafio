function playagain (){
    window.location.href = "file:///E:/Programacion/Desafios/Segundo%20Desafio/game.html"
}

function customAlert (){

    this.render = function (dialog){
        var winW= window.innerWidth;
        var winH= window.innerHeight;
        var dialogoverlay = document.getElementById("dialogoverlay");
        var dialogbox = document.getElementById("dialogbox");
        dialogoverlay.style.display = "block";
        dialogoverlay.style.height = winH+"px";
        dialogbox.style.left = (winW/2) - (550 * .5)+"px";
        dialogbox.style.top = "450px";
        dialogbox.style.display="block";
        document.getElementById("dialogboxhead").innerHTML = "Esto es un mensaje"
        document.getElementById("dialogboxbody").innerHTML = dialog;
        document.getElementById("dialogboxfoot").innerHTML = '<button onclick = "playagain ()"">OK</buttom>';
    }

    this.ok = function(){

    }
}

var alert = new customAlert ()

alert.render("Hola esto es un mensaje de Alerta");
