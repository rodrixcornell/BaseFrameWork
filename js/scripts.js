function mudarCor(obj){

  if(	obj.style.backgroundColor){
    obj.style.backgroundColor='';
  }
  else{
    obj.style.backgroundColor='#a9d0f5';
  }
}

function OnBeforeUnLoad(valor) {
	if (valor)
		return "ATENÇÃO: Você não salvou seu Manifesto de Interesse. Clique no botão Salvar Itens para validar seu manifesto.";

}

function OnBeforeUnLoadAta(valor) {
	if (valor)
		return "ATENÇÃO: Você não salvou as alterações dos itens e seus dados serão perdidos. Clique no botão Salvar Itens para salvar suas alterações.";

}

function OnBeforeUnLoadPedidoCotacao(valor) {
	if (valor)
		return "ATENÇÃO: Você não enviou seu pedido de cotação. Clique no botão Enviar Pedido para enviar seu pedido para análise.";

}

function validarCPF(cpf) {
  exp = /\.|-/g;
  cpf = cpf.toString().replace(exp, "");
  var digitoDigitado = eval(cpf.charAt(9) + cpf.charAt(10));
  var digitoGerado = 0;
  var soma1 = 0, soma2 = 0;
  var vlr = 11;

  for (i = 0; i < 9; i++) {
    soma1 += eval(cpf.charAt(i) * (vlr - 1));
    soma2 += eval(cpf.charAt(i) * vlr);
    vlr--;
  }

  soma1 = (soma1 % 11) < 2 ? 0 : 11 - (soma1 % 11);
  aux = soma1 * 2;
  soma2 = soma2 + aux;
  soma2 = (soma2 % 11) < 2 ? 0 : 11 - (soma2 % 11);

  if (cpf == "11111111111" || cpf == "22222222222" || cpf == "33333333333" || cpf == "44444444444" || cpf == "55555555555"
    || cpf == "66666666666" || cpf == "77777777777" || cpf == "88888888888" || cpf == "99999999999" || cpf == "00000000000") {
    digitoGerado = null;
} else {
  digitoGerado = eval(soma1.toString().charAt(0) + soma2.toString().charAt(0));
}

if (digitoGerado != digitoDigitado) {
  return false;
}
return true;
}

$(document).ready(function(){
 $('input[id^="DT_"]').each(function(){
  $(this).mask('00/00/0000');
  $(this).attr("placeholder", "Ex: 00/00/0000");
  $(this).datepicker({
    changeMonth: true,
    changeYear: true
  });
});

});