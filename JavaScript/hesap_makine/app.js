// Sonuç ekranını seçiyoruz
const resultScreen = document.querySelector("#result");

// Sayı ve operator ekleme fonksiyonu
function appendNumber(number) {
    resultScreen.value += number;
}

// Operatör ekleme fonksiyonu
function appendOperator(operator) {
    resultScreen.value += " " + operator + " ";
}

// Hesaplamayı yapma fonksiyonu
function calculateResult() {
    try {
        resultScreen.value = eval(resultScreen.value);
    } catch (e) {
        resultScreen.value = "Hata";
    }
}

// Ekranı temizleme fonksiyonu
function clearScreen() {
    resultScreen.value = "";
}