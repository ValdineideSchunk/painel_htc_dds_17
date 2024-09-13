'use strict';
function AbreviaNomeInstrutor(props) {
    // Abreviando nome dos instrutores
    const arrayNome = props.instrutor.split(' ');
    let primeiroUltimo = arrayNome[0] + ' ' + arrayNome[arrayNome.length - 1];
    return primeiroUltimo; // Retorna o valor abreviado
}  
    
export default AbreviaNomeInstrutor;