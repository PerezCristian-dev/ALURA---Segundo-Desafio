var muheco = document.querySelector("#outpuldiv");
var texttobeencrypted = document.querySelector ("#txt_toencrypt");
var messagefinal = document.querySelector ("#finalmessage");
var textencrypted = document.querySelector("#txt_encrypted");

texttobeencrypted.addEventListener ("input", function(){
    if(this.value.length > 0){
        muheco.classList.add ("invisible");
        messagefinal.classList.add ("finalmessage2");
        textencrypted.textContent = this.value;

    }else {
    muheco.classList.remove ("invisible");
    messagefinal.classList.remove ("finalmessage2");
    //textencrypted.textContent = this.value;
    }
});

