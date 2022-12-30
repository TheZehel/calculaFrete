function mensagemFrete(destino, frete) {
    let form = document.getElementById("form");
    let produto = form.elements["produto"].value;
    alert(`Olá, Já recebemos o seu pedido, iremos enviar o ${produto} para o ${destino} o mais rápido possivel. O o frete é: ${frete}`)
}

const estados = {SP: "R$5,00", RJ: "6,50", MG: "7,20", PR: "8,00", AM: "23,50", AC: "23,50", RO: "22,00", RR: "R$22,00"}
const regioes = { Sul: "R$ 10,00", Sudeste: "R$ 8,00", 'Centro Oeste': "R$ 11.50", Nordeste: "R$ 15,00", Norte: "R$ 20,00" }

function calculaFrete () {

    let form = document.getElementById("form");

    let select = form.elements["estados"];
    let estado = select.options[select.selectIndex].value;

    select = form.elements["regioes"];
    let regiao = select.options[select.selectIndex].value;

    let frete = "R$0,00";
    let destino = "";
    if (estados[estado] != undefined) {
        frete = estados[estado];
        destino = estado;
    }else if (regioes[regiao] != undefined) {
        frete = regioes[regiao];
        destino = regiao;
    }

    mensagemFrete(destino, frete)
}

function geraOption (elemento){

    let tipos = eval(elemento);
    let selectBox = document.getElementById(elemento);
    selectBox.options.add(new Option("Selecione", ""));
    for (const tipo in tipos) {
        selectBox.options.add(new Option(tipo, tipo));
    }

}

function geraOptions(){

    geraOption("regioes");
    geraOption("estados");

}