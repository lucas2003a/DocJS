document.addEventListener("DOMContentLoaded",()=>{

    console.log("%c¿Qué es un JSON?","font-weight: bold;");
    console.log("");

    const userF = {
        "name": "Manz",
        "life": 3,
        "totalLife": 6,
        "power": 10,
        "dead": false,
        "props": ["invisibility", "coding", "happymood"],
        "senses": {
          "vision": 50,
          "audition": 75,
          "taste": 40,
          "touch": 80
        }
      }

    /*          
        J   =>  Java
        S   =>  Script
        O   =>  Object
        N   =>  Notación

        CARACTERÍSTICAS:

        *   Las propiedaddes del objeto debe de estar entrecommilladas "comillas dobles".
        *   Los textos STRING deben estar entre comillados "comillas dobles".
        *   Sólo se pueden almacenar tipos como STRING, NUMBER, OBJECT,ARRAY BOOLEAN o NULL.
        *   Tipos de datos como FUNCTION, DATE, REGEXP u otros, no es posible almacenarlos en un JSON.
        *   Tampoco se puede añadir comentarios en un JSON.
    */
    
    console.log("");

//-----------------------------------------------------------------------------------------------

console.log("%cCómo utilizar un JSON","font-weight: bold;");

const user = {
    name: "Lucas",
    life: 99
};  

//Parseamos un string a JSON

const str = "Hola mundo";
//const parse = JSON.parse(str);
//console.log(parse);     //Uncaught SyntaxError: Unexpected token 'H', "Hola mundo" is not valid JSON
//El error se rebela por la varible str, ya que guarda un string que no es un objeto,

const str1 = `{"saludo":"Hola", "hacia": "el mundo","despedida": "chau"}`;
const parse1 = JSON.parse(str1);
console.log(parse1);    

//-----------------------------------------------------------------------------------------------
console.log("%cConvertir JSON a objeto","font-weight: bold;");
console.log("");

//-----------------------------------------------------------------------------------------------
console.log("");
console.log("");

//-----------------------------------------------------------------------------------------------
console.log("");
console.log("");

//-----------------------------------------------------------------------------------------------
console.log("");
console.log("");

//-----------------------------------------------------------------------------------------------
console.log("");
console.log("");

//-----------------------------------------------------------------------------------------------
console.log("");
console.log("");

//-----------------------------------------------------------------------------------------------
console.log("");
console.log("");

//-----------------------------------------------------------------------------------------------
});