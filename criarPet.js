const fs = require('fs');

function CriarPet(identificador, nomeDoPet, raca, nomeDoDono) {
    this.identificador = identificador;
    this.nomeDoPet = nomeDoPet;
    this.raca = raca;
    this.nomeDoDono = nomeDoDono;
};

function cadastrarPetSistema(novoPet) {
    let {nomeDoPet, racaDoPet, donoDoPet} = novoPet;
    let novoPetCadastrado = new CriarPet(Math.random().toString(26).slice(2), nomeDoPet, racaDoPet, donoDoPet);
    return novoPetCadastrado;
}

function cadastrarPrimeiroPet(novoPet){
    let arrayDePet = [];
    let primeiroPet = cadastrarPetSistema(novoPet);
    arrayDePet.push(primeiroPet);
    let cadastrarPetString = JSON.stringify(arrayDePet, null, 2);
    fs.writeFileSync('pets.json', cadastrarPetString, err => {
        if (err) {
            console.error(err);
            return
        }
    });
}

function exibePesquisaPorNome (buscaNome){
    let {identificador, nomeDoPet, raca, nomeDoDono} = buscaNome;
    console.log(`Número de identificação: ${identificador}`);
    console.log(`Nome do Pet: ${nomeDoPet}`);
    console.log(`Raça: ${raca}`);
    console.log(`Nome do dono: ${nomeDoDono}`);   
}

module.exports = {cadastrarPetSistema, cadastrarPrimeiroPet, exibePesquisaPorNome};
