var valorSecreto = parseInt(Math.random() * 11);
var tentativas = 0;
var maxTentativas = 5;

while (chute != valorSecreto && tentativas < maxTentativas) {
  var chute = prompt('Digite um número entre 0 e 10');
  tentativas++;

  if (chute == valorSecreto) {
    alert('Acertou!');
  } else if (chute > valorSecreto) {
    alert('Errou... o número é menor. Tentativa ' + tentativas + ' de ' + maxTentativas);
  } else if (chute < valorSecreto) {
    alert('Errou... número secreto maior. Tentativa ' + tentativas + ' de ' + maxTentativas);
  }
}

if (tentativas === maxTentativas && chute != valorSecreto) {
  alert('Suas tentativas acabaram. O número secreto era ' + valorSecreto);
}
