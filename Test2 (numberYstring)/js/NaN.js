document.addEventListener("DOMContentLoaded",()=>{
    console.log("%cQué es un NaN?","font-weight: bold;  text-transform: uppercase;");
    console.log("");

    /* 
    Usos:
        -Sirve para indicar cuando un tipo de dato no es un número (NaN => Not a Number)
        -También sirve para INDICAR DATOS NUMÉRICOS pero que no se pueden representar en javaScript
    */

    console.log(Number.NaN);            //Es equivalente a NaN. Valor que no puede representarse como número.
    console.log(Number.isNaN());        //Number.isNaN(number) comprueba si number es NaN
    console.log("");

    console.log("%cComparamos y comprobamos los valores NaN","font-weight: bold;");
    console.log(NaN == NaN);            //false => El valor no es el mismo.
    console.log(NaN === NaN);           //false => Ni el tipo ni el valor son el mismo.
    console.log(""); 

    console.log("%cMétodo isNaN()","font-weight: bold;"); 
    console.log(Number.isNaN(NaN));     //true  => Forma correcta de comprobarlo.
    console.log(Number.isNaN(5));       //false => 5 es un número, no es un NaN.
    console.log(Number.isNaN("A"));     //false => "A" es un string, no es un NaN.
    console.log("");
    
    //---------------------------------------------------------------------------

    console.log("%ctypeOf con NaN","font-weight: bold;");
    //Recuerda que aunque NaN significa Not a Number, en realidad si es un valor numérico, solo que no se puede representar en javaScript.
    
    const number = NaN;

    console.log(typeof number);             //number
    console.log(number.constructor.name);   //Number
    console.log(""); 

    //---------------------------------------------------------------------------

    console.log("%cConversiones de valores NaN","font-weight: bold;");
    console.log(Boolean(NaN));      //false => Boleean() transforma a NaN en su valor buleano, en javaScript cuando  el valor es 0, undefined, null, NaN, "", el valor buleano es FALSE.
    console.log(String(NaN));       //"NaN" => String() transforma a NaN en su valor como string o cadena, por es el resultado es "NaN".
    console.log(Number(NaN));       ///NaN  => Number() transforma a NaN en  su valor numérico, en realidad NaN ya es un valor numérico por lo tanto el resultado sigue siendo NaN.
    console.log(""); 
});