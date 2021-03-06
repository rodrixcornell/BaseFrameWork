<?php
require_once $path."src/repositorio/Repositorio.php";
class RepositorioUsuario extends Repositorio {

	function carregaUsuario($VO){

		$query = "SELECT us.id_usuario, ".
                        "us.id_pessoa_funcionario, ".
              		"us.tx_login, ".
                 	"pe.tx_nome nome, ".
               		"fu.ID_UNIDADE_GESTORA, ".
              		"uo.TX_UNIDADE_ORG, ".
              		"uo.TX_SIGLA_UNIDADE, ".
              		"us.tx_email_pmm ".
            	"FROM usuario us, funcionario_2 fu, pessoa pe, UNIDADE_ORG uo ".
            	"WHERE uo.ID_UNIDADE_ORG = fu.ID_UNIDADE_GESTORA ".
              		"AND fu.id_pessoa_funcionario = us.id_pessoa_funcionario ".
              		"AND pe.id_pessoa = us.id_pessoa_funcionario ".
	      			"AND fu.cs_situacao_funcionario = 1 ".
              		"AND UPPER(us.tx_login) LIKE UPPER('".$VO->TX_LOGIN."')";

		return $this->sqlVetor($query);

	}

	function verificaGrupo($VO){

		//$query = "SELECT * FROM grupo_usuario WHERE id_grupo IN (SELECT distinct id_grupo FROM perfil_grupo WHERE id_sistema = 17 AND nb_modulo in (1)) AND id_usuario = ".$VO->ID_USUARIO;
		$query = "select * from v_perfil_usuario where id_sistema = '".$VO->ID_SISTEMA."' AND nb_modulo in (".$VO->ID_MODULO.") and ID_USUARIO = ".$VO->ID_USUARIO;

		return $this->sqlVetor($query);

	}

	function verificaPermissao($VO){

		$query = "select cs_nivel_acesso from v_perfil_usuario where id_sistema = 98 and nb_modulo = ".$VO->NB_MODULO." and nb_programa = ".$VO->NB_PROGRAMA." and id_usuario = ".$VO->ID_USUARIO;

		return $this->sqlVetor($query);

	}

	function inserirRegistroAcesso($VO){

		$query = "INSERT INTO REGISTRO_ACESSO (ID_REGISTRO_ACESSO, DT_ACESSO, ID_USUARIO, ID_SISTEMA, TX_IP)
    				VALUES( SEMAD.F_G_PK_REGISTRO_ACESSO,
    						SYSDATE,
    						'".$VO->ID_USUARIO."',
    						'".$VO->ID_SISTEMA."',
    						'".$_SERVER["REMOTE_ADDR"]."' )";

		return $this->sql($query);

	}
}
?>