
//comandos básicos em JS
function refresh() {
  location.reload();
}
function soma() {
  var a, b, c;
  console.log("hello world");

  a = Number(prompt("Digite o valor <A>: "));
  console.log(a);

  b = Number(prompt("Digite o valor <B>: "));
  console.log(b);

  //CALCULO
  c = a + b;

  //template string
  alert("O resultado de " + a + " + " + b + " é: " + c);
}

function escreverPagina() {
  document.write("Hello World!");
}

function limparConsole() {
  console.clear();
}

function trocarCor() {
  document.body.style.backgroundColor = "green";
}

//LAMPADA ACESA, APAGADA e QUEBRADA
const lampada = document.getElementById("lampada");
let lampadaQuebrada = false;  //inicia como falsa

//FUNÇÕES
function acender() {
  //verifica se é nao falso = true

  if (!lampadaQuebrada) {
    console.log("acender"); //console.log so para teste
    document.getElementById("lampada").src = "img/lampada-acesa.jpg"; //o documento pelo id vai receber uma imagem com o parametro .src
  }
}
function apagar(){
  if(!lampadaQuebrada){
    console.log("apagar");
    document.getElementById("lampada").src = "img/lampada-apagada.jpg";
  }
}
function quebrar() {
  lampadaQuebrada = true; //vai fazer com que as outras verificações não seja executadas
  console.log("quebrar");
  document.getElementById("lampada").src = "img/lampada-quebrada.jpg";
}

//desafio 1 Gustavo Guanabara
function botao1(){
  alert("Você clicou no 1° botão!");
}
function botao2(){
  alert("Você clicou no 2° botão!");
}
function botao3(){
  alert("Você clicou no 3° botão!");
}

//desafio 2
function form1(){
  var nome, idade;
   
  nome = prompt("Digite seu nome:");
  idade = Number(prompt("Olá " + nome + "! Quantos anos você tem?"));

  alert("Prazer em conhecer você " + nome + ", um passarinho disse que tu tem " + idade + " anos de idade ! uau");
}

//desafio 3
function antesEdepois(){
  let valor, valorAnt, valorSuc;

  valor = Number(prompt("Digite um valor:"));

  //calculo
  valorAnt = valor - 1;
  valorSuc = valor + 1;

  alert("Antes de " + valor + ", temos o número " + valorAnt + "\nDepois de " + valor + ", temos o número " + valorSuc);
}

//desafio 4
function loja(){
  var produto, valor, pagamento, troco;

  produto = prompt("Qual produto deseja comprar?");
  valor = Number(prompt("Valor do produto:"));
  pagamento = Number(prompt("Dinheiro entregue ao caixa:"));

  troco = pagamento - valor;

  if(troco >= 0){
    alert("Você comprou "+ produto + " no valor de R$"+ valor +",00. \nEntregou R$"+ pagamento +",00 em dinheiro. \nTroco: R$"+ troco +",00");
  }
  else{
    console.log("! CALOTEIRO !");
    alert("Faltou dinheiro ae patrão ~_-")
  }
}

//desafio 5
function converterDist(){
  var valores, metros, km, hm, dam, dm, cm, mm;

  metros = Number(prompt("Digite uma distância em metros (m):"))

  km = metros / 1000;
  hm = metros / 100;
  dam = metros / 10;
  dm = metros * 10;
  cm = metros * 100;
  mm = metros * 1000;

  //teste
  console.log(km)
  console.log(hm)
  console.log(dam)
  console.log(dm)
  console.log(cm)
  console.log(mm)

  var valores = `<strong>Conversão ${metros} metros:</strong><br><br>
                  Quilometros: ${km} km<br>
                  Hectômetros: ${hm} hm<br>
                  Decâmetros: ${dam} dam<br>
                  Decimetros: ${dm} dm<br>
                  Centímetros: ${cm} cm<br>
                  Milímetros: ${mm} mm<br>`;
  document.getElementById("valoresDist").innerHTML = valores;
}

//desafio 6
function converterTemp(){
  var valores, Celsius, Faren, Kelv;

  Celsius = Number(prompt("Digite uma temperatura em °C (Celsius):"))

  Faren = (Celsius * 1.8) + 32;
  Kelv = Celsius + 273.15;

  console.log(Faren);
  console.log(Kelv);

  var valores = `<strong>Conversão ${Celsius} °C:</strong><br>
                  Farenheit: ${Faren} °F<br>
                  Kelvin:    ${Kelv}   K`;

  document.getElementById("valoresTemp").innerHTML = valores;
}

//desafio 7
const URL = `https://api.exchangerate-api.com/v4/latest/BRL`; // URL da API para obter a taxa de câmbio

// Função para atualizar a conversão em tempo real
async function atualizarConversao() {
    const valorReal = parseFloat(document.getElementById('valorReal').value);
    if (isNaN(valorReal) || valorReal <= 0) {
        document.getElementById('resultado').innerText = 'Conversão Dolar: $0.00';
        return;
    }

    try {
        const response = await fetch(URL);
        const data = await response.json();
        
        //se alterar o data.rates.USD o "USD" pela moeda desejada, vai alterar a conversão
            let taxaDeCambio = data.rates.USD;
            let valorDolar = valorReal * taxaDeCambio;
            document.getElementById('resultado').innerText = `Conversão Dolar: $${valorDolar.toFixed(2)}`;
    } catch (error) {
        console.error('Erro:', error);
        document.getElementById('resultado').innerText = 'Erro ao obter a taxa de câmbio.';
    }
}

