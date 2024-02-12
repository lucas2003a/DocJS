document.addEventListener("DOMContentLoaded", ()=>{
    console.log("%cReemplzar cadenas de texto","font-weight: bold; text-transform: uppercase;");
    console.log("");       

    //  Podemos usar el método .replace() pero con distintas firmas

    const text = "Hola gato, ¿Eres un perro o un gato?";

    /*  .replace(TEXT, NEW STRNG)  =>   Remplaza la primera coincidencia del string TEXT por NEW STRING
                                        Reemplaza la primera aparición de un texto.
    */

    console.log(`text.replace("g","p")                  : `, text.replace("g","p"));                        //Hola pato, ¿Eres un perro o un gato?.
    
    //Si quieres remmplazar varias veces, solo puedes hacerlo de este modo:
    console.log(`text.replace("g","p").replace("o","a") : `, text.replace("g","p").replace("o","a"));       //Hala pato, ¿Eres un perro o un gato? =>  reemplazó "g" por "p" y a también "o" por "a", pero solo en las primeras apariciones.                                
    console.log("");                                        
});