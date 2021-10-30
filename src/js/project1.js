

/**
 * @author Maite Ladaria Sanchez
 */


//TODO: La data d’enviament s’escriu sobre els missatges en el format indicat (en l’idioma que vulgueu): Exemple: 25 Maig DONE
/**
 * Con window onload ejecuto el javascript una vez se ha cargado la página. En está función lo que realizo es un array que contiene todos los meses
 * para que getMonth() lo recorra y seleccione el mes en el que estamos. Con la función getDate conseguimos el numero de día en el que estamos.
 * @param event
 */
window.onload = (event) => {
    const month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    let fecha = new Date ();
    document.getElementById ( "fecha" ).innerHTML = fecha.getDate () + " de " + month[fecha.getMonth ()];
};


//TODO La messaging area conté els missatges escrits. DONE
/**
 *En este apartado he creado una constante para que funcione el teclado con todas las funciones que requería el ejercicio. Que más abajo llamo con
 * un eventListener DOMContentLoaded para que funcione una vez cargada la pagina.
 * En general la gran mayoria de funciones, funcionan con un addEventListener y el evento click para que realicen las acciones correspondientes.
 * @type {{borrarPrimeraletra(): void, emoji(): void, inicio(): void, borrarUltimaLetra(): void, borrarPalabra(): void, borrarC(): void, mayus(): void}}
 */
const keyboard = {

    /**
     * Con inicio lo que hago es seleccionar todos los divs de las clase .linea1 y lo recorro con un forEach. Utilizo un addEventListener para que
     * cuando realice un click en cualquiera de los divs me añada el valor al input y utilizo el += para que se vaya añadiendo el contenido del div.
     */
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
    /**
     * Utilizando un getElementById llamo el id de borrarTodoTextArea y con eventListener de tipo click lo que realizamos es borrar el contenido
     * del input ya que le añadimos "" para que se quede vacio.
     */
    borrarC() {
        document.getElementById ( "borrarTodoTextArea" ).addEventListener ( "click", function () {
            document.getElementById ( 'texto' ).value = "";
        } )
    },

//todo La tecla CE esborra la darrera paraula de la text area DONE
    /**
     * Utilizamos replace() para borrar las palabras, puntos y comas y la función trim() para quitar los espacios.
     * Utilizando replace() se tiene en cuenta tanto el teclado real como el teclado virtual.
     */
    borrarPalabra() {
        document.getElementById ( "borrarPalabra" ).addEventListener ( "click", function () {
            let borrarPalabraTexto = document.getElementById ( 'texto' ).value;
            document.getElementById ( 'texto' ).value = borrarPalabraTexto.replace ( /[\W]*\S+[\W]*$/, '' ).trim ();


        } )
    },


    //todo DELET La tecla  ←  esborra el darrer caràcter escrit a la text area. done
    /**
     * Utilizo la función slice() para borrar el último caracter escrito en el input.
     */
    borrarUltimaLetra() {
        document
            .getElementById ( 'borrarUltimaLetra' )
            .addEventListener ( 'click', () => {
                let textoAborrar = document.getElementById ( 'texto' ).value;
                document.getElementById ( 'texto' ).value = textoAborrar.slice ( 0, -1 );
            } )
    },

//TODO DELET La tecla →  esborra el primer caracter escrit a la text area. done
    /**
     * Utilizo la función slice(1) para borrar el primer caracter.
     */
    borrarPrimeraletra() {
        document
            .getElementById ( 'borrarPrimeraLetra' )
            .addEventListener ( 'click', () => {
                let textoPrimeraLetra = document.getElementById ( 'texto' ).value;
                document.getElementById ( 'texto' ).value = textoPrimeraLetra.slice ( 1 );
            } )
    },

    /**
     * Realizo una función similar que inicio() pero la unica diferencia es que en vez de recorrer linea1>div recorro .gifemoji>div
     */
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

    /**
     * Llama a la función mayusminus() y borra las tres últimas palabras porque al clickar en abc lo pinta en el input
     */
    mayus() {
        document.getElementById ( "cambioMayus" ).addEventListener ( "click", function () {
            let borrarABC = document.getElementById ( 'texto' ).value;
            document.getElementById ( 'texto' ).value = borrarABC.slice ( 0, -3 );
            mayusminus ();

        } );
    },


}


