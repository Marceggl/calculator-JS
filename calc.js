var mem = "";
var display = document.getElementById('res');
//limpa o display
function apag() {
    display.value = "";
    mem = "";
}
//Insere os valores na telinha
function pegaVal(num) {
    //Insere os elementos no display
    display.value += num;
}
//Faz os calculos e mostra na telinha
function calculo() {
    let num = 0;
    vDisplay = display.value;
    ultimoChar = display.value.charAt(display.value.length - 1);
    if (ultimoChar == "+" && ultimoChar == "-" && ultimoChar == "*" && ultimoChar == "/") {

    } else {
        //pega todos os elementos do display e guarda na memória
        num = display.value;
        //Faz o calculo de todos dos elementos do display com a função eval
        display.value = eval(num);
    }
}

//função mrc
function MRC() {
    let veri = display.value;
    //verifica se na string retornada do display possui algum operador
    if (veri.indexOf("+") != -1) {
        alert("não é possivel guardar uma operação na memória");
        display.value = "Erro"
    } else if (veri.indexOf("-") != -1) {
        alert("não é possivel guardar uma operação na memória");
        display.value = "Erro"
    } else if (veri.indexOf("*") != -1) {
        alert("não é possivel guardar uma operação na memória");
        display.value = "Erro"
    } else if (veri.indexOf("/") != -1) {
        alert("não é possivel guardar uma operação na memória");
        display.value = "Erro"
    } else {
        if (display.value == mem) {
            mem = "";
            display.value = "";
            console.log(mem);
        } else {
            mem = display.value;
            //display.value = mem;
            display.value = "";
            console.log(mem);
        }
    }
}
//função m+
function mPlus() {
    let veri = display.value;
    //verifica se na string retornada do display possui algum operador
    if (veri.indexOf("+") != -1) {
        alert("não é possivel guardar uma operação na memória");
        display.value = "Erro"
    } else if (veri.indexOf("-") != -1) {
        alert("não é possivel guardar uma operação na memória");
        display.value = "Erro"
    } else if (veri.indexOf("*") != -1) {
        alert("não é possivel guardar uma operação na memória");
        display.value = "Erro"
    } else if (veri.indexOf("/") != -1) {
        alert("não é possivel guardar uma operação na memória");
        display.value = "Erro"
    } else {
        mem = display.value;
    }
    display.value = "";
    console.log(mem);
}
//função m-
function mMinus() {
    let memMinus;
    let veri = display.value;
    //verifica se na string retornada do display possui algum operador
    if (veri.indexOf("+") != -1) {
        alert("não é possivel guardar uma operação na memória");
        display.value = "Erro"
    } else if (veri.indexOf("-") != -1) {
        alert("não é possivel guardar uma operação na memória");
        display.value = "Erro"
    } else if (veri.indexOf("*") != -1) {
        alert("não é possivel guardar uma operação na memória");
        display.value = "Erro"
    } else if (veri.indexOf("/") != -1) {
        alert("não é possivel guardar uma operação na memória");
        display.value = "Erro"
    } else {
        memMinus = display.value;
        display.value = memMinus - mem;
        console.log(mem);
    }
}

/* Marcel Fernando - 2020 */