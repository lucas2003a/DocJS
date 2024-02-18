document.addEventListener("DOMContentLoaded",()=>{

    console.log("%cModificar un string","font-weight: bold; text-transform: uppercase;");
    console.log("");

    //MÉTODOS PARA MODIFICAR UN STRING

    const text = "Los gatos dominarán al mundo";
    const text2 = "Lucas prefiere ver El chavo del 8 a ver Clarence de Cartoon Network";

    console.log("text   : ", text);
    console.log("text2  : ", text2);
    console.log("");

    //----------------------------------------------------------------------------------
    /*  STRING.toLowerCase()        =>  Devuelve STRING transformado a un texto en minúsculas.
    */
    console.log("text.toLowerCase()     : ", text.toLowerCase());   //los gatos dominarán al mundo
    console.log("text2.toLowerCase()    : ", text2.toLowerCase());  //lucas prefiere ver el chavo del 8 a ver clarence de cartoon network
    console.log("");
    //----------------------------------------------------------------------------------
    /*  STRING.toUpperCase()        =>  Devuelve STRING transformado a un texto en mayúsculas.
    */      
    console.log("text.toUpperCase()     : ", text.toUpperCase());   //LOS GATOS DOMINARÁN AL MUNDO
    console.log("text2.toUpperCase()    : ", text2.toUpperCase());  //LUCAS PREFIERE VER EL CHAVO DEL 8 A VER CLARENCE DE CARTOON NETWORK
    console.log(""); 
    //----------------------------------------------------------------------------------
    /*  STRING.padStart(size, text) =>  Devuelve STRING rellenando el inicio con text hasta llegar al tamaño size.
    */
    console.log("text.length    : ", text.length);  //28
    console.log(`text.padStart(30,"0")      : `, text.padStart(30,"0"));    //00Los gatos dominarán al mundo
    console.log(`text.padStart(30,"aei")    : `, text.padStart(30,"aei"));  //size al ser menor a la longitud de text, no cambia en nada.
    console.log(""); 
    //----------------------------------------------------------------------------------
    /*  STRING.padEnd(size, text)   =>  Devuelve STRING rellenando el final cont text hasta llegar al tamaño size. 
    */

    console.log("text2.length   : ", text2.length); //67
    console.log(`text2.padEnd(75,"ae")  : `, text2.padEnd(75,"ae"));    //Lucas prefiere ver El chavo del 8 a ver Clarence de Cartoon Networkaeaeaeae
    console.log(`text2.padEnd(75, "is") : `, text2.padEnd(75, "is"));   //Lucas prefiere ver El chavo del 8 a ver Clarence de Cartoon Networkisisisis
    console.log("");
    //----------------------------------------------------------------------------------
    /*  STRING.trimStart()      =>  Devuelve STRING eliminando espacios a la izquierda del texto.
    */

    const text3 = "     !Saluda a nuestro rey gato¡      ";
    console.log("text3  : ", text3);    //     !Saluda a nuestro rey gato¡      
    console.log("");

    console.log("text3.trimStart()  :", text3.trimStart());     //!Saluda a nuestro rey gato¡      
    console.log("");
    //----------------------------------------------------------------------------------
    /*  STRING.trimEnd()        =>  Devuelve STRING eliminando espacios a la derecha del texto.
    */
    
    console.log("text3.trimEnd()    : ", text3.trimEnd());      //       !Saluda a nuestro rey gato¡
    console.log("");
    //----------------------------------------------------------------------------------
    /*  STRING.trim()           =>  Devuelve STRING eliminando espacios a la izquierda y derecha del texto.
    */

    console.log("text3.trim()       : ", text3.trim());         // !Saluda a nuestro rey gato¡
    console.log("");

    console.log("text3.trimStart().trimEnd() == text3.trim()    :", text3.trimStart().trimEnd() == text3.trim());   //true
    console.log("");
    //----------------------------------------------------------------------------------
    /*  CAPITALIZAR TEXTOS
        Se refiere a transformar mayúsculas su primer caracter, y en minúsculas el resto del texto.
    */

    const capitalizar = texto => texto[0].toUpperCase() + texto.substring(1);

    const capitalizarWord =  texto =>{
        //return texto.split(" ").map(word => capitalizar(word)).join(" ");
        //Más  legible
        return texto.split(" ")             //retorna los elementos de texto separado por " " como separador.

        .map(word => capitalizar(word))     //word es cada elemento retornado de texto.split(" ") y por cada uno se ejecuta la funcion capitalizar.
        .join(" ");                         //luego cada elemnto se junta teniendo a " " como separador.
    }

    console.log(`capitalizar("hola como estas")     : `, capitalizar("hola como estas"));
    console.log(`capitalizarWord("hola como estas") : `, capitalizarWord("hola como estas"));
    console.log("");
    //----------------------------------------------------------------------------------
    console.log("%cConcatenar textos","font-weight: bold;");
    
    const name = "Lucas";
    console.log("name   : ", name);
    console.log("");

    //Usando el método concat()
    console.log(`name.concat("ita","2023")  :`, name.concat("ita","2023"));     //Lucasita2023
    console.log(`name.concat(20, 3, 5)      :`, name.concat(20, 3, 5));         //Lucas2035
    console.log(`name.concat((2000 + 3))    :`, name.concat((2000 + 3)));       //Lucas2003
    console.log("");

    //Usando el operador +
    console.log(`name + "ita" + "2023"      : `, name + "ita" + "2023");        //Lucasita2023
    console.log(`name + 20 + 3 + 5          : `, name + 20 + 3 + 5);            //Lucas2035
    console.log(`name + (2000 + 3)          : `, name + (2000 + 3));            //Lucas2003
    console.log("")
    //----------------------------------------------------------------------------------
});