/**
 * lista de funções
 */

// funções simples
function hello() {
    console.log("hello function")
}

console.log(typeof(hello))
hello()

//Função  atribuida
const hello2 = function(){
    console.log("Hello function assigned")
}

// Arrow Function (Simplificação da função atribuida)
// Function ---- =>
const hello3 = () => {
    console.log("Hello arrow function")
}

console.log(typeof(hello3))
hello3()


//Funções com passagem de paramêtros e retorno
// Função literal

function somarS(num1, num2) {
    return (console.log(num1 + num2))
}

somarS(2, 3)

// Função Atribuida
const somarA = function(num1, num2){
    return (console.log(num1 + num2))
}

somarA(4,5)

//Arrow Function
const somarAF = (num1, num2) => {
    return (console.log(num1 + num2))
}
somarAF(5,7)

//Arrow function simplificada (retorno é implicito)
const somarAFS = (num1,num2) => console.log(num1 + num2)

somarAFS(2,2)