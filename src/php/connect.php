<?php

$USER = 'root';
$PASSWORD = '12345678';
$PORT = 3306;
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

// Close the database connection
$connection->close();

// Send the data as JSON response
header('Content-Type: application/json');
echo json_encode($data);
exit();
