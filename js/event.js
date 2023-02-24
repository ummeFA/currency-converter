
if (typeof window === "object") {
    // code is running in a browser environment
 
document.getElementById('calculate-rate').addEventListener('click', function(){
    const valueFromInput = document.getElementById('input-value');
    const inputValueString = valueFromInput.value;
    var inputFloat = parseFloat(inputValueString);

   var result = 100.00*inputFloat;
   var resultFinal = result.toFixed(2);
   alert(resultFinal);
//    document.getElementById('final-output').innerText = resultFinal;
// console.log(resultFinal);

})
}
// function togglePopup(){
//     document.getElementById("popup-1").classList.toggle("active");
// }