//todo al principio aparece una fecha
function date(){
    const month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    const d = new Date();
    let name = month[d.getMonth()];
    document.getElementById("demo").innerHTML = name;
}
date();

//TODO !!!! PISTA PROFE: EL IDENTIFICADOR DE LA LETRA ES LO MISMO QUE IMPRIMIR
//function imprimirtecla(valor){ document.getelementbyid("message").innerHTML += valor}
//document.getElementById("a").onclick =function(){ imprimirtecla(this.id)}
//CREAR UN ARRAY O UN BUCLE PARA CADA POSICIÓN O UNA LETRA.
//TODO La messaging area conté els missatges escrits.


//TODO: La data d’enviament s’escriu sobre els missatges en el format indicat (en l’idioma que vulgueu): Exemple: 25 Maig


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