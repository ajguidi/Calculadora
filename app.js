console.log("app cargado")

window.onload = function() {  //lo que esta aca adentro se carga despues porque espera a que la pagina cargue

  let firstValue
  let selectedOperator //let no es constant
  let secondValue

  console.log("se cargo la pagina")

  const display = document.getElementById("display")

  console.log(display) //muestra valores
  console.dir(display) //muestra propiedades

  const btnOne = document.getElementById("btnOne")
  const btnTwo = document.getElementById("btnTwo")
  const btnThree = document.getElementById("btnThree")
  const btnFour = document.getElementById("btnFour")
  const btnFive = document.getElementById("btnFive")
  const btnSix = document.getElementById("btnSix")
  const btnSeven = document.getElementById("btnSeven")
  const btnEight = document.getElementById("btnEight")
  const btnNine = document.getElementById("btnNine")
  const btnCero = document.getElementById("btnCero")
  const btnMC = document.getElementById("btnMC")
  const btnMadd = document.getElementById("btnMadd")
  const btnMsub = document.getElementById("btnMsub")
  const btnDiv = document.getElementById("btnDiv")
  const btnMult = document.getElementById("btnMult")
  const btnSub = document.getElementById("btnSub")
  const btnAdd = document.getElementById("btnAdd")
  const btnC = document.getElementById("btnC")
  const btnPoint = document.getElementById("btnPoint")
  const btnEqual = document.getElementById("btnEqual")

  console.log(btnOne)

  btnOne.onclick = function(event){
    console.log(event) //en target->textcontent muestra el string
    console.log(event.target.textContent)
    display.innerText += event.target.textContent //+= es valor anterior + nuevoo, para agregar
  }
  //console.dir(display)

  const numberOnclick = function(event){

    display.innerText += event.target.textContent
    //declaro la funcion para poder usarla vfarias veces
  }


  btnTwo.onclick = numberOnclick
  btnThree.onclick = numberOnclick
  btnFour.onclick = numberOnclick
  btnFive.onclick = numberOnclick
  btnSix.onclick = numberOnclick
  btnSeven.onclick = numberOnclick
  btnEight.onclick = numberOnclick
  btnNine.onclick = numberOnclick
  btnCero.onclick = numberOnclick
  btnPoint.onclick = numberOnclick


btnC.onclick = function() {
  display.innerText = ""
}

const operatorFunction = function(event) {
  firstValue = parseFloat(display.innerText) //conm parsefloat lo guardamos como un int
  display.innerText = ""
  selectedOperator = event.target.textContent
  //console.log("firstValue", firstValue)
  //console.log("SelectedOperator", selectedOperator)

}

  btnDiv.onclick = operatorFunction
  btnMult.onclick = operatorFunction
  btnSub.onclick = operatorFunction
  btnAdd.onclick = operatorFunction

  btnEqual.onclick = function(event) {
    secondValue = parseFloat(display.innerText)
    let result
    switch(selectedOperator) {
      case '+':
        result = firstValue + secondValue
        break;
      case '-':
        result = firstValue - secondValue
        break;
      case '*':
        result = firstValue * secondValue
        break;
      case '/':
        result = firstValue / secondValue
        break;
      default:
        break;
    }
    display.innerText = result
  }


}
