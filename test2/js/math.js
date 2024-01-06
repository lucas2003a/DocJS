document.addEventListener("DOMContentLoaded",()=>{
    console.log("%cEl objeto Math","font-weight: bold; text-transform: uppercase;");
    console.log("");

    //-------------------------------------------------------------------------------

    console.log("%cConstantes de el objeto Math","font-weight: bold;");

    console.log("Math.E         : ",Math.E);        //2.718281828459045 => Número de Euler.
    console.log("");
    console.log("Math.LN2       : ", Math.LN2);     //0.6931471805599453
    console.log("Math.log(2)    : ", Math.log(2));  //0.6931471805599453      
    console.log("");
    console.log("Math.LN10      : ", Math.LN10);    //2.302585092994046
    console.log("Math.log(10)   : ", Math.log(10)); //2.302585092994046
    console.log("");
    console.log("Math.LOG2E         :", Math.LOG2E);            //1.4426950408889634
    console.log("Math.log2(Math.E)  :", Math.log2(Math.E));     //1.4426950408889634
    console.log("");
    console.log("Math.LOG10E        : ", Math.LOG10E);          //0.4342944819032518
    console.log("Math.log10(Math.E) : ", Math.log10(Math.E));   //0.4342944819032518
    console.log("");
    console.log("Math.PI        : ", Math.PI);      //3.141592653589793
    console.log("");
    console.log("Math.SQRT1_2   : ", Math.SQRT1_2);     //0.7071067811865476
    console.log("Math.sqrt(1/2) : ", Math.sqrt(1/2));   //0.7071067811865476
    console.log("");
    console.log("Math.SQRT2     : ", Math.SQRT2);       //
    console.log("Math.sqrt(2)   : ", Math.sqrt(2));     //
    console.log("");
    
    //-------------------------------------------------------------------------------

    console.log("%cMétodos matemáticos","font-weight: bold;");

    //Math.abs(x)  => Devuelve e valor abosoluto de x, es decir, la distancia desde 0 a x en la recta numérica => |x| = x.
    //El valor abosoluto SIEMPRE es un positivo.
    console.log("Math.abs(5)    : ", Math.abs(5))        //5
    console.log("Math.abs(-5)   : ", Math.abs(-5))       //5 => siempre es un positivo ya que se trata de contar la distancia de 0 hasta -5.
    console.log("");

    //Math.sign(x) => Devuelve el signo de x, si es positivo devuelve 1, si es negativo devuelve -1.
    console.log("Math.sign(5))  : ", Math.sign(5));      //1
    console.log("Math.sign(-5)  : ", Math.sign(-5));      //-1
    console.log("");

    //Math.exp(x)  => Devuelve el valor de e elevado al exponente x
    //e => Es el número de Euler = 2.718281828459045
    console.log("Math.exp(1)    : ", Math.exp(1));       //2.718281828459045
    console.log("Math.exp(2)    : ", Math.exp(2));       //7.38905609893065
    console.log("");

    //Math.expm1(x) => Es equivalente a Math.exp(x) -1
    console.log("Math.expm1(1)  :", Math.expm1(1));     //1.718281828459045
    console.log("Math.expm1(-1) :", Math.expm1(-1));    //-0.6321205588285577
    console.log("");

    //Math.max(a, b, c, ..) => Devuelve el número más grande o el máximo de los que son ingresados como parémetros.
    //Cuando es positivo, el mayor es el más lejano al 0.
    //Cuando es negativo, el mayor es el más cercano al 0.
    console.log("Math.max(5, 2, 3, 4, 10, 12, 20)           : ", Math.max(5, 2, 3, 4, 10, 12, 20));         //20
    console.log("Math.max(-5, -2, -3, -4, -10, -12, -20)    : ", Math.max(-5, -2, -3, -4, -10, -12, -20));  //-2
    console.log("Math.max(-5, 2, -3, 4, -10, 12, -20)       : ", Math.max(-5, 2, -3, 4, -10, 12, -20));     //12
    console.log("");
    /*Este ultimo caso es un poco curioso, para esto considera la siguiente regla: sea el numero que sea EL POSITIVO SIEMPRE ES MAYOR QUE EL NEGATIVO.
        -5 vs 2: Comparando -5 y 2, el número 2 es mayor que -5.
        2 vs -3: Comparando 2 y -3, el número 2 es mayor que -3.
        2 vs 4: Comparando 2 y 4, el número 4 es mayor que 2.
        4 vs -10: Comparando 4 y -10, el número 4 es mayor que -10.
        4 vs 12: Comparando 4 y 12, el número 12 es mayor que 4.
        12 vs -20: Comparando 12 y -20, el número 12 es mayor que -20.

        RESUPESTA : 12
    */

    //Math.min(a, b, c, ..) => Devuelve el número más pequeño o el mínimo de los que son ingresados como parémetros.
    //Cuando es positivo, el mayor es el más lejano al 0.
    //Cuando es negativo, el mayor es el más cercano al 0.
    console.log("Math.min(5, 2, 3, 4, 10, 12, 20)           : ", Math.min(5, 2, 3, 4, 10, 12, 20));         //20
    console.log("Math.min(-5, -2, -3, -4, -10, -12, -20)    : ", Math.min(-5, -2, -3, -4, -10, -12, -20));  //-2
    console.log("Math.min(-5, 2, -3, 4, -10, 12, -20)       : ", Math.min(-5, 2, -3, 4, -10, 12, -20));     //12
    console.log("");
    /*Este ultimo caso es un poco curioso, para esto considera la siguiente regla: sea el numero que sea EL POSITIVO SIEMPRE ES MAYOR QUE EL NEGATIVO.
        -5 vs 2: Comparando -5 y 2, el número -5 es menor que 2.
        -5 vs -3: Comparando -5 y -3, el número -5 es mayor que -3.
        -5 vs 4: Comparando -5 y 4, el número -5 es menor que 4.
        -5 vs -10: Comparando -5 y -10, el número -10 es menor que -5.
        -10 vs 12: Comparando -10 y 12, el número -10 es menor que 12.
        -10 vs -20: Comparando -10 y -20, el número -10 es mayor que -20.

        RESUPESTA : -20
    */
    
    //Math.pow(base, exp) = base**exp => Devuelve el número base elevado a exp.
    //Pow en inglés es la abreviación de "power", que significa "poder", en términos matemáticos el termino "power" quiere decir POTENCIA.
    console.log("Math.pow(2,10) : ", Math.pow(2,10));   //1024
    console.log("2**10          : ", 2**10);            //1024
    console.log("");
    
    //Math.sqrt(x)  => Devuelve la raíz cuadrada de x.
    console.log("Math.sqrt(2)   : ", Math.sqrt(2));         //1.4142135623730951
    console.log("Math.sqrt(144)   : ", Math.sqrt(144));     //12
    console.log("");

    //Math.cbrt(x)  => Devuelve la raíz cúbica de x.
    console.log("Math.cbrt(3)   : ", Math.cbrt(3));     //1.4422495703074083
    console.log("Math.cbrt(9)   : ", Math.cbrt(27));    //3
    console.log("");

    //Math.imul(a, b) = > Devuelve a * b (trabaja a nivel de 32 bits).
    console.log("Math.imul(3, 2)    : ",Math.imul(3, 2));           //6     => multiplcación normal.
    console.log("Math.imul(10, 10)  : ",Math.imul(10, 10));         //10    => multiplcación normal.
    console.log("Math.imul(10, 10)  : ",Math.imul(0xffffffff, 7));  //-7    => Interpreta el bit de 0xffffffff en su base binaria y lo multiplica por 7.
    /*Este ultimo caso tiene n resultado inesperado ya que la forma que se ha llegado a el, es un poco compleja:
        -Primero convertimos 0xffffffff que es una base hexadecimal, a una base decimal:
            const hexanum = Number.parseInt("0xffffffff",16);       Resultado : 4294967295
        
        -Segundo, lo llevamos a su base binaria:
            const binarnum = hexanum.toString(2);                   Resultado : 11111111111111111111111111111111
        
        -Tercero, al interpretar ese numero, tomamos el bit más a la izquiera para representar el signo (como es 1 entonces es nagativo, si fuese 0 sería positivo):
            11111111111111111111111111111111 = -1
        -Por ultimo, multiplicamos -1 y 7 como se escribe en el método Math.imul():
            Math.imul(-1, 7) = -7

            RESULTADO : -7
    */
    console.log("");
    
    //Math.clz32(x) => Devuelve el número de ceros a la izquierda de x en binario (32 bits).
    //clz32 = Count Leading Zeros 32 = Contar Ceros Principales 32(bits).
    console.log("Math.clz32(32)     : ",Math.clz32(32));                                //26
    console.log("numeros de ceros   : ","0".repeat(Math.clz32(32)));                   //26 veces "0" = 00000000000000000000000000 => 26 bits
    /*plantilla.repeat(numerVeces):
        repite la plantilla el numerVeces indicado.
        En el caso anterior: repite "0" 26 veces.
    */
    console.log("cadena binaria (valor binario de 32)   : ","0".repeat(Math.clz32(32)) + (32).toString(2));  //26 veces "0" + el valor de 32 en base 2(binario) = 00000000000000000000000000100000 => 32 bits.
    console.log("");
    //-------------------------------------------------------------------------------
    
    console.log("%cMétodo Math.random()","font-weight: bold;");
    //Math.random() => Devuelve un valor entre 0 y 1 con 16 decimales.

    //CASO 1:
    let x = Math.random();
    
    //Forma 1 : asignación basica
    //x = x * 5;

    //Forma 2 : operador *= (recuerda que este tipo de asignación se puede realizar con todos los operadores).
    x *= 5;
    console.log("Valor de x: ", x);

    const x2 = Math.floor(x);       //Math.floor(x) => Redondea la parte entera hacia abajo, es decir, si tenemos como resultado 3.95... , redondeará hacia 3 en vez de a 4.
    console.log("Math.floor: ", x2);
    console.log("");

    //--
    //CASO 2:
    const x3 = Math.floor(Math.random() * 5);
    console.log("Math.floor(Math.random() * 5): ", x3);
    console.log("");

    //CASO 3:
    //-- ~ = Alt + 126
    //~~ => Cumple la misma fuinción que Math.floor(x), trunca hacia 0 elminando la parte decimal de número, es decir redondea hacia abajo.
    const x4 = ~~(Math.random() * 5);
    console.log("~~(Math.random() * 5) : ", x4);
    console.log("");

    /**IMPORTANTE**
        En los 3 casos se realiza la misma operación y un mismo resultado, la diferencia de respuesta se debe al tiempo de ejecución,
        pero en los 3 casos se plantea 3 distintas soluciones para un mismo caso y un solo resultado.
        para comproobar puedes reemplazar "Math.random() * 5" por "x" para que todas se ejecuten con un mismo valor y tengan un mismo resultado.
     */
    //-------------------------------------------------------------------------------

    console.log("%cMétodos de logaritmos","font-weight: bold;");
    /*Para comprender la forma de trabajar de los logaritmos, es más facil decir que es la operación inversa a la potencia,
    es decir podemos decir que 2 elevedo a 4 es 16 para hallar una potencia, pero para hallar un logaritmo debemos preguntarnos,
    2 elevado a que potencia es 16?
    
    Por ejemplo:

        2**4 = 16   =>  log2(16) = 4;

    Más ejemplos:

        //Forma logarítmica             //Forma exponencial

            log2(8) = 3         =>          2**3 = 8
            log3(81) = 4        =>          3**4 = 81
            log5(25) = 2        =>          5**2 = 25
    
    Formula logarítmica:

        logB(A) = C         =>      B**C = A

        -B es la base
        -C es el exponente
        -A el valor de entrada (o en la forma exponencial el resultado).
    */

    //Math.log(x)   => Devuelve el logaritmo natural en BASE e de x = loge x o ln x.
    //e = Número de Euler
    console.log("Math.log(2): ",Math.log(2));       //0.6931471805599453
    console.log("Comprobación => Math.pow(Math.E,0.6931471805599453): ",Math.pow(Math.E,0.6931471805599453)) //1.9999999999999998 => redondeado es 2 como en el valor de entrada Math.log(2)
    console.log("");

    //Math.log10(x) => Devuellve el logaritmo decimal (en base 10) de x = log10 x ó log x.
    console.log("Math.log10(2): ",Math.log10(2));   //0.3010299956639812
    console.log("Comprobación => Math.pow(10,0.3010299956639812): ",Math.pow(10,0.3010299956639812));           //2 => Es el mismo valor que Math.log10(2)
    console.log("");

    //Math.log1p(x) => Devuelve el LOGARITMO NATURAL en BASE e de (1 + x) = loge (1+x) o ln (1+x)
    //Este métoddo nos permite trabajar con más presición con números muy pequeños osea cercanos a 0
    const smallnumber = 0.001;
    console.log(smallnumber);

    console.log("Math.log1p(smallnumber): ",Math.log1p(smallnumber));   //0.0009995003330835331 = Numero preciso = loge(1 + smallnumber)
    console.log("Math.log(smallnumber)  : ",Math.log(smallnumber));     //-6.907755278982137 = número no preciso   
    console.log("");
    
    //--
    console.log("Math.log1p(2): ",Math.log1p(2));     //1.0986122886681096

    //Debido a la forma que javascript maneja los calculos con los decimales, al realizar operaciones con números tan pequeños, disminuye su presición.
    console.log("Comprobación => Math.exp(1.0986122886681096): ",Math.exp(1.0986122886681096));                   //2.9999999999999996
    console.log("Comprobación => Math.pow(Math.E,1.0986122886681096): ",Math.pow(Math.E,1.0986122886681096));     //2.999999999999999
    console.log("");

    //-------------------------------------------------------------------------------
    console.log("");
    console.log("");
    console.log("");

    //-------------------------------------------------------------------------------

    console.log("");
    console.log("");
    //-------------------------------------------------------------------------------

    console.log("");
    console.log("");
    //-------------------------------------------------------------------------------

    console.log("");
    console.log("");

});