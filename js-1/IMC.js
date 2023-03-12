function bmi (peso, altura){
    return peso/altura **2
}
console.log("Tu IMC es: " + bmi(65, 1.65))


//EN LA SIGUIENTE, QUISE HACERLO SIN USAR RETURN...PERO EL CODIGO SE HACE MAS EXTENSO
/*
function bmi (){
    let bmi = peso/altura **2;
    let peso = 65;
    let altura = 1.65;
        console.log("Tu IMC es: " + bmi)
}
bmi();
*/