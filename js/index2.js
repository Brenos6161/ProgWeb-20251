let pontuacao = 0;
let continuar = true;

while (continuar) {
  const escolhaJogador = parseInt(prompt(
    "Escolha sua jogada:\n1 - Papel\n2 - Pedra\n3 - Tesoura"
  ));

  const opcoes = ["Papel", "Pedra", "Tesoura"];

  // Verifica se a jogada é válida
  if (![1, 2, 3].includes(escolhaJogador)) {
    console.log("Jogada inválida! Você perdeu a rodada.");
    break;
  }

  const jogadaComputador = Math.floor(Math.random() * 3) + 1;

  console.log("\nEscolha sua jogada:\n1 - Papel\n2 - Pedra\n3 - Tesoura");
  console.log(`O computador jogou ${opcoes[jogadaComputador - 1]}`);

  if (escolhaJogador === jogadaComputador) {
    console.log("A rodada empatou!\n");
  } else if (
    (escolhaJogador === 1 && jogadaComputador === 2) || // Papel > Pedra
    (escolhaJogador === 2 && jogadaComputador === 3) || // Pedra > Tesoura
    (escolhaJogador === 3 && jogadaComputador === 1)    // Tesoura > Papel
  ) {
    pontuacao++;
    console.log("Você ganhou!\n");
  } else {
    console.log(`Você perdeu! A sua pontuação foi de ${pontuacao}\n`);
    continuar = false;
  }
}
