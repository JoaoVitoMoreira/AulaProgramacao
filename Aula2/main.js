/**function somar(x,y){
    return(x+y)
}

alert(somar(3,8))

//função anônima
let subtracao = function(a,b){
    alert(a-b)
}

subtracao(7,2)

//arrow function

let multiplicacao = (e,f)=>{
    alert(e*f)
}

multiplicacao(3,6)**/

let valorMor = (x)=>{
    if(x<=5){
        return(x*15)
    }else if(x>5){
        return(x*13.5)
    }
}  

let valorAba = (y)=>{
    if(y<=5){
        return(y*5)
    }else if(y>5){
        return(y*4.2)
    }
}

function calc() {
    let kgs = morango.value + abacate.value
    let valorSoma = valorMor(morango.value)+valorAba(abacate.value)
    if(valorSoma>30||kgs<6){
        let valorDesconto= (valorSoma*10)/100
        let valorTotal = valorSoma-valorDesconto
        alert("Você tem que pagar R$"+valorTotal.toFixed(2))
    } else{
        alert("Você tem que pagar R$"+valorSoma.toFixed(2))
    }
}