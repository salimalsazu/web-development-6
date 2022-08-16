
function getInputValueById(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = "";
    return inputFieldValue;
}

function getTextElementById(element) {
    const textElement = document.getElementById(element);
    const elementValueString = textElement.innerText;
    const value = parseFloat(elementValueString);
    return value;
}


function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}