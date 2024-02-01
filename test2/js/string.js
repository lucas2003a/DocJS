document.addEventListener("DOMContentLoaded",()=>{

    console.log("%c¿Qué es un string?","font-weight:bold; text-transform: uppercase;");
    console.log("");

    /*Los Strings son un tipo de dato básico (PRIMITIVO),  y conmo tal es más sencillo utilizar los literales qye la notación que utiliza la palbra NEW, para englobar los textos, se pueden utilizar los siguientes tipos de comiillas:

        ""  => Comillas dobles  => Para cadenas de texto.
        ''  => Comillas simples => Para textos literales (chart).
        ``  => Comillas invertidas (BACKTICKS)  => Para interpolación de variables.

        **IMPORTANTE**
            En javaScript no se hacen distinciones entre "" y ''.
    */

    //-------------------------------------------------------------------------------

    //Para crear strings en javaScript, tenemos dos notaciones o formas:
    console.log("%cNotación literal(preferida)","font-weight: bold;");

    const texto = "Hola a todos", mensaje = "Otro mensaje";

    console.log("texto: ", texto);
    console.log("mensaje: ", mensaje);
    console.log("");

    console.log("%cNotación mediante objeto","font-weight: bold;");

    const texto2 = new String("Hola a todos"), mensaje2 = new String("Otro mensaje" );

    console.log("texto2: ", texto2);
    console.log("mensaje2: ", mensaje2);
    console.log("");

    console.log("texto2.valueOf(): ", texto2.valueOf());
    console.log("mensaje2.valueOf(): ", mensaje2.valueOf());
    console.log("");

    //-------------------------------------------------------------------------------
    console.log("%cPropiedades de un String","font-weight: bold;");
    
    //Propiedad =>  Es una caraterísitca o atributo.
    //Método    =>  Una acción.

    /*En el caso de los string, solo tenemos una propiedad importante, que es .length
        .length => Se encarga de devolver el tamaño total de la cadena de texto en cuestión (NÚMERO DE CARACTERES TOTALES DE TEXTO).

        **IMPORTANTE**
            Al usar .length, los caracteres se comienzan a CONTAR DESDE el 1 y no desde el 0.
    */
    const saludo = "Hola amigo";
    const pregunta = "¿Cómo estas?";
    const vacia = "";

    console.log("saludo.length      : ", saludo.length);        //10
    console.log("pregunta.length    : ", pregunta.length);      //12
    console.log("vacia.length       : ", vacia.length);         //0
    console.log("");

    //Tambien se puede aplicar .lenght directamene al string en vez de a la variable

    console.log(`"Hola amigo".length    :`, "Hola amigo".length);              //10
    console.log(`"¿Cómo estas?".length  :` , "¿Cómo estas?".length);            //12
    console.log(`"".length              :` , "".length);                         //0
    console.log("");

    //-------------------------------------------------------------------------------
    console.log("%cAcceso a un caracter","font-weight: bold;");

    /*  Un string esta formado por la coleccion de caracteres, por lo tanto para acceder a algún elemento usamos el operador [] para indicar su posición del caracter.
        Para este caso en donde accedemos a una posición, COMENZAMOS A CONTAR DESDE 0, como normalmente se hace para la posición de un elemento en un array o otro tipo de estructura de colección de datos.

        Un string y un array son similares en ciertos puntos, por ejemplo para esta ocasión la similitud que comparten es que ambos son INDEXABLES, es decir se puede acceder a uno de sus elementos, indicando el indice.
    */

    console.log("saludo[0]  : ", saludo[0]);    //H
    console.log("saludo[1]  : ", saludo[1]);    //o
    console.log("saludo[2]  : ", saludo[2]);    //l
    console.log("saludo[3]  : ", saludo[3]);    //a
    console.log("saludo[4]  : ", saludo[4]);    //" "
    console.log("saludo[5]  : ", saludo[5]);    //a
    console.log("saludo[6]  : ", saludo[6]);    //m
    console.log("saludo[7]  : ", saludo[7]);    //i
    console.log("saludo[8]  : ", saludo[8]);    //g
    console.log("saludo[9]  : ", saludo[9]);    //o
    console.log("saludo[10]  : ", saludo[10]);  //undefined
    console.log("");

    //Al indiccar el indice de un elemento que no existe obtendremos como resultado UNDEFINED, ya que el string SALUDO tiene una longitud de 10 caracteres(contando del 1 al 10), pero al acceder al indice 10, obtendremos undefined ya qe estarimos accediendo a un elemento 11 (ya que las posiciones o indices son contados del 0 al 9) y 11 termina superando la longitud del string (que es 10).

    //-------------------------------------------------------------------------------
    console.log("%cMétodos de un string","font-weight: bold;");

    //repeat(number)    =>  Repite un string, el número de veces señalado por number

    console.log(saludo.repeat(4));  //Hola amigoHola amigoHola amigoHola amigo
    console.log("");

    //-------------------------------------------------------------------------------
    console.log("%cInterpolación de variables","font-weight: bold;");

    /*  La forma tradicional de concatenar en javaScript es:
            "...." + "......"
    
        Pero al usar objetos o arrays, que son estructuras de datos mñas complejas, tambien aumenta la complejidad de leer el codigo.
        
        Para esto ECMAScript (ES2015) se intoduce la interpolación de varibles, en las que usamos los backticks o comillas invertidas (``), lo que nos permite interpolar el valor de una varble sin tener que abrir o cerrar la cadena de texto. Para inter porlar algun valor solo hace falta  usar ${}, su estructura es la siguiente:
        
            `....  ${varible} ...... ${varible2}`

        Caratersticas de la interpolación de varibles:

            *   Podemos hacer código multilínea, algo que de la forma tradicional no se puede hacer.
            *   Permite interpolar expresiones en javaScript (NO SOLO VARIABLES).
            *   Permite interpolar el valor de las variables (YA MENCIONADO).
    */

    //Concatenar mediante la forma tradicional

    const frase1   = "frase";
    const frase2   = "concatenada";
    
    console.log("Una " + frase1 + " bien " + frase2)    //Una frase bien concatenada
    console.log("");

    //AL CONCATENENAR O INTERPOLAR, CONSIDERA LOS ESPACION VACIOS " "

    //Interpolamos variables

    const fraseInter    = "frase";
    const frase2Inter   =  "concatenada";

    console.log(`Una ${fraseInter} mejor ${frase2Inter}`);
    console.log("");

    //Con eto tambien podemso crear plntillas reutilizables, por ejemplo con codigo HTML

    const magicWord =   `<strong>Magical word</strong>`;
    const template  =   `
            ${magicWord}

            <div class="alert alert-primary mt-4" role="alert">
                <h4 class="alert-heading">Alert prueba</h4>
                <p>Alert contenido : ${magicWord}</p>
                <hr />
                <p class="mb-0">${magicWord}</p>
            </div>
    `;

    const plantilla = document.getElementById("plantilla");
    plantilla.innerHTML = template;

    //Otro ejemplo

    const makeButton = function(className, text){
        return `<button type="button" class="${className} m-2">${text}</button>`;
    };

    plantilla.innerHTML += makeButton("btn btn-primary","button primary");      //<button type="button" class="btn btn-primary m-2">button primary</button>
    plantilla.innerHTML += makeButton("btn btn-danger","button danger");        //<button type="button" class="btn btn-danger m-2">button danger</button>
    plantilla.innerHTML += makeButton("btn btn-warning","button warning");      //<button type="button" class="btn btn-warning m-2">button warning</button>
    //-------------------------------------------------------------------------------
    console.log("%cPosiciones y substrings","font-weight: bold;");

    /*  Substring               =>  Es un fragmento más pequeño que forma parte de un String, también se le suele hacer referencia a ellos como "subcadena" o "subcadena de texto".
        Posición (o índice)     =>  Es el número que respresenta el lugar donde está ubicado un string teniendo en cuenta que se empieza a contar desde 0, así pues la primera letra del string tendría 0, la segunda 1, la tercera 2, etc ...

        Por ejemplo:

            "Hola amigos"   => "amigos" es un substring.
            "Hola amigos"   => La posición o índice de "amigos" es 5.
            ^0123456789
     */
    console.log("");

    //------------------------------------------------------------------------------
    console.log("%cObtener posición","font-weight: bold;");

    //CARCTER EN CIERTA POSICIÓN
    //STRING .charAt(pos)       =>  Devuelve el caracter de la posición pos. Similar al operador [].
    const nombre = "Lucas";
    console.log("nombre: ", nombre);
    console.log("");

    console.log("nombre.charAt()    : ", nombre.charAt());      //L =>  Al no enviar parámetros, toma por defecto el primer caracter
    console.log("nombre.charAt(0)   : ", nombre.charAt(0));     //L
    console.log("nombre.charAt(1)   : ", nombre.charAt(1));     //u
    console.log("nombre.charAt(2)   : ", nombre.charAt(2));     //c
    console.log("nombre.charAt(3)   : ", nombre.charAt(3));     //a
    console.log("nombre.charAt(4)   : ", nombre.charAt(4));     //s
    console.log("nombre.charAt(5)   : ", nombre.charAt(5));     //" " => Al no existir un caracter en la poscicion señalada devuelve un espacio vacío.
    console.log("");

    //console.log("nombre[]   : ", nombre[]);       //Uncaught SyntaxError: Unexpected token ']'    => Obligatoriamente se debe en enviar un parámetro con el operador [].
    console.log("nombre[]    : ", nombre[0]);       //L
    console.log("nombre[1]   : ", nombre[1]);       //u
    console.log("nombre[2]   : ", nombre[2]);       //c
    console.log("nombre[3]   : ", nombre[3]);       //a
    console.log("nombre[4]   : ", nombre[4]);       //s
    console.log("nombre[5]   : ", nombre[5]);       //undefined => No existe el índice.
    console.log("");

    //POSISICÓN DE CIERTO CARACTER
    /*  .indexOf(text , from)   =>  Realiza la operación inversa a .charAt(), buscará el texto ingresado (text) y nos devolovera un NUMBER con la posición de la PRIMERA APARICIÓN
        de dicho subtexto, en caso de no encontrarlo devolverá -1.

        El parámtro FROM es opcional, que es la posición en la que empezará a buscar, que si no se suministra es 0.
    */

    const phrase = "LenguajeJS, página de Javascript";
    console.log("phrase: ", phrase);
    console.log("");

    console.log(`phrase.indexOf("n")        : `, phrase.indexOf("n"));      //2
    console.log(`phrase.indexOf("n", 3)     : `, phrase.indexOf("n", 3));   //16   
    //Comienza a buscar desde la posición 3 (FROM), pero cuenta como si fuera desde la posición por defecto (0) por eso obtenenmos la posición 16, ya que alli de nuevo encontramos "n".

    console.log(`phrase.indexOf("n", 17)    : `, phrase.indexOf("n", 17));  //-1
    //Busca "n" desde la posición 17, perol no enontrarlo, devuelve -1.

    console.log("");

    //POSICIÓN DESDE EL FINAL
    /*  .lastIndexOf(text, from)    =>  Funciona de la misma manera que .indexOf(text , from), pero a la inversa, es decir que comienza a buscar DESDE EL FINAL, de modo que busca las ULTIMAS APARICIONES
    */
    console.log(`phrase.lastIndexOf("n")        : `, phrase.lastIndexOf("n"));      //16
    console.log(`phrase.lastIndexOf("n", 3)     : `, phrase.lastIndexOf("n", 3));   //2
    //Al indicar FROM 3, comenzaria a buscar desde la posición 3 (FROM) hacia el inicio, y en la posición 2 encontramos una "n".

    console.log(`phrase.lastIndexOf("n", 1)     : `, phrase.lastIndexOf("n", 1));   //-1
    //Desde el indce 1 ("e") hacia atras, no se encuentra ninguna "n" por eso obtenenmos -1.

    console.log("");

    //------------------------------------------------------------------------------
    console.log("%cObtener fragmentos (substrings)","font-weigth: bold;");

    //REPETIR CADENA DE TEXTO
    const text = "Jamón";
    console.log("text: ", text);
    console.log("");
    
    console.log("text.repeat(4): ", text.repeat(4));    //JamónJamónJamónJamón
    console.log("text.repeat(1): ", text.repeat(1));    //Jamón
    console.log("text.repeat(4): ", text.repeat(0));    //" "
    //console.log("text.repeat(4): ", text.repeat(-1));   //RangeError: Invalid count value: -1 => Este método no acepta valores negativos.
    console.log("");

    //FRAGMENTO DE TEXTO
    /*  substring(start, end)   =>  Devuelve un string de una cadena de texto desde la posición START hasta la opción END.
                                    Si se omite el parámetro END, el subtexto abarcará desde START hasta el final.

                                    ES IMPORTANTE RESALTAR QUE EL CARACTER DE LA POSICIÓN END NO SE INCLUIRÁ EN EL TEXTO RESULTANTE.
    
    */

    console.log("text.substring(2)      : ", text.substring(2));
    console.log("text.substring(2, 3)   : ", text.substring(2, 4));
    //------------------------------------------------------------------------------
    console.log("");

    //------------------------------------------------------------------------------
    console.log("");

    //------------------------------------------------------------------------------
    console.log("");

    //------------------------------------------------------------------------------
    console.log("");

    //------------------------------------------------------------------------------
    console.log("");

    //------------------------------------------------------------------------------
});