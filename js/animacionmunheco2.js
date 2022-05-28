let munheco = document.querySelector (".start_Main");
let x = 4
munheco.addEventListener("dblclick", function (){
    let part1 = document.querySelector (".ahorcado" + x);
    part1.classList.add ("ahorcado" + x);
    x = x + 1
});

