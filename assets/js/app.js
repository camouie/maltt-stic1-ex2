/**
 * In this file we have the instructions/algorithmes to add interactive behaviors to the flash card example.
 * More specifically we want to :
 *
 * (1) Hide one of the card when the user first see the page
 * (2) Use the "Show labels" button to switch to the card with labels
 * (3) Use the "Hide labels" button to switch to the card without labels
 * (4) Increment a counter everytime the user look at the labels
 *
 */

// (4) Set the counter initially to 0
var counter = 0;

var noLabels = document.getElementById("no-labels");
var yesLabels = document.getElementById("yes-labels");
var nextBtn = document.getElementById("next-btn");
var lookTimes = document.getElementById("look-times");

// (1) Hide one of the card when the user first see the page
var currentImage = noLabels;
noLabels.style.display = "block";
yesLabels.style.display = "none";

nextBtn.addEventListener("click", function() {
    // (2) Use the "Show labels" button to switch to the card with labels
    // (4) Increment a counter everytime the user look at the labels
    if (currentImage === noLabels) {
        currentImage = yesLabels;
        counter++;
        lookTimes.textContent = counter;
        nextBtn.textContent = "Masquer les labels";
        noLabels.style.display = "none";
        yesLabels.style.display = "block";
    } else {
        // (3) Use the "Hide labels" button to switch to the card without labels
        nextBtn.textContent = "Afficher les labels";
        currentImage = noLabels;
        noLabels.style.display = "block";
        yesLabels.style.display = "none";
    }
});