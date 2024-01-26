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
    console.log("");
    console.log("");

    //-------------------------------------------------------------------------------
    console.log("");
    console.log("");

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