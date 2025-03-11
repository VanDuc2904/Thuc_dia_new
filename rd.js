let currentTest = [];
let answers = [];
const readingData = {
    test2: {
        part1: {
            passage: "I (go/live/walk) in a flat. I (share/drink/hold) it with my friend. We are in the same (door/class/chair). We (drive/smile/say) to work. We like to (hold/cook/melt) dinner.",
            questions: [
                { id: 1, text: "I (go/live/walk) in a flat.", options: ["go", "live", "walk"], answer: "live" },
                { id: 2, text: "I (share/drink/hold) it with my friend.", options: ["share", "drink", "hold"], answer: "share" },
                { id: 3, text: "We are in the same (door/class/chair).", options: ["door", "class", "chair"], answer: "class" },
                { id: 4, text: "We (drive/smile/say) to work.", options: ["drive", "smile", "say"], answer: "drive" },
                { id: 5, text: "We like to (hold/cook/melt) dinner.", options: ["hold", "cook", "melt"], answer: "cook" }
            ]
        },
    },
    test1: {
        part1: {
            passage: "I saw some shows in the (market/window/shoe) of one store. I didn't (eat/drink/buy) it. I buy some food at the (classroom/park/market). I ate (watch/door/cake). I (ate/saw/watched) a program on TV.",
            questions: [
                { id: 1, text: "I saw some shows in the (market/window/shoe) of one store.", options: ["market", "window", "shoe"], answer: "window" },
                { id: 2, text: "I didn't (eat/drink/buy) it.", options: ["eat", "drink", "buy"], answer: "buy" },
                { id: 3, text: "I buy some food at the (classroom/park/market).", options: ["classroom", "park", "market"], answer: "market" },
                { id: 4, text: "I ate (watch/door/cake).", options: ["watch", "door", "cake"], answer: "cake" },
                { id: 5, text: "I (ate/saw/watched) a program on TV.", options: ["ate", "saw", "watched"], answer: "watched" }
            ]
        },
    },
    "test3": {
        part1: {
            passage: "I am living with a family ___ the city. The children are ___ to me. Seamus and Agnes ___ speaking English with me. Sometimes, I ___ to Seamus and Agnes. I hate the food, ___ yesterday I ate out.",
            questions: [
                { id: 1, text: "I am living with a family ___ the city.", options: ["next", "near", "under"], answer: "near" },
                { id: 2, text: "The children are ___ to me.", options: ["cruel", "noisy", "friendly"], answer: "friendly" },
                { id: 3, text: "Seamus and Agnes ___ speaking English with me.", options: ["read", "hold", "practise"], answer: "practise" },
                { id: 4, text: "Sometimes, I ___ to Seamus and Agnes.", options: ["see", "read", "say"], answer: "say" },
                { id: 5, text: "I hate the food, ___ yesterday I ate out.", options: ["then", "so", "also"], answer: "so" }
            ]
        },
    },
    "test4": {
        part1: {
            passage: "Everyone is ___. I can ___ to my class. I met her for the ___ time. She can ___ 5 languages. We eat dinner ___.",
            questions: [
                { id: 1, text: "Everyone is ___.", options: ["friendly", "melty", "noisy"], answer: "friendly" },
                { id: 2, text: "I can ___ to my class.", options: ["train", "sleep", "walk"], answer: "walk" },
                { id: 3, text: "I met her for the ___ time.", options: ["very", "first", "one"], answer: "first" },
                { id: 4, text: "She can ___ 5 languages.", options: ["talk", "say", "speak"], answer: "speak" },
                { id: 5, text: "We eat dinner ___.", options: ["toward", "together", "another"], answer: "together" }
            ]
        },
    },
    "test5": {
        part1: {
            passage: "I start ___ in the morning. I have ___. I ___ the office. I go home in my new ___. I go to bed when I feel ___.",
            questions: [
                { id: 1, text: "I start ___ in the morning.", options: ["sleep", "early", "angry"], answer: "early" },
                { id: 2, text: "I have ___.", options: ["lunch", "bed", "tutor"], answer: "lunch" },
                { id: 3, text: "I ___ the office.", options: ["go", "leave", "return"], answer: "leave" },
                { id: 4, text: "I go home in my new ___.", options: ["bag", "jeans", "car"], answer: "car" },
                { id: 5, text: "I go to bed when I feel ___.", options: ["sleepy", "angry", "alert"], answer: "sleepy" }
            ]
        },
    },
    "test6": {
        part1: {
            passage: "The water is ___. The ___ is out. I have an ___ holiday. After ___ so hard. I hope to ___ your letter.",
            questions: [
                { id: 1, text: "The water is ___.", options: ["sour", "clear", "see"], answer: "clear" },
                { id: 2, text: "The ___ is out.", options: ["wind", "dust", "sun"], answer: "sun" },
                { id: 3, text: "I have an ___ holiday.", options: ["tired", "enjoyable", "good"], answer: "enjoyable" },
                { id: 4, text: "After ___ so hard.", options: ["working", "sleeping", "eating"], answer: "working" },
                { id: 5, text: "I hope to ___ your letter.", options: ["tell", "read", "forward"], answer: "read" }
            ]
        },
    },
    "test7": {
        part1: {
            passage: "I imagine you don’t want to ___ this. I ___ you earlier but you were not home. Can you be ___ before 7pm? I can ___ you at your place then. Don’t have too much ___ because we’re going to eat cake.",
            questions: [
                { id: 1, text: "I imagine you don’t want to ___ this.", options: ["love", "remember", "miss"], answer: "miss" },
                { id: 2, text: "I ___ you earlier but you were not home.", options: ["called", "told", "said"], answer: "called" },
                { id: 3, text: "Can you be ___ before 7pm?", options: ["early", "sleepy", "ready"], answer: "ready" },
                { id: 4, text: "I can ___ you at your place then.", options: ["hold", "meet", "miss"], answer: "meet" },
                { id: 5, text: "Don’t have too much ___ because we’re going to eat cake.", options: ["talk", "pencil", "dinner"], answer: "dinner" }
            ]
        },
    },
    "test8": {
        part1: {
            passage: "The budget doesn’t ___. Could you get the financial ___? I ___ it will help. Read the information ___ not quickly. Send me the results ___ you go home, not after.",
            questions: [
                { id: 1, text: "The budget doesn’t ___.", options: ["work", "count", "balance"], answer: "balance" },
                { id: 2, text: "Could you get the financial ___?", options: ["department", "statement", "accountant"], answer: "statement" },
                { id: 3, text: "I ___ it will help.", options: ["sure", "assure", "think"], answer: "think" },
                { id: 4, text: "Read the information ___ not quickly.", options: ["beautifully", "fluently", "slowly"], answer: "slowly" },
                { id: 5, text: "Send me the results ___ you go home, not after.", options: ["when", "before", "between"], answer: "before" }
            ]
        },
    },
    "test9": {
        part1: {
            passage: "It is ___ what I like. And it is the perfect color, ___. I am going to wear it ___ my birthday party. I will save you ___ cake. ___ my love to everyone.",
            questions: [
                { id: 1, text: "It is ___ what I like.", options: ["yet", "not", "just"], answer: "just" },
                { id: 2, text: "And it is the perfect color, ___.", options: ["so", "too", "to"], answer: "too" },
                { id: 3, text: "I am going to wear it ___ my birthday party.", options: ["to", "on", "at"], answer: "to" },
                { id: 4, text: "I will save you ___ cake.", options: ["many", "none", "some"], answer: "some" },
                { id: 5, text: "___ my love to everyone.", options: ["Give", "Hold", "Receive"], answer: "Give" }
            ]
        },
    },
    "test10": {
        part1: {
            passage: "I am never ___. In the mornings, I attend ___. I eat lunch in the ___. I buy food from the ___. I always ___ dinner for myself.",
            questions: [
                { id: 1, text: "I am never ___.", options: ["late", "soon", "early"], answer: "late" },
                { id: 2, text: "In the mornings, I attend ___.", options: ["meetings", "dinner", "breakfast"], answer: "meetings" },
                { id: 3, text: "I eat lunch in the ___.", options: ["park", "city", "village"], answer: "park" },
                { id: 4, text: "I buy food from the ___.", options: ["shop", "window", "car"], answer: "shop" },
                { id: 5, text: "I always ___ dinner for myself.", options: ["cook", "drink", "breathe"], answer: "cook" }
            ]
        },
    },
    "test11": {
        part1: {
            passage: "The weather is ___. We are on the ___. We eat dinner ___ we go to church. We are going to ___ around. I hope the weather isn’t ___ hot.",
            questions: [
                { id: 1, text: "The weather is ___.", options: ["cheap", "expensive", "great"], answer: "great" },
                { id: 2, text: "We are on the ___.", options: ["city", "countryside", "boat"], answer: "boat" },
                { id: 3, text: "We eat dinner ___ we go to church.", options: ["after", "then", "before"], answer: "then" },
                { id: 4, text: "We are going to ___ around.", options: ["drive", "see", "talk"], answer: "drive" },
                { id: 5, text: "I hope the weather isn’t ___ hot.", options: ["too", "to", "on"], answer: "too" }
            ]
        },
    },
    "test12": {
        part1: {
            passage: "It is a ___ day. I need the ___ of the report. Can you print a ___ for me? I am ___ with my work. I will have meetings with my ___.",
            questions: [
                { id: 1, text: "It is a ___ day.", options: ["long", "red", "tall"], answer: "long" },
                { id: 2, text: "I need the ___ of the report.", options: ["work", "job", "detail"], answer: "detail" },
                { id: 3, text: "Can you print a ___ for me?", options: ["information", "copy", "paper"], answer: "copy" },
                { id: 4, text: "I am ___ with my work.", options: ["busy", "table", "round"], answer: "busy" },
                { id: 5, text: "I will have meetings with my ___.", options: ["neighbor", "wife", "client"], answer: "client" }
            ]
        },
    }
};
// Tạo tất cả câu hỏi từ các bộ test
function getAllQuestions() {
    const allQuestions = [];
    for (let test in readingData) {
        if (readingData.hasOwnProperty(test)) {
            allQuestions.push(...readingData[test].part1.questions);
        }
    }
    return allQuestions;
}

