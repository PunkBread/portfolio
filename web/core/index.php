<?php
$data = json_decode($_POST['data']);
$respuesta = new stdclass();
$datos = new stdclass(); 
$respuesta->accion = $data->accion;
switch($data->accion){
	case "insertarInventario";
		include_once($script."DGTICscript.php");
		$insertarInventario = insertarInventario($data);
		$datos = $insertarInventario;
		break;
}
$respuesta->datos = $datos;
header ('Content-type: application/json');
echo (json_encode($respuesta));
?>