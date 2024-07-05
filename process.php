<?php
// prosess.php - File untuk memproses data formulir janji

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $doctor = $_POST["doctor"];
    $day = $_POST["day"];

    // Simpan data ke file appointments.txt
    $data = "Nama: $name | Dokter: $doctor | Hari: $day\n";
    file_put_contents("data_janji.txt", $data, FILE_APPEND);

    // Redirect kembali ke halaman utama atau halaman sukses
    header("Location: buat_janji.html");
    exit;
}
?>
