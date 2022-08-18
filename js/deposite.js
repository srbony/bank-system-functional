
//add the nclick handler on deposite button
document.getElementById('deposit-button').addEventListener('click', function () {

    //step-1: in this function get the deposite value from deposite input field
    const newDepositeAmount = getInputFieldById('deposite-field');

    //step-2:in this function get the previous deposite total from deposite-total element

    const prviousDepositeAmount = getTextElementById('deposite-total');

    //step-3:calculate total new deposite amount
    const newDeposite = newDepositeAmount + prviousDepositeAmount;

    /*
    step-4:set deposite value(set korar somoi 2 ta element lage 1.kon id te set korbo  2.kon variable er man ta rakbo )
    --->('deposite-total') element er modde set korbo tai ei element er id ta dewa hyse
    --->newDeposite variable er man ta set korvo
    
    */

    setTextElementValueById('deposite-total', newDeposite);

    //step-5:get balance total by using the function 

    const previousBalanceTotal = getTextElementById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositeAmount;
    //SET NewBalance into balance total 
    setTextElementValueById('balance-total', newBalanceTotal)

    console.log(newBalanceTotal);
})