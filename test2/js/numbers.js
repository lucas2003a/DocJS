document.addEventListener("DOMContentLoaded", () => {
    console.log("%cNumbers","font-weight: bold; text-transform: uppercase;")
    console.log("");

    //-----------------------------------------------------------------------
    /* Se pueden declarar de dos formas: 
        -De la forma PREFERIDA : const number = 4;
        -Como un objeto a paratir del número(NUMBER) que se envía como parámetro: new = Number(NUMBER); ESTA FORMA ES INCORRECTA
    */

    //Notación literal (FORMA PREFERIDA)
    const number = 4;
    const decimal = 15.8;               //Los decimales se separan con puntos
    const legibleNumber = 5_000_000;    //De forma opcional se puede usar el " _  " para separar de una manera visual, y podere reconocer las magnitudes del número.
    console.log("Este es el resltado de comparar 5_000_000 == 5000000: ", legibleNumber == 5000000); // true 
    //En realidad el valor del número no cambia, el " _ " solo sirve para separar de manera visual los números, pero 5_000_000 == 5000000 es completamente igual.
    console.log("");

    console.log(number);            //4
    console.log(decimal);           //15.8
    console.log(legibleNumber);     //5000000

    //Notación con objetos (EVITAR)
    const number2 = new Number(4);  
    const decimal2 = new Number(15.8);
    const letter = new Number("A");

    console.log(number2);                       //resultado : Number {4}[[Prototype]]: Number[[PrimitiveValue]]: 4
    console.log(number2.valueOf());              //4

    console.log(decimal2);                      //resultado : Number {15.8}[[Prototype]]: Number[[PrimitiveValue]]: 15.8
    console.log(decimal2.valueOf());             //15.8

    console.log(letter)                         //Resultado : Number {NaN}[[Prototype]]: Number[[PrimitiveValue]]: NaN      
    console.log(letter.valueOf())               //NaN (Not a Number) => Cualquier parámetro enviado en Number(), que no sea un number, se pasará como un NaN.

    console.log("");

    //-----------------------------------------------------------------------
    
    console.log("%cBigInt","font-weight: bold;");

    const incorrectNumber = 482598752875287528533; // 482598752875287540000 (Diferente)
    const bigNumber = 482598752875287528533n;      // 482598752875287528533n (El mismo)

    /*
    -En incorrectNumber, a ser un número más grande de lo que javascript puede representar,por lo tanto pierde precisión.
    -En bigNumber, al añadir la n al final, en vez de crear un tipo NUMBER, estamos creando un tipo BIGINT.
    */
    console.log(incorrectNumber);
    console.log(bigNumber);

    console.log("");

    //Valores de los rangos numéricos en javascript
    const minValue = Number.MIN_VALUE;
    const maxValue = Number.MAX_VALUE;
    const maxSafeInteger = Number.MIN_SAFE_INTEGER;
    const minSafeInteger = Number.MAX_SAFE_INTEGER;
    const epsilon = Number.EPSILON;
    const positiveInfinity = Number.POSITIVE_INFINITY;
    const negativeInfinity = Number.NEGATIVE_INFINITY;

    console.log("minValue: ",minValue);
    console.log("maxValue: ",maxValue);
    console.log("maxSafeInteger: ",maxSafeInteger);
    console.log("minSafeInteger: ",minSafeInteger);
    console.log("epsilon: ",epsilon);
    console.log("positiveInfinity: ",positiveInfinity);
    console.log("negativeInfinity: ",negativeInfinity);
    console.log("");
    
    console.log("");
    console.log("%cComprobamos el rango de los números","font-weight: bold;");
    
    //Comprobamos si el número es finito
    console.log(Number.isFinite(42));               //true
    console.log(Number.isFinite(551.3));            //true
    console.log(Number.isFinite(Infinity));         //false, es un valor infinito.
    console.log("");

    //Comprobamos si el número es entero
    console.log(Number.isInteger(5))                //true
    console.log(Number.isInteger(4.6))              //false, 4.6 es decimal.
    console.log("");
    
    //Comprobamos si el número se encuentra dentro de un rango seguro
    console.log(Number.isSafeInteger(1e15));        //true => El valor es seguro (se encuentra en la franja verde).
    console.log(Number.isSafeInteger(1e16));        //false => El valor no es seguro (se encuentra en la franja amarilla).
    console.log("");

    //Comprobamos si el número es infinity
    console.log(1e309 == Infinity);                 //true
    console.log(Number.isSafeInteger(1e309));       //false => el valor es infinite y no es un safeInteger (se encuentra en la franja roja).
    console.log("");

    /*
    Para más conocimiento revisa los temas:
        -Rango numéricos seguros.
        -Coma flotante de doble presición.
    */

    //-----------------------------------------------------------------------

    console.log("%cRepresentación numérica","font-weight: bold;");
    /*
    Existen varias formas de representar los números:
        -Notación exponecial.
        -Notación de punto fijo.

    Los métodos usados para esto, son lo siguientes:
        -toExponential(digits)
        -toFixed(digits)
        -toPrecision(size)
    */
    console.log("");

    //-----------------------------------------------------------------------

    console.log("");
    console.log("");

    //-----------------------------------------------------------------------

    console.log("");
    console.log("");

    //-----------------------------------------------------------------------

    console.log("");
    console.log("");

    //-----------------------------------------------------------------------

    console.log("");
    console.log("");

    //-----------------------------------------------------------------------

    console.log("");
    console.log("");

    //-----------------------------------------------------------------------

    console.log("");
    console.log("");
});