let total = prompt('Informe o total da compra: ');

if (total !== null) {
    total = Number(total.replace('.','').replace(',','.'));
}

if (!total) {
    document.write('O valor informado é inválido. Tente novamente');

} else {
    let parcelas = prompt('Digite a quantidade de parcelas: ');

    if(parcelas !== null) {
        parcelas = parseInt(parcelas.replace('.','').replace(',','.'));
    }

    if (!parcelas) {
        document.write('O valor informado é inválido. Tente novamente');

    } else {
        let valorParcela = total / parcelas;
        document.write (`<p>O total da compra foi de R$${total}</p>`);
        document.write (`<p> Forma de pagamento: ${parcelas} vezes de R$${valorParcela.toFixed(2)} </p>`);
    }
}