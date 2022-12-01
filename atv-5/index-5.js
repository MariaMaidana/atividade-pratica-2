let nome = prompt('Digite o seu nome');
let nota1 = prompt('Insira sua primeira nota');

if (nota1 !== null) {
    nota1 = Number(nota1.replace('.','').replace(',','.'));
}

if (!nota1) {
    document.write('Número inválido. Tente novamente');

} else {
    let nota2 = prompt('Insira sua segunda nota');
    if (nota2 !== null) {
        nota2 = Number(nota2.replace('.','').replace(',','.'));
    }

    if (!nota2) {
        document.write('Número inválido. Tente novamente');

    } else {
        let nota3 = prompt('Insira sua terceira nota');
        if (nota3 !== null) {
            nota3 = Number(nota3.replace('.','').replace(',','.'));
        }

        if(!nota3) {
            document.write('Número inválido. Tente novamente');
        } else {
            let media = (nota1 + nota2 + nota3) / 3;
            document.write (`O aluno ${nome} ficou com média ${media.toFixed(2)}`);
        }
    }

}