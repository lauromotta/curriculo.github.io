
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