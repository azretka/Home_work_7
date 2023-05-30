function showAnswer(id) {
    const answer = document.getElementById("answer" + id);
    answer.style.display = "block";
}
function hideAnswer(id) {
    const answer = document.getElementById("answer" + id);
    answer.style.display = "none";
}

window.addEventListener("DOMContentLoaded", function() {
    let i;
    const showButtons = document.getElementsByClassName("show-answer");
    const hideButtons = document.getElementsByClassName("hide-answer");

    for (i = 0; i < showButtons.length; i++) {
        showButtons[i].addEventListener("click", function() {
            let id = this.getAttribute("data-id");
            showAnswer(id);
        });
    }

    for (i = 0; i < hideButtons.length; i++) {
        hideButtons[i].addEventListener("click", function() {
            let id = this.getAttribute("data-id");
            hideAnswer(id);
        });
    }
});