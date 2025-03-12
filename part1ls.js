// Danh sách tất cả câu hỏi từ TEST 8 đến TEST 12
const questions = [
    // TEST 8
    { id: "t8q5", question: "How many copies did he sell?", options: ["A. Over 300,000 copies", "B. 100,000 copies", "C. 30,000 copies"], answer: "A" },
    { id: "t8q6", question: "Where did they go last year?", options: ["A. Camping", "B. Cycling", "C. Bowling"], answer: "A" },
    { id: "t8q7", question: "What do they plan to do together?", options: ["A. Go to the coffee shop", "B. Make plans later", "C. Have dinner together"], answer: "B" },
    { id: "t8q8", question: "What does the man drink?", options: ["A. Water and iced tea", "B. Water", "C. Iced tea"], answer: "C" },
    { id: "t8q9", question: "Who did she take the picture of?", options: ["A. The girl's team", "B. The boy's team", "C. Anna, Sara and the girl's team"], answer: "A" },
    { id: "t8q10", question: "Where do they go when they travel to India?", options: ["A. Go to the park", "B. Go to famous places", "C. Go out to eat"], answer: "A" },
    { id: "t8q11", question: "What is the weather like today?", options: ["A. Cold and not wet", "B. Hot and wet", "C. Cold and wet"], answer: "C" },
    { id: "t8q12", question: "How did he adjust the meeting?", options: ["A. Cancel the meeting", "B. Having the meeting without him", "C. Having the meeting another day"], answer: "B" },
    { id: "t8q13", question: "Which door do they need to take to get to Edinburgh?", options: ["A. Two", "B. Three", "C. Four"], answer: "A" },

    // TEST 9
    { id: "t9q1", question: "How does he feel?", options: ["A. Sick", "B. Sad", "C. Well"], answer: "A" },
    { id: "t9q2", question: "How long does it take to get to the station?", options: ["A. 15 minutes", "B. 20 minutes", "C. 25 minutes"], answer: "B" },
    { id: "t9q3", question: "What did he call to say?", options: ["A. To say hello", "B. To meet Felix", "C. To say thank you"], answer: "C" },
    { id: "t9q4", question: "Who is coming to visit him this weekend?", options: ["A. His mother", "B. His sister", "C. His sister and her children"], answer: "C" },
    { id: "t9q5", question: "What time is the meeting?", options: ["A. 2 pm", "B. 10 am", "C. 11 am"], answer: "A" },
    { id: "t9q6", question: "Why can't she pick up her child?", options: ["A. Meet her client", "B. Have an urgent meeting", "C. Stay late at the office"], answer: "C" },
    { id: "t9q7", question: "How much do the cleaning products cost?", options: ["A. One pound fifty", "B. Two pounds", "C. One pence"], answer: "A" },
    { id: "t9q8", question: "Where is she going with her family?", options: ["A. The mountains", "B. The lake", "C. The park"], answer: "A" },
    { id: "t9q9", question: "What did he usually do last year?", options: ["A. Running", "B. Cycling", "C. Walking"], answer: "B" },
    { id: "t9q10", question: "How many minutes did he have to speak?", options: ["A. 10", "B. 15", "C. 25"], answer: "B" },
    { id: "t9q11", question: "Who does she live with?", options: ["A. Her colleague", "B. Her sister", "C. Best friends"], answer: "C" },
    { id: "t9q12", question: "Why does she want to be a writer?", options: ["A. Help people", "B. Make money", "C. Her dream"], answer: "A" },
    { id: "t9q13", question: "Why was the flight canceled?", options: ["A. There are no flight staff", "B. Plane maintenance", "C. Poor weather conditions"], answer: "C" },

    // TEST 10
    { id: "t10q1", question: "Why did he call his friend?", options: ["A. To make an appointment", "B. To say hello", "C. Suggest a drink"], answer: "C" },
    { id: "t10q2", question: "When did they decide to meet?", options: ["A. 7 am on Friday", "B. 9 am on Sunday", "C. 9 am on Saturday"], answer: "B" },
    { id: "t10q3", question: "A girl is calling her mother. Which dress does she want?", options: ["A. Long and green", "B. Long and red", "C. Short and red"], answer: "B" },
    { id: "t10q4", question: "What day is the new appointment?", options: ["A. Thursday 13th", "B. Tuesday 13th", "C. Wednesday 10th"], answer: "A" },
    { id: "t10q5", question: "A man is calling his wife. Where did they meet?", options: ["A. At the park", "B. At the station", "C. Outside a shop"], answer: "C" },
    { id: "t10q6", question: "What did she do last weekend?", options: ["A. Stayed at home", "B. Went shopping", "C. Went to the cinema"], answer: "A" },
    { id: "t10q7", question: "How many weeks have they been in India?", options: ["A. 1 week", "B. 2 weeks", "C. 3 weeks"], answer: "B" },
    { id: "t10q8", question: "Where is the office?", options: ["A. Opposite the hotel", "B. Near the park", "C. Opposite the station"], answer: "A" },
    { id: "t10q9", question: "Where do they wait for the bus?", options: ["A. Next to the hotel", "B. Near the hotel's main entrance", "C. By the hotel's main entrance"], answer: "C" },
    { id: "t10q10", question: "What does his wife like to do?", options: ["A. Sightseeing", "B. Going shopping", "C. Photography"], answer: "C" },
    { id: "t10q11", question: "What outdoor activities do they do in the afternoon?", options: ["A. Play golf", "B. Go to dance classes", "C. Play bridge"], answer: "A" },
    { id: "t10q12", question: "A woman is introducing a concert. The concert will end with?", options: ["A. A surprise performance", "B. Some special offers", "C. The city's favorite group"], answer: "C" },
    { id: "t10q13", question: "What was the writer's first job?", options: ["A. Cook", "B. Reporter", "C. Teacher"], answer: "C" },

    // TEST 11
    { id: "t11q1", question: "What does her sister drink?", options: ["A. Water", "B. Tea", "C. Coffee"], answer: "B" },
    { id: "t11q2", question: "What is the population of this village?", options: ["A. 10,000", "B. 2,000", "C. 5,000"], answer: "A" },
    { id: "t11q3", question: "Where does he want to go tomorrow?", options: ["A. The town hall", "B. The city center", "C. The museum"], answer: "A" },
    { id: "t11q4", question: "What floor is the office on?", options: ["A. On the first floor", "B. On the second floor", "C. On the third floor"], answer: "A" },
    { id: "t11q6", question: "When can they play football at school?", options: ["A. Friday afternoon", "B. Wednesday afternoon", "C. Thursday afternoon"], answer: "B" },
    { id: "t11q7", question: "Where is the office?", options: ["A. Opposite the hotel", "B. Near the park", "C. Opposite the station"], answer: "A" },
    { id: "t11q8", question: "A man is calling his wife. Where did they meet?", options: ["A. At the park", "B. At the station", "C. Outside a shop"], answer: "C" },
    { id: "t11q9", question: "What time does he have dinner these days?", options: ["A. 6 o'clock", "B. 7 o'clock", "C. 8 o'clock"], answer: "B" },
    { id: "t11q10", question: "What does he do after work?", options: ["A. Go to the coffee shop", "B. Play football", "C. Go home"], answer: "B" },
    { id: "t11q11", question: "What did they both like about the movie?", options: ["A. The characters", "B. The ending", "C. The plot"], answer: "B" },
    { id: "t11q12", question: "What area is he describing?", options: ["A. A university area", "B. A park", "C. A library"], answer: "A" },
    { id: "t11q13", question: "A man wants to buy a new house. What is his biggest problem?", options: ["A. Choosing the proper area", "B. Financial problems", "C. Persuading his family"], answer: "C" },

    // TEST 12
    { id: "t12q1", question: "When do they meet each other?", options: ["A. On Thursday morning", "B. On Wednesday morning", "C. On Tuesday morning"], answer: "A" },
    { id: "t12q2", question: "How old is this city?", options: ["A. 150 years", "B. 1500 years", "C. 2000 years"], answer: "B" },
    { id: "t12q3", question: "What colour is Jack's house?", options: ["A. Red", "B. Black", "C. Green"], answer: "A" },
    { id: "t12q4", question: "What does her sister look like?", options: ["A. Short", "B. Tall", "C. Thin"], answer: "A" },
    { id: "t12q5", question: "What does her sister look like?", options: ["A. Short", "B. Tall", "C. Thin"], answer: "A" },
    { id: "t12q6", question: "How does he travel?", options: ["A. By train", "B. By car", "C. By bus"], answer: "A" },
    { id: "t12q7", question: "How long does it take her to ride her bike?", options: ["A. 35 minutes", "B. 25 minutes", "C. 20 minutes"], answer: "A" },
    { id: "t12q9", question: "What does she usually do in her free time?", options: ["A. Go to the theatre and play sports", "B. Play sports and go shopping", "C. Stay at home and shop online"], answer: "A" },
    { id: "t12q10", question: "Which sport is she good at?", options: ["A. Running", "B. Swimming", "C. Football"], answer: "C" },
    { id: "t12q11", question: "What are the similarities between his mom and aunt?", options: ["A. They were thin", "B. They have the same eye color", "C. They have the same hair color"], answer: "A" }
];

