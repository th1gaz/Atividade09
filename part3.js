let nmr1, nmr2;
let soma = 0;

nmr1 = parseInt(prompt('Digite um número'));
nmr2 = parseInt(prompt('Digite outro número'));

while(nmr1 < nmr2){
	if (nmr1%2 != 0) {
		soma += nmr1;
	}

	nmr1++;
}

alert(soma)