// write cool JS hwere!!

// find dom elementer
let myAmmountElement = document.getElementById("ammount")
let myExchangeRateElement = document.getElementById("rate")
let myResultElement = document.getElementById("result")
let myCalculateButton = document.getElementById("calculateButton")


myCalculateButton.addEventListener('click', () => {
    Calculateresult()
})


function Calculateresult() {
    let myAmmount = myAmmountElement.value
    let myRate = myExchangeRateElement.value

    // currency name optional
    console.log(myExchangeRateElement.options);
    let myCurrency = myExchangeRateElement.options[myExchangeRateElement.selectedIndex].innerText



    let result = myAmmount / myRate

    // to fixed er for at begrænse decimaler
    // to fixed giver færre decimaler (anttal)
    showResult(result.toFixed(2), myCurrency)
}




function showResult(result, myCurrency) {

    myResultElement.innerText = result + " " + myCurrency
}
