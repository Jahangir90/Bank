// add event handler with the button

// step:1
document.getElementById('btn-Withdraw').addEventListener('click',function(){
    // step:2
    let WithdrawFiled = document.getElementById('Withdraw-filed');
    let newWithDrowstring = WithdrawFiled.value;
    let newWithDrow = parseFloat(newWithDrowstring);
    console.log(newWithDrow);
    // step:3
    let withDrawtotalElemet = document.getElementById('withdraw-total');
    let previseDrawTotalstring = withDrawtotalElemet.innerText;
    let previseDrawTotal = parseFloat(previseDrawTotalstring);
    // step:4
    let currentWithdawTotal = previseDrawTotal+ newWithDrow;
    withDrawtotalElemet.innerText = currentWithdawTotal;
    // step :5
    let balanceTotalElemet = document.getElementById('balance-total');
    let previoseBalanceString = balanceTotalElemet.innerText
    let previoseBalanceTotal = parseFloat(previoseBalanceString);

    // step:6

    let newBalaNEtOTAL = previoseBalanceTotal - newWithDrow;
    balanceTotalElemet.innerText = newBalaNEtOTAL;
    // step:7
    WithdrawFiled.value = '';

})