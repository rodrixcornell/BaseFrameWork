$(document).ready(function(){

	function showLoader(){
		$('.fundo_pag').fadeIn(200);
	}
	function hideLoader(){
		$('.fundo_pag').fadeOut(200);
	};


	function emptyHideLoader() {
		$('.fundo_pag').fadeOut(200);

		$("#ID_USUARIO_RESP option:first").attr("selected", true);
		$("#CS_GESTOR option:first").attr("selected", true);
		$("#CS_CADASTRO option:first").attr("selected", true);
		$("#CS_FISCAL option:first").attr("selected", true);

		$.getJSON('acoes.php?identifier=atualizarInf', atualizarInf);
		function atualizarInf(campo) {
			$("#atualizacao").html(campo['DT_ATUALIZACAO'][0]);
		}
   /* $.post('acoes.php?', {
      identifier: 'pesquisarUsuario'
    }, pesquisarUsuario);
    function pesquisarUsuario(valor) {
      $("#ID_USUARIO_RESP").html(valor);
    }*/
  }  ;
  $("input[name=inserirResponsavel]").live('click', function(){

   var primeiro;
   var erro = 0;

   $('.obrigatorio').each(function(){

    if (!$(this).val()){
     $(this).css("border", "1px solid red");
        //$(this).after( '<div class="msgErro">Obrigatório</div>' );
        !primeiro ? primeiro = '#'+$(this).attr('id') : false;
        erro++;
      }else{
       $(this).css("border", "1px solid #8B8B8B");
     }

   });

   if (erro){
    $(primeiro).focus();
    alert('Os campos em destaques devem ser preenchidos.');

    return false;
  }else{
    showLoader();
    $("#tabelaResponsaveis").load('acoes.php?identifier=inserirResponsavel', {
     ID_USUARIO_RESP: $('#ID_USUARIO_RESP').val(),
     CS_GESTOR: $('#CS_GESTOR').val(),
     CS_CADASTRO: $('#CS_CADASTRO').val(),
     CS_FISCAL: $('#CS_FISCAL').val()
   }, emptyHideLoader);
  }

});
  $('#alterar').live('click', function(){

    if ($('#CS_GESTOR_ALT').length){
      alert('Já existe um item em modo de edição.\nConfirme a alteração do item anterior.');
      $('#CS_GESTOR_ALT').focus();
      return false;
    }else{

      var linha = $(this).parent().parent();
      var ge = $(this).parent().parent().find(".ge");
      var ca = $(this).parent().parent().find(".ca");
      var fi = $(this).parent().parent().find(".fi");
      var icones = $(this).parent().parent().find(".icones");

      var selectionGE = $(this).attr('selGE');
      var selectionCA = $(this).attr('selCA');
      var selectionFI = $(this).attr('selFI');

      ge.html($('#CS_GESTOR').clone().attr('id', 'CS_GESTOR_ALT').attr('name', 'CS_GESTOR_ALT').val(selectionGE).css('width','95px'));
      ca.html($('#CS_CADASTRO').clone().attr('id', 'CS_CADASTRO_ALT').attr('name', 'CS_CADASTRO_ALT').val(selectionCA).css('width','95px'));
      fi.html($('#CS_FISCAL').clone().attr('id', 'CS_FISCAL_ALT').attr('name', 'CS_FISCAL_ALT').val(selectionFI).css('width','95px'));

      icones.html('<a href="'+$(this).attr('href')+'" id="salvarItem"><img src="'+urlimg+'icones/salvar.png" title="Salvar Alterações"/></a> <a href="#" id="cancelarItem"><img src="'+urlimg+'icones/cancelar.png" title="Cancelar"/></a>');

      $('#CS_GESTOR_ALT').focus();
      linha.attr('bgcolor', '#FBCA8D');

      return false;
    }
  });


$('#cancelarItem').live('click', function(){
	showLoader();
	$("#tabelaResponsaveis").load('acoes.php?identifier=tabelaResponsaveis&PAGE='+$('.selecionado').text(), hideLoader);
	return false;
});


$('#salvarItem').live('click', function(){

	showLoader();
	$("#tabelaResponsaveis").load('acoes.php?identifier=alterarPerfil',{
		ID_USUARIO_RESP:$(this).attr('href'),
		CS_GESTOR:$('#CS_GESTOR_ALT').val(),
		CS_CADASTRO:$('#CS_CADASTRO_ALT').val(),
		CS_FISCAL:$('#CS_FISCAL_ALT').val()
	}, emptyHideLoader);

	return false;

});




    //Exclusão de Responsaveis
    $('#excluir').live('click', function() {
    	var href = $(this).attr('href');

    	resp = window.confirm('Tem certeza que deseja excluir este Registro?');
    	if (resp) {
    		showLoader();
    		$("#tabelaResponsaveis").load('acoes.php?identifier=excluirResponsavel&ID_USUARIO_RESP=' + href, emptyHideLoader);
    	}
    	return false;
    });

  //Excluir Master
  $('#excluirMaster').click(function(){

  	if ($('.icones').length){
  		alert('Este registro não pode ser excluído pois possui dependentes.');
  		return false;
  	}else{
  		resp = window.confirm('Tem certeza que deseja excluir este Registro?');
  		if (!resp){
  			return false;
  		}
  	}

  });

  showLoader();
  $("#tabelaResponsaveis").load('acoes.php?identifier=tabelaResponsaveis', emptyHideLoader);
});