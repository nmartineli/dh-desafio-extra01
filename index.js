const inquirer = require('inquirer');
const {primeiraPergunta, cadastrarPet, buscarPetCadastrado} = require('./questions.js')
const fs = require('fs');
const {cadastrarPetSistema, cadastrarPrimeiroPet, exibePesquisaPorNome} = require('./criarPet.js');
const dados = "./pets.json";

console.log('Olá! Bem vindo ao Petshop NodeJS');

inquirer.prompt(primeiraPergunta).then((answers) => {
    const opcao = answers.opcao;
    
    if (opcao === 0) {
        inquirer.prompt(cadastrarPet).then((novoPet) => {
            
            if (fs.existsSync(dados)){
                fs.readFile(dados, 'utf8', function (err,data) {
                    if (err) {
                    return console.log(err);
                    }
                    let novoPetSistema = cadastrarPetSistema(novoPet);
                    let petsCadastrados = JSON.parse(data);
                    petsCadastrados.push(novoPetSistema);
                    let cadastrarPetString = JSON.stringify(petsCadastrados, null, 2);
                    fs.writeFileSync('pets.json', cadastrarPetString, err => {
                        if (err) {
                            console.error(err);
                            return
                        }
                    });
                    console.log("Pet cadastrado com sucesso!");
                });    
            } else {
                cadastrarPrimeiroPet(novoPet);
                console.log("Pet cadastrado com sucesso!");
            }
        })
    }

    if (opcao === 1){
            fs.readFile(dados, 'utf8', function (err,data) {
                    if (err) {
                    return console.log(err);
                    }
            let listaDePetsCadastrados = JSON.parse(data);
            console.log(listaDePetsCadastrados);
            }
        )
    }

    if (opcao === 2){
        inquirer.prompt(buscarPetCadastrado).then((answers) => {
            fs.readFile(dados, 'utf8', function (err,data) {
                    if (err) {
                    return console.log(err);
                    }
            let listaDePetsCadastrados = JSON.parse(data);
            let buscaNome = listaDePetsCadastrados.find(pet => pet.nomeDoPet === answers.buscarPetNome);
                    if (buscaNome == undefined){
                        console.log(`Não existe um pet ${answers.buscarPetNome} cadastrado.`)
                    } else {
                        exibePesquisaPorNome(buscaNome);
                    };
              });
        });
    };
});

