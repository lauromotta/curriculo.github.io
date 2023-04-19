$(document).ready(function() {
    //Obter a data de nascimento da pessoa
    var dataDeNascimento = new Date('1983-07-17');
    //Obter a data atual
    var dataAtual = new Date();
    //Subtrair a data de nascimento da data atual
    var diferencaEmMilissegundos = dataAtual - dataDeNascimento;
    //Converter a diferença em anos
    var idadeEmAnos = Math.floor(diferencaEmMilissegundos / 1000 / 60 / 60 / 24 / 365);

    $(".value.idade").html(idadeEmAnos);
});

window.onload = function() {
    const texto = "Lauro Motta";
    let index = 0;
    const intervalo = 150;

    function mostrarLetra() {
      if (index < texto.length) {
        // document.getElementById("name-texto").innerHTML += texto.charAt(index++);
        $("#name-texto").append(texto.charAt(index++));
        setTimeout(mostrarLetra, intervalo);
      }
    }
    mostrarLetra();
  };