//desafio 8
function desconto(){
  var valores, produto, preco, desconto;

  produto = prompt("Qual produto você está comprando?");
  preco = Number(prompt(`Qual é o preço do produto ${produto}?`));

  desconto = preco * 0.1;
  desconto = preco - desconto;

  var valores = `<strong>LOJA</strong><br>
                  Produto ${produto}<br>
                  Preço (${produto}): ${preco}<br>
                  Desconto 10%: ${desconto}`;

  document.getElementById("valoresDesc").innerHTML = valores;
}

//desafio 9
function reajuste(){
  var valores, funcionario, salario, PerCentReajuste, salPerCent, salarioFinal;

  funcionario = prompt("Qual é o nome do funcionário?");
  salario = Number(prompt(`Qual é o salário de ${funcionario}?`));
  PerCentReajuste = Number(prompt(`O salário de ${funcionario} vai ser rajustado mês que vem em qual porcentagem? Ex: 2%, 5%, 10%`));

  salPerCent = salario * (PerCentReajuste/100);
  salarioFinal = salario + salPerCent;

  var valores = `<strong>REAJUSTE de ${funcionario}</strong><br>
                  Salário Atual: ${salario}<br>
                  Reajuste de ${PerCentReajuste}%, salário vai ser aumentado R$ ${salPerCent} no próximo mês.<br>
                  Salário Final: R$ ${salarioFinal}`;

  document.getElementById("valoresReaj").innerHTML = valores;
}

//desafio 10
function Bhaskara(){
  var calculo, valores, a, b, c, delta;

  a = Number(prompt("Digite valor A"));
  b = Number(prompt("Digite valor B"));
  c = Number(prompt("Digite valor C"));

  document.getElementById("valoresBhaskara").innerText = `Coloque os valores: ${a}x² + ${b}x + ${c} = 0.`;   //substituir o texto

  //calculo
  delta = (b ** 2) - 4 * a * c;
  console.log(delta);

  valores = `O valor de Delta: <strong>Δ = ${delta}.</strong>`;

  document.getElementById("calculoBhaskara").innerHTML = valores;
}

//desafio 11
function bissexto(){
  var valores, ano, noBi, yeBi;

  noBi = `<p class="noBi">NÃO É BISSEXTO ❌</p>`;
  yeBi = `<p class="yeBi">É BISSEXTO ✔</p>`;

  ano = Number(prompt("Qual ano deseja verificar?"));

  if(ano % 4 == 0){
    document.getElementById("container").innerHTML = yeBi;
  }else{
    document.getElementById("container").innerHTML = noBi;
  }
  
  valores = `<h1>Analizando o ano de ${ano} </h1>`;
  document.getElementById("header").innerHTML = valores;
}

//desafio 12
function alteracao(){
  var valores, precoAtual, precoAnterior, diferenca, percent;
  
  precoAnterior = Number(prompt("Digite o valor anterior do produto:"));
  precoAtual = Number(prompt("Digite o valor atual do produto:"));

  diferenca =  precoAtual - precoAnterior;
  percent = (diferenca / precoAnterior) * 100;

  precoAnterior = formatarMoeda(precoAnterior);
  precoAtual = formatarMoeda(precoAtual);
  diferenca = formatarMoeda(Math.abs(diferenca)); //nao deixar numero negativo
  percent = Math.abs(percent.toFixed(2)); // Duas casas decimais para a porcentagem
  
  if(diferenca > 0){
      valores = `<h1>Analisando os valores informados<h1>
        <p>O produto custava R$ ${precoAnterior}, atualmente custa R$ ${precoAtual}.<br>
        O preço subiu R$ ${diferenca} em relação ao preço anterior.<br>
        Uma variação de ${percent}% pra cima.</p>`;
  }else if(diferenca < 0){
      valores = `<h1>Analisando os valores informados<h1>
        <p>O produto custava R$ ${precoAnterior}, atualmente custa R$ ${precoAtual}.<br>
        O preço caiu R$ ${diferenca} em relação ao preço anterior.<br>
        Uma variação de ${percent}% pra baixo.</p>`;
  }else{
      valores = `<h1>Analisando os valores informados<h1>
        <p>O produto custava R$ ${precoAnterior}, atualmente custa R$ ${precoAtual}.<br>
        O preço manteve R$ ${diferenca} em relação ao preço anterior.<br>
        Uma variação de ${percent}%.</p>
        <p>Não teve alterações.</p>`;
  }
  document.getElementById("containerAlteracao").innerHTML = valores;
}

function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

//desafio 13
function situacao(){
  var aluno, media, nota1, nota2;

  aluno = prompt("Digite o nome do aluno(a):");
  nota1 = Number(prompt(`Primeira nota [${aluno}]:`));
  nota2 = Number(prompt(`Segunda nota [${aluno}]:`));

  //calculo
  media = (nota1 + nota2) / 2;

if(nota1 >= 0 && nota2 >= 0){
  if(media > 6){
    valores = `<p>Média: ${media}</p><p class="yeBi">APROVADO</p>`;
  }else if(media >= 3 && media <= 6){
    valores = `<p>Média: ${media}</p><p class="recuperacao">RECUPERAÇÃO</p>`;
  }else{
    valores = `<p>Média: ${media}</p><p class="noBi">REPROVADO</p>`;
  }
}
else{
  valores = `<h1>Insira notas que não são negativas</h1>`;
}
  document.getElementById("containerSituacao").innerHTML = valores;
}