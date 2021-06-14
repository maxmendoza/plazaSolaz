const formContact = () =>{
    let name = document.getElementById("name").value;
    let birthday = document.getElementById("birthday").value;
    let message = document.getElementById("message").value;
    alert(`Bienvenido: ${name}. 
    Tu fecha de nacimiento es: ${birthday}.
    Gracias por escribir este mensaje: ${message}`)
}

const viewBallBlue = () =>{

}

const suma = ()=>{
    let num1 =document.getElementById("numS1").value;
    let num2 =document.getElementById("numS2").value;
    total = parseFloat(num1) + parseFloat(num2);

    alert(`Tu resultado es: ${total} `)
}

const resta = ()=>{
    let num1 =document.getElementById("numR1").value;
    let num2 =document.getElementById("numR2").value;
    total = parseFloat(num1) - parseFloat(num2);

    alert(`Tu resultado es: ${total} `)
}
const multipli = ()=>{
    let num1 =document.getElementById("numM1").value;
    let num2 =document.getElementById("numM2").value;
    total = parseFloat(num1) * parseFloat(num2);

    alert(`Tu resultado es: ${total} `)
}
const division = ()=>{
    let num1 =document.getElementById("numD1").value;
    let num2 =document.getElementById("numD2").value;
    total = parseFloat(num1) / parseFloat(num2);

    alert(`Tu resultado es: ${total} `)
}