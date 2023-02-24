document.getElementById('calculate-rate').addEventListener('click', function(){
    const valueFromInput = document.getElementById('input-value');
    const inputValueString = valueFromInput.value;
    let inputFloat = parseFloat(inputValueString);

   

    let fromUSD;
    let fromBDT;
    // let toUSD;
    // let toBDT;
    // let finalOutput;
    
    let outputValue;
    const valueUSDFrom= document.getElementById('from-usd');
    const inputValueStringFromUSD = valueUSDFrom.value;

    const valueBDTFrom= document.getElementById('from-bdt');
    const inputValueStringFromBDT = valueBDTFrom.value;

    const valueUSDTo= document.getElementById('to-usd');
    const inputValueStringToUSD = valueUSDTo.value;

    const valueBDTTo= document.getElementById('to-usd');
    const inputValueStringToBDT = valueBDTTo.value;


    if(inputValueStringFromUSD === inputValueStringToUSD ||inputValueStringFromBDT===inputValueStringToBDT){
        alert('Wrong Selection Of Currency');
    }
    else if(inputValueStringFromUSD!=inputValueStringFromBDT){       
 
        outputValue = inputFloat*100.00;
        document.getElementById('output').innerText = outputValue;       
    }
    else{
   
        outputValue = inputFloat/100.00;
        document.getElementById('output').innerText = outputValue;
    }


})