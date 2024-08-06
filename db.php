<?php
$servername = "localhost";
$username = "root"; //poner usuario local
$password = "maria123"; // poner contraceña local
$dbname = "guestbook";

// conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Comprobar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
?>
