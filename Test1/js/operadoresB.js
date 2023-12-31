document.addEventListener("DOMContentLoaded", ()=>{

    console.log("Operadores básicos");
    console.log("Modulo (%)");
    const numbers = [10, 20, 30, 40, 50, 60, 70, 80];

    for(i = 0; i < numbers.length; i++){

        const mod = i % 2;

        console.log(numbers[i],numbers[mod]);
    }

    console.log(" ");

    //------------------------------------------

    console.log("Exponenciación - Potenciación (**)");

    const a = 2;
    const b = 5;

    console.log("Con Math.pow()");
    console.log(Math.pow(a,b));     //32

    console.log("Con a**b");
    console.log(a**b);              //32

    console.log("a*a*a*a*a");
    console.log(a*a*a*a*a);         //32

    console.log(" ");
    //------------------------------------------
    console.log("Operadores de asignación");

    console.log("c = 3");
    let c = 3;
    console.log(c); //3 => valor asignado a la variable c.

    console.log("c+= 1");
    c += 1;
    console.log(c); //4 => tomamos el valor de c y le suma 1.

    console.log("c-= 1");
    c-= 1;
    console.log(c); //3 => tomamos el nuevo valor de c y le resta 1.

    console.log("c*= 2");
    c*= 2;
    console.log(c); //6 => tomamos el nuevo valor de c y lo multiplica por 2.

    console.log("c/= 2");
    c/=2
    console.log(c); //3 => tomamos el nuevo valor de c y lo divide entre 2.

    console.log("c%= 2");
    c%= 2;
    console.log(c); //1 => tomamos el nuevo valor de c y calculamos c modulo 2.

    console.log("c**= 2");
    c**=2;
    console.log(c); //1 => tomamos el nuevo valor de c y lo exponenciamos(potenciamos) hacia el exponente 2.

    console.log(" ");
    //------------------------------------------
    console.log("Operadores unarios");
    console.log("Postincremento(d++)");

    let d = 0;
    
    while(d < 6){
        console.log("valor de d: ",d,"postincremento(d++): ",d++,"nuevo valor de a: ",d);
    }
    console.log(" ");

    console.log("Preincremento(++d)");

    let e = 0;

    while(e < 6){
        console.log("valor de e: ",e,"preincremento(++e): ",++e,"nuevo valor de e: ",e);
    }
    console.log(" ");

    //------------------------------------------

    console.log("Operadores de comparación");
    console.log("5 == 5");
    console.log("resultado: ",5 == 5);      //true = compara si el valor es el mismo, no compara el tipo de dato(== es el operador de igualdad), se dice que son iguales.
    console.log(`"5" == 5`);
    console.log("resultado: ","5" == 5);    //true = compara si el valor es el mismo, no compara el tipo de dato, se dice que son iguales.
    console.log("5 === 5");
    console.log("resultado :",5 === 5);     //true = compara el valor y el tipo de dato(=== es el operador de identidad), se dice que son identicos.
    console.log(`"5" === 5`);
    console.log("resultado :","5" === 5);   //false = compara el valor y el tipo de dato, se dice que son identicos.
    console.log(" ");
    
    //------------------------------------------
    console.log("Hallando el valor binario de un número");
    const numero = 10;
    const numBinario = numero.toString(2);
    console.log(numBinario);

    console.log("Hallando el valor binario de un caracter");
    const char = 'A';
    const charUnicode = char.charCodeAt(0);
    const charBinario = charUnicode.toString(2);
    console.log(charBinario);
    console.log(" ");

    //------------------------------------------
    console.log("Operaciones con operadores binarios(nivel de bit)");

    function esPar(num){
        return(num & 1) == 0;
    }

    console.log(esPar(numero));

    const f = 5;    //Representación binaria: 101
    const g = 3;    //Representación binaria: 011

    console.log(`El valor binario de ${f} es ${(f >>> 0).toString(2).padStart(32,'0')}`);
    console.log(`El valor binario de ${g} es ${(g >>> 0).toString(2).padStart(32,'0')}`);

    //------------------------------------------

    const andOperation  = f & g;
    console.log(`Operación AND de: ${f} & ${g} = ${andOperation}`);
    console.log(`El valor binario de ${andOperation} es ${(andOperation >>> 0).toString(2).padStart(32,'0')}`);
    console.log(" ");

    //------------------------------------------

    const orOperation   = f | g;
    console.log(`Operación OR de : ${f} | ${g} = ${orOperation}`);
    console.log(`El valor binario de ${orOperation} es ${(orOperation >>> 0).toString(2).padStart(32,'0')}`);
    console.log(" ");

    //------------------------------------------

    const xorOperaction = f ^ g;
    console.log(`Operación XOR(OR exclusivo) de : ${f} ^ ${g} = ${xorOperaction}`);
    console.log(`El valor binario de: ${xorOperaction} es ${(xorOperaction >>> 0).toString(2).padStart(32,'0')}`);
    console.log(" ");

    //------------------------------------------
    
    const notOperationF  = ~f;
    const notOperationG  = ~g;

    console.log("Operación NOT es unario.");
    console.log(`Operación NOT de: ~${f} = ${notOperationF} \nOperación NOT de: ~${g} = ${notOperationG}`); // \n = salto de línea
    console.log(`El valor binario de ${notOperationF} es ${(notOperationF >>> 0).toString(2).padStart(32,'0')}`);
    console.log(`El valor binario de ${notOperationG} es ${(notOperationG >>> 0).toString(2).padStart(32,'0')}`);
    console.log(" ");

    //------------------------------------------

    const leftShiftOp = f << g;
    console.log(`Operador << (LEFT SHIFT): ${f} << ${g} = ${leftShiftOp}`);
    console.log(`El valor binario de: ${leftShiftOp} es ${leftShiftOp.toString(2).padStart(32,'0')}`);
    console.log(" ");
    //Al aplicar el operador << desplaza todos los bits(f) hacia la izquierda (el valor decimal de g NO BINARIO) y rellena desde la derecha el número de posisciones desplazadas con 0.

    //------------------------------------------

    const nF = -5;
    const nFBinario = (nF >>> 0).toString(2).padStart(32,'0');
    console.log(`El valor binario de: ${nF} es ${nFBinario}`);

    //------------------------------------------

    const rightShiftOp = nF >> g;
    console.log(`Operador >> (RIGTH SHIFT): ${nF} >> ${g} = ${rightShiftOp}`);
    const binario = (rightShiftOp >>> 0).toString(2).padStart(32, '0');     //Forma de convertir un negativo a binario en javascript
    console.log(" ");

    console.log(`El valor binario de: ${rightShiftOp} es ${binario}`);
    console.log(" ");
    //Al aplicar el operador >> desplaza todos los bits(de nF) hacia la derecha(el valor decimal de g NO BINARIO) y rellena desde la izquierda el número de posisciones desplazadas con el valor del bit mmás significativo.
    //El bit más significativo = el más a la izquierda
    //El bit menos significativo = el más a la derecha
    //Ejemplo : 01111
    //El bit más significativo = es 0
    //El bit menos significativo = es 1

    //------------------------------------------
 
    const rightShiftOpS = nF >>> g;
    console.log(`Operador >>> (RIGTH SHIFT CON SIGNO): ${nF} >>> ${g} = ${rightShiftOpS}`);
    console.log(`El valor binario de: ${rightShiftOpS} es ${rightShiftOpS.toString(2).padStart(32,'0')}`);
    console.log(" ");
    //Al aplicar el operador >>> desplaza todos los bits(de nF) hacia la derecha(el valor decimal de g NO BINARIO) y rellena con 0 a la izquierda el número de posisciones desplazadas.
    //ejemplo 111101 >>> 2 = 001111 = se corrio 2 posiciones desde la derecha hacia la izquierda, y se relleno con 0 las posiciones recorridas desde izquierda a derecha.

    /* const bi = "11111111111111111111111111111111";
    
    console.log(bi.length); */

    //------------------------------------------

    console.log("Operador &&");

    const compararAND = function(a,b){
        return a && b;  //Si a es verdadero(diferente de 0)entonces retorna el valor de b, sino retorna a.
    }

    //Forma para leerlo.
    //Ya que es un operador logico puede leerse asi
    /*
    if(a){
        return b;
    }else{
        return a;
    }
    */
    //Primero evalua que a sea verdadedero, si es verdadero, devuelve el valor de b, sino devuelve el valor de a.

    console.log(compararAND(2,0));    
    console.log(" ");

    //------------------------------------------

    const compararOR = function(a,b){
        return a || b;      //Si es verdadeero(diferente de 0) entonces retorna el valor de a, sino devuelve el valor de b;
    }

    //Forma para leerlo
    //Puede ser así:
    /*
    if(a){
        return a;
    }else{
        return b;
    }
    */

    console.log("Operador ||");

    console.log(compararOR(2,10));
    console.log(" ");
    //------------------------------------------

    console.log("Operador &&=");

    let numero1 = 2;
    let numero2 = 5;

    console.log("valor de la variable numero1: ",numero1);
    console.log("valor de la variable numero2: ",numero2);

    const resultadoAND = numero1 &&= numero2;

    //Lo puedes leer de la siguiente forma
    /*
    if(a){
        return a = b;
    }else{
        return a;
    }
    */

    console.log(resultadoAND);

    console.log("valor actual de la variable numero1: ",numero1);
    console.log("valor actual de la variable numero2: ",numero2);
    console.log(" ");

    //------------------------------------------
    console.log("Operador ||=");

    let numero1OR = 0;
    let numero2OR = 5;

    console.log("valor de la variable numero1: ",numero1OR);
    console.log("valor de la variable numero2: ",numero2OR);

    const resultadoOR = numero1OR ||= numero2OR;

    //Lo puedes leer de la siguiente forma
    /*
    if(a){
        return a;
    }else{
        return a = b;
    }
    */

    console.log(resultadoOR);

    console.log("valor actual de la variable numero1: ",numero1OR);
    console.log("valor actual de la variable numero2: ",numero2OR);
    console.log(" ");
});