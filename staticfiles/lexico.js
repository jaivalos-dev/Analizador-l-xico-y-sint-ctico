const codigojs = document.getElementById("codigo2").textContent;

console.log(codigojs)

// Archivo principal

// expresionesRegulares
const expresionesRegulares = {
    numeros: /^\d+$/,
    identificadores: /^[a-zA-Z_]\w*$/,

    //Operadores
    //Asignacion
    asignacion: /^=$/,
    suma: /^\+$/,
    resta: /^\-$/,
    multiplicacion: /^\*$/,
    division: /^\$/,
    divisionentera: /^\/\/$/,
    modulo: /^%$/,
    parIzquierdo: /^\($/,
    parDerecho: /^\)$/,
    exponente: /^\*\*$/,
    //Igualdad
    igual: /^--$/,
    diferente: /^\/-$/,	
    //Relacionales
    menor: /^<$/,
    mayor: /^>$/,
    menorIgual: /^<=$/,
    mayorIgual: /^>=$/,

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
    // wholizy
    wholizy: /^(wholizy)$/,
    pesszy: /^(pesszy)$/,
    cuntonaizy: /^(cuntonaizy)$/,
    palabrasReservadas: /^(ofzy|else|while|for|function|var|let|const)$/,

};



//Función principal
function lexico(input) {
    const tokens = input
        .replace(/\s+/g, '') // Eliminar espacios en blanco
        .match(/(\d+|\-\-|\/\-|\+|\-|\*|\/|\(|\)|\^|[a-zA-Z_]\w*|\S)/g); // Identificar números, operadores, identificadores y otros caracteres

    const tokenTypes = tokens.map(token => {
        if (expresionesRegulares.numeros.test(token)) {
            return { type: 't_num', value: parseInt(token, 10) }; // Número
        } else if (expresionesRegulares.asignacion.test(token)) {
            return { type: 't_asignacion', value: token }; // Operador de asignación
        } else if (expresionesRegulares.suma.test(token)) {
            return { type: 't_suma', value: token }; // Operador de suma
        } else if (expresionesRegulares.resta.test(token)) {
            return { type: 't_resta', value: token }; // Operador de resta
        } else if (expresionesRegulares.multiplicacion.test(token)) {
            return { type: 't_multiplicacion', value: token }; // Operador de multiplicación
        } else if (expresionesRegulares.division.test(token)) {
            return { type: 't_division', value: token }; // Operador de división
        } else if (expresionesRegulares.divisionentera.test(token)) {
            return { type: 't_division_entera', value: token }; // Operador de división entera
        } else if (expresionesRegulares.modulo.test(token)) {
            return { type: 't_modulo', value: token }; // Operador de módulo
        } else if (expresionesRegulares.parIzquierdo.test(token)) {
            return { type: 't_par_izquierdo', value: token }; // Paréntesis izquierdo
        } else if (expresionesRegulares.parDerecho.test(token)) {
            return { type: 't_par_derecho', value: token }; // Paréntesis derecho
        } else if (expresionesRegulares.exponente.test(token)) {
            return { type: 't_exponente', value: token }; // Operador de potencia
        } else if (expresionesRegulares.igual.test(token)) {
            return { type: 't_igual', value: token }; // Operador de igualdad
        } else if (expresionesRegulares.diferente.test(token)) {
            return { type: 't_diferente', value: token }; // Operador de diferente
        } else if (expresionesRegulares.menor.test(token)) {
            return { type: 't_menor', value: token }; // Operador de menor que
        } else if (expresionesRegulares.mayor.test(token)) {
            return { type: 't_mayor', value: token }; // Operador de mayor que
        } else if (expresionesRegulares.menorIgual.test(token)) {
            return { type: 't_menor_igual', value: token }; // Operador de menor o igual que
        } else if (expresionesRegulares.mayorIgual.test(token)) {
            return { type: 't_mayor_igual', value: token }; // Operador de mayor o igual que
        } else if (expresionesRegulares.ontzy.test(token)) {
            return { type: 't_ontzy', value: token }; // Tipo de dato ontzy
        } else if (expresionesRegulares.fluetzy.test(token)) {
            return { type: 't_fluetzy', value: token }; // Tipo de dato fluetzy
        } else if (expresionesRegulares.cumplixzy.test(token)) {
            return { type: 't_cumplixzy', value: token }; // Tipo de dato cumplixzy
        } else if (expresionesRegulares.traizy.test(token)) {
            return { type: 't_traizy', value: token }; // Tipo de dato traizy
        } else if (expresionesRegulares.felsizy.test(token)) {
            return { type: 't_felsizy', value: token }; // Tipo de dato felsizy
        } else if (expresionesRegulares.strongzy.test(token)) {
            return { type: 't_strongzy', value: token }; // Tipo de dato strongzy
        } else if (expresionesRegulares.rewstrongzy.test(token)) {
            return { type: 't_rewstrongzy', value: token }; // Tipo de dato rew-strongzy
        } else if (expresionesRegulares.fstrongzy.test(token)) {
            return { type: 't_fstrongzy', value: token }; // Tipo de dato fstrongzy
        } else if (expresionesRegulares.lostzy.test(token)) {
            return { type: 't_lostzy', value: token }; // Tipo de dato lostzy
        } else if (expresionesRegulares.traplizy.test(token)) {
            return { type: 't_traplizy', value: token }; // Tipo de dato traplizy
        } else if (expresionesRegulares.sitzy.test(token)) {
            return { type: 't_sitzy', value: token }; // Tipo de dato sitzy
        } else if (expresionesRegulares.nunizy.test(token)) {
            return { type: 't_nunizy', value: token }; // Tipo de dato nunizy
        } else if (expresionesRegulares.ofzy.test(token)) {
            return { type: 't_ofzy', value: token }; // Sentencia ofzy
        } else if (expresionesRegulares.ilsizy.test(token)) {
            return { type: 't_ilsizy', value: token }; // Sentencia ilsizy
        } else if (expresionesRegulares.ilofzy.test(token)) {
            return { type: 't_ilofzy', value: token }; // Sentencia ilofzy
        } else if (expresionesRegulares.furzy.test(token)) {
            return { type: 't_furzy', value: token }; // Sentencia furzy
        } else if (expresionesRegulares.wholizy.test(token)) {
            return { type: 't_wholizy', value: token }; // Sentencia wholizy
        } else if (expresionesRegulares.pesszy.test(token)) {
            return { type: 't_pesszy', value: token }; // Sentencia pesszy
        } else if (expresionesRegulares.cuntonaizy.test(token)) {
            return { type: 't_cuntonaizy', value: token }; // Sentencia cuntonaizy
        } else if (expresionesRegulares.identificadores.test(token)) {
            return { type: 't_identificador', value: token }; // Identificador
        } else {
            return { type: 't_desconocido', value: token }; // Token desconocido
        }
    });

    return tokenTypes;
}

// Ejemplo de uso
const expresion = codigojs;
const tokens = lexico(expresion);
console.log(tokens);
