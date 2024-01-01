document.addEventListener("DOMContentLoaded",()=>{
    console.log("%cconversiones numéricas","font-weight: bold; text-transform: uppercase;");
    console.log("");

    //Para realizar converisones lo ideal es usar funciones de parseo.
    //Parsear: Quiere decir o hace referncia al proceso de analizar o intrepretar datos de una cadena de caracteres (texto) y convertirlos a un formato específico.
    /*
    Convertir a un número entero:
        parseInt(texto)         => Convierte el texto ingresado a un entero.
        parseInt(texto, radix)  => radix indica la base (binario, decimal, octal, etc) en que se encuentra el texto y convierte el texto ingresado a un entero  
    */
    //Ejemplo

    //€ = Alt + 0128
    console.log(Number.parseInt("42"));
    console.log(Number.parseInt("42€"));
    console.log(Number.parseInt("Num. 42"));
});