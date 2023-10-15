"use strict";
const $ = selector => document.querySelector(selector);

let taxOwed = parseFloat(document.querySelector("#tax").value);

const calculateTax = (income) => {
		if(income <= 9875){
			taxOwed = (income - 0) * 0.10;
			if(taxOwed === 0){
				document.querySelector("#tax").value = 0;
			}
			if(taxOwed > 1){
				document.querySelector("#tax").value = taxOwed.toFixed(2);
			}
		}

		else if(income <= 40125){
			taxOwed = (income - 9875) * 0.12 + 987.50;
			if(taxOwed === 0){
				document.querySelector("#tax").value = 987.50;
			}
			if(taxOwed > 1){
				document.querySelector("#tax").value = taxOwed.toFixed(2);
			}
		}

		else if(income <= 85525){
			taxOwed = (income - 40125) * 0.22 + 4617.50;
			if(taxOwed === 0){
				document.querySelector("#tax").value = 4617.50;
			}
			if(taxOwed > 1){
				document.querySelector("#tax").value = taxOwed.toFixed(2);
			}
		}

		else if(income <= 163300){
			taxOwed = (income - 85525) * 0.24 + 14605.50;
			if(taxOwed === 0){
				document.querySelector("#tax").value = 14605.50;
			}
			if(taxOwed > 1){
				document.querySelector("#tax").value = taxOwed.toFixed(2);
			}
		}

		else if(income <= 207350){
			taxOwed = (income - 163300) * 0.32 + 33271.50;
			if(taxOwed === 0){
				document.querySelector("#tax").value = 33271.50;
			}
			if(taxOwed > 1){
				document.querySelector("#tax").value = taxOwed.toFixed(2);
			}
		}

		else if(income <= 518400){
			taxOwed = (income - 207350) * 0.35 + 47367.50;
			if(taxOwed === 0){
				document.querySelector("#tax").value = 47367.50;
			}
			if(taxOwed > 1){
				document.querySelector("#tax").value = taxOwed.toFixed(2);
			}
		}

		else if(income > 518400){
			taxOwed = (income - 518400) * 0.37 + 156235.50;
			if(taxOwed === 0){
				document.querySelector("#tax").value = 156235.50;
			}
			if(taxOwed > 1){
				document.querySelector("#tax").value = taxOwed.toFixed(2);
			}
		}
}


const processEntry = () => {

	

	let income = parseFloat(document.querySelector("#income").value);

	if(income < 0){
		alert("Invalid income, must be greater than 0");
		return;
	}else{
		calculateTax(income);
	}

	

	


}

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#calculate").addEventListener("click", processEntry);

	$("#calculate").addEventListener("click", () =>{
		$("#income").focus();
	});

});