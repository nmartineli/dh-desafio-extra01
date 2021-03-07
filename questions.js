const primeiraPergunta = [
    {
        type: 'list',
        name: 'opcao',
        required: true,
        message: 'O que você deseja fazer?',
        choices: [
            {
                name: 'Cadastrar novo pet',
                value: 0,
            },
            {
                name: 'Listar todos os pets cadastrados',
                value: 1,
            },
            {
                name: 'Buscar pet por nome do pet',
                value: 2
            },
            {
                name: 'Buscar pet por nome do dono',
                value: 3
            },
        ]
    }
]
const cadastrarPet = [    
    {
        type: 'input',
        name: 'nomeDoPet',
        required: true,
        message: 'Qual o nome do pet?',
    },
    {
        type: 'input',
        name: 'racaDoPet',
        required: true,
        message: 'Qual a raça do pet?',
    },
     {  
        type: 'input',
        name: 'donoDoPet',
        required: true,
        message: 'Qual o nome do dono?',
    }
]

const buscarPetCadastrado =[
    {
        type: 'input',
        name: 'buscarPetNome',
        message: 'Qual o nome que você deseja buscar?'
    }
]

const buscarDonoCadastrado =[
    {
        type: 'input',
        name: 'buscarDono',
        message: 'Qual o nome do dono que você deseja buscar?'
    }
]

module.exports = {
    primeiraPergunta,
    cadastrarPet,
    buscarPetCadastrado,
    buscarDonoCadastrado
}