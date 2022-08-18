function getInputFieldById(inputFieldId) {

    //jei id'r value pete cai shai id'r nam ta 2nd line e dite hbe
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';

    return inputFieldValue;
}
// step-2 get element total by id 
function getTextElementById(elementId) {
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
}

/* kono element set korar somoi function e 2 ta parameter set korthe hy
1.(parameter1)---kon element e set korbo tar id
2.(parameter2)---kon value ta set korbo tar id 
*/

function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId, newValue);
    textElement.innerText = newValue;
}
