let num1 =prompt('Insira um número');

if (num1 !== null) {
    num1 =Number(num1.replace('.','').replace(',','.'));
}

if (!num1) {

    document.write('O dado inserido é inválido. Tente novamente');

} else {
    let num2 = prompt('Insira outro número.')
    
    if (num2 !== null) {
        num2 = Number(num2.replace('.','').replace(',','.'));
    }

    if (!num2) {
        document.write('O dado inserido é inválido. Tente novamente');
    } else {
        let divisao = num1 / num2;
        document.write (`O resultado da soma de ${num1} e ${num2} é ${divisao.toFixed(2)}.`)
    }
}