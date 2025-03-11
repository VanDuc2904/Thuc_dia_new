// reading.js

const readingData = {
    "test1": {
        passage: "This is about a shopping experience and watching TV.",
        questions: [
            { id: 1, text: "I saw some shows in the ___ of one store.", options: ["market", "window", "shoe"], answer: "window" },
            { id: 2, text: "I didn’t ___ it.", options: ["eat", "drink", "buy"], answer: "buy" },
            { id: 3, text: "I buy some food at the ___.", options: ["classroom", "park", "market"], answer: "market" },
            { id: 4, text: "I ate ___.", options: ["watch", "door", "cake"], answer: "cake" },
            { id: 5, text: "I ___ a program on TV.", options: ["ate", "saw", "watched"], answer: "watched" }
        ]
    },
    "test2": {
        passage: "This describes living and working with a friend.",
        questions: [
            { id: 1, text: "I ___ in a flat.", options: ["go", "live", "walk"], answer: "live" },
            { id: 2, text: "I ___ it with my friend.", options: ["share", "drink", "hold"], answer: "share" },
            { id: 3, text: "We are in the same ___.", options: ["door", "class", "chair"], answer: "class" },
            { id: 4, text: "We ___ to work.", options: ["drive", "smile", "say"], answer: "drive" },
            { id: 5, text: "We like to ___ dinner.", options: ["hold", "cook", "melt"], answer: "cook" }
        ]
    },
    "test3": {
        passage: "This is a short description about living with a family and practicing English.",
        questions: [
            { id: 1, text: "I am living with a family ___ the city.", options: ["next", "near", "under"], answer: "near" },
            { id: 2, text: "The children are ___ to me.", options: ["cruel", "noisy", "friendly"], answer: "friendly" },
            { id: 3, text: "Seamus and Agnes ___ speaking English with me.", options: ["read", "hold", "practise"], answer: "practise" },
            { id: 4, text: "Sometimes, I ___ to Seamus and Agnes.", options: ["see", "read", "say"], answer: "say" },
            { id: 5, text: "I hate the food, ___ yesterday I ate out.", options: ["then", "so", "also"], answer: "so" }
        ]
    },
    "test4": {
        passage: "This is about meeting someone and spending time together.",
        questions: [
            { id: 1, text: "Everyone is ___.", options: ["friendly", "melty", "noisy"], answer: "friendly" },
            { id: 2, text: "I can ___ to my class.", options: ["train", "sleep", "walk"], answer: "walk" },
            { id: 3, text: "I met her for the ___ time.", options: ["very", "first", "one"], answer: "first" },
            { id: 4, text: "She can ___ 5 languages.", options: ["talk", "say", "speak"], answer: "speak" },
            { id: 5, text: "We eat dinner ___.", options: ["toward", "together", "another"], answer: "together" }
        ]
    },
    "test5": {
        passage: "This describes a daily routine involving work and rest.",
        questions: [
            { id: 1, text: "I start ___ in the morning.", options: ["sleep", "early", "angry"], answer: "early" },
            { id: 2, text: "I have ___.", options: ["lunch", "bed", "tutor"], answer: "lunch" },
            { id: 3, text: "I ___ the office.", options: ["go", "leave", "return"], answer: "leave" },
            { id: 4, text: "I go home in my new ___.", options: ["bag", "jeans", "car"], answer: "car" },
            { id: 5, text: "I go to bed when I feel ___.", options: ["sleepy", "angry", "alert"], answer: "sleepy" }
        ]
    },
    "test6": {
        passage: "This is about enjoying a holiday after hard work.",
        questions: [
            { id: 1, text: "The water is ___.", options: ["sour", "clear", "see"], answer: "clear" },
            { id: 2, text: "The ___ is out.", options: ["wind", "dust", "sun"], answer: "sun" },
            { id: 3, text: "I have an ___ holiday.", options: ["tired", "enjoyable", "good"], answer: "enjoyable" },
            { id: 4, text: "After ___ so hard.", options: ["working", "sleeping", "eating"], answer: "working" },
            { id: 5, text: "I hope to ___ your letter.", options: ["tell", "read", "forward"], answer: "read" }
        ]
    },
    "test7": {
        passage: "This is about planning a meeting and eating together.",
        questions: [
            { id: 1, text: "I imagine you don’t want to ___ this.", options: ["love", "remember", "miss"], answer: "miss" },
            { id: 2, text: "I ___ you earlier but you were not home.", options: ["called", "told", "said"], answer: "called" },
            { id: 3, text: "Can you be ___ before 7pm?", options: ["early", "sleepy", "ready"], answer: "ready" },
            { id: 4, text: "I can ___ you at your place then.", options: ["hold", "meet", "miss"], answer: "meet" },
            { id: 5, text: "Don’t have too much ___ because we’re going to eat cake.", options: ["talk", "pencil", "dinner"], answer: "dinner" }
        ]
    },
    "test8": {
        passage: "This involves handling financial tasks and communication.",
        questions: [
            { id: 1, text: "The budget doesn’t ___.", options: ["work", "count", "balance"], answer: "balance" },
            { id: 2, text: "Could you get the financial ___?", options: ["department", "statement", "accountant"], answer: "statement" },
            { id: 3, text: "I ___ it will help.", options: ["sure", "assure", "think"], answer: "think" },
            { id: 4, text: "Read the information ___ not quickly.", options: ["beautifully", "fluently", "slowly"], answer: "slowly" },
            { id: 5, text: "Send me the results ___ you go home, not after.", options: ["when", "before", "between"], answer: "before" }
        ]
    },
    "test9": {
        passage: "This is about preparing for a birthday party.",
        questions: [
            { id: 1, text: "It is ___ what I like.", options: ["yet", "not", "just"], answer: "just" },
            { id: 2, text: "And it is the perfect color, ___.", options: ["so", "too", "to"], answer: "too" },
            { id: 3, text: "I am going to wear it ___ my birthday party.", options: ["to", "on", "at"], answer: "to" },
            { id: 4, text: "I will save you ___ cake.", options: ["many", "none", "some"], answer: "some" },
            { id: 5, text: "___ my love to everyone.", options: ["Give", "Hold", "Receive"], answer: "Give" }
        ]
    },
    "test10": {
        passage: "This describes a daily routine with food and meetings.",
        questions: [
            { id: 1, text: "I am never ___.", options: ["late", "soon", "early"], answer: "late" },
            { id: 2, text: "In the mornings, I attend ___.", options: ["meetings", "dinner", "breakfast"], answer: "meetings" },
            { id: 3, text: "I eat lunch in the ___.", options: ["park", "city", "village"], answer: "park" },
            { id: 4, text: "I buy food from the ___.", options: ["shop", "window", "car"], answer: "shop" },
            { id: 5, text: "I always ___ dinner for myself.", options: ["cook", "drink", "breathe"], answer: "cook" }
        ]
    },
    "test11": {
        passage: "This is about a trip on a boat and enjoying the weather.",
        questions: [
            { id: 1, text: "The weather is ___.", options: ["cheap", "expensive", "great"], answer: "great" },
            { id: 2, text: "We are on the ___.", options: ["city", "countryside", "boat"], answer: "boat" },
            { id: 3, text: "We eat dinner ___ we go to church.", options: ["after", "then", "before"], answer: "then" },
            { id: 4, text: "We are going to ___ around.", options: ["drive", "see", "talk"], answer: "drive" },
            { id: 5, text: "I hope the weather isn’t ___ hot.", options: ["too", "to", "on"], answer: "too" }
        ]
    },
    "test12": {
        passage: "This describes a busy workday with meetings.",
        questions: [
            { id: 1, text: "It is a ___ day.", options: ["long", "red", "tall"], answer: "long" },
            { id: 2, text: "I need the ___ of the report.", options: ["work", "job", "detail"], answer: "detail" },
            { id: 3, text: "Can you print a ___ for me?", options: ["information", "copy", "paper"], answer: "copy" },
            { id: 4, text: "I am ___ with my work.", options: ["busy", "table", "round"], answer: "busy" },
            { id: 5, text: "I will have meetings with my ___.", options: ["neighbor", "wife", "client"], answer: "client" }
        ]
    }
};

