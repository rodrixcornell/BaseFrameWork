 $(document).ready(function(){

    function showLoader(){
        $('.fundo_pag').fadeIn(200);
    }

    function hideLoader(){
        $('.fundo_pag').fadeOut(200);
    };

   $('#DT_NOMEACAO_ORDENADOR').datepicker({
    changeMonth: true,
    changeYear: true
  });
   $('#DT_NOMEACAO_ORDENADOR').setMask('99/99/9999');

   $("#TX_CEP_ORDENADOR").blur(function(){
      var cep_code = $(this).val();
      if( cep_code.length <= 5  ) return;
      $.get("http://apps.widenet.com.br/busca-cep/api/cep.json", { code: cep_code },
         function(result){
          console.log(result);
            if( result.status==0 ){
               alert(result.message || "Houve um erro desconhecido");
               return;
            }
          //  $("input#cep").val( result.code );
            $("#TX_END_ORDENADOR").val( result.city +' -  '+  result.state+' - '+ result.district +' - '+ result.address  );

         });
   });

$('input[name=TX_CPF_ORDENADOR]').setMask({ mask:'999.999.999-99' });
  $('#pesquisar').click(function(){
    //if ($('#TX_ORGAO_GESTOR_IRP').val()){
      showLoader();
      $('#tabela').load('acoes.php?identifier=tabela',{
          TX_UNID_GESTORA_GC:$('#TX_UNID_GESTORA_GC').val(),
          TX_ORDENADOR:$('#TX_ORDENADOR').val(),
          TX_SIGLA_UNIDADE:$('#TX_SIGLA_UNIDADE').val(),
          NB_CODIGO_UNIDADE:$('#NB_CODIGO_UNIDADE').val(),
          TX_CPF_ORDENADOR:$('#TX_CPF_ORDENADOR').val()
        }, hideLoader);
    //}else
    //  alert('Preencha pelo menos um campo para realizar a pesquisa!');
    });

    //Paginacao
    $("#paginacao li").live('click', function(){
        showLoader();
        $("#tabela").load('acoes.php?identifier=tabela&PAGE='+this.id,{
           TX_UNID_GESTORA_GC:$('#TX_UNID_GESTORA_GC').val(),
          TX_ORDENADOR:$('#TX_ORDENADOR').val(),
          TX_SIGLA_UNIDADE:$('#TX_SIGLA_UNIDADE').val(),
          NB_CODIGO_UNIDADE:$('#NB_CODIGO_UNIDADE').val(),
          TX_CPF_ORDENADOR:$('#TX_CPF_ORDENADOR').val()
      }, hideLoader);
        return false;
    });

  //Icone Alterar
    $("#alterar").live('click', function(){
        var href = $(this).attr('href');
        $(window.document.location).attr('href','validacao.php?ID='+href);
        return false;
    });

  //Excluir
/*   $('#excluir').live('click', function(){

    resp = window.confirm('Tem certeza que deseja excluir este Registro?');
    if (resp){
       showLoader();
       $('#tabela').load('acoes.php?identifier=excluir',{
            ID_ORGAO_GESTOR_IRP:$(this).attr('href'),
            TX_ORGAO_GESTOR_IRP:$('#TX_ORGAO_GESTOR_IRP').val(),
            ID_UNIDADE_ORG:$('#ID_UNIDADE_ORG').val(),
            PAGE:$('.selecionado').text()
      }, hideLoader);
    }

    return false;
  });*/

});