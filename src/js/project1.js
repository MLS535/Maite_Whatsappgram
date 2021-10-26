
//TODO: La data d’enviament s’escriu sobre els missatges en el format indicat (en l’idioma que vulgueu): Exemple: 25 Maig DONE
window.onload = (event) => {
    const month = ["Enero", "Febrero", "Marzo", "Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    let fecha = new Date();
    let name = fecha.getDate()+" de "+month[fecha.getMonth()];
    document.getElementById("fecha").innerHTML = name;
};


//TODO La messaging area conté els missatges escrits. DONE
const keyboard = {

    inicio() {
        const divs = document.querySelectorAll ( ".linea1>div" );
        divs.forEach ( div => {
                div.addEventListener ( 'click', function () {
                        document.getElementById ( 'texto' ).value += div.textContent;
                    }
                )
            }
        )

    },
//todo La tecla C esborra el text de la text area. DONE

    borrarC() {
        document.getElementById ( "borrarTodoTextArea" ).addEventListener ( "click", function () {
            document.getElementById ( 'texto' ).value = "";
        } )
    },

//todo La tecla CE esborra la darrera paraula de la text area DONE

    borrarPalabra() {
        document.getElementById ( "borrarPalabra" ).addEventListener ( "click", function () {
            let borrarPalabraTexto = document.getElementById ( 'texto' ).value;
            document.getElementById ( 'texto' ).value = borrarPalabraTexto.replace ( /\w+[.!?]?$/, '' ).trim ();


        } )
    },

    //todo DELET La tecla  ←  esborra el darrer caràcter escrit a la text area. done


    borrarUltimaLetra() {
        document
            .getElementById ( 'borrarUltimaLetra' )
            .addEventListener ( 'click', () => {
                let textoAborrar = document.getElementById ( 'texto' ).value;
                let texto = document.getElementById ( 'texto' ).value = textoAborrar.slice ( 0, -2 );
            } )
    },

//TODO DELET La tecla →  esborra el primer caracter escrit a la text area. done
    borrarPrimeraletra() {
        document
            .getElementById ( 'borrarPrimeraLetra' )
            .addEventListener ( 'click', () => {
                let textoPrimeraLetra = document.getElementById ( 'texto' ).value;
                let textoLetra = document.getElementById ( 'texto' ).value = textoPrimeraLetra.substring ( 1 ).slice ( 0, -1 );
            } )
    },



    emoji() {
        const divs = document.querySelectorAll ( ".gifemoji>div" );
        divs.forEach ( div => {
                div.addEventListener ( 'click', function () {
                        document.getElementById ( 'texto' ).value += div.textContent;
                    }
                )
            }
        )

    },
    mayus(){
        document.getElementById("cambioMayus").addEventListener("click", function() {
            let borrarABC = document.getElementById ( 'texto' ).value;
             document.getElementById ( 'texto' ).value = borrarABC.slice ( 0, -3 );
            mayusculas();

        });
    }


}





window.addEventListener('DOMContentLoaded', function (){
    keyboard.inicio();
    keyboard.borrarC();
    keyboard.borrarUltimaLetra();
    keyboard.borrarPrimeraletra();
    keyboard.borrarPalabra();
    keyboard.mayus();
    keyboard.emoji();
    /*





     */
})


function mayusculas() {
            //let borrarABC = document.getElementById ( 'texto' ).value;
           // let comprobar = document.getElementById ( 'texto' ).value = borrarABC.slice ( 0, -3 );
            let botonMayus = document.getElementsByClassName ( 'shift' );

            let i = 0;
            let estilo = botonMayus[i].style.textTransform;

            if ( estilo === "capitalize" ) {

                for (i = 0; i < botonMayus.length; i++) {
                    botonMayus[i].textContent=botonMayus[i].textContent.toLowerCase();
                    botonMayus[i].style.textTransform="lowercase";
                }


            }
            else {

                for (i = 0; i < botonMayus.length; i++) {
                    botonMayus[i].textContent=botonMayus[i].textContent.toUpperCase();
                    botonMayus[i].style.textTransform="capitalize";
                }

            }
            }


/*
document.getElementById("cambioMayus").addEventListener("click", function() {

    mayusculas();

});
*/
//todo En clicar sobre GIF, se mostren els emojis (mínim de 3)  i  la icona “GIF” se canvia per la icona d’un teclat. DONE

var container = document.querySelector('#emojis');
container
    .addEventListener("click", function() {

        let img = document.getElementById('cambioteclado').src;
        if (img.indexOf('gif_smile.png')!=-1) {
            document.getElementById('cambioteclado').src  = 'img/teclado.png';
        }
        else {
            document.getElementById('cambioteclado').src = 'img/gif_smile.png';
        }
    var emojis = document.getElementById("hideemoji");
    emojis.classList.toggle("gifs");
});

document.getElementById("boton").addEventListener("click", function() {
    envioBoton();

});

function envioBoton(){

    var divino = document.createElement("div");
    var inputElement= document.getElementById('texto').value;

    inputElement=inputElement.toString().split("↵");



//TODO S’escriu un espai en la text area cada cop que s’espitja aquella tecla En enviar el missatge a la messaging area,
// els espais han d’aparèixer també. DONE
    inputElement.forEach(function checkEnter(element, index, array) {
        divino.appendChild(document.createTextNode(element));
        if ( array.length > 1 && array.length != index+1){
            divino.appendChild(document.createElement('br'));
        }
    });




    var today = new Date();
    //Con today.getMinutes()<10?'0':'' solucionamos el problema de que no aparezca el 0.
    var tiempo =" " +today.getHours() + ":" + ((today.getMinutes()<10?'0':'') + today.getMinutes() );
    var spanElement =document.createElement('span');
    spanElement.appendChild(document.createTextNode(tiempo));


    //Para inserta la hora al mensaje y darle un formato de estilo
    spanElement.style.cssText='font-size: 9px; justify-content: flex-end';
    document.getElementById("messages").appendChild(divino).appendChild(spanElement)

//TODO EL MENSAJE SE DEBE BORRAR AL SER ENVIADO DONE
    //con este elemento se envia y borra el texto pero ya no permite enviar más mensajes
    //todo el mensaje tiene que hacer scrolldown al final DONE
   var elmnt = document.getElementById("messages");
    elmnt.scrollIntoView(false);



    document.getElementById('texto').value="";

}


//TODO !!!! PISTA PROFE: EL IDENTIFICADOR DE LA LETRA ES LO MISMO QUE IMPRIMIR
//function imprimirtecla(valor){ document.getelementbyid("message").innerHTML += valor}
//document.getElementById("a").onclick =function(){ imprimirtecla(this.id)}
//CREAR UN ARRAY O UN BUCLE PARA CADA POSICIÓN O UNA LETRA.






/*TODO: Els missatges contenen l’hora d’enviament amb format establert  hora:minuts.
Les hores i minuts sortiran amb 2 caràcters, exemples:   10:28,  09:45,  18:03
 */


/*TODO En la text area escrivim missatges.
Escrivim emprant les tecles de la keyboard area o el teclat de l’ordinador
En pulsar el send button, el missatge se mostra en la messaging area.
 */


/*
todo En la keyboard area hi haurà tecles de lletres i funcions.
Tecles de lletres: han de sortir totes les habituals (encara que és suficient que funcionin les de la primera fila).
 */





//todo En clicar sobre un emoji, s’envia un missatge amb aquell emoji (en una mida adequada, ni massa gran ni massa petita).




// (si els darrers caràcters escrits són 1 o més espais, esborra la paraula abans dels espais).
