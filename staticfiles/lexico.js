const codigojs = document.getElementById("codigo2").textContent;

console.log(codigojs);

// Archivo principal

// expresionesRegulares
const expresionesRegulares = {
  //Números
  numeros: /^\d+$/,

  //Operadores
  //Asignacion
  asignacion: /^\=$/,
  suma: /^\+$/,
  resta: /^\-$/,
  multiplicacion: /^\*$/,
  division: /^\/$/,
  divisionentera: /^\/\/$/,
  modulo: /^\%$/,
  parIzquierdo: /^\($/,
  parDerecho: /^\)$/,
  exponente: /^\*\*$/,
  //Igualdad
  igual: /^\-\-$/,
  diferente: /^\/-$/,
  //Relacionales
  menor: /^\<$/,
  mayor: /^\>$/,
  menorIgual: /^\<\=$/,
  mayorIgual: /^\>\=$/,

  // Agrega palabras reservadas

  // Tipos de datos
  ontzy: /^(ontzy)$/,
  fluetzy: /^(fluetzy)$/,
  cumplixzy: /^(cumplixzy)$/,
  traizy: /^(traizy)$/,
  felsizy: /^(felsizy)$/,
  strongzy: /^(strongzy)$/,
  rewstrongzy: /^(rew-strongzy)$/,
  fstrongzy: /^(fstrongzy)$/,
  lostzy: /^(lostzy)$/,
  traplizy: /^(traplizy)$/,
  sitzy: /^(sitzy)$/,
  nunizy: /^(nunizy)$/,

  // Sentencias de control
  // condicional
  ofzy: /^(ofzy)$/,
  ilsizy: /^(ilsizy)$/,
  ilofzy: /^(ilofzy)$/,
  // ciclos
  // furzy
  furzy: /^(furzy)$/,
  in: /^(in)$/,
  // wholizy
  wholizy: /^(wholizy)$/,
  du: /^(du)$/,
  pesszy: /^(pesszy)$/,
  cuntonaizy: /^(cuntonaizy)$/,

  //Clases
  clesszy: /^(clesszy)$/,
  silfzy: /^(silfzy)$/,
  inicializador: /^(__onotzy__)$/,
  niwzy: /^(__niwzy__)$/,
  super: /^(super)$/,
  clszy: /^(clszy)$/,
  argumentos: /^(\*args)$/,
  kwargumentos: /^(\*\*kwargs)$/,
  ritarnzy: /^(ritarnzy)$/,
  admiracionC: /^(!)$/,
  admiracionA: /^(\¡)$/,
  cellzy: /^(__cellzy__)$/,

  //Simbolos faltantes
  dosPuntos: /^(\:)$/,
  puntoComa: /^(\;)$/,
  punto: /^(\.)$/,
  coma: /^(\,)$/,
  corcheteIzquierdo: /^(\[)$/,
  corcheteDerecho: /^(\])$/,
  llaveIzquierda: /^(\{)$/,
  llaveDerecha: /^(\})$/,
  barraInvertida: /^(\\)$/,
  barraVertical: /^(\|)$/,
  arroba: /^(\@)$/,
  numeral: /^(\#)$/,
  ampersand: /^(\&)$/,

  //Funciones faltantes
  prontzy: /^(prontzy)$/,
  rtszy: /^(rtszy)$/,
  fluetzy: /^(fluetzy)$/,
  lostzy: /^(lostzy)$/,
  taplizy: /^(taplizy)$/,
  doctzy: /^(doctzy)$/,
  ompatzy: /^(ompatzy)$/,
  endzy: /^(endzy)$/,
  ompurtzy: /^(ompurtzy)$/,
  briekzy: /^(briekzy)$/,
  rengizy: /^(rengizy)$/,
  difzy: /^(difzy)$/,
  dilzy: /^(dilzy)$/,
  ixciptzy: /^(ixciptzy)$/,
  troyzy: /^(troyzy)$/,
  eszy: /^(eszy)$/,
  fonellyzy: /^(fonellyzy)$/,
  frumzy: /^(frumzy)$/,
  mas_igual: /^(\+\=)$/,
  menos_igual: /^(\-\=)$/,

  //Identificadores
  identificadores: /^[a-zA-Z_]\w*$/,

  //comentario
  comentario: /^(")([a-zA-Z_0-9])(")$/,
};

//Función principal
function lexico(input) {
  const tokens = input
    .replace(/\s+/g, "") // Eliminar espacios en blanco
    .match(
        /(\d+|(")([a-zA-Z_0-9])(")|\*\*|\-\-|\/\-|\+\=|\+|\-\=|\-|(\*args)|(\*\*kwargs)|\*|\/|\(|\)|\^|\"|\!|\¡|\@|\#|\%|\&|\=|\[|\]|\{|\}|\\|\||\:|\;|\'|\<\=|\>\=|\<|\>|\.|\,|\?|\¿|(clesszy)|(difzy)|(__onotzy__)|(silfzy)|(wholizy)|(prontzy)|(furzy)|(in)|(du)|(ontzy)|(rtszy)|(fluetzy)|(cumplixzy)|(lostzy)|(taplizy)|(sitzy)|(doctzy)|(__niwzy__)|(super)|(clszy)|(ritarnzy)|(traplizy)|(__cellzy__)|(ompatzy)|(pesszy)|(endzy)|(ompurtzy)|(briekzy)|(rengizy)|(dilzy)|(ixciptzy)|(troyzy)|(eszy)|(fonellyzy)|(frumzy)|(felsizy)|(strongzy)|(rew-strongzy)|(fstrongzy)|(nunizy)|(traizy)|(ofzy)|(ilofzy)|(ilsizy)|(cuntonaizy)|[a-zA-Z_]\w*|\_|\S)/g
      ); // Identificar números, operadores, identificadores y otros caracteres

  const tokenTypes = tokens.map((token) => {
    if (expresionesRegulares.numeros.test(token)) {
      return { type: "t_num", value: parseInt(token, 10) }; // Número
    } else if (expresionesRegulares.comentario.test(token)) {
      return { type: "t_comentario", value: token }; // Comentario
    } else if (expresionesRegulares.asignacion.test(token)) {
      return { type: "t_asignacion", value: token }; // Operador de asignación
    } else if (expresionesRegulares.suma.test(token)) {
      return { type: "t_suma", value: token }; // Operador de suma
    } else if (expresionesRegulares.resta.test(token)) {
      return { type: "t_resta", value: token }; // Operador de resta
    } else if (expresionesRegulares.multiplicacion.test(token)) {
      return { type: "t_multiplicacion", value: token }; // Operador de multiplicación
    } else if (expresionesRegulares.division.test(token)) {
      return { type: "t_division", value: token }; // Operador de división
    } else if (expresionesRegulares.divisionentera.test(token)) {
      return { type: "t_division_entera", value: token }; // Operador de división entera
    } else if (expresionesRegulares.modulo.test(token)) {
      return { type: "t_modulo", value: token }; // Operador de módulo
    } else if (expresionesRegulares.parIzquierdo.test(token)) {
      return { type: "t_par_izquierdo", value: token }; // Paréntesis izquierdo
    } else if (expresionesRegulares.parDerecho.test(token)) {
      return { type: "t_par_derecho", value: token }; // Paréntesis derecho
    } else if (expresionesRegulares.exponente.test(token)) {
      return { type: "t_exponente", value: token }; // Operador de potencia
    } else if (expresionesRegulares.igual.test(token)) {
      return { type: "t_igual", value: token }; // Operador de igualdad
    } else if (expresionesRegulares.diferente.test(token)) {
      return { type: "t_diferente", value: token }; // Operador de diferente
    } else if (expresionesRegulares.menor.test(token)) {
      return { type: "t_menor", value: token }; // Operador de menor que
    } else if (expresionesRegulares.mayor.test(token)) {
      return { type: "t_mayor", value: token }; // Operador de mayor que
    } else if (expresionesRegulares.menorIgual.test(token)) {
      return { type: "t_menor_igual", value: token }; // Operador de menor o igual que
    } else if (expresionesRegulares.mayorIgual.test(token)) {
      return { type: "t_mayor_igual", value: token }; // Operador de mayor o igual que
    } else if (expresionesRegulares.ontzy.test(token)) {
      return { type: "t_ontzy", value: token }; // Tipo de dato ontzy
    } else if (expresionesRegulares.fluetzy.test(token)) {
      return { type: "t_fluetzy", value: token }; // Tipo de dato fluetzy
    } else if (expresionesRegulares.cumplixzy.test(token)) {
      return { type: "t_cumplixzy", value: token }; // Tipo de dato cumplixzy
    } else if (expresionesRegulares.traizy.test(token)) {
      return { type: "t_traizy", value: token }; // Tipo de dato traizy
    } else if (expresionesRegulares.felsizy.test(token)) {
      return { type: "t_felsizy", value: token }; // Tipo de dato felsizy
    } else if (expresionesRegulares.strongzy.test(token)) {
      return { type: "t_strongzy", value: token }; // Tipo de dato strongzy
    } else if (expresionesRegulares.rewstrongzy.test(token)) {
      return { type: "t_rewstrongzy", value: token }; // Tipo de dato rew-strongzy
    } else if (expresionesRegulares.fstrongzy.test(token)) {
      return { type: "t_fstrongzy", value: token }; // Tipo de dato fstrongzy
    } else if (expresionesRegulares.lostzy.test(token)) {
      return { type: "t_lostzy", value: token }; // Tipo de dato lostzy
    } else if (expresionesRegulares.traplizy.test(token)) {
      return { type: "t_traplizy", value: token }; // Tipo de dato traplizy
    } else if (expresionesRegulares.sitzy.test(token)) {
      return { type: "t_sitzy", value: token }; // Tipo de dato sitzy
    } else if (expresionesRegulares.nunizy.test(token)) {
      return { type: "t_nunizy", value: token }; // Tipo de dato nunizy
    } else if (expresionesRegulares.ofzy.test(token)) {
      return { type: "t_ofzy", value: token }; // Sentencia ofzy
    } else if (expresionesRegulares.ilsizy.test(token)) {
      return { type: "t_ilsizy", value: token }; // Sentencia ilsizy
    } else if (expresionesRegulares.ilofzy.test(token)) {
      return { type: "t_ilofzy", value: token }; // Sentencia ilofzy
    } else if (expresionesRegulares.furzy.test(token)) {
      return { type: "t_furzy", value: token }; // Sentencia furzy
    } else if (expresionesRegulares.in.test(token)) {
      return { type: "t_in", value: token };
    } else if (expresionesRegulares.wholizy.test(token)) {
      return { type: "t_wholizy", value: token }; // Sentencia wholizy
    } else if (expresionesRegulares.du.test(token)) {
      return { type: "t_du", value: token };
    } else if (expresionesRegulares.pesszy.test(token)) {
      return { type: "t_pesszy", value: token }; // Sentencia pesszy
    } else if (expresionesRegulares.cuntonaizy.test(token)) {
      return { type: "t_cuntonaizy", value: token }; // Sentencia cuntonaizy
    } else if (expresionesRegulares.clesszy.test(token)) {
      return { type: "t_clesszy", value: token }; // Clase clesszy
    } else if (expresionesRegulares.silfzy.test(token)) {
      return { type: "t_silfzy", value: token }; // Clase silfzy
    } else if (expresionesRegulares.inicializador.test(token)) {
      return { type: "t_inicializador", value: token }; // Inicializador
    } else if (expresionesRegulares.niwzy.test(token)) {
      return { type: "t_niwzy", value: token }; // Palabra reservada niwzy
    } else if (expresionesRegulares.super.test(token)) {
      return { type: "t_super", value: token }; // Palabra reservada super
    } else if (expresionesRegulares.clszy.test(token)) {
      return { type: "t_clszy", value: token }; // Palabra reservada cls
    } else if (expresionesRegulares.argumentos.test(token)) {
      return { type: "t_argumentos", value: token }; // Argumentos
    } else if (expresionesRegulares.kwargumentos.test(token)) {
      return { type: "t_kwargumentos", value: token }; // Argumentos con clave
    } else if (expresionesRegulares.ritarnzy.test(token)) {
      return { type: "t_ritarnzy", value: token }; // Palabra reservada ritarnzy
    } else if (expresionesRegulares.admiracionA.test(token)) {
      return { type: "t_admiracionA", value: token }; // Signo de admiración
    } else if (expresionesRegulares.admiracionC.test(token)) {
      return { type: "t_admiracionC", value: token }; // Signo de admiración
    } else if (expresionesRegulares.cellzy.test(token)) {
      return { type: "t_cellzy", value: token }; // Inicializador cellzy
    } else if (expresionesRegulares.dosPuntos.test(token)) {
      return { type: "t_dos_puntos", value: token }; // Dos puntos
    } else if (expresionesRegulares.puntoComa.test(token)) {
      return { type: "t_punto_coma", value: token }; // Punto y coma
    } else if (expresionesRegulares.punto.test(token)) {
      return { type: "t_punto", value: token }; // Punto
    } else if (expresionesRegulares.coma.test(token)) {
      return { type: "t_coma", value: token }; // Coma
    } else if (expresionesRegulares.corcheteIzquierdo.test(token)) {
      return { type: "t_corchete_izquierdo", value: token }; // Corchete izquierdo
    } else if (expresionesRegulares.corcheteDerecho.test(token)) {
      return { type: "t_corchete_derecho", value: token }; // Corchete derecho
    } else if (expresionesRegulares.llaveIzquierda.test(token)) {
      return { type: "t_llave_izquierda", value: token }; // Llave izquierda
    } else if (expresionesRegulares.llaveDerecha.test(token)) {
      return { type: "t_llave_derecha", value: token }; // Llave derecha
    } else if (expresionesRegulares.barraInvertida.test(token)) {
      return { type: "t_barra_invertida", value: token }; // Barra invertida
    } else if (expresionesRegulares.barraVertical.test(token)) {
      return { type: "t_barra_vertical", value: token }; // Barra vertical
    } else if (expresionesRegulares.arroba.test(token)) {
      return { type: "t_arroba", value: token }; // Arroba
    } else if (expresionesRegulares.numeral.test(token)) {
      return { type: "t_numeral", value: token }; // Numeral
    } else if (expresionesRegulares.ampersand.test(token)) {
      return { type: "t_ampersand", value: token }; // Ampersand
    } else if (expresionesRegulares.prontzy.test(token)) {
        return { type: "t_prontzy", value: token }; // Función prontzy
    } else if (expresionesRegulares.rtszy.test(token)) {
        return { type: "t_rtszy", value: token }; // Función rtszy
    } else if (expresionesRegulares.fluetzy.test(token)) {
        return { type: "t_fluetzy", value: token }; // Función fluetzy
    } else if (expresionesRegulares.lostzy.test(token)) {
        return { type: "t_lostzy", value: token }; // Función lostzy
    } else if (expresionesRegulares.taplizy.test(token)) {
        return { type: "t_taplizy", value: token }; // Función taplizy
    } else if (expresionesRegulares.doctzy.test(token)) {
        return { type: "t_doctzy", value: token }; // Función doctzy
    } else if (expresionesRegulares.ompatzy.test(token)) {
        return { type: "t_ompatzy", value: token }; // Función ompatzy
    } else if (expresionesRegulares.endzy.test(token)) {
        return { type: "t_endzy", value: token }; // Función endzy
    } else if (expresionesRegulares.ompurtzy.test(token)) {
        return { type: "t_ompurtzy", value: token }; // Función ompurtzy
    } else if (expresionesRegulares.briekzy.test(token)) {
        return { type: "t_briekzy", value: token }; // Función briekzy
    } else if (expresionesRegulares.rengizy.test(token)) {
        return { type: "t_rengizy", value: token }; // Función rengizy
    } else if (expresionesRegulares.difzy.test(token)) {
        return { type: "t_difzy", value: token }; // Función difzy
    } else if (expresionesRegulares.dilzy.test(token)) {
        return { type: "t_dilzy", value: token }; // Función dilzy
    } else if (expresionesRegulares.ixciptzy.test(token)) {
        return { type: "t_ixciptzy", value: token }; // Función ixciptzy
    } else if (expresionesRegulares.troyzy.test(token)) {
        return { type: "t_troyzy", value: token }; // Función troyzy
    } else if (expresionesRegulares.eszy.test(token)) {
        return { type: "t_eszy", value: token }; // Función eszy
    } else if (expresionesRegulares.fonellyzy.test(token)) {
        return { type: "t_fonellyzy", value: token }; // Función fonellyzy
    } else if (expresionesRegulares.frumzy.test(token)) {
        return { type: "t_frumzy", value: token }; // Función frumzy
    } else if (expresionesRegulares.mas_igual.test(token)) {
        return { type: "t_mas_igual", value: token }; // Operador de suma y asignación
    } else if (expresionesRegulares.menos_igual.test(token)) {
        return { type: "t_menos_igual", value: token }; // Operador de resta y asignación
    } else if (expresionesRegulares.identificadores.test(token)) {
      return { type: "t_identificador", value: token }; // Identificador
    } else {
      return { type: "t_desconocido", value: token }; // Token desconocido
    }
  });

  return tokenTypes;
}

// Ejemplo de uso
const expresion = codigojs;
const tokens = lexico(expresion);
console.log(tokens);