// Lấy ngẫu nhiên các câu hỏi từ tất cả câu hỏi
function getRandomQuestions(allQuestions, numberOfQuestions) {
    const shuffledQuestions = allQuestions.sort(() => 0.5 - Math.random());
    return shuffledQuestions.slice(0, numberOfQuestions);
}

// Hiển thị câu hỏi ngẫu nhiên
function renderQuestions() {
    const questionsContainer = document.getElementById("questions-container");
    questionsContainer.innerHTML = ""; // Xóa câu hỏi cũ
    
    currentTest.forEach((q, index) => {
        const div = document.createElement("div");
        div.className = "question";
        div.innerHTML = `
            <h3>${index + 1}. ${q.text}</h3>
            ${q.options.map((option, i) => `
                <div class="option">
                    <input type="radio" name="q${index}" value="${option}" id="q${index}_${i}" onclick="recordAnswer(${index}, '${option}')">
                    <label for="q${index}_${i}">${option}</label>
                </div>
            `).join("")}
        `;
        questionsContainer.appendChild(div);
    });
}

// Ghi lại câu trả lời của người dùng
function recordAnswer(index, selectedAnswer) {
    answers[index] = selectedAnswer;
}

// Nộp bài và tính điểm
function submitTest() {
    let score = 0;
    currentTest.forEach((q, index) => {
        if (answers[index] === q.answer) {
            score++;
        }
    });

    const resultContainer = document.getElementById("result-container");
    resultContainer.innerHTML = `Your score is: ${score} / ${currentTest.length}`;
    
    showAnswers();
}

