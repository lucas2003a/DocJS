document.addEventListener("DOMContentLoaded",()=>{

    console.log("%c¿Qué es un string?","font-weight:bold; text-transform: uppercase;");
    console.log("");

    /*Los Strings son un tipo de dato básico (PRIMITIVO),  y conmo tal es más sencillo utilizar los literales qye la notación que utiliza la palbra NEW, para englobar los textos, se pueden utilizar los siguientes tipos de comiillas:

        ""  => Comillas dobles  => Para cadenas de texto.
        ''  => Comillas simples => Para textos literales (chart).
        ``  => Comillas invertidas (BACKTICKS)  => Para interpolación de variables.

        **IMPORTANTE**
            En javaScript no se hacen distinciones entre "" y ''.
    */

    //-------------------------------------------------------------------------------

    //Para crear strings en javaScript, tenemos dos notaciones o formas:
    console.log("%cNotación literal(preferida)","font-weight: bold;");

    const texto = "Hola a todos", mensaje = "Otro mensaje";

    console.log("texto: ", texto);
    console.log("mensaje: ", mensaje);
    console.log("");

    console.log("%cNotación mediante objeto","font-weight: bold;");

    const texto2 = new String("Hola a todos"), mensaje2 = new String("Otro mensaje" );

    console.log("texto2: ", texto2);
    console.log("mensaje2: ", mensaje2);
    console.log("");

    console.log("texto2.valueOf(): ", texto2.valueOf());
    console.log("mensaje2.valueOf(): ", mensaje2.valueOf());
    console.log("");

    //-------------------------------------------------------------------------------
    console.log("%cPropiedades de un String","font-weight: bold;");
    
    //Propiedad =>  Es una caraterísitca o atributo.
    //Método    =>  Una acción.

    /*En el caso de los string, solo tenemos una propiedad importante, que es .length
        .length => Se encarga de devolver el tamaño total de la cadena de texto en cuestión (NÚMERO DE CARACTERES TOTALES DE TEXTO).

        **IMPORTANTE**
            Al usar .length, los caracteres se comienzan a CONTAR DESDE el 1 y no desde el 0.
    */
    const saludo = "Hola amigo";
    const pregunta = "¿Cómo estas?";
    const vacia = "";

    console.log("saludo.length      : ", saludo.length);        //10
    console.log("pregunta.length    : ", pregunta.length);      //12
    console.log("vacia.length       : ", vacia.length);         //0
    console.log("");

    //Tambien se puede aplicar .lenght directamene al string en vez de a la variable

    console.log(`"Hola amigo".length    :`, "Hola amigo".length);              //10
    console.log(`"¿Cómo estas?".length  :` , "¿Cómo estas?".length);            //12
    console.log(`"".length              :` , "".length);                         //0
    console.log("");

    //-------------------------------------------------------------------------------
    console.log("%cAcceso a un caracter","font-weight: bold;");

    /*  Un string esta formado por la coleccion de caracteres, por lo tanto para acceder a algún elemento usamos el operador [] para indicar su posición del caracter.
        Para este caso en donde accedemos a una posición, COMENZAMOS A CONTAR DESDE 0, como normalmente se hace para la posición de un elemento en un array o otro tipo de estructura de colección de datos.

        Un string y un array son similares en ciertos puntos, por ejemplo para esta ocasión la similitud que comparten es que ambos son INDEXABLES, es decir se puede acceder a uno de sus elementos, indicando el indice.
    */

    console.log("saludo[0]  : ", saludo[0]);    //H
    console.log("saludo[1]  : ", saludo[1]);    //o
    console.log("saludo[2]  : ", saludo[2]);    //l
    console.log("saludo[3]  : ", saludo[3]);    //a
    console.log("saludo[4]  : ", saludo[4]);    //" "
    console.log("saludo[5]  : ", saludo[5]);    //a
    console.log("saludo[6]  : ", saludo[6]);    //m
    console.log("saludo[7]  : ", saludo[7]);    //i
    console.log("saludo[8]  : ", saludo[8]);    //g
    console.log("saludo[9]  : ", saludo[9]);    //o
    console.log("saludo[10]  : ", saludo[10]);  //undefined
    console.log("");

    //Al indiccar el indice de un elemento que no existe obtendremos como resultado UNDEFINED, ya que el string SALUDO tiene una longitud de 10 caracteres(contando del 1 al 10), pero al acceder al indice 10, obtendremos undefined ya qe estarimos accediendo a un elemento 11 (ya que las posiciones o indices son contados del 0 al 9) y 11 termina superando la longitud del string (que es 10).

    //-------------------------------------------------------------------------------
    console.log("");
    console.log("");

    //-------------------------------------------------------------------------------
    console.log("");
    console.log("");

    //-------------------------------------------------------------------------------
    console.log("");
    console.log("");
});