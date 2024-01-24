document.addEventListener("DOMContentLoaded",()=>{
    console.log("%cEl tipo de dato Big int","font-weight: bold; text-transform: uppercase;")
    //Big int   =>  Representa valores muy grandes.

    console.log("%cConvertir a tipo de dato Big int.","font-weight: bold;");
    //Existen dos formas:
    //  1.-BigInt(number)    => Devuelve un Big int apartir de un number pasado como parametro.
            const numberBig = BigInt(5);
            console.log("BigInt(5)  : ",numberBig);     //5n
            console.log("");

    //  2.-number + n       =>  Simplemente, añadimos una n al final del número. Notación preferida. (obtenemos in Big int de todas formas).
            console.log("5n         : ",5n);            //5n
            console.log("");

    //-------------------------------------------------------------------------------------
    //Diferencias de presición entre un nmber y un int.
        //Ejemplo 1 - number:
                const number = 2**53;

                //Averiguamos el tipo de dato.
                console.log("Tipo de dato de number: ", number.constructor.name)         //Number    =>  Es un tipo de dato number.

                console.log("number         : ", number);           //9007199254740992
                console.log("number + 1:    : ", number + 1);       //9007199254740992
                console.log("number + 40    : ", number + 40);      //9007199254741032
                console.log("number + 5     : ", number + 5);       //9007199254740996
                console.log("");

                //2**53 da como resultado un Big int, pero al representarse con un number, ocasiona una pérdida de presición.

        //Ejemplo 2 - Big int:
                const number2 = 2n ** 53n;

                //Averiguamos el tipo de dato.
                console.log("Tipo de dato de number2: ", number2.constructor.name);

                console.log("number2            : ", number2);
                console.log("number2 + 1n       : ", number2 + 1n);
                console.log("number2 + 5n       : ", number2 + 5n);
                console.log("number2 + 40n      : ", number2 + 40n);
                console.log("");

                //2n **53n da como resultado un Big int, y al sumarse con un Big int, tenemos un resultado con presición.
    //-------------------------------------------------------------------------------------
    
    console.log("%cMezclando tipo de datos","font-weight: bold;");

    //const number3 = 5 + 5n;             
    //console.log(number3);             //Cannot mix BigInt and other types, use explicit conversions => NO SE PUEDEN MEZCLAR UN BIG INT Y UN NUMBER.

    const number4 = BigInt(5) + 5n;
    console.log("number4: ", number4);   //10n => Transforma el 5 a Big int y lo suma con 5n.

    const number5 = 5 + Number(5n);
    console.log("number5: ", number5); //10 => Transforma 5n a un NUMBER y lo suma con 5.

    console.log("");

    //-------------------------------------------------------------------------------------
    console.log("Métodos de Big int");

    //BigInt.asIntN(bits, bigNumber)    =>      Devuelve bigNumber(BIG INT) a un NUMBER en  bits (devuelve un entero con signo).
    
    //Con 2 bits con signo, puedes representar desde(-2 hatas 1).
    console.log("BigInt.asIntN(2, -3n)  : ",BigInt.asIntN(2, -3n));     //1n    =>      (Representa el -3 con 2 bits).
    console.log("BigInt.asIntN(2, -2n)  : ",BigInt.asIntN(2, -2n));     //-2n   =>      (Representa el -2 con 2 bits).          10
    console.log("BigInt.asIntN(2, -1n)  : ",BigInt.asIntN(2, -1n));     //-1n   =>      (Representa el -1 con 2 bits).          11
    console.log("BigInt.asIntN(2, 0n)   : ",BigInt.asIntN(2, 0n));      //0     =>      (Representa el 0 con 2 bits).           00
    console.log("BigInt.asIntN(2, 1n)   : ",BigInt.asIntN(2, 1n));      //1n    =>      (Representa el 1 con 2 bits).           01
    console.log("BigInt.asIntN(2, 2n)   : ",BigInt.asIntN(2, 2n));      //-2n   =>      (Representa el 2 con 2 bits).
    console.log("BigInt.asIntN(2, 3n)   : ",BigInt.asIntN(2, 3n));      //-1n   =>      (Representa el 3 con 2 bits).
    console.log("");
    
    //BigInt.asUintN(bits, bigNumber)    =>      Devuelve bigNumber(BIG INT) a un NUMBER en  bits (devuelve unu entero SIN signo).

    //Con 2 bits sin singo, puedes representar desde (0 hasta 4)
    console.log("BigInt.asUintN(2, -2n) : ",BigInt.asUintN(2, -2n));    //2     =>      (Representa el -2 con 2 bits).
    console.log("BigInt.asUintN(2, -1n) : ",BigInt.asUintN(2, -1n));    //1     =>      (Representa el -1 con 2 bits).
    console.log("BigInt.asUintN(2, 0n)  : ",BigInt.asUintN(2, 0n));     //0     =>      (Representa el 0 con 2 bits).           00
    console.log("BigInt.asUintN(2, 1n)  : ",BigInt.asUintN(2, 1n));     //1     =>      (Representa el 1 con 2 bits).           01
    console.log("BigInt.asUintN(2, 2n)  : ",BigInt.asUintN(2, 2n));     //2     =>      (Representa el 2 con 2 bits).           10
    console.log("BigInt.asUintN(2, 3n)  : ",BigInt.asUintN(2, 3n));     //3     =>      (Representa el 3 con 2 bits).           11
    console.log("BigInt.asUintN(2, 4n)  : ",BigInt.asUintN(2, 4n));     //0     =>      (Representa el 4 con 2 bits).           
    console.log("");

    //-------------------------------------------------------------------------------------
    console.log("");
    console.log("");

    //-------------------------------------------------------------------------------------
    console.log("");
    console.log("");

    //-------------------------------------------------------------------------------------
    console.log("");
    console.log("");

    //-------------------------------------------------------------------------------------
    console.log("");
    console.log("");

    //-------------------------------------------------------------------------------------

});