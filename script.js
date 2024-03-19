var botao = document.getElementById("botao");
botao.addEventListener("click", alertar);
var nome = document.getElementById("nome");

var saida = document.getElementById("saida-de-dados");

var email = document.getElementById("email");

var telefone = document.getElementById("Telefone");

var cep = document.getElementById("CEP");

var logradouro = document.getElementById("logradouro");

var número = document.getElementById("número");

var complemento = document.getElementById("complemento");

var bairro = document.getElementById("bairro");

var cidade = document.getElementById("cidade");

var estado = document.getElementById("estado");
function alertar(){
    //alert(nome.value + "" + "clicou no botão!!!");
    "Nome: " + " " + nome.value;
     "\n E-mail:" + " " + email.value;
    "\n Telefone: " + " " + telefone.value;
     "\n cep: " + " " + cep.value;
     "\n logradouro: " + " " + logradouro.value;
     "\n número: " + " " + número.value;
     "\n complemento: " + " " + complemento.value;
     "\n bairro: " + " " + bairro.value;
     "\n cidade: " + " " + cidade.value;
     "\n estado: " + " " + estado.value;
}
    alert("Você clicou no botão!!!");
}