function loadContent() {
    const testSelect = document.getElementById("test-select");
    const selectedTest = testSelect.value;
    const descriptionContainer = document.getElementById("description-container");
    const dialogueContainer = document.getElementById("dialogue-container");
    const passageContainer = document.getElementById("passage-container");
    const questionsContainer = document.getElementById("questions-container");
    const checkButton = document.getElementById("check-answers");

    // Clear all containers
    descriptionContainer.innerHTML = "";
    dialogueContainer.innerHTML = "";
    passageContainer.innerHTML = "";
    questionsContainer.innerHTML = "";
    checkButton.classList.add("hidden");

    if (selectedTest && readingData[selectedTest]) {
        const test = readingData[selectedTest];

        // Passage
        passageContainer.innerHTML = `<h2>Passage</h2><p>${test.passage}</p>`;

        // Questions
        questionsContainer.innerHTML = "<h2>Questions</h2>";
        test.questions.forEach(q => {
            const questionDiv = document.createElement("div");
            questionDiv.classList.add("question");
            questionDiv.innerHTML = `
                <h3>${q.id}. ${q.text}</h3>
                ${q.options.map((opt, index) => `
                    <div class="option">
                        <input type="radio" name="q${q.id}" id="q${q.id}-${index}" value="${opt}">
                        <label for="q${q.id}-${index}">${opt}</label>
                    </div>
                `).join("")}
                <div class="result" id="result-q${q.id}"></div>
            `;
            questionsContainer.appendChild(questionDiv);
        });

        // Show check button
        checkButton.classList.remove("hidden");
        checkButton.onclick = () => {
            test.questions.forEach(q => {
                const selectedOption = document.querySelector(`input[name="q${q.id}"]:checked`);
                const resultDiv = document.getElementById(`result-q${q.id}`);
                if (selectedOption) {
                    const userAnswer = selectedOption.value;
                    resultDiv.textContent = userAnswer === q.answer ? "Correct!" : "Incorrect! Correct answer: " + q.answer;
                    resultDiv.className = "result " + (userAnswer === q.answer ? "correct" : "incorrect");
                }
            });
        };
    }
}
