
const codigojs = document.getElementById("codigo2").textContent;

const TokenType = {
    PALABRARESERVADA: 'PALABRARESERVADA',
    ERROR: 'ERROR',
    ESTRUCTURA: 'ESTRUCTURA'
};

class Token {
    constructor(type, value, linea) {
        this.type = type;
        this.value = value;
        this.linea = linea;
    }
}

function analizadorcitoSintactico(code) {
    console.log("Código a analizar:", code);
    const lines = code.split('\n'); // Divide el código en líneas
    let errores = []; // Almacena los errores encontrados
    let isCorrect = true; // Indica si el código es sintácticamente correcto
    let stack = []; // Pila para manejar las estructuras anidadas
    let resultado = []; // Almacena las estructuras correctas
  
    // Definición de las estructuras a analizar
    const structures = [
        {
            keyword: "prontzy", // Palabra clave para la estructura
            regex: /^prontzy!"[^"]*"¡$/, // Expresión regular para validar la sintaxis
            startLine: null, // Línea donde comienza la estructura
            endLine: null, // Línea donde termina la estructura
            errorMessage: "Error en la estructura 'prontzy' en la línea"
        },
    ];
  
    const variableDeclarations = [
        {
            keyword: "variable",
            regex: /^[a-zA-Z_$][a-zA-Z0-9_$]*\s*=\s*(?:[^;]+|\w+)\s*;$/, 
            errorMessage: "Error en la declaración de 'variable' en la línea"
        },
    ];
    
  

  
    // Definición de las estructuras de print y println a analizar
    const printStatements = [
        {
            keyword: "grunido", // Equivalente a "print"
            regex: /^grunido\s*\([^)]*\)\s*;$/, // Expresión regular para validar la sintaxis de print
            errorMessage: "Error en la declaración de 'grunido' en la línea"
        },
        {
            keyword: "mordisco", // Equivalente a "println"
            regex: /^mordisco\s*\([^)]*\)\s*;$/, // Expresión regular para validar la sintaxis de println
            errorMessage: "Error en la declaración de 'mordisco' en la línea"
        }
    ];
  
    // Itera sobre cada línea del código
    lines.forEach((line, index) => {
        const trimmedLine = line.trim(); // Elimina espacios en blanco al inicio y final de la línea
  
        let matched = false; // Indica si la línea coincide con alguna estructura o declaración de variable
  
        // Verifica si la línea coincide con alguna estructura
        structures.forEach(structure => {
            if (trimmedLine.startsWith(structure.keyword)) { // Verifica si la línea comienza con la palabra clave de una estructura
                matched = true;
                if (structure.startLine === null) { // Marca la línea de inicio de la estructura
                    structure.startLine = index + 1;
                }
                if (!structure.regex.test(trimmedLine)) { // Verifica si la línea cumple con la sintaxis de la estructura
                    isCorrect = false;
                    const errorMessage = `${structure.errorMessage} ${index + 1}.`;
                    errores.push(new Token(TokenType.ERROR, errorMessage, index + 1));
                } else {
                    stack.push(structure.keyword); // Añade la palabra clave a la pila
                }
            }
        });
  
        // Verifica si la línea coincide con alguna declaración de variable
        variableDeclarations.forEach(declaration => {
            if (trimmedLine.startsWith(declaration.keyword)) {
                matched = true;
                if (!declaration.regex.test(trimmedLine)) { // Verifica si la línea cumple con la sintaxis de la declaración de variable
                    isCorrect = false;
                    const errorMessage = `${declaration.errorMessage} ${index + 1}.`;
                    errores.push(new Token(TokenType.ERROR, errorMessage, index + 1));
                } else {
                    resultado.push(new Token(TokenType.ESTRUCTURA, `Declaración de '${declaration.keyword}' correcta en la línea ${index + 1}.`, index + 1));
                }
            }
        });
  
        // Verifica si la línea es una llave de cierre
        if (!matched && trimmedLine === "}") {
            if (stack.length === 0) { // Si la pila está vacía, hay una llave de cierre inesperada
                isCorrect = false;
                errores.push(new Token(TokenType.ERROR, `Error en la línea ${index + 1}: '}' inesperado.`, index + 1));
            } else {
                const lastKeyword = stack.pop(); // Saca la última palabra clave de la pila
                const structure = structures.find(s => s.keyword === lastKeyword); // Encuentra la estructura correspondiente
                structure.endLine = index + 1; // Marca la línea de cierre de la estructura
                resultado.push(new Token(TokenType.ESTRUCTURA, `Estructura '${structure.keyword}' correcta. Comienza en la línea ${structure.startLine} y finaliza en la línea ${structure.endLine}.`, structure.startLine));
            }
        }
    });

    console.log("Resultado Sintáctico:", resultado);
    console.log("Errores Sintácticos:", errores);
  
    return { resultado, errores };


  }

  analizadorcitoSintactico(codigojs);
  