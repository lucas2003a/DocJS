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
    
    console.log("%cMétodos de un objeto","font-weight: bold;");
    console.log("");

    /*  Hasta ahora solo se ha creado objetos "genéricos", pero si dentro de una varible metemos una función (o una varible que tiene una función), tendríamo lo que se denomina
        un MÉTODO DE UN OBJETO.
    */

    const user = {
        name : "Lucas",
        talk: function (){return `Hola ${this.name}`;}
    }

    /*
        clave : valor

        Para crear una función dentro de un objeto, el nombre será la clave y el valor será la función misma y todo lo que realizará,
        entonces si queremos llamar a la función dentro de un objeto, necesitamos invocar el nombre de la clave.
    */

    console.log("user.name      : ", user.name);        // Lucas
    console.log("user.talk()    : ", user.talk());      // Hola Lucas
    console.log("");

    const user2 = {
        name: "Eduardo",
        age: 20,
        role: "Admin",
        exp: 90/100,
        info:function(){return `Hola ${this.name} esta es tu información:\n\n Edad: ${this.age}\n Rol: ${this.role}\n Experiencia: ${this.exp}`;}
    }
    console.log(user2.info());
    /*
        Hola Eduardo esta es tu información:

            Edad: 20
            Rol: Admin
            Experiencia: 0.9
    */

    console.log(Math);  //Composición del objeto Math:   Math {abs: ƒ, acos: ƒ, acosh: ƒ, asin: ƒ, asinh: ƒ, …}
    console.log("");
    
    //-----------------------------------------------------------------------------------------
    
    console.log("%cEl método toString()","font-weight: bold;");

    /*  Simplemente por generara una varible del tipo OBJECT, esta "hereda" una seria de métodos que existe en cualquier varible del tipo OBJECT. 
        Un buen ejemplo sería el método toString(), un método que intenta representar la información de un objeto en un string.
    */

    const testObject = {};
    console.log("testObject.toString()  : ", testObject.toString());        //[object Object]
    console.log("");

    /*  Esto ocurre tabién con otro tipo de datos que no son OBJECT, como NUMBER, BOOLEAN O REGEXP.
    */

    const number = 42;                                          //Tipo number
    console.log("number.toString()  : ",number.toString());     //Devuelve 42
    console.log("");

    const boolean = true;                                       //Tipo boolean
    console.log("boolean.toString() : ", boolean.toString());   //Devuelve true
    console.log("");

    const regexp = /.+/;                                        //Tipo RegExp
    console.log("regexp.toString()  : ", regexp.toString());    //Devuelve "/.+/"
    console.log("");


    /*  Esto debido que al crear una variable de detereminado tipo de dato, la varible será también de tipo OBJECT, ya que todas las varibles heredan este tipo de dato,
        por lo tanto nuestra varible tendrá:

            *Los métodos que implementaremos nosotros personalmente.
            *Los métodos heredados de su propio tipo de datos.
            *Los métodos heredados del tipo OBJECT.
    */

    const numero = 42.5;

    console.log("numero.toString()          : ",numero.toString());             //Devuelve 42.5 (Método de varibles de tipo OBJECT)
    console.log("numero.toLocaleString()    : ", numero.toLocaleString());      //Devuelve 42,5 o 42.5 dependiendo del entorno(Método de varibles de tipo OBJECT)
    console.log("numero.toFixed(3)          : ", numero.toFixed(3));            //Devuelve 42.500 (Método de varibles de tipo Number)
    console.log("");
    
    /*  toLocaleString() => Cumple con la misma función que toString(), la diferencia es que formatea el valor a ñas configuraciones del entorno local, es decir
        si en el entorno local estuviese configurado la como como separador de la parte decimal, formatearía el número a 42,5.
    */

    //-----------------------------------------------------------------------------------------
    
    console.log("%cCreando nuestro toString()","font-weight: bold;");
    console.log("");

    const player = {
        name : "Lucas",
        life : 4,
        totalLife : 6,
        toString : function(){
            return `${this.name} (${this.life}/${this.totalLife })`;
        } 
    }
    console.log(`Mi jugador es ${player.toString()}`);      //Mi jugador es Lucas (4/6)

    console.log("Mi jugador es " + player);                 //Mi jugador es Lucas (4/6)
    /*  Como el objeto player no es del tipo STRING, automáticamente llama al método .toString() y obtiene un string para reemplazarlo.
    */

    console.log("");    
});