let idade = Number(prompt('Digite sua idade'));

if (!idade) {
    document.write(`<p>A idade não é um número válido</p>`);
} else {
    document.write (`<p>Idade: ${idade} anos.</p>`)
}

