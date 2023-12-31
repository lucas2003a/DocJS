document.addEventListener("DOMContentLoaded",()=>{

    console.log("%cOperadores avanzados","font-weight:bold; text-transform:uppercase;"); //%c = permite aplicar estilos css
    console.log(" ");

    console.log(`%cOperador de concatenación +`,"font-weight:bold;");

    //Cuando se trata de datos tipos number, el operador "+" funciona como operador de suma
    //Cuando no son datos de tipo number, el operador "+" funciona como operador de concatenación
    //Cuando los miembros son del tipo number, se realiza una suma
    //Cuando uno de los miembros es un tipo string, se realiza la concatenación
    console.log(2+2);       //4
    console.log("2"+"2");   //22
    console.log("2"+2);     //22
    console.log(2+"2");     //22
    console.log("a"+2);     //a2
   
    console.log(" ");
    console.log("%cOperador de suma unaria","font-weight:bold;");
    
    //---------------------------------------------
    
    //Cuando solo existe un miembro y el operador "+" se le antepone, esto fuerza a cambiar el tipo de dato a un number.
    console.log(+5);    //5     => Ya es un tipo de dato number positivo, por eso no hay cambios.
    console.log(+-5);   //-5    => Ya es un tipo de dato number negativo, por eso mo hay cambios.
    console.log(+"5");  //5     => Es un tipo de dato string, pero el texto es un número positivo, asi que se transforma en 5.
    console.log(+"-5"); //-5    => Es un tipo de dato string, pero el texto es un número negativo, asi que se transforma en -5.
    console.log(+"a");  //NaN (Not a Number) => Es un tipo de dato string, pero el texto no es un número sino un letra.por lo tanto al intentar transformarlo a un number obtendremos un NaN en la consola, ya que esto quiere decir que "No es un número".

    //Metodo para comprobar si el dato es un número o no
    console.log(isNaN("hola")); //true = si es un tipo de dato que no es un número.
    console.log(isNaN(123));    //false = si es un tipo de dato numérico.

    //**IMPORTANTE**
    //Los datos string y number tienen colores distintos en la consola, es para que los puedas identificar.
    //En Edge los string se muestran de color negro mientras los number se muestran en color azul.

    //---------------------------------------------

    console.log(" "); 
    console.log("%cOperador && (AND lógico)","font-weight:bold;");
    /* 
    Los siguientes datos, todos devuelven FALSE, porque no contienen nada:
        0           = false
        undefined   = false
        null        = false
        false       = false
        
    forma de evaluar del operador &&
        -Si el primer miembro es verdadero, devuelve el segundo miembro
        -Si el primer miembro es falso, devuelve el primer miembro

        a && b;
        -Se puede entender como un if-else:

        if(a){
            return b
        }else{
            return a
        }
    */
    console.log(0 && undefined);    //0 es false, por lo tanto devuelve 0
    console.log(undefined && 0);    //undefined es false, por lo tanto devuelve undefined
    console.log(55 && null);        //55 es verdadero al ser distinto de 0, por lo tanto devuelve null
    console.log(null && 55);        //null es false, por lo tanto devuelve null
    console.log(44 && 20);          //44 es verdadero por lo tanto devuelve 20
    console.log(45 && "Ok");        //45 es verdadero por lo tanto devuelve Ok
    console.log(false && "Ok");     //false se evalua como false, por lo tanto devuelve false

    console.log(" "); 

    //---------------------------------------------

    console.log("%cOperador && (AND lógico) como if-else","font-weight:bold;"); 
    //Con el operador && vemos que trabaja coom un if-else, por eso podriamos tambien crear un if más compacto de la diguiente forma
    //Esta forma es un poco primitiva ya que LIMITA la respuesta en caso que el primer miembro sea verdadero o falso

    const doTask = () => "Ok!";
    //Usamos un function arrow(función de flechas)
    //Cuando en la función solamente se usa un return, se puede omitir como vemos en el ejemplo anterior

    const isCorrect = 0;
    
    console.log(isCorrect && doTask());
    //Si isCorrect es false, devuelve el valor de isCorrect, pero sio es verdadero, devuelve la función doTask().
    console.log(" "); 

    //---------------------------------------------

    console.log("%cOperador ternario (?)","font-weight:bold;"); 
    //Es una forma mucho mas compacta y completa de realizar uun if-else, a comparación de la forma anterior

    const resultado = 0 > 1 ? "El número es mayor a 1" : "El número es menor a 1";
    console.log(resultado);

    
    const otroResultado = isCorrect != 0 ? "El número no es 0" : "El número es 0";
    console.log(otroResultado);

    /*
    Estructura del operador ternário:
        
        condición ? repuesta si la condición es TRUE :  respuesta si la condición es FALSE;
    */
    console.log(" "); 

    console.log("%cOperador ternario (?) remplazo por if-else","font-weight:bold;");

    if(0 > 1){
        console.log("El número es mayor a 1");
    }else{
        console.log("El número es menor a 1");
    }

    console.log(" "); 
    //---------------------------------------------

    console.log("%cOperador ternario con multiples respuestas","font-weight:bold;"); 
    /*
    Si se quiere dar mutiples respuestas a una condición se puede seguir esta estructura:
        
        condición ? repuesta si la condición es TRUE : 
                    condición2 ? repuesta si la condición es TRUE :
                    condición3 ? repuesta si la condición es TRUE : 
                    ....... 
                    respuesta si la condición es FALSE;
    
    */

    const cadena = "Hola Lucas como te encuentas, este este es un uso del operador ternario con multiples respuestas y condiciones.";

    console.log(cadena);

    const rptaCadena =  cadena.length == 0 ? "La cadena está vacía." :
                        cadena.length <= 4 ? `La cadena es muy corta, tiene ${cadena.length} dígitos.`:
                        cadena.length <= 10 ? `La cadena es regularmente larga, sus digitos son ${cadena.length}.`:
                        cadena.length <= 15 ? `La cadena escrita es larga, sus dígitos son ${cadena.length}.` :
                        `La cadena tiene muchos dígitos, son ${cadena.length}.`;

    console.log(rptaCadena); 
    console.log(" "); 

    //---------------------------------------------

    console.log("%cOperador ternario con multiples respuestas - reemplazo por if-else if-else","font-weight:bold;"); //%c = permite aplicar estilos css

    if(cadena.length == 0){
        console.log("La cadena está vacía.");
    }else if(cadena.length <= 4){
        console.log(`La cadena es muy corta, tiene ${cadena.length} dígitos.`);
    }else if(cadena.length <= 10){
        console.log(`La cadena es regularmente larga, sus digitos son ${cadena.length}.`);
    }else if(cadena.length <= 15){
        console.log(`La cadena escrita es larga, sus dígitos son ${cadena.length}.`);
    }else{
        console.log(`La cadena tiene muchos dígitos, son ${cadena.length}.`);
    }

    //Usando if-else(varias veces), hará que evalúe todas las ocndiciones, lo cual seria mas lento al evaluar
    //Usando else if, asegura que solo evalue una de esas condiciones.

    console.log(" "); 

    //---------------------------------------------

    console.log("%cOperador OR lógico (||)","font-weight: bold;")

    /* 
    -Tanto en el operador || y && ambos consideran los datos como false cuando nop contienen nada(revisa los comentarios del operador &&)
    -Forma de Evaluar del operador ||:
        -Si el primer miembro es verdadero, devuelve el valor del primere miembro
        -Si el primer miembro es falso, devuelve el valor del segundo miembro

    a || b;

    -Al igual que el operador && puedes interpretarlo como un if-else, de esta manera:

        if(a){
            return a;
        }else{
            return b;
        }
    */

    console.log(false   || false)     //false   => el primer miembro es falso, por lo tanto devuelve el valor del segundo miembro que es "false".
    console.log(true    || false)     //true    => el primer miembro es verdadero, por lo tanto devuelve el valor del primer miembro que es "true".
    console.log(false   || true)      //true    => el primer miembro es falso, por lo tanto de vuelve el valor del segundo miembro que es "true".
    console.log(true    || true)      //true    => el primer miembro es verdadero, por lo tanto devuelve el valor del primer miembro que es "true".

    console.log(" "); 
    
    //Ejemplo
    const name = "";

    //Si la variable name no se encuentra definida devuelve "Unkown name".
    const userName =    name    || "unkwnown name";   

    console.log(userName); 
    console.log(" ");
    
    console.log("Lucas" || "Unknown name");         //Lucas
    console.log(null    || "Unknown name");         //Unknown name
    console.log(false   || "Unknown name");         //Unknown name
    console.log(undefined   || "Unknown name");     //Unknown name
    console.log(0   || "Unknown name");             //Unknown name
    
    console.log(" ");

    //Puede usarse como un if-else muy compacto y comprimido, así como se vió con el operador &&

    const saludar = () => "Hola!!";

    console.log(name || saludar());

    console.log("");

    //---------------------------------------------

    console.log("%cOperador Nullish colaescing (unión nula)- ??","font-weight: bold;");

    //Trabaja de la misma forma o con la misma lógica que el operador ||
    //Su principal diferencia con el operador ||, es que el operador ?? SOLO trabaja con los valor falsy NULL y UNDEFINED.

    //Ejemplos:
    console.log(42  || 50);             //42 => No hay cambios ya que el valor del primer miembro(42) es verdadero.
    console.log(42  ?? 50);             //42 => No hay cambios ya que el valor del primer miembro(42) es verdadero.
    console.log(false   || 50);         //50 => Devuelve el valor del segundo miembro(50) ya que el valor del primer miembro es falso.
    console.log(false   ?? 50);         //false => Devuelve el valor del primer miembro(false) ya que el operador ?? solo considera como falso a NULL y UNDEFINED.
    console.log(0   || 50);             //50 => Devuelve el valor del segundo miembro(50).
    console.log(0   ?? 50);             //0 => Devuelve 0 ya que el operador ?? solo considera como falso a NULL y UNDEFINED.
    console.log(null    || 50);         //50 => Devuelve el valor del segundo miembro(50) ya que NULL es considerado como false por el operador ||.
    console.log(null    ?? 50);         //50 => Devuelve el valor del segundo miembro(50) ya que NULL es considerado como false por el operador ??.
    console.log(undefined   || 50);     //50 => Devuelve el valor del segundo miembro(50) ya que UNDEFNINED es considerado como false por el operador ||.
    console.log(undefined   ?? 50);     //50 => Devuelve el valor del segundo miembro(50) ya que UNDEFNINED es considerado como false por el operador ??.
    console.log("");

    //Ejemplo
    const data = {ammo: 0};
    console.log(data);

    console.log(data.ammo || "Sin balas")   //Sin balas
    console.log(data.ammo ?? "Sin balas")   //0
    console.log("");

    const data2 = {};   //UNDEFINED
    console.log(data2);

    console.log(data2.ammo || "Sin balas")   //Sin balas
    console.log(data2.ammo ?? "Sin balas")   //Sin balas
    console.log("");

    //---------------------------------------------

    console.log("%cAsignación lógica nula(??=)","font-weigth: bold;");
    /*
    -Forma de trabajar del operador ??=  :

        a ??= b;
        -Evalua si a es NULL o UNDEFINED.
        -Si es asi, asigana el valor de b para a.
        -De lo contrario a, mantiene su valor.
    
    Forma de leerl como if-else:

    if(a == null || a == undefined){
        a = b;
    }
    */
    let pm;
    let sm  = 50
    console.log("El Valor de la variable pm es: ",pm);
    console.log("El valor de la variable sm es :",sm);

    pm ??= sm;

    console.log("El valor actual de la variable pm es: ",pm);
    
    console.log("");
    //Ejemplo

    const resetConfig = (data) =>{
        data.life   ??= 100;    //Si data.life es NULL o UNDEFINED le asignará como valor 100, de lo contrario, mantendrá el valor asignado.
        data.level  ??= 1;      //Si data.live es NULL o UNDEFINED les asignará como valor 1, de lo contrario, mantendrá el valor asignado.

        return data;
    }

    console.log(resetConfig({life: 15, level: 2}))      //{life: 15, level: 2}
    console.log(resetConfig({life: null, level: 3}))    //{life: 100, level: 3}
    console.log(resetConfig({}))                        //{life: 100, level: 1}
    console.log("");

    //---------------------------------------------

    console.log("%cOperador de encadenamiento opcional(optional chaining)- propiedad?","font-weight: bold;");

    //Permite acceder a la porpieda(atributo) de un objeto aunque esta no exista
    //Solo hay que colocar el símbolo ? depues del nombre de la propiedad a la que se intenta acceder.

    const user = {
        name: "Lucas",
        role: "Developper",
        attrs:{
            life: 100,
            power: 50
        }
    }

    console.log("user.attrs.power: ",user.attrs.power);
    console.log("user.attrs.life: ",user.attrs.life);
    //console.log("user.colleges.names",user.colleges.names);       //Uncaught TypeError: Cannot read properties of undefined (reading 'names').
    console.log(user.colleges && user.colleges.names)               //Forma de evaluar primer si existe o es estadefinida la propiedad en el objeto, el resultado es UNDEFINED.
    console.log("user.colleges?.names: ",user.colleges?.names);     //undefined.
    console.log("");

    //---------------------------------------------

    console.log("%cOperador logico NOT (!)","font-weight: bold;");
    //El operador lógico NOT(!), es el operador de negación, es decir invierte el valor booleano de la variable.
    //Es decir si el valor de la  variable es true, al negarla, será  false.
    //Solo es necesario anteponer el operador "!" antes de la variable.

    console.log(!true);      //false    => Niega el valor true y lo vulve false.
    console.log(!false);     //true     => Niega el valor false y lo vuelve true
    console.log(!!true);     //true     => Niega el valor de true 2 veces y lo convierte en true = !!true => !false => true//.
    console.log(!!false);    //false    => Niega el valor de false 2 veces y lo convierte en false = !!false => !true => false//.
    console.log(!!!true);    //false    => Niega el valor de true 3 veces lo que da como resultado false = !!!true => !!false => !true => false//.
    console.log("");

    console.log(!44);               //false     => 44 es un valor numérico, pero a la vez es true y al negarlo, se convierte en false.
    console.log(!0);                //true      => 0 es un valor numérico, pero a la vez es false y al negarlo, se convierte en true.
    console.log(!"");               //true      => "" es un valor de tipo string, pero a la vez es false y al negarlo, se convierte en true.
    console.log(!(10 || 23));       //false     => El resultado de la operación 10 || 23, es 10 (un valor de tipo number), pero a la vez es true y al negarlo, se convierte en false.
    console.log("");

    //---------------------------------------------

    console.log("%cOperador coma (,)","font-weight: bold;");
    //Sirve para poder realizar multiples operaciones en una misma línea.

    //Sin operador coma
    /* const a = 5;
    const b = 10; */

    //Con operador coma
    const a = 5, b = 10;
    console.log(a,b);

    console.log("");

    console.log(1+2, 1+1, 3+3);
    console.log(c = 1+2, d = 1+1, e = 3+3);
    console.log("");

    //alert("Hello"),alert("Hi"),alert("Bye"), "42";
    console.log("");
    //---------------------------------------------
    console.log("");
    console.log("");
    //---------------------------------------------
    console.log("");
    console.log("");
    //---------------------------------------------
    console.log("");
    console.log("");

});
