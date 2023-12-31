document.addEventListener("DOMContentLoaded", () => {
    console.log("Tipos de datos")

    var number  = 44;        //number
    var text    = "Lucas";   //string
    var boolean = true;      //boolean
    var notDefined;          //undefined
    var function1 = function list(){}; //function

    //MOSTRAR EL TIPO DE DATO
    //1.- typeof()
    console.log("Usando typeof()");  
    console.log("Tipo de dato de la varible number");
    console.log(typeof number);

    console.log("Tipo de dato de la varible text");
    console.log(typeof text);

    console.log("Tipo de dato de la varible boolean");
    console.log(typeof boolean);

    console.log("Tipo de dato de la varible notDefined");
    console.log(typeof notDefined);

    console.log("Tipo de dato de la varible function1");
    console.log(typeof function1);

    // typeof = nos sirve para mostrar el tipo de dato(number, string, boolean, undefined, object, function, etc), pero en casos mas complejos no nos sirve, ya que todo los pasara como object.

    //2.- constructor.name
    console.log("Usando constructor.name");
    console.log(number.constructor.name);
    console.log(text.constructor.name);
    console.log(boolean.constructor.name);
    console.log(notDefined.constructor.name); //ERROR
    console.log(function1.constructor.name);

    // constructor.name, solo puede ser usado en las variables que estén definidas(no undefined) y solo en ES2015(ECMAScript) o superiores
});