/*
todo En la keyboard area hi haurà tecles de lletres i funcions.
Tecles de lletres: han de sortir totes les habituals (encara que és suficient que funcionin les de la primera fila).
 */
/**
 * Aquí llama todas las funciones de keyboard y carga el teclado para que funcione
 */
window.addEventListener ( 'DOMContentLoaded', function () {
    keyboard.inicio ();
    keyboard.borrarC ();
    keyboard.borrarUltimaLetra ();
    keyboard.borrarPrimeraletra ();
    keyboard.borrarPalabra ();
    keyboard.mayus ();
    keyboard.emoji ();


} )

//TODO COMPROBACIÓN MAYUS HACER MAS PEQUEÑO/GRANDE DONE

function mayusminus() {
    let botonMayus = document.getElementsByClassName ( 'shift' );

    let i = 0;
    let estilo = botonMayus[i].style.textTransform;

/**
*Creamos un switch con varios casos 'initial', 'uppercase' y  default. Dentro de cada caso tenemos un for que recorre la variable botonMayus que es un
*getElementsByClassName que coge la clase shift de los diferente divs y cambia el estilo y lo convierte en minusculas o minusculas dependiendo de lo
*que necesitemos. Un click crea mayusculas a minusculas, dos clicks a mayusculas y tres clicks vuelve a minusculas.
*
*Si botonMayus es igual al cambio realizado recorrerá todos los divs del teclado con un forEach y cambiará el estilo del teclado y convertirá la minuscula a mayuscula y viceversa.
 */
    switch (estilo) {
        case 'initial':
            for (i = 0; i < botonMayus.length; i++) {
                botonMayus[i].textContent = botonMayus[i].textContent.toUpperCase ();
                botonMayus[i].style.textTransform = "uppercase";
                document.getElementById ( "cambioMayus" ).style.textTransform = "uppercase";
                if ( botonMayus[i].style.textTransform === "uppercase") {
                    const divs = document.querySelectorAll ( ".shift" );
                    divs.forEach ( div => {
                            div.addEventListener ( 'click', function () {

                                    for (i = 0; i < botonMayus.length; i++) {
                                        botonMayus[i].textContent = botonMayus[i].textContent.toUpperCase ();
                                        botonMayus[i].style.textTransform = "uppercase";
                                    }
                                    document.getElementById ( "cambioMayus" ).style.textTransform = "uppercase";
                                }
                            )
                         }
                    )

                }
            }


            break;
        case 'uppercase':
            for (i = 0; i < botonMayus.length; i++) {
                botonMayus[i].textContent = botonMayus[i].textContent.toLowerCase ();
                botonMayus[i].style.textTransform = "lowercase";
                document.getElementById ( "cambioMayus" ).style.textTransform = "lowercase";
                if ( botonMayus[i].style.textTransform === "lowercase" ) {
                    const divs = document.querySelectorAll ( ".shift" );
                    divs.forEach ( div => {
                            div.addEventListener ( 'click', function () {

                                    for (i = 0; i < botonMayus.length; i++) {
                                        botonMayus[i].textContent = botonMayus[i].textContent.toLowerCase ();
                                        botonMayus[i].style.textTransform = "lowercase";
                                    }
                                    document.getElementById ( "cambioMayus" ).style.textTransform = "lowercase";
                                }
                            )
                        }
                    )

                }
                document.getElementById ( "cambioMayus" ).style.textTransform = "lowercase";
            }

            break;
        default:
            for (i = 0; i < botonMayus.length; i++) {
                botonMayus[i].textContent = botonMayus[i].textContent.toUpperCase ();
                botonMayus[i].style.textTransform = "capitalize";
                document.getElementById ( "cambioMayus" ).style.textTransform = "capitalize"
                if ( botonMayus[i].style.textTransform === "capitalize" ) {
                    const divs = document.querySelectorAll ( ".shift" );
                    divs.forEach ( div => {
                            div.addEventListener ( 'click', function () {

                                    for (i = 0; i < botonMayus.length; i++) {
                                        botonMayus[i].textContent = botonMayus[i].textContent.toLowerCase ();
                                        botonMayus[i].style.textTransform = "initial";
                                    }
                                    document.getElementById ( "cambioMayus" ).style.textTransform = "initial"
                                }
                            )
                        }
                    )

                }

            }
            break;
    }
}





