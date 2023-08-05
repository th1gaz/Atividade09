var x = 0, texto = ' ', txt = ' ';
let soma = 0, nmr, vlr;

vlr = parseInt(prompt('Escreva a quantidade de números que você ira digitar '))

while (x<vlr) {
    const nmr = parseInt(prompt('Digite um número '));
    soma = soma + nmr;
    x++;
}
texto += 'A soma é ' + soma +'\n';
txt += 'A média é ' + (soma/vlr) + '\n';
alert(texto);
alert(txt);