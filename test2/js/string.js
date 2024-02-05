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
    const text = "Jamón de cerdo";
    console.log("text: ", text);
    console.log("");
    
    console.log("text.repeat(4): ", text.repeat(4));    //Jamón de cerdoJamón de cerdoJamón de cerdoJamón de cerdo
    console.log("text.repeat(1): ", text.repeat(1));    //Jamón de cerdo
    console.log("text.repeat(4): ", text.repeat(0));    //" "
    //console.log("text.repeat(4): ", text.repeat(-1));   //RangeError: Invalid count value: -1 => Este método no acepta valores negativos.
    console.log("");

    //FRAGMENTO DE TEXTO

    /*
    -----------------------------------------------------------------------------------------------------------------------------------------------------
    substring(start, end) 
    -----------------------------------------------------------------------------------------------------------------------------------------------------
    */

    /*  substring(start, end)   =>  Devuelve un string con el FRAGMENTO DE TEXTO desde la posición START hasta la opción END.
                                    Si se omite el parámetro END, el subtexto abarcará desde START hasta el final.

                                    ES IMPORTANTE RESALTAR QUE EL CARACTER DE LA POSICIÓN END NO SE INCLUIRÁ EN EL TEXTO RESULTANTE.
    
    */

    console.log("text.substring(2)      : ", text.substring(2));        
    //món de cerdo  =>  El caracter de índice 2 es "m" y al no señalar el parámetro END, lo considera hasta el final del string.

    console.log("text.substring(2, 4)   : ", text.substring(2, 4));     
    /*  mó    =>    Inicia en "m" (índice 2), y señala el indice 4 en el parámetro END (que es "n"), pero este no se cuenta, sino una posición anterior. 
                    Es decir END considerará solo hasta el índice anterior al que se le indica, si hemos indicado 4, solo considerará hasta el 3 ("ó").
    */

    console.log("text.substring(-4)     : ", text.substring(-4));   //Al usar un negativo como parámetro en .substring(-4), devuelve el string completo.
    console.log("");

    /*
    -----------------------------------------------------------------------------------------------------------------------------------------------------
    substr(start, size)
    -----------------------------------------------------------------------------------------------------------------------------------------------------
    */
           
    /*  substr(start, size)   =>    Devuelve un string con el FRAGMENTO DE TEXTO desde la posición START hasta la posición START + SIZE.
                                    Dicho de otra forma SIZE será el tamaño del string resultante, si se llegara a omitir, se devuelve hasta el final.

    */

    console.log("text.substr(2)     : ", text.substr(2))        //món de cerdo      =>  Al no tener el parámetro SIZE, lo considera hasta el final.                              
    console.log("text.substr(2, 5)  : ", text.substr(2, 5))     //món d             =>  Inicia en el parámetro 2 ("n") y al indicar SIZE como 5, indica el teamaño del substring, osea de 5 caracteres.
    console.log("text.substr(-5)    : ", text.substr(-5))       //cerdo             =>  Al indicar START con un negativo, quiere decir que comeinza a contar desde el final, y al no tener el parámetro SIZE, lo considera hasta el final.
    /*  Lo cuenta así:

            -1 = "o"    => -1 es el caracter final
            -2 = "d"
            -3 = "r"
            -4 = "e"
            -5 = "c"    => indice START
    */ 
    console.log("text.substr(-5, 2) : ", text.substr(-5, 2))    //ce                =>  Comienza contar desde el final hasta el indice STAR, e indicamos la longitud maxima de 2 caracteres SIZE = 2.
        /*  Esta vez la cuenta sería algo así:

            -1 = "o"    => -1 es el caracter final
            -2 = "d"
            -3 = "r"
        -- SIZE
            -4 = "e"
            -5 = "c"    => indice START
        -- SIZE
    */  
    console.log("");

    /*
    -----------------------------------------------------------------------------------------------------------------------------------------------------
    .slice(start, end)  =>  Devuelve un FRAGMENTO DE STRING desde la posición START hasta a posición END.
                            De ser omitido el parámetro END, se cosiderará hasta el final del string.
    -----------------------------------------------------------------------------------------------------------------------------------------------------
    */

    console.log("text.slice(2)          : ", text.slice(2))         //món de cerdo
    console.log("text.slice(2, 4)       : ", text.slice(2, 4))      //mó    =>  Considera hasta una posición anterior a la indicada en el parámetro END
    console.log("text.slice(-5)         : ", text.slice(-5))        //cerdo =>  Al indicar un negativo comienza a contar desde el final del string.
    console.log("text.slice(-5, -3)     : ", text.slice(-5, -3))    //ce    =>  Obtendremos " " si indicamos en 2 como parámetro END ya que al indicar -5,
                                                                    //          la forma de contar desde el final, será -5, -4, -3, -2, -1; el ultimo siempre será -1 hasta el parámetro indicado
    console.log("");

    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        CONCLUSIONES:

            Los 3 métodos sirven para obtener o extraer un substring de un string, pero cada uno tiene su caraterísticas distintivas

            substring(start, end) :

                *Tiene un parametro START(posición de inicio).
                *Tiene un parametro END(posicion FINAL, si se omite, considera toda la cadena de texto).
                *Al indicar el parámetro END, obtendremos un substring considerando los caracteres hasta una posición antes del parámetro END indicado.
                *Al usar un negativo como parámetro START, obtendremos un string vacío.

            substr(start, size) :

                *Tiene un parametro START(posicion de inicio).
                *Tiene un parámetro SIZE (longitud de caracteres del substring a obtener).
                *Al indicar un negativo como parámetro START, comenzará a contar desde el final, el ultimo caracter será -1, hasta llegar al número indicado como START.
                *Si indicas un negativo como parámetro START y no indicas la logitud (SIZE) el método considerará desde el indice START hasta el ultimo caracter (de izquierada a derecha).
                *Si indicas un negativo como parámetro START y también indicas la logitud (SIZE) el método considerará desde el indice START hasta completar la longitud indicada (contaría de izquierada a derecha).

            slice(start, end) :

                *Tiene un parametro START(posición de inicio).
                *Tiene un parametro END(posicion FINAL, si se omite, considera toda la cadena de texto).
                *Al indicar el parámetro END, obtendremos un substring considerando los caracteres hasta una posición antes del parámetro END indicado.
                *Al indicar un negativo como parámetro START, comenzará a contar desde el final, el ultimo caracter será -1, hasta llegar al número indicado como START.
                *Si indicas un negativo como parámetro START y no indicas el parámetro END el método considerará desde el indice START hasta el ultimo caracter (de izquierada a derecha).
                *Si indicas un negativo como parámetro START y si indicas el parámetro END como UN POSITIVO el método devolverá una cadena vacía, ya que si START es negativo también END debe serlo ay que ambos son parámetros.
                *Si indicas un negativo como parámetro START y si indicas el parámetro END como UN NEGATIVO el método devolverá un substring, considerando desde el parámetro START hasta el indice END (incluido el mismo).

    >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
    //------------------------------------------------------------------------------
    console.log("%cDividir un texto en partes","font-weight: bold;");

    /*  ARRAY.split(text)    =>  Divide un string en substrings considerando ciertos delimitadores, cada substring obtenido, formará parte de un array
                            ext es u string que funciona como separador o delimitaor
    */

    //Se puede aplicar el métodos split() directo al string .                          
    console.log(`"88.12.44.123".split(".")  : `, "88.12.44.123".split("."));        //(4) ['88', '12', '44', '123']     
    console.log(`"1.2.3.4.5".split(".")     : `, "1.2.3.4.5".split("."));           //(5) ['1', '2', '3', '4', '5']
    console.log(`"Hola a todos".split(" ")  : `, "Hola a todos".split(" "));        //(3) ['Hola', 'a', 'todos']
    console.log(`"Código".split("")         : `, "Código".split(""));               //(6) ['C', 'ó', 'd', 'i', 'g', 'o']    =>  Dividió por cada caracter al usar como delmitador "" sin espacios.
    console.log("");

    //Se puede aplicar el métodos split() hacia una varible.
    const array1 = "88.12.44.123";
    const array2 = "1.2.3.4.5";
    const array3 = "Hola a todos";
    const array4 = "Código";

    console.log(`array1.split(".")  : `, array1.split("."));        //(4) ['88', '12', '44', '123']
    console.log(`array2.split(".")  : `, array2.split("."));        //(5) ['1', '2', '3', '4', '5']
    console.log(`array3.split(" ")  : `, array3.split(" "));        //(3) ['Hola', 'a', 'todos']
    console.log(`array4.split("")   : `, array4.split(""));         //(6) ['C', 'ó', 'd', 'i', 'g', 'o']
    console.log("");

    /*  ARRAY.split(text, limit)    =>  Divide un string en substring, considerando text como un delimitador (es un string) y ademas usa a limit (que es unu number), como el número de fragmentos o substrings que retornara, contandolos desde le primero*/
    console.log(`array1.split(".", 2)   : `, array1.split(".", 2));         //(2) ['88', '12']
    console.log(`array2.split(".", 2)   : `, array2.split(".", 2));         //(2) ['1', '2']
    console.log(`array3.split(" ", 2)   : `, array3.split(" ", 2));         //(2) ['Hola', 'a']
    console.log(`array4.split("", 2)    : `, array4.split("", 2));          //(2) ['C', 'ó']

    //Al indicar como limit 2, solo ha tomado los dos primeros elementos del array obtenido.
    console.log("");

    /*  .split(regexp)  =>  Hace lo mismo que .split(text), pero al diferencia es que es ves de usar uns tring como delimnitador, toma a una expresion regular
        regexp          =>  Quieres decir regular expresion o "expresión regular", que son un conjntop de pratones o reglas de busqueda, es decir son el conjunto de caracteres que 
        se tienen en consideración al realizar una busqueda o manipulación de un string, sustituir un texto o  validar cadenas.
                            Estos pueden ser cadenas literales, clases de caracteres, cuantificadores, anclas y otros constructores que definen reglas para las coincidencias en las cadenas de texto.
                            Para indicar una expresion regular se utiliza el operador //, y de la siguiente forma:
                                /regexp/
                            Y para indicar unu conjunto de caracteres usamos el operador // con el operador [], de la siguiente forma:
                                /[regexp]/
    */

    console.log(`"88.12,44.123".split(/[.,]/)       : `, "88.12,44.123".split(/[.,]/));     //(4) ['88', '12', '44', '123']
    console.log(`"88:12;44,123".split(/[:,;]/)      : `, "88:12;44,123".split(/[:,;]/));    //(4) ['88', '12', '44', '123']
    console.log(`"88|12?44~123".split(/[|?~]/)      : `, "88|12?44~123".split(/[|?~]/));    //(4) ['88', '12', '44', '123']
    console.log("");

    /*  .split(regexp, limit) =>  Al igual que .split(text, limit), uso una expresión regular como delimitador y a la vez uso limit como el numero de fragmentos que devolverá es decir, la cantidad de elementos del array.
    */
    console.log(`"88.12,44.123".split(/[.,]/, 3)       : `, "88.12,44.123".split(/[.,]/, 3));     //(3) ['88', '12', '44']
    console.log(`"88:12;44,123".split(/[:,;]/, 3)      : `, "88:12;44,123".split(/[:,;]/, 3));    //(3) ['88', '12', '44']
    console.log(`"88|12?44~123".split(/[|?~]/, 3)      : `, "88|12?44~123".split(/[|?~]/, 3));    //(3) ['88', '12', '44']
    console.log("");

    //------------------------------------------------------------------------------
    console.log("%cBuscar y reemplazar","font-weight: bold;");
    
    /*
    -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    COMPROBACIÓN DE TEXTOS
    -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    */
    /*  .starsWidth(text, from) =>  Comprueba si un string comienza con text, from (desde) es un parametro opcional, que si se omite, la busqueda se hará desde el primer índice, de lo contrario será desde el índice indicado
    */

    const string = "Lucas Alfredo";
    console.log("string: ",string);
    console.log("");

    console.log(`string.startsWith("L")     : `, string.startsWith("L"));       //true
    console.log(`string.startsWith("u")     : `, string.startsWith("u"));       //false
    console.log(`string.startsWith("c")     : `, string.startsWith("c"));       //false
    console.log(`string.startsWith("Luc")   : `, string.startsWith("Luc"));     //true
    console.log("");

    console.log(`string.startsWith("L")     : `, string.startsWith("L", 2));       //false  =>  El índice 2  es c, entonces el strng no comienza con L
    console.log(`string.startsWith("u")     : `, string.startsWith("u", 2));       //false
    console.log(`string.startsWith("c")     : `, string.startsWith("c", 2));       //true   =>  Desde el índice 2("c"), comienza el string con "c".
    console.log(`string.startsWith("Luc")   : `, string.startsWith("Luc", 2));     //false  =>  desde el índice 2("c"), no comienza el string con "luc"
    console.log("");
    
    /*  .endsWidth(text, to) => Comprueba si un string termina con text, to (hasta) es un parámetro opcional que si se omite, la busqueda se hará hasta el índice final, de lo contrario será desde el índice indicado.
    */

    console.log(`string.endsWith("o")   : `, string.endsWith("o"));     //true
    console.log(`string.endsWith("d")   : `, string.endsWith("d"));     //false
    console.log(`string.endsWith("e")   : `, string.endsWith("e"));     //false 
    console.log(`string.endsWith("edo") : `, string.endsWith("edo"));   //true
    console.log("");

    console.log(`string.endsWith("o", 7)    : `, string.endsWith("o", 7));      //false  =>  El índice 7 es "l" de "Alfredo" y de allí hacia atras (hacia la izquierda), no hay una "o".
    console.log(`string.endsWith("d", 7)    : `, string.endsWith("d", 7));      //false
    console.log(`string.endsWith("e", 7)    : `, string.endsWith("e", 7));      //false 
    console.log(`string.endsWith("edo", 7)  : `, string.endsWith("edo", 7));    //false
    console.log(`string.endsWith("A", 7)    : `, string.endsWith("A", 7));      //true  => Antes del indice 7 ("l" de "Alfredo") si existe un caracter "A".
    console.log("");

    /*  .includes(text, from)   => Comprueba si en uns tring está incluido text (sin importar si es al final o al inicio), también tiene un segundo parámetro from (opciona) que al omitirse considera la busqueda en todo el string, pero al índicar un índice, se tiene en consideración el índice indicado.
    */

    console.log(`string.includes("s Al")    : `, string.includes("s Al"));  //true
    console.log(`string.includes("s Al")    : `, string.includes("L"));     //true
    console.log(`string.includes("s Al")    : `, string.includes("r"));     //true
    console.log(`string.includes("s Al")    : `, string.includes("fr"));    //true
    console.log(`string.includes("s Al")    : `, string.includes("edo"));   //true
    console.log(`string.includes("D")       : `, string.includes("D"));     //false
    console.log("");

    console.log(`string.includes("s Al", 4)    : `, string.includes("s Al", 4));  //true
    console.log(`string.includes("s Al", 4)    : `, string.includes("L", 4));     //false   =>  El índice 4 es "s", y de allí en adelante (hacia la derecha), ya no se encuentra otro parámetro caracter "L"
    console.log(`string.includes("s Al", 4)    : `, string.includes("r", 4));     //true
    console.log(`string.includes("s Al", 4)    : `, string.includes("fr", 4));    //true
    console.log(`string.includes("s Al", 4)    : `, string.includes("edo", 4));   //true
    console.log(`string.includes("D", 4)       : `, string.includes("D", 4));     //false
    console.log("");

    /*
    -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    BUSQUEDA DE CADENA DE TEXTOS
    -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    */
    /*  .search(regexp) =>  Busca un patron que encaje con regexp y devuelve la primera posición encontrada, si no se encuentra devuelve -1. 
    */

    //------------------------------------------------------------------------------
    console.log("");

    //------------------------------------------------------------------------------
    console.log("");

    //------------------------------------------------------------------------------
    console.log("");

    //------------------------------------------------------------------------------
});