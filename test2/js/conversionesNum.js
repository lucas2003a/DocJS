document.addEventListener("DOMContentLoaded",()=>{
    console.log("%cconversiones numéricas","font-weight: bold; text-transform: uppercase;");
    console.log("");

    //Para realizar converisones lo ideal es usar funciones de parseo.
    //Parsear: Quiere decir o hace referencia al proceso de analizar o intrepretar datos de una cadena de caracteres (texto) y convertirlos a un formato específico.
    /*
    Convertir a un número entero:
        parseInt(texto)         => Convierte el texto ingresado a un entero.
        parseInt(texto, radix)  => radix indica la base (binario, decimal, octal, etc) en que se encuentra el texto y convierte el texto ingresado a un entero  
    */
    //Ejemplo

    console.log("%cNúmeros enteros","font-weight: bold;");
    //€ = Alt + 0128
    console.log(Number.parseInt("42"));         //42
    console.log(Number.parseInt("42€"));        //42    => Considera los números hasta el caracter que no es numérico (se pude decir que lee desde  el incio y solo considera los numeros que lea).
    console.log(Number.parseInt("Num. 42"));    //42    => Al comenzar con un caracter no numérico, descarte todo rápidamente y muestra como resultado un NaN.
    console.log(Number.parseInt("A"));          //NaN   => Al ser "A" un caracter del tipo string y quererlo transformar a un int, se convierte en un NaN ya que no se puede representar como un número.
    console.log(Number.parseInt(""));           //NaN   => Al quere convertir "" a un int, se convierte en un NaN ya que no se puede respresentar como un número.   
    console.log(Number.parseInt(45.5));         //42    => Descarta los decimales.
    console.log(Number.parseInt("88.99€"));     //88    => Descarta todos los demcimales y los caracteres.
    console.log(Number.parseInt("Num. 33.5"));  //NaN   => Inica con un caracter del tipo string, por lo cual descarta todo.
    console.log("");

    //-----------------------------------------------

    /* 
    Convertr a un número decimal:
        parseFloat(texto)         => Convierte el texto ingresado a un decimal.
        parseFloat(texto, radix)  => radix indica la base (binario, decimal, octal, etc) en que se encuentra el texto y convierte el texto ingresado a un decimal.  
    */
    console.log("%cNúmeros decimales","font-weight: bold;");
    
    console.log(Number.parseFloat("42.5"));             //42.5  => Conserva los decimales.
    console.log(Number.parseFloat("42"));               //42    => 42 es un número entero, por lo tanto la convierte en un entero.
    console.log(Number.parseFloat("88.99€"));           //88.99 => Conserva los decimales hasta el caracter que no es numérico.
    console.log(Number.parseFloat("42€"));              //42    => Convierte 42 a un número entero hasta el caracter no numérico.
    console.log(Number.parseFloat("Num. 33.5"));        //NaN   => Inicia con un caracter no numérico por lo tanto descarta todo.
    console.log("");

    //-----------------------------------------------

    console.log("%cBases numéricas","font-weight: bold;");
    //Los humano solemos usar para contar una BASE NUMÉRICA DECIMAL, es decir, contamos desde el 0 al 9, es decir 10 números, sin embargo aun existe otras bases numéricas.

    let baseBinaria   = [];
    let baseOctal     = [];
    let baseDecimal   = [];
    let baseHexadecimal = [];

    for(i = 1; i < 3; i++){
        //baseBinaria += 4;     //Resultado: baseBinaria[1, 24] => en vez de añadir un elemento al array, lo concatena.
        //baseBinaria.push(4);  //Resultado: baseBinaria[1, 2, 4] => añade un elemento al array, lo concatena.
        baseBinaria.push(i);    
    }

    for(i = 0; i < 8; i++){  //Contiene 7 elementos, inicia en 0 y termina en 7, se van incrementando
        baseOctal.push(i);  //Agrega números del 0 al 7
    }
    
    for(i = 0; i < 10; i++){
        baseDecimal.push(i);
    }

    for(i = 0; i < 16; i++){ //Contiene 16 elementos, inicia en 0 y termina en 16, se van incrementando

        //Cuando i sea menor a 10 (0 - 9), pero cuando sea mayor, agregará las letras de la A hasta la F
        if(i < 10){
            baseHexadecimal.push(i); //Agrega números del 0 al 9
        }else{
            baseHexadecimal.push(String.fromCharCode(65 + i -10)); //65 + i -10 es usado para hallar la codificación de las letras del 65 al 71 = de "A" a "F"
        }
    }

    //console.log(baseBinaria);
    console.log(`Dígitos de la base binaria: ${baseBinaria.join(",")}`);            //Base binaria  =>   1, 2.
    console.log(`Dígitos de la base octal:  ${baseOctal.join(",")}`);               //Base octal    =>  0, 1, 2, 3, 4, 5, 6, 7.
    console.log(`Dígitos de la base decimal: ${baseDecimal.join(",")}`);            //Base decimal  =>  0, 1, 2, 3, 4, 5, 6, 7, 8, 9.
    console.log(`Dígitos de la base Hexadecimal: ${baseHexadecimal.join(",")}`);    //Base hexadecimal  => 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F.
    console.log("");
    
    //-----------------------------------------------
    console.log("%cConvertir a base decimal (hacia un entero) ","font-weight: bold;");

    console.log(Number.parseInt("11101", 2));   //29    =>  El 2 indica BASE BINARIA    =>  11101 en binario es 29 en base decimal.
    console.log(Number.parseInt("31", 8));      //25    =>  El 8 indica BASE OCTAL      =>  31 en octal es 25 en base decimal.
    console.log(Number.parseInt("31", 10));     //31    =>  Aunque se sobreentiende que todo lo estamos pasando a BASE DECIMAL, el 10 indica BASE DECIMAL   => Eso da 31 mismo.
    console.log(Number.parseInt("FF", 16));     //255   =>  El 16 indica BASE HEXADECIMAL => FF en hexadecimal es 255 en base decimal.
    console.log("");
    /* No puedes hacer esto: 
        console.log(Number.parseFloat("1010", 2)); 
    
        parseFloat solo recive un argumento a diferencia de parseInt().
    */
    //-----------------------------------------------

    console.log("%c0b, 0o, 0x","font-weight: bold;");
    /*
    Otra forma de relizar conversiones desde una base binaria, octal o hexadeciamal, a una base decimal.

        0b  => a BASE BINARIA
        0o  => a BASE OCTAL
        0x  => a BASE HEXADECIMAL
    */
    console.log(0b11101);   //29    => se compone de 0b y 11101 => 0b indica que 11101 se encuantra en base binaria, y se transforma a base decimal.
    console.log(0o31);      //25    => se compone de 0o y 31    => 0o indica que 31 se encuantra en base octal, y se transforma a base decimal.
    console.log(0xFF);      //255   => se compone de 0x y FF    => 0x indica que FF se encuantra en base hexadecimal, y se transforma a base decimal.
    console.log("");

    //-----------------------------------------------

    console.log("%cConvertir desde base decimal","font-weight: bold;");
    console.log((16).toString());           //"16"      => Lo transforma a un string.
    console.log((42.5).toString());         //"42.5"    => Lo transforma a un string.
    console.log((26).toString(2));          //"11010"   => 26 es transoformado a base binaria ya que dentro de toString(2), el 2 indica BASE BINARIA.
    console.log((80).toString(8));          //"120"     => 80 es transoformado a base octal ya que dentro de toString(8), el 8 indica BASE OCTAL.
    console.log((245123).toString(16));     //"3bd83"   => 245123 es transoformado a base hexadecimal ya que dentro de toString(16), el 16 indica BASE HEXADECIMAL.
    console.log("");
});