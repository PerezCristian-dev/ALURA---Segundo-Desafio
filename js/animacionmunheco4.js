
            let elcuerpo = document.querySelector("body");
            let eltexto = document.querySelector ("#eltexto");
            let eltextoPalabra = document.querySelector ("#lapalabra");
            let toytyping = [];
            let y = 0;
            let palabra = "pais";
            let palabramuestra = [];
            
            

            elcuerpo.addEventListener ("keydown", function (event){
                let theletter = event.key;
               // alert ("hiciste click");
               if(toytyping.indexOf(event.key.toString())>=0){
                   alert("key already used");
                }else{
                console.log (theletter + " added");
                toytyping.push (theletter);
                eltexto.textContent = toytyping.toString().replaceAll (",","");
                }

                
                if (palabra.indexOf (theletter)<0){
                    alert("te ta muriendo");
               
                }else{
                    do {
                       x= palabra.findIndex(theletter, 0);
                        palabramuestra.splice(x,0,theletter);
                        x=x+1
                        y=y+1
                    }while (x < palabra.length);
                    eltextoPalabra.textContent = palabramuestra;
                }

                
            });



