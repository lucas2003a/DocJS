document.addEventListener("DOMContentLoaded",()=>{
    console.log("%cQué es Unicode?","font-weight: bold; text-transform: uppercase;");
    console.log("");

    /*  Es es sistema moderno de codificación de caracteres que se usan en informática.
        Cada caracter tiene varias formas de codificación , por ejemplo:
            A => {
                unicode :   u+0041
                decimal :   65
                hexadecimal :   0x0041
                entidadHTML :   &#65;
                unicode     :   \u{0041}
            }
    */

    console.log("\u{007a}");    ///z;
    console.log("");

    //MÉTODOS:

    //----------------------------------------------------------------------------------------------------

    /*  \u{number}      =>  Devuelve el caracter unicode representado por númer hexadecimal (number).
    */

    console.log("\u{0041}");        //A
    console.log("\u{004d}");        //M
    console.log("\u{005a}");        //Z
    console.log("\u{007a}");        //z
    console.log("");

    console.log("\u{004c}");    //L
    console.log("\u{0075}");    //u
    console.log("\u{0063}");    //c
    console.log("\u{0061}");    //a
    console.log("\u{0073}");    //s
    console.log("");

    //----------------------------------------------------------------------------------------------------
    /*  STRING.fromCodePoint(number)    =>  Devuelve el caracter representado por el número (number).
    */

    const nombres = "Lucas Afredo Atuncar Valerio";
    console.log("nombres    : ", nombres);
    console.log("");

    console.log("String.fromCodePoint(65)  : ", String.fromCodePoint(65));      //A
    console.log("String.fromCodePoint(77)  : ", String.fromCodePoint(77));      //M   =>  En todos estos casos se ingresa el número decimal como parámetro, y devuelve el caracter.
    console.log("String.fromCodePoint(90)  : ", String.fromCodePoint(90));      //Z
    console.log("String.fromCodePoint(120) : ", String.fromCodePoint(122));    //z    
    console.log("");

    console.log("String.fromCodePoint(76)   : ", String.fromCodePoint(76));
    console.log("String.fromCodePoint(117)  : ", String.fromCodePoint(117));
    console.log("String.fromCodePoint(99)   : ", String.fromCodePoint(99));
    console.log("String.fromCodePoint(97)   : ", String.fromCodePoint(97));
    console.log("String.fromCodePoint(115)  : ", String.fromCodePoint(115));
    console.log("");

    //----------------------------------------------------------------------------------------------------
    /*  .codePointAt()  =>      Devuelve el caracter decimal de la posición pos del texto.
                Devuelve el valor decimal del caracter que se encuentre en la posición indicada.
    */
    
    console.log("nombres.codePointAt(0) : ", nombres.codePointAt(0));       //76
    console.log("nombres.codePointAt(1) : ", nombres.codePointAt(1));       //117
    console.log("nombres.codePointAt(2) : ", nombres.codePointAt(2));       //99
    console.log("nombres.codePointAt(3) : ", nombres.codePointAt(3));       //97
    console.log("nombres.codePointAt(4) : ", nombres.codePointAt(4));       //115
    console.log("");

    //Obtenenemos la codificación hexadecimal

    console.log("nombres.codePointAt(0).toString(16)    : ", nombres.codePointAt(0).toString(16));      //4c    =>  hexadecimal =>  0x004c  =   u\{004c}
    console.log("nombres.codePointAt(1).toString(16)    : ", nombres.codePointAt(1).toString(16));      //75    =>  hexadecimal =>  0x0075  =   u\{0075}
    console.log("nombres.codePointAt(2).toString(16)    : ", nombres.codePointAt(2).toString(16));      //63    =>  hexadecimal =>  0x0063  =   u\{0063}
    console.log("nombres.codePointAt(3).toString(16)    : ", nombres.codePointAt(3).toString(16));      //61    =>  hexadecimal =>  0x0061  =   u\{0061}
    console.log("nombres.codePointAt(4).toString(16)    : ", nombres.codePointAt(4).toString(16));      //73    =>  hexadecimal =>  0x0073  =   u\{0073}
    console.log("");

    /*  **IMPORTANTE**
            La codificación Unicode simpre toma en cuenta la codificación hexadecimal, por ejemplo:

                HEXADECIMAL     =>      UNICODE     =>      UNICODE (\u)    =>  CARACTER
                0x004c                  U+004c              \u{0041}            L
                0x0075                  U+0075              \u{0075}            u
                0x0063                  U+0063              \u{0063}            c
                0x0061                  U+0061              \u{0061}            a
                0x0073                  U+0073              \u{0073}            s
    */

    //----------------------------------------------------------------------------------------------------

    //Emojis (emoticonos o emoticones)

    console.log("%cEmojis (emoticonos o emoticones)","font-weight: bold;");
    console.log("");

    console.log(`"⚡".length    : `, "⚡".length);  //1
    console.log(`"⛔".length)   : `, "⛔".length);  //1
    console.log(`"😀".length    : `, "😀".length);  //2
    console.log(`"🚗".length    : `, "🚗".length);  //2
    console.log("");

    console.log("⚡".split(""));    //['⚡'];
    console.log("⛔".split(""));    //['⛔'];
    console.log("😀".split(""));    //(2) ['\uD83D', '\uDE00'];
    console.log("🚗".split(""));    //(2) ['\uD83D', '\uDE97'];
    console.log("");

    //Los primeros emojis funcionan de la misma forma que vimos anteriormente con los otros caracteres, sin embargo a medida que fuimos necesitando más emojis, se fueron creando más y empezaron a crearse apartir de varios códigos unicode.

    //----------------------------------------------------------------------------------------------------

    console.log("%cEmojis combinados","font-weight: bold;");
    console.log("");

    /*  Teniendo en claro el concepto anterior, que mucho emojis son la convinación de otros, podemos ver estos casos particulares de esta forma
    */

    console.log(`"👨‍👩‍👧‍👦".length    : `, "👨‍👩‍👧‍👦".length);  //11
    console.log("");

    //Desestructuramos

    console.log(`..."👨‍👩‍👧‍👦"    : `, ..."👨‍👩‍👧‍👦");          //👨 ‍ 👩 ‍ 👧 ‍ 👦

    //Creamos un codigo de pegamento

    const pegamento = "\u{200d}";   //Este Code Point no tiene una representacion gráfica, pero es muy importante ya que con el podemos unir unos emojis con otros y así mismo separarlos
    console.log(pegamento);
    console.log("");

    console.log(`"👨‍👩‍👧‍👦".split(pegamento)  : `, "👨‍👩‍👧‍👦".split(pegamento));    //(4) ['👨', '👩', '👧', '👦']  => pegamento contiene el valor \u{200d} al no ser visible pero existir entre los emojis para unirlos, se puede divir la cadena entre eso.
    console.log("");

    //Ahora los unimos
    console.log(`['👨', '👩', '👧', '👦'].join("")              : `, ['👨', '👩', '👧', '👦'].join(""));                //👨👩👧👦
    console.log(`['👨', '👩', '👧', '👦'].join(pegamento)       : `, ['👨', '👩', '👧', '👦'].join(pegamento));         //👨‍👩‍👧‍👦
    console.log(`['👨', '👩', '👧'].join(pegamento)             : `, ['👨', '👩', '👧'].join(pegamento));               //👨‍👩‍👧
    console.log(`['👨', '👩'].join(pegamento)                   : `, ['👨', '👩'].join(pegamento));                     //👨‍👩

    //IGUALMENTE AQUÍ, EN VEZ DE USARLO PARA SEPARAR COMO ANTERIORMENTE, SE USÓ PARA UNIR O "PEGAR".

});