//todo En clicar sobre GIF, se mostren els emojis (mínim de 3)  i  la icona “GIF” se canvia per la icona d’un teclat. DONE
/**
 *Selecciono con un querySelector el botón de emojis que tiene un id y que al hacer click lo que hará será buscar con indexOf la imagen emoji.png
 * si el elemento es distinto a -1 cambiará la imagen de emoji a la del teclado y viceversa.
 * Utilizando la función toggle lo que hago es mostrar el css que he asignado a gifs y esconderlo si es necesario con el otro id que tiene
 * asignado previamente.
 * @type {Element}
 */
var container = document.querySelector ( '#emojis' );
container
    .addEventListener ( "click", function () {

        let img = document.getElementById ( 'cambioteclado' ).src;
        if ( img.indexOf ( 'emoji.png' ) != -1 ) {
            document.getElementById ( 'cambioteclado' ).src = 'img/teclado.png';
        } else {
            document.getElementById ( 'cambioteclado' ).src = 'img/emoji.png';
        }
        var emojis = document.getElementById ( "hideemoji" );
        emojis.classList.toggle ( "gifs" );
    } );






/**
 * Información genérica: Con esta función lo que hago es que se envien los mensajes en formato div que se han creado en el input.
 */
function envioBoton() {
//creamos un elemento div
    var divElement = document.createElement ( "div" );
    var inputElement = document.getElementById ( 'texto' ).value;
/*aqui lo que hacemos es cuando el simbolo de salto de linea aparezca conviertemelo a array ya que sino en
 el input aparecería de está manera "hola ↵" y lo que queremos es separarlo para que pueda ser sustituido.
 */
    inputElement = inputElement.toString ().split ( "↵" );


//TODO S’escriu un espai en la text area cada cop que s’espitja aquella tecla En enviar el missatge a la messaging area,
// els espais han d’aparèixer també. DONE
    /**
     * Recorremos el inputElement con un for Each con una función llamada checkEnter siendo element que nos cogerá el elemento string del input,
     * tendrá un indez que será 0 y un array que nos comprobará cuantos elementos tiene Si la longitud del array es mayor que uno y su longitud es distinta
     * a la de index 1 me creará un br y lo añadirá con appendChild.
     */
    inputElement.forEach ( function checkEnter(element, index, array) {
        divElement.appendChild ( document.createTextNode ( element ) );
        if ( array.length > 1 && array.length != index + 1 ) {
            divElement.appendChild ( document.createElement ( 'br' ) );
        }
    } );


    /*TODO: Els missatges contenen l’hora d’enviament amb format establert  hora:minuts. DONE
    Les hores i minuts sortiran amb 2 caràcters, exemples:   10:28,  09:45,  18:03
     */
    var today = new Date ();
   /*
   Con today.getMinutes()<10?'0':'' solucionamos el problema de que no aparezca el 0 en las primeros minutos de la hora
   sin eso aparecería de está manera 14:1.
    */
    var tiempo = " " + today.getHours () + ":" + ((today.getMinutes () < 10 ? '0' : '') + today.getMinutes ());
    var spanElement = document.createElement ( 'span' );
    spanElement.appendChild ( document.createTextNode ( tiempo ) );


    //Para inserta la hora al mensaje y darle un formato de estilo
    spanElement.style.cssText = 'font-size: 9px; justify-content: flex-end';
    document.getElementById ( "messages" ).appendChild ( divElement ).appendChild ( spanElement )


    //todo el mensaje tiene que hacer scrolldown al final DONE
    var elmnt = document.getElementById ( "messages" );

    elmnt.scrollTop = elmnt.scrollHeight;

//TODO EL MENSAJE SE DEBE BORRAR AL SER ENVIADO DONE

    document.getElementById ( 'texto' ).value = "";

}

document.getElementById ( "boton" ).addEventListener ( "click", function () {
    envioBoton ();

} );