// Hiển thị câu trả lời đúng hay sai
function showAnswers() {
    const questionsContainer = document.getElementById("questions-container");
    const questionElements = questionsContainer.getElementsByClassName("question");

    for (let i = 0; i < questionElements.length; i++) {
        const questionElement = questionElements[i];
        const selectedAnswer = answers[i];
        const correctAnswer = currentTest[i].answer;

        // Hiển thị câu trả lời đúng nếu người dùng trả lời đúng, màu xanh
        if (selectedAnswer === correctAnswer) {
            questionElement.style.backgroundColor = 'lightgreen';
            questionElement.innerHTML += `<p>Correct Answer: ${correctAnswer}</p>`;
        } else {
            // Hiển thị câu trả lời sai nếu người dùng trả lời sai, màu đỏ
            questionElement.style.backgroundColor = 'lightcoral';
            questionElement.innerHTML += `<p>Incorrect! Correct Answer: ${correctAnswer}</p>`;
        }
    }
}

// Tạo đề thi ngẫu nhiên với 10 câu hỏi
function generateTest() {
    const allQuestions = getAllQuestions();
    currentTest = getRandomQuestions(allQuestions, 10); // Chọn ngẫu nhiên 10 câu hỏi từ part1 của tất cả các bộ test
    answers = new Array(currentTest.length).fill(null); // Khởi tạo mảng câu trả lời
    renderQuestions();
}