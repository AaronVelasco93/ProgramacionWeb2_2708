function NumeroAleatorio (min,max){
    return Math.floor(Math.random()*(max-min))+min;
}

console.log(NumeroAleatorio(1,100));