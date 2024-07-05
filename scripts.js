// script.js - File JavaScript untuk validasi dan interaksi klien

document.getElementById("appointmentForm").addEventListener("submit", function(event) {
    let doctor = document.getElementById("doctor").value;
    let day = document.getElementById("day").value;
    let validDays = {
        "gigi": ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "sabtu", "minggu"],
        "mata": ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "sabtu", "minggu"],
        "kandungan": ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "sabtu", "minggu"],
        "anak": ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "sabtu", "minggu"],
        "tht": ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "sabtu", "minggu"],
        "umum": ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"]
    };

    if (!doctor || !day) {
        event.preventDefault();
        alert('Silakan pilih dokter dan hari terlebih dahulu.');
    }
});
