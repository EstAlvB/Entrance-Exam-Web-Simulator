<?php

$USER = 'root';
$PASSWORD = 'root';
$PORT = 8889;
$DATABASE = 'exam_simulator';

// Nos conectamos a la base de datos
$connection = new mysqli('localhost', $USER, $PASSWORD, $DATABASE, $PORT);

// Verificamos la conexion
if ($connection->connect_errno) {
    die('Connection failed: ' . $connection->connect_error);
}

// Realizamos una busqueda en la base de datos
$query = "SELECT * FROM " . $_GET['EVAL_TYPE'];
$result = $connection->query($query);

// Colocamos los datos en un arreglo
$data = array();
while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}

// cerramos la conexion con la base de datos
$connection->close();

// enviamos los datos como una respuesta JSON
header('Content-Type: application/json');
echo json_encode($data);
exit();
