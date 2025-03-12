function checkAnswer(selectId, correctAnswer) {
    const selectElement = document.getElementById(selectId);
    const selectedValue = selectElement.value;
    const resultElement = document.getElementById(`result-${selectId}`);
    
    if (selectedValue === "") {
        resultElement.textContent = "Vui lòng chọn một key!";
        resultElement.style.color = "orange";
    } else if (selectedValue === correctAnswer) {
        resultElement.textContent = "Đúng! Key đúng là: " + correctAnswer;
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "Sai! Key đúng là: " + correctAnswer;
        resultElement.style.color = "red";
    }
}