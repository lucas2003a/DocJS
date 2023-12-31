document.addEventListener("DOMContentLoaded", () => {

    console.log("Usos de las funciones");
    console.log("Tipos");
    console.log(" ");

    /* ------------------------------------------ */

    console.log("Función por declaración");

    function saludar(){
        return "Hola";
    }

    saludar();
    console.log(saludar());
    console.log(typeof saludar);
    console.log(" ");

    /* ------------------------------------------ */

    console.log("Función por expresión");

    // El segundo nombre de la función (saludar) se omite, es muy redundante
    const saludo = function saludar(){
        return "Hola";
    }

    saludo(); //Se invoca por el nombre de la constante
    console.log(saludo());
    console.log(typeof saludo);
    console.log(" ");

    /* ------------------------------------------ */

    console.log("Función como objeto");

    const saludar2 = new Function("return 'Hola'");

    saludar2();
    console.log(saludar2());
    console.log(typeof saludar2);
    console.log(" ");

    /* ------------------------------------------ */

    console.log("Función anónima");

    const saludar3 = function(){
        return "Hola";
    }
    saludar3();
    console.log(saludar3());
    console.log(typeof saludar3);
    console.log(" ");

    /* ------------------------------------------ */

    console.log("Función autoejecutale"); //El punto y como si es importante en Javascript

    //Función auntoejecutable
    (function (){
        console.log("Hola con función autojecutable");
    })();

    //Función auntoejecutable con parámetros

    (function(name){
        console.log(`Hola ${name}😅!!`); //Se puede formatear con ``
    })("Lucas");

    console.log(" ");

    //Función autoejecutable en una variable

    const f = (function(name){
        return `Hola ${name}`;
    })("Eduardo")

    f;
    console.log(f);
    console.log(typeof f);

    console.log(" ");

    /* ------------------------------------------ */

    console.log("Arrow function/ función de flechas");

    const func = () => "Función de flechas"; //Al ser una línea se puede omitir las {} y por defecto o de manera explícita se estaria usando un  return
    const func2 = () =>{return "Función de flechas";}
    const func3 = nombre => `Hola ${nombre}`; //Al ser solo un parámetro, se puedo obviar los ()
    const func4 = (nombre) => `Hola ${nombre}`;
    const func5 = (a,b) => `La suma es ${a + b}`;
    const func6 = (a,b) => ({nombre:a,edad:b}) //Devuelve un objeto

    console.log(func());
    console.log(func2());
    console.log(func3("Lucas"));
    console.log(func4("Adriana"));
    console.log(func5(5,6));
    console.log(func6("Adriana",19));

    console.log(" ");

    /* ------------------------------------------ */

    console.log("Ámbito léxico de this(fuincion de primer nivel)");

    const global1 = function(){
        console.log(this);
    }

    const global2 = function(){
        console.log(this);
    }

    global1();
    global2();

    console.log(" ");
    
    console.log("Ámbito léxico de this(fuincion de flecha)");

    padre = {
        a: function(){
            console.log(this);
        },
        b:() =>{
            console.log(this);
        },
    };

    console.log(padre.a());
    console.log(padre.b());

    console.log(" ");
    /* ------------------------------------------ */

    console.log("Callbacks /llamadas a funciones(retrollamadas)");

    //fb = function b
    const fb = function (){
        console.log("Función B ejecutada");
    }

    //fa = function a
    const fa = function (callback){
        callback();
    }

    fa(fb);

    console.log(" ");

    /* ------------------------------------------ */
    // Ejemplo 1

    const fd = function(){
        console.log("Función d ejecutada");
    }

    const fError = function(){
        console.error("Error");
    }

    const fc = function(callback,callbackError){

        const n = ~~(Math.random()* 5); //~~ redonde a un numero entero, Math.random() = genera un numero entre 0 y 1(0.00012,0.26666 hasta 0.999) y lo multiplica por 5 (*5) que daria un rango entre 0.00001.... hasta 4.999...... pero siendo redondeado "~~" seria solo 0, 1, 2, 3, 4, 5. 
        if (n > 2) callback();
        else callbackError();

    }

    //Forma 1 de invocar funciones como parametros
    //Creamos fuciones anónimas y las pasamos como parémetros
    fc(fd,fError); //Si ejecutamos varias veces, algunas ejcutarna la funnción fd y otras fError
    console.log(" ");

    //Forma 2 de invocar funciones como parametros
    //Invocación de las funciones de manera directa como parámetros

    fc(
        function(){
            console.log("Función d ejecutada");
        },
        function(){
            console.error("Error");
        }
    )

    /* ------------------------------------------ */
    console.log("Clausuras")
    //Contienen dentro de si funciones que continen variables

    const inrc = (function(){
        let num = 0;

        return function(){
            num++;
            return num;
        }
    })()

    //inrc();
    console.log(inrc());
    //inrc();
    console.log(inrc());
    //inrc();
    console.log(inrc());
})