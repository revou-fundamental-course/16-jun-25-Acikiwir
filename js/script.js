function hitungLuas() {
    const alas = parseFloat(document.getElementById("alas").value);
    const tinggi = parseFloat(document.getElementById("tinggi").value);
    const hasilLuas = document.getElementById("hasil-luas");

    // validasi
    if (isNaN(alas) || isNaN(tinggi) || alas <= 0 || tinggi <= 0){
        alert("Mohon masukkan nilai luas dan tinggi yang valid");
        hasilLuas.innerText = "-";
        return;
    }

    const luas = 0.5 * alas * tinggi;
    hasilLuas.innerText = luas.toFixed(2);
}

function hitungKeliling(){
    const sisi1 =  parseFloat(document.getElementById("sisi1").value);
    const sisi2 =  parseFloat(document.getElementById("sisi2").value);
    const sisi3 =  parseFloat(document.getElementById("sisi3").value);
    const hasilKeliling = document.getElementById("hasil-keliling");

    //validasi
    if (isNaN(sisi1) || isNaN(sisi2) || isNaN(sisi3) || sisi1 <= 0 || sisi2 <= 0 || sisi3 <= 0) {
        alert("Mohon masukkan nilai sisi yang valid")
        hasilKeliling.innerText = "-";
    }

    const keliling = sisi1 + sisi2 + sisi3;
    hasilKeliling.innerText = keliling.toFixed(2);
    return;
}

function resetLuas(){
    document.getElementById("hasil-luas").innerText = "-";
}
function resetKeliling() {
    document.getElementById("hasil-keliling").innerText = "-";
}