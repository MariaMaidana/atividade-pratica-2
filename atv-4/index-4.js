let minutos = prompt('Insira um número');

if (minutos !== null) {
    minutos = parseInt(minutos.replace('.','').replace(',','.'));
}

if (!minutos) {
    
    document.write('O valor informado é inválido. Tente novamente')

} else {
    let segundos = minutos * 60;
    document.write (`${minutos} minutos equivale à ${segundos} segundos.`)
}