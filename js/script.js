//Add player Name side bar 
// const firstPlayer = document.getElementById('player-1') .addEventListener('click', function(){
//     const playerSelect = document.getElementById('Player-select-1')
//     const playerTextNone = playerSelect.innerText 
  
// })


document.getElementById('calcute-btn').addEventListener('click',function(){
    const playerInputField = document.getElementById('perplayerinputField')
    const playerInputSting = playerInputField.value
     const playerValue = parseFloat(playerInputSting)
     playerInputField.value = ""
   
     const totalPlayervalue = playerValue * 5
   
   
     const playerExpenses = document.getElementById ('totalExpenses') 
     const totalExpensesPrice = playerExpenses;
     totalExpensesPrice.innerText = totalPlayervalue

   
    
})

document.getElementById('calcule-btn-total') .addEventListener('click',function(){
   
     
    const managerInputField = document.getElementById("maneger-inputField")
    const managerInputFieldString = managerInputField.value
    const managerValue = parseInt(managerInputFieldString)
    
 
    const coachInputField = document.getElementById("Coach-inputfield")
    const coachInputFieldString = coachInputField.value
    const coachValue = parseInt(coachInputFieldString)

   
    const playerExpenses = document.getElementById ('totalExpenses') 
    const totalExpensesPricestring = playerExpenses.innerText;
    const totalExpensesValue= parseInt(totalExpensesPricestring)

    const totalValue =  totalExpensesValue+ managerValue + coachValue
  
    const playerTotalCalculate = document.getElementById ('totalvalue') 
   const totalPrice = playerTotalCalculate;
   totalPrice.innerText = totalValue

   

     

 })



