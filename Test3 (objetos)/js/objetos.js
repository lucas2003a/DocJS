document.addEventListener("DOMContentLoaded",()=>{
    
    console.log("%c¿Qué son los objetos?","font-weight: bold; text-transform: uppercase;");
    console.log("");

    //-----------------------------------------------------------------------------------------

    console.log("%cFormas de crear un objeto en JavaScript","font-weight: bold;");
    console.log("");    

    //Forma 1:
    const objeto = new Object();
    console.log("typeof objeto  : ", typeof objeto);    //object
    console.log(`typeof objeto == "object"  : `, typeof objeto == "object");             //true
    console.log("");

    //Forma 2:
    const objeto1 = {};
    console.log("typeof objeto1 : ", typeof objeto1);   //object
    console.log(`typeof objeto1 == "object"  : `, typeof objeto1 == "object");             //true
    console.log("");

    console.log("");

    //-----------------------------------------------------------------------------------------

    console.log("%cDeclaración de un objeto","font-weight: bold;");

    const objeto3 = {};     //Esto es un objeto vacío
    console.log(objeto3);      

    //Objeto con variables con información
    const objeto4 = {
        name: "Lucas",
        life: 99,
        power: 10
    };
    console.log(objeto4)

    console.log("");
    
    //-----------------------------------------------------------------------------------------

    console.log("%cPropiedades de un objeto","font-weight: bold;");

    //Notación con puntos
    console.log("objeto4.life   : ", objeto4.name);     //Lucas
    console.log("objeto4.name   : ", objeto4.life);     //99     
    console.log("objeto4.power  : ", objeto4.power);    //10
    console.log("");

    //Notación con corchetes
    console.log(`objeto4["name"]    : `, objeto4["name"]);
    console.log(`objeto4["life"]    : `, objeto4["life"]);
    console.log(`objeto4["power"]   : `, objeto4["power"]);
    console.log("");

    /*  Esta ultima notación es conocida en otros lenguajes como "array asociativos" o "diccionarios", para algunos programadores resulta confuso utilizar esta notación por eso ultimo mencionado.
        Pero en javaScript se mezclan estos conceptos en uno, pero en otros lenguajes son consas distintas.
    */
    
    //-----------------------------------------------------------------------------------------
    
    console.log("%cAñadir propiedades","font-weight: bold;");
    console.log("");
    
    //Añadiendo propiedades a un objeto

    //Forma 1: atravéz de notación con puntos
    const emptyObject = {}      //Objeto vacío

    emptyObject.name = "Daniel";
    emptyObject.life = 100;
    emptyObject.power = 50;

    console.log("emptyObject    : ", emptyObject);
    console.log("");
    //Forma 2: atravéz de notación con corchetes
    const emptyObject1 = {};

    emptyObject1["name"] = "Samuel";
    emptyObject1["life"] = 78;
    emptyObject1["power"] = 50,

    console.log("emptyObject1   : ", emptyObject1);
    console.log("");
    
    //-----------------------------------------------------------------------------------------
    
    console.log("");
    console.log("");
    
    //-----------------------------------------------------------------------------------------
    
    console.log("");
    console.log("");
    
    //-----------------------------------------------------------------------------------------
    
    console.log("");
    console.log("");
    
    //-----------------------------------------------------------------------------------------
    
    console.log("");
    console.log("");
    
    //-----------------------------------------------------------------------------------------
    
    console.log("");
    console.log("");
    
    //-----------------------------------------------------------------------------------------
    
    console.log("");
    console.log("");
    
    //-----------------------------------------------------------------------------------------

});