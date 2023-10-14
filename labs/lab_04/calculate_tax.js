"use strict";
const $ = selector => document.querySelector(selector);




const processEntry = () => {

	
	const subtotal = parseFloat(document.querySelector("#subtotal").value);
	if(subtotal < 0 || subtotal > 10000){
		alert("Invalid subtotal entry. Must be greater than 0 and less than 10,000");
		return;
	}

	const taxRate = parseFloat(document.querySelector("#tax_rate").value);
	if(taxRate < 0 || taxRate > 12){
		alert("Invalid tax rate. Must be greater than 0 and less than 12.");
		return;
	}
	
	const salesTaxFormula = subtotal * (taxRate / 100);
	const salesTax = document.querySelector("#sales_tax").value = salesTaxFormula.toFixed(2);

	const totalVal = subtotal + salesTaxFormula;
	const total = document.querySelector("#total").value = totalVal.toFixed(2);


}

const clearSubtotal = () => {
    $("#subtotal").value = "";
};

const clearTaxRate = () => {
    $("#tax_rate").value = "";
};

const clearEntries = () => {
	clearSubtotal();
    clearTaxRate();
	document.getElementById("sales_tax").value = "";
	document.getElementById("total").value = "";
	$("#subtotal").focus();
}


document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	document.querySelector("#subtotal").focus();
	$("#calculate").addEventListener("click", processEntry);
	$("#clear").addEventListener("click", clearEntries);
	$("#subtotal").addEventListener("click", clearSubtotal);
    $("#tax_rate").addEventListener("click", clearTaxRate);

	$("#calculate").addEventListener("click", () =>{
		$("#subtotal").focus();
	});
	
});