document.getElementById('btn-deposite').addEventListener('click',function(){
    let depositeFiled = document.getElementById('deposite-filed');
    let newDepositeAmoundString = depositeFiled.value;
    let newDepositeAmound = parseFloat(newDepositeAmoundString);
    console.log(newDepositeAmound);

    let depositeTotalElement = document.getElementById('deposite-total');
    let previousdepositeTotalString = depositeTotalElement.innerText;
    let previousdepositeTotal = parseFloat(previousdepositeTotalString);
    let currentDepositeTotal = previousdepositeTotal+newDepositeAmound;

    depositeTotalElement.innerText=currentDepositeTotal;
    
    depositeFiled.value = '';
    
 
    let balanceTotalElemet = document.getElementById('balance-total');
    let previoseBalanceString = balanceTotalElemet.innerText;
    let previoseBalanceTotal = parseFloat(previoseBalanceString);

    let currentBalaneTotal = previoseBalanceTotal + newDepositeAmound;
    balanceTotalElemet.innerText = currentBalaneTotal;

})