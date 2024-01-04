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
    console.log("Math.clz32(32) : ",Math.clz32(32));                                //26
    console.log("numeros de ceros: ","0".repeat(Math.clz32(32)));                   //26 veces "0" = 00000000000000000000000000 => 26 bits
    /*plantilla.repeat(numerVeces):
        repite la plantilla el numerVeces indicado.
        En el caso anterior: repite "0" 26 veces.
    */
    console.log("cadena binaria: ","0".repeat(Math.clz32(32)) + (32).toString(2));  //26 veces "0" + el valor de 32 en base 2(binario) = 00000000000000000000000000100000 => 32 bits.
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
    //-------------------------------------------------------------------------------

    console.log("");
    console.log("");
    //-------------------------------------------------------------------------------

    console.log("");
    console.log("");

});