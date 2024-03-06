
var lastClicked = null;

function toggleAnswer(answerId) {
    var answer = document.getElementById(answerId);

    if (lastClicked === answerId && answer.style.display !== 'none') {
        // If the same question is clicked again close the answer paragraph
        answer.style.display = 'none';
        lastClicked = null;
    } else {
        // Show the clicked answer paragraph
        answer.style.display = 'block';

        if (lastClicked !== null) {
            // Hide the previously clicked answer paragraph
            var lastAnswer = document.getElementById(lastClicked);
            lastAnswer.style.display = 'none';
        }

        lastClicked = answerId;
    }
}

// Ensure no answer paragraph is toggled when the page loads
window.onload = function() {
    var allAnswers = document.querySelectorAll('.answer-container');
    allAnswers.forEach(function(item) {
        item.style.display = 'none';
    });
};
