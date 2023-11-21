// LISTA

 const list = [1,2,3,4,5];

 const object = {name: 'Gabriel'};

const names = ['Gabriel', 'Mayara', 'Manuella',10,false];

const Mayara = names[1]

console.log(Mayara);

// comando .push('') adiciona o item no final da lista
names.push('Catarina'); 



// comando .unshift('') adiciona o item no começo da lista 

names.unshift('Filó');

// comando .pop() ele remove o ultimo item da lista
names.pop();
names.pop();
names.pop();

// manipular a lista direto pela numeração do item
names[3] = 'Simba' 

// o comando .indexOF('') é usado para saber qual numeração /posição do item da lista
const indexOFSimba = names.indexOf('Simba');

//  o comando .sort() é usado para organizar a lista em ordem alfabetica
const sortedNames = names.sort();


// o comando isArray() é usado para saber se uma variavel é uma lista ou não
const namesIsArray = Array.isArray(names)
console.log(namesIsArray);

// o comando .length é usado para contar quantos itens tem na lista
console.log(names.length);


console.log(sortedNames);


const numbers = [1,2,3,4,5];


// o comando .map() executa uma determinada função em todos os itens da lista e retorna essa função
const numerosMultiplicadosPorDois = numbers.map(function(number){
    return number * 2
})

const idades = [8,13,27,30,22,40];

// o comando .filter() ele vai filtrar a lista e vai retornar para uma nova listra esse filtro de acordo com o que voce passar
const idadePar = idades.filter(function(idades) {
   return idades % 2 === 0 
})

console.log(idadePar);

// o comando .reduce() é usado quando queremos reduzir todos os valores de uma lista para um só
// accumulator passamos o parametro ex 0 e ai ele vai pegar o primeiro item da lista , e depois ir somando um a um colocando sempre o resultado no lugar do 0 
const somaDasIdades = idades.reduce(function (idades,accumulator) {
    return accumulator + idades
},0);

console.log(somaDasIdades);


const pessoa = {
    primeiroNome: "Gabriel",
    ultimoNome: "Nascimento",
    idade : "21",
    hobbies:['Ver videos no youtube','Jogar no pc','Brincar com a Manu']
};

// const primeiroNome = pessoa.primeiroNome;
// const ultimoNome = pessoa.ultimoNome;
// const idade = pessoa.idade;
// const hobbies = pessoa.hobbies;

// Mesma funcionalidade da declaração de cima,sendo que assim fica mais clean
const {primeiroNome,ultimoNome,idade,hobbies} = pessoa

console.log(primeiroNome);
console.log(ultimoNome);
console.log(idade);
console.log(hobbies[2]);


const todos = [
    {
        id: 1,
        description: 'Estudar programação',
        isCompleted: false,
    },
    {
        id: 2,
        description: 'Ler',
        isCompleted: true,  
    },
    {
        id: 3,
        description: 'Treinar',
        isCompleted: true,
    },
]

    const descriptionOfLastTodo = todos[2].description;

    console.log(descriptionOfLastTodo);














