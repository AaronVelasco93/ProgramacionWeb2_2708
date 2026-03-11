// fuciones declarativas
function NumeroRandom(min, max){
    return Math.floor(Math.random()*(max-min))+min;
}

console.log(NumeroRandom(1,15));

// funciones expresadas o en un variable
const miNumero = function(min,max){
    return Math.floor(Math.random()*(max-min))+min;
}
console.log(miNumero(20,30));