<?php
//require_once "../../../php/define.php";
require_once $pathvo."usuarioVO.php";

$VO = new usuarioVO();

$VO->NB_MODULO = $modulo;
$VO->NB_PROGRAMA = $programa;
$VO->ID_USUARIO = $_SESSION['ID_USUARIO'];

$total = $VO->verificaPermissao();
$nivel = $VO->getVetor();

if (!$total){
	$smarty->assign("current" 	, $current);
	$smarty->assign("nomeArquivo" 	, "sempermissao.tpl");
	$smarty->display('index.tpl');
	exit;
}
else if (!$nivel['CS_NIVEL_ACESSO'][0] && $current == 1){
	$smarty->assign("current" 	, $current);
	$smarty->assign("nomeArquivo" 	, "sempermissao.tpl");
	$smarty->display('index.tpl');
	exit;
}

$smarty->assign("nivel" 	, $nivel['CS_NIVEL_ACESSO'][0]);
?>