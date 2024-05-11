const codigojs = document.getElementById("codigo2").textContent;

console.log(codigojs);

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
  ofzy: /^(ofzy)$/i,
  ilsizy: /^(ilsizy)$/i,
  ilofzy: /^(ilofzy)$/i,
  // ciclos
  // furzy
  furzy: /^(furzy)$/i,
  in: /^(in)$/i,
  // wholizy
  wholizy: /^(wholizy)$/i,
  du: /^(du)$/i,
  pesszy: /^(pesszy)$/i,
  cuntonaizy: /^(cuntonaizy)$/i,

  //Clases
  clesszy: /^(clesszy)$/i,
  silfzy: /^(silfzy)$/i,
  inicializador: /^(__onotzy__)$/i,
  niwzy: /^(__niwzy__)$/i,
  super: /^(super)$/i,
  clszy: /^(clszy)$/i,
  argumentos: /^(\*args)$/i,
  kwargumentos: /^(\*\*kwargs)$/i,
  ritarnzy: /^(ritarnzy)$/i,
  admiracionC: /^(!)$/i,
  admiracionA: /^(\¡)$/i,
  cellzy: /^(__cellzy__)$/i,

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

  //string
  string: /^\"[a-zA-Z0-9áéíóúÁÉÍÓÚüÜ,.:;!?¡¿/\s]*\"$/,

  //comentario
  comentario: /^\$\$[a-zA-Z0-9áéíóúÁÉÍÓÚüÜ,.:;!?¡¿/\s]*$/,

  saltoLinea: /^()$/,

  palabrasReservadasmal: /[a-zA-Z0-9]\bzy$/i,
};

