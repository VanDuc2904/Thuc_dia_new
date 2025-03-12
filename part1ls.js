function checkAnswer(questionName, correctAnswer) {
    const selected = document.querySelector(`input[name="${questionName}"]:checked`);
    const resultElement = document.getElementById(`result-${questionName}`);
    if (selected) {
        if (selected.value === correctAnswer) {
            resultElement.textContent = "Đúng! Đáp án đúng là: " + correctAnswer;
            resultElement.style.color = "green";
        } else {
            resultElement.textContent = "Sai! Đáp án đúng là: " + correctAnswer;
            resultElement.style.color = "red";
        }
    } else {
        resultElement.textContent = "Vui lòng chọn một đáp án!";
        resultElement.style.color = "orange";
    }
}