// Hàm kiểm tra đáp án
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

// Hàm chọn ngẫu nhiên câu hỏi
function getRandomQuestions(arr, num) {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

// Hàm hiển thị bài thi ngẫu nhiên
function displayRandomTest() {
    const allQuestionsSection = document.getElementById("allQuestions");
    const randomTestSection = document.getElementById("randomTest");
    
    // Ẩn toàn bộ câu hỏi ôn tập và hiển thị bài thi ngẫu nhiên
    allQuestionsSection.style.display = "none";
    randomTestSection.style.display = "block";
    
    randomTestSection.innerHTML = "<h2>Đề thi ngẫu nhiên - Part 1</h2>";
    
    const randomQuestions = getRandomQuestions(questions, 13); // Chọn 13 câu ngẫu nhiên
    randomQuestions.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.className = "question";
        questionDiv.innerHTML = `
            <p><strong>${index + 1}. ${q.question}</strong></p>
            ${q.options.map((option, i) => `
                <label><input type="radio" name="q${index}" value="${String.fromCharCode(65 + i)}"> ${option}</label><br>
            `).join("")}
            <button onclick="checkAnswer('q${index}', '${q.answer}')">Kiểm tra</button>
            <p id="result-q${index}"></p>
        `;
        randomTestSection.appendChild(questionDiv);
    });
}

// Sự kiện nút "Tạo đề thi ngẫu nhiên"
document.getElementById("generateTest").addEventListener("click", displayRandomTest);
