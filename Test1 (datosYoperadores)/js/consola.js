document.addEventListener("DOMContentLoaded", () => {

    console.log("Uso del console y su familia(log, warn, error, etc)");

    console.log("Hola mundo");
    console.log(2+2);

    //Imprime mensajes de infomrmación
    console.log("console.info");
    console.info(2+2);

    //Imprime warnings => Mensajes de información de advertencia => color amarillo
    console.log("console.warn");
    console.warn(2+2);

    //Imprime errors => Mensajes de error =>color rojo
    console.log("console.error");
    console.error(2+2);

    //Limpia la consola == Ctrl + L (en la consola) == clear() (en la consola)
    //console.clear()

    //Este es el mensaje que retorna (ejecutado desde un archivo) => Console was cleared     js1.js:19(archivo:linea)

    //Este es el mensaje que retorna (ejecutado desde la consola del navegador) => => Console was cleared     VM101:1(VM == Virtual MAchine, 101 == Identificadpr único o secuencia específica dentro del entorno de ejecución del navegador, 1 = número de línea donde se generó el mensaje)

    //console.log, soporta cualquer tipo de datos, separados por comas ","
    console.log("Hola a todos!!, Observen este número: ",5+5);

    //console.log, también soporta estilos, cuando se inicia utiliza $c, que se reemplazará con los eltilos indicados
    console.log("%c¡Hola Manz!",
            "background:linear-gradient(#000, #555); color:#fff; padding: 5px 10px;");

})