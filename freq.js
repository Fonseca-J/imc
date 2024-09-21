let nome, idade, peso, altura, imc;

function calcular() {
    nome = document.getElementById('inputNome').value
    idade = document.getElementById('inputIdade').value
    peso = document.getElementById('inputPeso').value
    altura = document.getElementById('inputAltura').value
    imc = peso / ((altura / 100) * (altura / 100))
    document.getElementById('inputImc').value = imc.toFixed(2)

    if (imc < 18.5) {
        document.getElementById('status').src = "img/co1.png"
        document.getElementById('texto').innerHTML = "Abaixo do peso"
    } else if (imc < 25) {
        document.getElementById('status').src = "img/co2.png"
        document.getElementById('texto').innerHTML = "Peso normal"
    } else if (imc < 30) {
        document.getElementById('status').src = "img/co3.png"
        document.getElementById('texto').innerHTML = "Acima do Peso"
    } else if (imc < 35) {
        document.getElementById('status').src = "img/co4.png"
        document.getElementById('texto').innerHTML = "Obesidade I"
    } else if (imc < 40) {
        document.getElementById('status').src = "img/co5.png"
        document.getElementById('texto').innerHTML = "Obesidade II (Severa)"
    } else {
        document.getElementById('status').src = "img/co6.png"
        document.getElementById('texto').innerHTML = "Obesidade III (mórbida)"
    }
    return false;
}

function limpar() {
    document.getElementById('inputNome').value = '';
    document.getElementById('inputIdade').value = '';
    document.getElementById('inputPeso').value = '';
    document.getElementById('inputAltura').value = '';
    document.getElementById('inputImc').value = '';
    document.getElementById('status').src = "img/logo.png";
    document.getElementById('texto').innerHTML = "Preparado?";
}
