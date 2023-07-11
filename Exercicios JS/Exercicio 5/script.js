function Sum() {
    var FNumber= parseInt(document.getElementById("FNumber").value);
    var SNumber= parseInt(document.getElementById("SNumber").value);
    var result = FNumber + SNumber

    alert('A soma dos números selecionados é:' + result);
}

function Sub(){
    var FNumber= parseInt(document.getElementById("FNumber").value);
    var SNumber= parseInt(document.getElementById("SNumber").value);
    var result = FNumber - SNumber

    alert('A subtração dos números selecionados é:' + result);
}

function Div(){
    var FNumber= parseInt(document.getElementById("FNumber").value);
    var SNumber= parseInt(document.getElementById("SNumber").value);
    var result = FNumber / SNumber

    alert('A divisão dos números selecionados é:' + result);
}

function Mult(){
    var FNumber= parseInt(document.getElementById("FNumber").value);
    var SNumber= parseInt(document.getElementById("SNumber").value);
    var result = FNumber - SNumber

    alert('A multiplicação dos números selecionados é:' + result);
}
