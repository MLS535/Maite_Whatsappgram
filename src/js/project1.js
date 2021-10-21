
//TODO: La data d’enviament s’escriu sobre els missatges en el format indicat (en l’idioma que vulgueu): Exemple: 25 Maig DONE
window.onload = (event) => {
    const month = ["Enero", "Febrero", "Marzo", "Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    let fecha = new Date();
    let name = fecha.getDate()+" de "+month[fecha.getMonth()];
    document.getElementById("fecha").innerHTML = name;
};
//TODO La messaging area conté els missatges escrits. DONE
const keyboard ={
    inicio(){
        const divs= document.querySelectorAll(".linea1>div");
        divs.forEach(div =>{div.addEventListener('click',function (){
            document.getElementById('texto').innerHTML+=div.textContent;
        }
        )
        }
        )

    }
}
window.addEventListener('DOMContentLoaded', function (){keyboard.inicio()})

document.getElementById("boton").addEventListener("click", function() {
    envioBoton();

});

function envioBoton(){
    //Para inserta la hora al mensaje
    var today = new Date();
    //Con today.getMinutes()<10?'0':'' solucionamos el problema de que no aparezca el 0.
    var tiempo = " \n "+today.getHours() + ":" + ((today.getMinutes()<10?'0':'') + today.getMinutes() );
    var textarea= document.getElementById('texto').value;
    var divino = document.createElement("div");
    divino.appendChild(document.createTextNode(textarea));
    divino.appendChild(document.createTextNode(tiempo));
    var messages= document.getElementById("messages").appendChild(divino);
//TODO EL MENSAJE SE DEBE BORRAR AL SER ENVIADO
    //con este elemento se envia y borra el texto pero ya no permite enviar más mensajes hacer un if y un else?
    //document.getElementById('texto').value = "";
    //todo el mensaje tiene que hacer scrolldown al final DONE
    var elmnt = document.getElementById("messages");
    elmnt.scrollIntoView(false);
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


//todo En clicar sobre GIF, se mostren els emojis (mínim de 3)  i  la icona “GIF” se canvia per la icona d’un teclat.


//todo En clicar sobre un emoji, s’envia un missatge amb aquell emoji (en una mida adequada, ni massa gran ni massa petita).

//todo La tecla C esborra el text de la text area.

//todo La tecla CE esborra la darrera paraula de la text area
// (si els darrers caràcters escrits són 1 o més espais, esborra la paraula abans dels espais).

//todo DELET La tecla  ←  esborra el darrer caràcter escrit a la text area.

//TODO DELET La tecla →  esborra el primer caracter escrit a la text area.

//