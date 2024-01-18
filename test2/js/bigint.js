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
    const number = 2**53;

    //Averiguamos el tipo de dato
    console.log("Tipo de dato de number: ",number.constructor.name)         //Number    =>  Es un tipo de dato number.

    console.log("number         : ", number);           //9007199254740992
    console.log("number + 1:    : ", number + 1);       //9007199254740992
    console.log("number + 5     : ", number + 5);       //9007199254740996
    console.log("number + 40    : ", number + 40);      //9007199254741032

    //2**53 se mantiene dentro de lo límites de MAX_SAFE, por lo tanto si un number exediera ese límite, ocasionaria un perdida de presición.
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
    console.log("");
    console.log("");

    //-------------------------------------------------------------------------------------
    console.log("");
    console.log("");

    //-------------------------------------------------------------------------------------

});