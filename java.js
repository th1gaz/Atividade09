var x = 0, texto = ' ', txt = ' ';
let soma = 0, nmr;

while (x<4) {
    const nmr = parseInt(prompt('Digite um número '));
    soma = soma + nmr;
    x++;
}
texto += 'A soma é ' + soma +'\n';
txt += 'A média é ' + (soma/4) + '\n';
alert(texto);
alert(txt);