function lexico(input) {

  // Dividir la entrada en líneas
  const lines = input.split('\n');

  console.log(lines)

  const tokens = input
    .replace(/\s+/g, "") // Eliminar espacios en blanco
    .match(
      /(\d+|\$\$[a-zA-Z0-9áéíóúÁÉÍÓÚüÜ,.:;!?¡¿/\s]*|\"[a-zA-Z0-9áéíóúÁÉÍÓÚüÜ,.:;!?¡¿/\s]*\"|\*\*|\-\-|\/\-|\+\=|\+|\-\=|\-|(\*args)|(\*\*kwargs)|\*|\/|\(|\)|\^|\"|\!|\¡|\@|\#|\%|\&|\=|\[|\]|\{|\}|\\|\||\:|\;|\'|\<\=|\>\=|\<|\>|\.|\,|\?|\¿|(clesszy)|(difzy)|(__onotzy__)|(silfzy)|(wholizy)|(prontzy)|(furzy)|(in)|(du)|(ontzy)|(rtszy)|(fluetzy)|(cumplixzy)|(lostzy)|(taplizy)|(sitzy)|(doctzy)|(__niwzy__)|(super)|(clszy)|(ritarnzy)|(traplizy)|(__cellzy__)|(ompatzy)|(pesszy)|(endzy)|(ompurtzy)|(briekzy)|(rengizy)|(dilzy)|(ixciptzy)|(troyzy)|(eszy)|(fonellyzy)|(frumzy)|(felsizy)|(strongzy)|(rew-strongzy)|(fstrongzy)|(nunizy)|(traizy)|(ofzy)|(ilofzy)|(ilsizy)|(cuntonaizy)|[a-zA-Z_]\w*|\_|\S)/g
    ); // Identificar números, operadores, identificadores y otros caracteres
  // Dividir cada línea en tokens y registrar el número de línea para cada token
  const tokensWithLine = lines.flatMap((line, lineNumber) => {
    return line.match(/(\d+|\$\$[a-zA-Z0-9áéíóúÁÉÍÓÚüÜ,.:;!?¡¿/\s]*|\"[a-zA-Z0-9áéíóúÁÉÍÓÚüÜ,.:;!?¡¿/\s]*\"|\*\*|\-\-|\/\-|\+\=|\+|\-\=|\-|(\*args)|(\*\*kwargs)|\*|\/|\(|\)|\^|\"|\!|\¡|\@|\#|\%|\&|\=|\[|\]|\{|\}|\\|\||\:|\;|\'|\<\=|\>\=|\<|\>|\.|\,|\?|\¿|\¬|(clesszy)|(difzy)|(__onotzy__)|(silfzy)|(wholizy)|(prontzy)|(furzy)|(in)|(du)|(ontzy)|(rtszy)|(fluetzy)|(cumplixzy)|(lostzy)|(taplizy)|(sitzy)|(doctzy)|(__niwzy__)|(super)|(clszy)|(ritarnzy)|(traplizy)|(__cellzy__)|(ompatzy)|(pesszy)|(endzy)|(ompurtzy)|(briekzy)|(rengizy)|(dilzy)|(ixciptzy)|(troyzy)|(eszy)|(fonellyzy)|(frumzy)|(felsizy)|(strongzy)|(rew-strongzy)|(fstrongzy)|(nunizy)|(traizy)|(ofzy)|(ilofzy)|(ilsizy)|(cuntonaizy)|[a-zA-Z_]\w*|\_||\S)/g).map(token => ({ token, lineNumber: lineNumber + 1 }));
  });

  // Identificar el tipo de cada token y retornarlos
  const tokenTypes = tokensWithLine.map(({ token, lineNumber }) => {
    if (expresionesRegulares.numeros.test(token)) {
      return { type: "<t_num>", value: parseInt(token, 10), lineNumber }; // Número
    } else if (expresionesRegulares.comentario.test(token)) {
      return { type: "<t_comentario>", value: token, lineNumber }; // Comentario
    } else if (expresionesRegulares.string.test(token)) {
      return { type: "<t_string>", value: token, lineNumber }; // Comentario
    } else if (expresionesRegulares.asignacion.test(token)) {
      return { type: "<t_asignacion>", value: token, lineNumber }; // Operador de asignación
    } else if (expresionesRegulares.suma.test(token)) {
      return { type: "<t_suma>", value: token, lineNumber }; // Operador de suma
    } else if (expresionesRegulares.resta.test(token)) {
      return { type: "<t_resta>", value: token, lineNumber }; // Operador de resta
    } else if (expresionesRegulares.multiplicacion.test(token)) {
      return { type: "<t_multiplicacion>", value: token, lineNumber }; // Operador de multiplicación
    } else if (expresionesRegulares.division.test(token)) {
      return { type: "<t_division>", value: token, lineNumber }; // Operador de división
    } else if (expresionesRegulares.divisionentera.test(token)) {
      return { type: "<t_division_entera>", value: token, lineNumber }; // Operador de división entera
    } else if (expresionesRegulares.modulo.test(token)) {
      return { type: "<t_modulo>", value: token, lineNumber }; // Operador de módulo
    } else if (expresionesRegulares.parIzquierdo.test(token)) {
      return { type: "<t_par_izquierdo>", value: token, lineNumber }; // Paréntesis izquierdo
    } else if (expresionesRegulares.parDerecho.test(token)) {
      return { type: "<t_par_derecho>", value: token, lineNumber }; // Paréntesis derecho
    } else if (expresionesRegulares.exponente.test(token)) {
      return { type: "<t_exponente>", value: token, lineNumber }; // Operador de potencia
    } else if (expresionesRegulares.igual.test(token)) {
      return { type: "<t_igual>", value: token, lineNumber }; // Operador de igualdad
    } else if (expresionesRegulares.diferente.test(token)) {
      return { type: "<t_diferente>", value: token, lineNumber }; // Operador de diferente
    } else if (expresionesRegulares.menor.test(token)) {
      return { type: "<t_menor>", value: token, lineNumber }; // Operador de menor que
    } else if (expresionesRegulares.mayor.test(token)) {
      return { type: "<t_mayor>", value: token, lineNumber }; // Operador de mayor que
    } else if (expresionesRegulares.menorIgual.test(token)) {
      return { type: "<t_menor_igual>", value: token, lineNumber }; // Operador de menor o igual que
    } else if (expresionesRegulares.mayorIgual.test(token)) {
      return { type: "<t_mayor_igual>", value: token, lineNumber }; // Operador de mayor o igual que
    } else if (expresionesRegulares.ontzy.test(token)) {
      return { type: "<t_ontzy>", value: token, lineNumber }; // Tipo de dato ontzy
    } else if (expresionesRegulares.fluetzy.test(token)) {
      return { type: "<t_fluetzy>", value: token, lineNumber }; // Tipo de dato fluetzy
    } else if (expresionesRegulares.cumplixzy.test(token)) {
      return { type: "<t_cumplixzy>", value: token, lineNumber }; // Tipo de dato cumplixzy
    } else if (expresionesRegulares.traizy.test(token)) {
      return { type: "<t_traizy>", value: token, lineNumber }; // Tipo de dato traizy
    } else if (expresionesRegulares.felsizy.test(token)) {
      return { type: "<t_felsizy>", value: token, lineNumber }; // Tipo de dato felsizy
    } else if (expresionesRegulares.strongzy.test(token)) {
      return { type: "<t_strongzy>", value: token, lineNumber }; // Tipo de dato strongzy
    } else if (expresionesRegulares.rewstrongzy.test(token)) {
      return { type: "<t_rewstrongzy>", value: token, lineNumber }; // Tipo de dato rew-strongzy
    } else if (expresionesRegulares.fstrongzy.test(token)) {
      return { type: "<t_fstrongzy>", value: token, lineNumber }; // Tipo de dato fstrongzy
    } else if (expresionesRegulares.lostzy.test(token)) {
      return { type: "<t_lostzy>", value: token, lineNumber }; // Tipo de dato lostzy
    } else if (expresionesRegulares.traplizy.test(token)) {
      return { type: "<t_traplizy>", value: token, lineNumber }; // Tipo de dato traplizy
    } else if (expresionesRegulares.sitzy.test(token)) {
      return { type: "<t_sitzy>", value: token, lineNumber }; // Tipo de dato sitzy
    } else if (expresionesRegulares.nunizy.test(token)) {
      return { type: "<t_nunizy>", value: token, lineNumber }; // Tipo de dato nunizy
    } else if (expresionesRegulares.ofzy.test(token)) {
      return { type: "<t_ofzy>", value: token, lineNumber }; // Sentencia ofzy
    } else if (expresionesRegulares.ilsizy.test(token)) {
      return { type: "<t_ilsizy>", value: token, lineNumber }; // Sentencia ilsizy
    } else if (expresionesRegulares.ilofzy.test(token)) {
      return { type: "<t_ilofzy>", value: token, lineNumber }; // Sentencia ilofzy
    } else if (expresionesRegulares.furzy.test(token)) {
      return { type: "<t_furzy>", value: token, lineNumber }; // Sentencia furzy
    } else if (expresionesRegulares.in.test(token)) {
      return { type: "<t_in>", value: token, lineNumber };
    } else if (expresionesRegulares.wholizy.test(token)) {
      return { type: "<t_wholizy>", value: token, lineNumber }; // Sentencia wholizy
    } else if (expresionesRegulares.du.test(token)) {
      return { type: "<t_du>", value: token, lineNumber };
    } else if (expresionesRegulares.pesszy.test(token)) {
      return { type: "<t_pesszy>", value: token, lineNumber }; // Sentencia pesszy
    } else if (expresionesRegulares.cuntonaizy.test(token)) {
      return { type: "<t_cuntonaizy>", value: token, lineNumber }; // Sentencia cuntonaizy
    } else if (expresionesRegulares.clesszy.test(token)) {
      return { type: "<t_clesszy>", value: token, lineNumber }; // Clase clesszy
    } else if (expresionesRegulares.silfzy.test(token)) {
      return { type: "<t_silfzy>", value: token, lineNumber }; // Clase silfzy
    } else if (expresionesRegulares.inicializador.test(token)) {
      return { type: "<t_inicializador>", value: token, lineNumber }; // Inicializador
    } else if (expresionesRegulares.niwzy.test(token)) {
      return { type: "<t_niwzy>", value: token, lineNumber }; // Palabra reservada niwzy
    } else if (expresionesRegulares.super.test(token)) {
      return { type: "<t_super>", value: token, lineNumber }; // Palabra reservada super
    } else if (expresionesRegulares.clszy.test(token)) {
      return { type: "<t_clszy>", value: token, lineNumber }; // Palabra reservada cls
    } else if (expresionesRegulares.argumentos.test(token)) {
      return { type: "<t_argumentos>", value: token, lineNumber }; // Argumentos
    } else if (expresionesRegulares.kwargumentos.test(token)) {
      return { type: "<t_kwargumentos>", value: token, lineNumber }; // Argumentos con clave
    } else if (expresionesRegulares.ritarnzy.test(token)) {
      return { type: "<t_ritarnzy>", value: token, lineNumber }; // Palabra reservada ritarnzy
    } else if (expresionesRegulares.admiracionA.test(token)) {
      return { type: "<t_admiracionA>", value: token, lineNumber }; // Signo de admiración
    } else if (expresionesRegulares.admiracionC.test(token)) {
      return { type: "<t_admiracionC>", value: token, lineNumber }; // Signo de admiración
    } else if (expresionesRegulares.cellzy.test(token)) {
      return { type: "<t_cellzy>", value: token, lineNumber }; // Inicializador cellzy
    } else if (expresionesRegulares.dosPuntos.test(token)) {
      return { type: "<t_dos_puntos>", value: token, lineNumber }; // Dos puntos
    } else if (expresionesRegulares.puntoComa.test(token)) {
      return { type: "<t_punto_coma>", value: token, lineNumber }; // Punto y coma
    } else if (expresionesRegulares.punto.test(token)) {
      return { type: "<t_punto>", value: token, lineNumber }; // Punto
    } else if (expresionesRegulares.coma.test(token)) {
      return { type: "<t_coma>", value: token, lineNumber }; // Coma
    } else if (expresionesRegulares.corcheteIzquierdo.test(token)) {
      return { type: "<t_corchete_izquierdo>", value: token, lineNumber }; // Corchete izquierdo
    } else if (expresionesRegulares.corcheteDerecho.test(token)) {
      return { type: "<t_corchete_derecho>", value: token, lineNumber }; // Corchete derecho
    } else if (expresionesRegulares.llaveIzquierda.test(token)) {
      return { type: "<t_llave_izquierda>", value: token, lineNumber }; // Llave izquierda
    } else if (expresionesRegulares.llaveDerecha.test(token)) {
      return { type: "<t_llave_derecha>", value: token, lineNumber }; // Llave derecha
    } else if (expresionesRegulares.barraInvertida.test(token)) {
      return { type: "<t_barra_invertida>", value: token, lineNumber }; // Barra invertida
    } else if (expresionesRegulares.barraVertical.test(token)) {
      return { type: "<t_barra_vertical>", value: token, lineNumber }; // Barra vertical
    } else if (expresionesRegulares.arroba.test(token)) {
      return { type: "<t_arroba>", value: token, lineNumber }; // Arroba
    } else if (expresionesRegulares.numeral.test(token)) {
      return { type: "<t_numeral>", value: token, lineNumber }; // Numeral
    } else if (expresionesRegulares.ampersand.test(token)) {
      return { type: "<t_ampersand>", value: token, lineNumber }; // Ampersand
    } else if (expresionesRegulares.prontzy.test(token)) {
      return { type: "<t_prontzy>", value: token, lineNumber }; // Función prontzy
    } else if (expresionesRegulares.rtszy.test(token)) {
      return { type: "<t_rtszy>", value: token, lineNumber }; // Función rtszy
    } else if (expresionesRegulares.fluetzy.test(token)) {
      return { type: "<t_fluetzy>", value: token, lineNumber }; // Función fluetzy
    } else if (expresionesRegulares.lostzy.test(token)) {
      return { type: "<t_lostzy>", value: token, lineNumber }; // Función lostzy
    } else if (expresionesRegulares.taplizy.test(token)) {
      return { type: "<t_taplizy>", value: token }; // Función taplizy
    } else if (expresionesRegulares.doctzy.test(token)) {
      return { type: "<t_doctzy>", value: token, lineNumber }; // Función doctzy
    } else if (expresionesRegulares.ompatzy.test(token)) {
      return { type: "<t_ompatzy>", value: token, lineNumber }; // Función ompatzy
    } else if (expresionesRegulares.endzy.test(token)) {
      return { type: "<t_endzy>", value: token, lineNumber }; // Función endzy
    } else if (expresionesRegulares.ompurtzy.test(token)) {
      return { type: "<t_ompurtzy>", value: token, lineNumber }; // Función ompurtzy
    } else if (expresionesRegulares.briekzy.test(token)) {
      return { type: "<t_briekzy>", value: token, lineNumber }; // Función briekzy
    } else if (expresionesRegulares.rengizy.test(token)) {
      return { type: "<t_rengizy>", value: token, lineNumber }; // Función rengizy
    } else if (expresionesRegulares.difzy.test(token)) {
      return { type: "<t_difzy>", value: token, lineNumber }; // Función difzy
    } else if (expresionesRegulares.dilzy.test(token)) {
      return { type: "<t_dilzy>", value: token, lineNumber }; // Función dilzy
    } else if (expresionesRegulares.ixciptzy.test(token)) {
      return { type: "<t_ixciptzy>", value: token, lineNumber }; // Función ixciptzy
    } else if (expresionesRegulares.troyzy.test(token)) {
      return { type: "<t_troyzy>", value: token, lineNumber }; // Función troyzy
    } else if (expresionesRegulares.eszy.test(token)) {
      return { type: "<t_eszy>", value: token, lineNumber }; // Función eszy
    } else if (expresionesRegulares.fonellyzy.test(token)) {
      return { type: "<t_fonellyzy>", value: token, lineNumber }; // Función fonellyzy
    } else if (expresionesRegulares.frumzy.test(token)) {
      return { type: "<t_frumzy>", value: token, lineNumber }; // Función frumzy
    } else if (expresionesRegulares.mas_igual.test(token)) {
      return { type: "<t_mas_igual>", value: token, lineNumber }; // Operador de suma y asignación
    } else if (expresionesRegulares.menos_igual.test(token)) {
      return { type: "<t_menos_igual>", value: token, lineNumber }; // Operador de resta y asignación
    } else if (expresionesRegulares.identificadores.test(token)) {
      // Verificar si la palabra termina con "zy"
      // if (/[a-zA-Z0-9]\bzy$/i.test(token)) {
      //     return { type: "<t_reservadamal>", value: token, lineNumber }; // Palabra reservada mal escrita
      // } else {
      //     return { type: "<t_identificador>", value: token, lineNumber }; // Identificador válido
      // } // Identificador
      console.log(token)
      if (token.endsWith("zy")) {
        return { type: "<t_reservada_mal>", value: token, lineNumber };
      } else {
        return { type: "<t_identificador>", value: token, lineNumber };
      }
    } else if (expresionesRegulares.saltoLinea.test(token)) {
      return { type: "<t_salto_linea>", value: token, lineNumber }; // Salto de línea
    } else if (expresionesRegulares.palabrasReservadasmal.test(token)) {
      return { type: "<t_reservada_mal>", value: token, lineNumber }; // Comentario
    }
    else {
      return { type: "<t_desconocido>", value: token, lineNumber, coment: "Caracter no reconocido en el alfabeto del lenguaje." }; // Token desconocido
    }
  });

  return tokenTypes;
}


// Ejemplo de uso
const expresion = codigojs;
const tokens = lexico(expresion);
console.log(tokens);

function analisisLexico() {
  const codigo2 = document.getElementById('codigo2');


  // Obtener el contenido del textarea
  const codigojs = codigo2.textContent;

  console.log(codigojs);

  // Realizar el análisis léxico
  const tokens = lexico(codigojs);

  // Crear una tabla para mostrar los tokens y sus números de línea
  // const tokensTable = document.createElement('table');

  const tokensBuenos = tokens.filter(token => (token.type !== "<t_desconocido>") && (token.type !== "<t_salto_linea>") && (token.type !== "<t_reservada_mal>"));
  const tokensBuenosTable = document.createElement('table')

  tokensBuenosTable.innerHTML = `
      <thead>
          <tr>
              <th>Línea</th>
              <th>Token</th>
              <th>Tipo</th>
          </tr>
      </thead>
      <tbody id="tokens-body">
      </tbody>
  `;

  // Obtener el cuerpo de la tabla
  const tokensBody = tokensBuenosTable.querySelector('#tokens-body');

  // Llenar la tabla con los tokens y sus números de línea
  tokensBuenos.forEach(token => {
    const row = tokensBody.insertRow();
    const cell1 = row.insertCell();
    const cell2 = row.insertCell();
    const cell3 = row.insertCell();
    cell1.textContent = token.lineNumber; // Utiliza token.lineNumber en lugar de token.linea
    cell2.textContent = token.value.toString(); // Convertir a cadena de texto
    cell3.textContent = token.type;
  });

  // Mostrar la tabla en el div "tokens-container"
  const tokensContainer = document.getElementById('tokens-container');
  tokensContainer.innerHTML = ''; // Limpiar el contenido previo
  tokensContainer.appendChild(tokensBuenosTable);




  // Tabla de errores
  const tokensError = tokens.filter(token => (token.type === "<t_desconocido>") || (token.type === "<t_reservada_mal>"));
  const tokensErrorTable = document.createElement('table')

  tokensErrorTable.innerHTML = `
<thead>
    <tr>
        <th>Línea</th>
        <th>Token</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
</thead>
<tbody id="tokens-body-error">
</tbody>
`;

  const tokensBodyError = tokensErrorTable.querySelector('#tokens-body-error');

  tokensError.forEach(token => {
    const row = tokensBodyError.insertRow();
    const cell1 = row.insertCell();
    const cell2 = row.insertCell();
    const cell3 = row.insertCell();
    const cell4 = row.insertCell();
    cell1.textContent = token.lineNumber; // Utiliza token.lineNumber en lugar de token.linea
    cell2.textContent = token.value.toString(); // Convertir a cadena de texto
    cell3.textContent = token.type;
    cell4.textContent = token.coment;
  });

  const tokensContainerError = document.getElementById('tokens-container-error');
  tokensContainerError.innerHTML = ''; // Limpiar el contenido previo
  tokensContainerError.appendChild(tokensErrorTable);


  //Creamos la cadena
  const tokensCadena = tokens.map(token => token.type).join(' ');
  const tokensCadenaDiv = document.getElementById('tokens-cadena');
  tokensCadenaDiv.textContent = tokensCadena;
}
