"use strict";
const $ = selector => document.querySelector(selector);

const calculateCelsius = temp => (temp-32) * 5/9;
const calculateFahrenheit = temp => temp * 9/5 + 32;

const toggleDisplay = (label1Text, label2Text) => {
    $("#degree_label_1").textContent = label1Text;
    $("#degree_label_2").textContent = label2Text;
    $("#degrees_computed").value = "";
    $("#message").textContent = "";
};

const convertTemp = () => {   
	const temperature = parseFloat($("#degrees_entered").value);
	if (isNaN(temperature)) {
		$("#message").textContent = "You must enter a valid number for degree";	
		$("#degrees_computed").value = "";
	} else {
		
	   const toCelsiusChecked = $("#to_celsius").checked;
	   const convertedTemperature = toCelsiusChecked ? calculateCelsius(temperature)  : calculateFahrenheit(temperature);
       const roundedTemperature = Math.round(convertedTemperature);
	   $("#degrees_computed").value = roundedTemperature;
	}
};

const clearErrorMessage = () => {
    $("#message").textContent = "";
};

const clearComputedTemperature = () => {
    $("#degrees_computed").value = "";
};

const toCelsius = () => toggleDisplay("Enter F degrees:", "Degrees Celsius:");
const toFahrenheit = () => toggleDisplay("Enter C degrees:", "Degrees Fahrenheit:");

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#convert").addEventListener("click", convertTemp);
    $("#to_celsius").addEventListener("click", toCelsius);
    $("#to_fahrenheit").addEventListener("click", toFahrenheit);
	$("#degrees_entered").addEventListener("input", clearErrorMessage);
	$("#degrees_computed").addEventListener("input",clearComputedTemperature);
	// move focus
	$("#degrees_entered").focus();
	$("#degrees_entered").select();
});