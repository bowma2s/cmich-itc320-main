"use strict";
const $ = selector => document.querySelector(selector);

const names = ["Ben", "Joel", "Judy", "Anne"];
const scores = [88, 98, 77, 88];



const displayResults = () => {
  let max = Number.MIN_VALUE;
  let sum = 0;
  let count = 0;
  let maxName = "";

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > max) {
      max = scores[i];
	  maxName = names[i];
    }
    sum += scores[i];
    count++;
  }
  let avg = sum / count;

  const resultsDiv = document.querySelector("#results");

  let resultsH2 = document.createElement("h2");
  resultsH2.textContent = "Results";
  resultsDiv.appendChild(resultsH2);

  let avgPara = document.createElement("p");
  avgPara.textContent = "Average score = " + avg;
  resultsDiv.appendChild(avgPara);

  let maxPara = document.createElement("p");
  maxPara.textContent = "High score = " + maxName + " with a score of " + max;
  resultsDiv.appendChild(maxPara);
}




const displayScores = () => {
  const scoresDiv = document.getElementById("scores");
  scoresDiv.innerHTML = "";

  let scoresH2 = document.createElement("h2");
  scoresH2.innerHTML = ("Scores");
  scoresDiv.appendChild(scoresH2);

  for (let i = 0; i < names.length; i++) {
    const label = document.createElement("label");
    label.textContent = names[i] + "   " + scores[i];
    scoresDiv.appendChild(label);

    scoresDiv.appendChild(document.createElement("br"));
  }
}





const addScore = () => {
  const nameInput = document.getElementById("name");
  const scoreInput = document.getElementById("score");
  const nameError = document.getElementById("name-error");
  const scoreError = document.getElementById("score-error");

  const name = nameInput.value;
  const score = parseInt(scoreInput.value);

  let valid = true;

  if (name === "") {
    nameError.textContent = "Please enter a name";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  if (isNaN(score) || score < 0 || score > 100) {
    scoreError.textContent = "Score must be between 0 and 100";
    valid = false;
  } else {
    scoreError.textContent = "";
  }

  if (valid) {
    names.push(name);
    scores.push(score);
    nameInput.value = "";
    scoreInput.value = "";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // add event handlers
  $("#name").focus();
  $("#add").addEventListener("click", addScore);
  $("#display_results").addEventListener("click", displayResults);
  $("#display_scores").addEventListener("click", displayScores);
  $("#add").addEventListener("click", () =>{
			$("#name").focus();
  });
});
