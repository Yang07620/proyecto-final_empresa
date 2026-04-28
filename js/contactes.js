let Name = document.querySelector("#Nombre")
console.log(Name)

let mAil = document.querySelector("#Mail")
console.log(mAil)

let Pregunta = document.querySelector("#Mensage")
console.log(Pregunta)

let resum = document.querySelector("#reSum")
console.log(resum)

let BtNResum = document.querySelector("#but-resum")
console.log(BtNResum)

BtNResum.addEventListener("click", generaresum)

let Valornombre = ""
let Valormail = ""
let Valorpregunta = ""


function generaresum (){
    let Valornombre = "Nombre: " + Name.value
    let Valormail = "Mail: " + mAil.value
    let Valorpregunta = "Pregunta: " + Pregunta.value
    
    resum.innerHTML = Valornombre + Valormail + Valorpregunta
}