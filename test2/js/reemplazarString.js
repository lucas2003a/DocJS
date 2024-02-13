document.addEventListener("DOMContentLoaded", ()=>{
    console.log("%cReemplzar cadenas de texto","font-weight: bold; text-transform: uppercase;");
    console.log("");       

    //  Podemos usar el método .replace() pero con distintas firmas

    const text = "Hola gato, ¿eres un perro o un gato?";

    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    /*  .replace(TEXT, NEW STRNG)  =>   Remplaza la primera coincidencia del string TEXT por NEW STRING
                                        Reemplaza la primera aparición de un texto.
    */

    console.log(`text.replace("g","p")                  : `, text.replace("g","p"));                        //Hola pato, ¿Eres un perro o un gato?.
    
    //Si quieres remmplazar varias veces, solo puedes hacerlo de este modo:
    console.log(`text.replace("g","p").replace("o","a") : `, text.replace("g","p").replace("o","a"));       //Hala pato, ¿Eres un perro o un gato? =>  reemplazó "g" por "p" y a también "o" por "a", pero solo en las primeras apariciones.                                
    console.log("");             
    
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    /*  .replace(REGEPX, NEW TEXT)  => Busca a partir de un REGEXP en lugar de un string y lo reemplaza por NEW TEXT.
    */
    
    console.log(`text.replace(/e/g, "i")    : `, text.replace(/e/g, "i"));   //Hola gato, ¿iris un pirro o un gato?
    console.log("");
    //Al indicar un REGEXP global (g), reemplazará TODOS los carateres indicado en la expresión regular (e) por NEW TEXT (i);

    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    /*  .replaceAll(TEXT, NEW TEXT) => Reemplaza TODAS las apariciones de TEXT por NEW TEXT.
    */

    console.log(`text.replaceAll("e","i")   : `, text.replaceAll("e","i"));
    console.log("");
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    /*  .replaceAll(REGEXP, NEW TEXT)   =>  Busca TODAS las apariciones de un REGEXP en vez de un string por NEW TEXT.
    */

    /*console.log(`text.replaceAll(/e/,"i")   : `, text.replaceAll(/e/,"i"));     //Uncaught TypeError: String.prototype.replaceAll called with a non-global RegExp argument
        Este metodo, si recive un REGEXP como parámetro, forzosamente debe ser uno global, por evitar comportamientos inesperados, tener concistencia y claridad.
    */
    console.log(`text.replaceAll(/t/g  ,"i")   : `, text.replaceAll(/t/g,"i"));
    console.log("");

    //-------------------------------------------------------------------------------------------------------------
    console.log("%cReemplazar todos los textos","font-weight: bold;");

    /*  Una de las forma más potentes de reemplazar textos, es con .replace() con una expresión regular global, ya que de este modo podemos crear patrones complejos que coincidan con multiples casos. 
     */
    const text2 = "Javascript es un gran lenguaje";
    console.log("text2  : ", text2);
    console.log("");

    console.log(`text2.replace(/[aeou]/g, "i")  : `, text2.replace(/[aeou]/g, "i"));    //Jiviscript is in grin lingiiji
    console.log("");

    //-------------------------------------------------------------------------------------------------------------
    console.log("%cFunción para reemplazar","font-weight: bold;");
    console.log("");
    /*  Tanto al método .replace() o .replaceAll(), nos permite indicar un segundo parámetro un FUNCTION en vez de un string, permitiendo utilizar dicha función para un reemplazo.
    */

    const text3 = "Hola gato, ¿eres un perro o eres un pato?";

    const replaceF = value => `=>${value}<=`;

    console.log(`text3.replace(/.a.o/g, replaceF)   : `, text3.replace(/.a.o/g, replaceF));  //Hola =>gato<=, ¿eres un perro o eres un =>pato<=?
    //Por cada coincidencia, llama a la función replaceF,

    console.log(`text3.replaceAll("un", replaceF)   : `, text3.replaceAll("un", replaceF));  //Hola gato, ¿eres =>un<= perro o eres =>un<= pato?
    //No llama a la función por cada coincidencia, sino que realiza el reemplazo directo en todas las coincidencias de la cadena.

});