// Timer countdown
let minutes = 32;
let seconds = 0;
let timerRunning = true;

function startTimer() {
    setInterval(() => {
        if (!timerRunning) return;
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval();
                alert("Time's up!");
                showResults();
                return;
            }
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }
        document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
        document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
    }, 1000);
}

startTimer();

// Hide timer
function hideTimer() {
    document.querySelector(".timer").style.display = "none";
}

// All tests data
const tests = [
    {
        instruction: "Listen to four people talking about doing exercise and match each speaker to their opinion.",
        qA: {
            text: "A: What does speaker A say about the topic?",
            options: [
                { value: "a", text: "Exercising boosts productivity and helps focus better before work.", correct: true },
                { value: "b", text: "Exercising leaves them exhausted and unable to do much afterward.", correct: false },
                { value: "c", text: "Exercising is enjoyable and a social activity with friends.", correct: false },
                { value: "d", text: "Dislikes exercising due to a busy schedule and discomfort.", correct: false }
            ]
        },
        qB: {
            text: "B: What does speaker B say about the topic?",
            options: [
                { value: "a", text: "Exercising boosts productivity and helps focus better before work.", correct: false },
                { value: "b", text: "Exercising leaves them exhausted and unable to do much afterward.", correct: true },
                { value: "c", text: "Exercising is enjoyable and a social activity with friends.", correct: false },
                { value: "d", text: "Dislikes exercising due to a busy schedule and discomfort.", correct: false }
            ]
        },
        qC: {
            text: "C: What does speaker C say about the topic?",
            options: [
                { value: "a", text: "Exercising boosts productivity and helps focus better before work.", correct: false },
                { value: "b", text: "Exercising leaves them exhausted and unable to do much afterward.", correct: false },
                { value: "c", text: "Exercising is enjoyable and a social activity with friends.", correct: true },
                { value: "d", text: "Dislikes exercising due to a busy schedule and discomfort.", correct: false }
            ]
        },
        qD: {
            text: "D: What does speaker D say about the topic?",
            options: [
                { value: "a", text: "Exercising boosts productivity and helps focus better before work.", correct: false },
                { value: "b", text: "Exercising leaves them exhausted and unable to do much afterward.", correct: false },
                { value: "c", text: "Exercising is enjoyable and a social activity with friends.", correct: false },
                { value: "d", text: "Dislikes exercising due to a busy schedule and discomfort.", correct: true }
            ]
        }
    },
    {
        instruction: "Listen to four people talking about traveling to work and match each speaker to their opinion.",
        qA: {
            text: "A: What does speaker A say about the topic?",
            options: [
                { value: "a", text: "Walks to work with a friend to save money and stay fit.", correct: true },
                { value: "b", text: "Drives to work with their mother, enjoying the time to chat.", correct: false },
                { value: "c", text: "Walks alone to work since moving closer.", correct: false },
                { value: "d", text: "Uses public transport to reduce environmental impact.", correct: false }
            ]
        },
        qB: {
            text: "B: What does speaker B say about the topic?",
            options: [
                { value: "a", text: "Walks to work with a friend to save money and stay fit.", correct: false },
                { value: "b", text: "Drives to work with their mother, enjoying the time to chat.", correct: true },
                { value: "c", text: "Walks alone to work since moving closer.", correct: false },
                { value: "d", text: "Uses public transport to reduce environmental impact.", correct: false }
            ]
        },
        qC: {
            text: "C: What does speaker C say about the topic?",
            options: [
                { value: "a", text: "Walks to work with a friend to save money and stay fit.", correct: false },
                { value: "b", text: "Drives to work with their mother, enjoying the time to chat.", correct: false },
                { value: "c", text: "Walks alone to work since moving closer.", correct: true },
                { value: "d", text: "Uses public transport to reduce environmental impact.", correct: false }
            ]
        },
        qD: {
            text: "D: What does speaker D say about the topic?",
            options: [
                { value: "a", text: "Walks to work with a friend to save money and stay fit.", correct: false },
                { value: "b", text: "Drives to work with their mother, enjoying the time to chat.", correct: false },
                { value: "c", text: "Walks alone to work since moving closer.", correct: false },
                { value: "d", text: "Uses public transport to reduce environmental impact.", correct: true }
            ]
        }
    },
    {
        instruction: "Listen to four people talking about protecting the environment and match each speaker to their opinion.",
        qA: {
            text: "A: What does speaker A say about the topic?",
            options: [
                { value: "a", text: "Advocates saving water through small daily actions.", correct: true },
                { value: "b", text: "Shops online to reduce car emissions and avoid plastic bags.", correct: false },
                { value: "c", text: "Switched to cycling to work to reduce pollution.", correct: false },
                { value: "d", text: "Reduces electricity use to save money.", correct: false }
            ]
        },
        qB: {
            text: "B: What does speaker B say about the topic?",
            options: [
                { value: "a", text: "Advocates saving water through small daily actions.", correct: false },
                { value: "b", text: "Shops online to reduce car emissions and avoid plastic bags.", correct: true },
                { value: "c", text: "Switched to cycling to work to reduce pollution.", correct: false },
                { value: "d", text: "Reduces electricity use to save money.", correct: false }
            ]
        },
        qC: {
            text: "C: What does speaker C say about the topic?",
            options: [
                { value: "a", text: "Advocates saving water through small daily actions.", correct: false },
                { value: "b", text: "Shops online to reduce car emissions and avoid plastic bags.", correct: false },
                { value: "c", text: "Switched to cycling to work to reduce pollution.", correct: true },
                { value: "d", text: "Reduces electricity use to save money.", correct: false }
            ]
        },
        qD: {
            text: "D: What does speaker D say about the topic?",
            options: [
                { value: "a", text: "Advocates saving water through small daily actions.", correct: false },
                { value: "b", text: "Shops online to reduce car emissions and avoid plastic bags.", correct: false },
                { value: "c", text: "Switched to cycling to work to reduce pollution.", correct: false },
                { value: "d", text: "Reduces electricity use to save money.", correct: true }
            ]
        }
    },
    {
        instruction: "Listen to four people talking about studying habits and match each speaker to their opinion.",
        qA: {
            text: "A: What does speaker A say about the topic?",
            options: [
                { value: "a", text: "Can study in different places due to good concentration.", correct: true },
                { value: "b", text: "Prefers quiet places like their room to study.", correct: false },
                { value: "c", text: "Listens to motivational music while studying.", correct: false },
                { value: "d", text: "Studies late at night when it’s quiet.", correct: false }
            ]
        },
        qB: {
            text: "B: What does speaker B say about the topic?",
            options: [
                { value: "a", text: "Can study in different places due to good concentration.", correct: false },
                { value: "b", text: "Prefers quiet places like their room to study.", correct: true },
                { value: "c", text: "Listens to motivational music while studying.", correct: false },
                { value: "d", text: "Studies late at night when it’s quiet.", correct: false }
            ]
        },
        qC: {
            text: "C: What does speaker C say about the topic?",
            options: [
                { value: "a", text: "Can study in different places due to good concentration.", correct: false },
                { value: "b", text: "Prefers quiet places like their room to study.", correct: false },
                { value: "c", text: "Listens to motivational music while studying.", correct: true },
                { value: "d", text: "Studies late at night when it’s quiet.", correct: false }
            ]
        },
        qD: {
            text: "D: What does speaker D say about the topic?",
            options: [
                { value: "a", text: "Can study in different places due to good concentration.", correct: false },
                { value: "b", text: "Prefers quiet places like their room to study.", correct: false },
                { value: "c", text: "Listens to motivational music while studying.", correct: false },
                { value: "d", text: "Studies late at night when it’s quiet.", correct: true }
            ]
        }
    },
    {
        instruction: "Listen to four people talking about a place for studying and match each speaker to their opinion.",
        qA: {
            text: "A: What does speaker A say about the topic?",
            options: [
                { value: "a", text: "Studies on the train during the commute to school.", correct: true },
                { value: "b", text: "Studies at home on the sofa due to the quiet environment.", correct: false },
                { value: "c", text: "Studies in a coffee shop to stay motivated.", correct: false },
                { value: "d", text: "Studies in the park under trees for a fresh environment.", correct: false }
            ]
        },
        qB: {
            text: "B: What does speaker B say about the topic?",
            options: [
                { value: "a", text: "Studies on the train during the commute to school.", correct: false },
                { value: "b", text: "Studies at home on the sofa due to the quiet environment.", correct: true },
                { value: "c", text: "Studies in a coffee shop to stay motivated.", correct: false },
                { value: "d", text: "Studies in the park under trees for a fresh environment.", correct: false }
            ]
        },
        qC: {
            text: "C: What does speaker C say about the topic?",
            options: [
                { value: "a", text: "Studies on the train during the commute to school.", correct: false },
                { value: "b", text: "Studies at home on the sofa due to the quiet environment.", correct: false },
                { value: "c", text: "Studies in a coffee shop to stay motivated.", correct: true },
                { value: "d", text: "Studies in the park under trees for a fresh environment.", correct: false }
            ]
        },
        qD: {
            text: "D: What does speaker D say about the topic?",
            options: [
                { value: "a", text: "Studies on the train during the commute to school.", correct: false },
                { value: "b", text: "Studies at home on the sofa due to the quiet environment.", correct: false },
                { value: "c", text: "Studies in a coffee shop to stay motivated.", correct: false },
                { value: "d", text: "Studies in the park under trees for a fresh environment.", correct: true }
            ]
        }
    },
    {
        instruction: "Listen to four people talking about outdoor activities and match each speaker to their opinion.",
        qA: {
            text: "A: What does speaker A say about the topic?",
            options: [
                { value: "a", text: "Prefers mountain biking with friends over horse riding.", correct: true },
                { value: "b", text: "Goes jogging in the forest with their husband for health.", correct: false },
                { value: "c", text: "Switched to hiking after an injury from mountain biking.", correct: false },
                { value: "d", text: "Enjoys horse riding on their farm as a lifelong hobby.", correct: false }
            ]
        },
        qB: {
            text: "B: What does speaker B say about the topic?",
            options: [
                { value: "a", text: "Prefers mountain biking with friends over horse riding.", correct: false },
                { value: "b", text: "Goes jogging in the forest with their husband for health.", correct: true },
                { value: "c", text: "Switched to hiking after an injury from mountain biking.", correct: false },
                { value: "d", text: "Enjoys horse riding on their farm as a lifelong hobby.", correct: false }
            ]
        },
        qC: {
            text: "C: What does speaker C say about the topic?",
            options: [
                { value: "a", text: "Prefers mountain biking with friends over horse riding.", correct: false },
                { value: "b", text: "Goes jogging in the forest with their husband for health.", correct: false },
                { value: "c", text: "Switched to hiking after an injury from mountain biking.", correct: true },
                { value: "d", text: "Enjoys horse riding on their farm as a lifelong hobby.", correct: false }
            ]
        },
        qD: {
            text: "D: What does speaker D say about the topic?",
            options: [
                { value: "a", text: "Prefers mountain biking with friends over horse riding.", correct: false },
                { value: "b", text: "Goes jogging in the forest with their husband for health.", correct: false },
                { value: "c", text: "Switched to hiking after an injury from mountain biking.", correct: false },
                { value: "d", text: "Enjoys horse riding on their farm as a lifelong hobby.", correct: true }
            ]
        }
    },
    {
        instruction: "Listen to four people talking about art and match each speaker to their opinion.",
        qA: {
            text: "A: What does speaker A say about the topic?",
            options: [
                { value: "a", text: "Teaches art to children as a social charity activity.", correct: true },
                { value: "b", text: "Draws with children to bond and understand them.", correct: false },
                { value: "c", text: "Uses drawing as part of their job as a writer.", correct: false },
                { value: "d", text: "Prefers drawing alone to focus.", correct: false }
            ]
        },
        qB: {
            text: "B: What does speaker B say about the topic?",
            options: [
                { value: "a", text: "Teaches art to children as a social charity activity.", correct: false },
                { value: "b", text: "Draws with children to bond and understand them.", correct: true },
                { value: "c", text: "Uses drawing as part of their job as a writer.", correct: false },
                { value: "d", text: "Prefers drawing alone to focus.", correct: false }
            ]
        },
        qC: {
            text: "C: What does speaker C say about the topic?",
            options: [
                { value: "a", text: "Teaches art to children as a social charity activity.", correct: false },
                { value: "b", text: "Draws with children to bond and understand them.", correct: false },
                { value: "c", text: "Uses drawing as part of their job as a writer.", correct: true },
                { value: "d", text: "Prefers drawing alone to focus.", correct: false }
            ]
        },
        qD: {
            text: "D: What does speaker D say about the topic?",
            options: [
                { value: "a", text: "Teaches art to children as a social charity activity.", correct: false },
                { value: "b", text: "Draws with children to bond and understand them.", correct: false },
                { value: "c", text: "Uses drawing as part of their job as a writer.", correct: false },
                { value: "d", text: "Prefers drawing alone to focus.", correct: true }
            ]
        }
    },
    {
        instruction: "Listen to four people talking about online shopping and match each speaker to their opinion.",
        qA: {
            text: "A: What does speaker A say about the topic?",
            options: [
                { value: "a", text: "Enjoys online shopping for the convenience of home delivery.", correct: true },
                { value: "b", text: "Shops online to save money by comparing prices.", correct: false },
                { value: "c", text: "Uses online shopping to save time due to a busy schedule.", correct: false },
                { value: "d", text: "Shops online for the wide range of choices.", correct: false }
            ]
        },
        qB: {
            text: "B: What does speaker B say about the topic?",
            options: [
                { value: "a", text: "Enjoys online shopping for the convenience of home delivery.", correct: false },
                { value: "b", text: "Shops online to save money by comparing prices.", correct: true },
                { value: "c", text: "Uses online shopping to save time due to a busy schedule.", correct: false },
                { value: "d", text: "Shops online for the wide range of choices.", correct: false }
            ]
        },
        qC: {
            text: "C: What does speaker C say about the topic?",
            options: [
                { value: "a", text: "Enjoys online shopping for the convenience of home delivery.", correct: false },
                { value: "b", text: "Shops online to save money by comparing prices.", correct: false },
                { value: "c", text: "Uses online shopping to save time due to a busy schedule.", correct: true },
                { value: "d", text: "Shops online for the wide range of choices.", correct: false }
            ]
        },
        qD: {
            text: "D: What does speaker D say about the topic?",
            options: [
                { value: "a", text: "Enjoys online shopping for the convenience of home delivery.", correct: false },
                { value: "b", text: "Shops online to save money by comparing prices.", correct: false },
                { value: "c", text: "Uses online shopping to save time due to a busy schedule.", correct: false },
                { value: "d", text: "Shops online for the wide range of choices.", correct: true }
            ]
        }
    },
    {
        instruction: "Listen to four people talking about the place that they run and match each speaker to their opinion.",
        qA: {
            text: "A: What does speaker A say about the topic?",
            options: [
                { value: "a", text: "Exercises at the gym to avoid the dangers of street jogging.", correct: true },
                { value: "b", text: "Jogs on the street early to avoid cyclists.", correct: false },
                { value: "c", text: "Walks on the beach to relax.", correct: false },
                { value: "d", text: "Runs on a stadium track for a competitive feel.", correct: false }
            ]
        },
        qB: {
            text: "B: What does speaker B say about the topic?",
            options: [
                { value: "a", text: "Exercises at the gym to avoid the dangers of street jogging.", correct: false },
                { value: "b", text: "Jogs on the street early to avoid cyclists.", correct: true },
                { value: "c", text: "Walks on the beach to relax.", correct: false },
                { value: "d", text: "Runs on a stadium track for a competitive feel.", correct: false }
            ]
        },
        qC: {
            text: "C: What does speaker C say about the topic?",
            options: [
                { value: "a", text: "Exercises at the gym to avoid the dangers of street jogging.", correct: false },
                { value: "b", text: "Jogs on the street early to avoid cyclists.", correct: false },
                { value: "c", text: "Walks on the beach to relax.", correct: true },
                { value: "d", text: "Runs on a stadium track for a competitive feel.", correct: false }
            ]
        },
        qD: {
            text: "D: What does speaker D say about the topic?",
            options: [
                { value: "a", text: "Exercises at the gym to avoid the dangers of street jogging.", correct: false },
                { value: "b", text: "Jogs on the street early to avoid cyclists.", correct: false },
                { value: "c", text: "Walks on the beach to relax.", correct: false },
                { value: "d", text: "Runs on a stadium track for a competitive feel.", correct: true }
            ]
        }
    },
    {
        instruction: "Listen to four people talking about the use of the internet and match each speaker to their opinion.",
        qA: {
            text: "A: What does speaker A say about the topic?",
            options: [
                { value: "a", text: "Uses the internet to watch free movies at home.", correct: true },
                { value: "b", text: "Uses the internet to find study materials and complete homework.", correct: false },
                { value: "c", text: "Uses the internet for social media and video calls.", correct: false },
                { value: "d", text: "Uses the internet to find directions and public transport.", correct: false }
            ]
        },
        qB: {
            text: "B: What does speaker B say about the topic?",
            options: [
                { value: "a", text: "Uses the internet to watch free movies at home.", correct: false },
                { value: "b", text: "Uses the internet to find study materials and complete homework.", correct: true },
                { value: "c", text: "Uses the internet for social media and video calls.", correct: false },
                { value: "d", text: "Uses the internet to find directions and public transport.", correct: false }
            ]
        },
        qC: {
            text: "C: What does speaker C say about the topic?",
            options: [
                { value: "a", text: "Uses the internet to watch free movies at home.", correct: false },
                { value: "b", text: "Uses the internet to find study materials and complete homework.", correct: false },
                { value: "c", text: "Uses the internet for social media and video calls.", correct: true },
                { value: "d", text: "Uses the internet to find directions and public transport.", correct: false }
            ]
        },
        qD: {
            text: "D: What does speaker D say about the topic?",
            options: [
                { value: "a", text: "Uses the internet to watch free movies at home.", correct: false },
                { value: "b", text: "Uses the internet to find study materials and complete homework.", correct: false },
                { value: "c", text: "Uses the internet for social media and video calls.", correct: false },
                { value: "d", text: "Uses the internet to find directions and public transport.", correct: true }
            ]
        }
    },
    {
        instruction: "Listen to four people talking about environmental problems and match each speaker to their opinion.",
        qA: {
            text: "A: What does speaker A say about the topic?",
            options: [
                { value: "a", text: "Donates used items to charity instead of throwing them away.", correct: true },
                { value: "b", text: "Buys eco-friendly products despite not avoiding driving.", correct: false },
                { value: "c", text: "Reuses food containers to reduce waste.", correct: false },
                { value: "d", text: "Avoids chemical cleaners, using natural products.", correct: false }
            ]
        },
        qB: {
            text: "B: What does speaker B say about the topic?",
            options: [
                { value: "a", text: "Donates used items to charity instead of throwing them away.", correct: false },
                { value: "b", text: "Buys eco-friendly products despite not avoiding driving.", correct: true },
                { value: "c", text: "Reuses food containers to reduce waste.", correct: false },
                { value: "d", text: "Avoids chemical cleaners, using natural products.", correct: false }
            ]
        },
        qC: {
            text: "C: What does speaker C say about the topic?",
            options: [
                { value: "a", text: "Donates used items to charity instead of throwing them away.", correct: false },
                { value: "b", text: "Buys eco-friendly products despite not avoiding driving.", correct: false },
                { value: "c", text: "Reuses food containers to reduce waste.", correct: true },
                { value: "d", text: "Avoids chemical cleaners, using natural products.", correct: false }
            ]
        },
        qD: {
            text: "D: What does speaker D say about the topic?",
            options: [
                { value: "a", text: "Donates used items to charity instead of throwing them away.", correct: false },
                { value: "b", text: "Buys eco-friendly products despite not avoiding driving.", correct: false },
                { value: "c", text: "Reuses food containers to reduce waste.", correct: false },
                { value: "d", text: "Avoids chemical cleaners, using natural products.", correct: true }
            ]
        }
    },
    {
        instruction: "Listen to four people talking about listening to music and match each speaker to their opinion.",
        qA: {
            text: "A: What does speaker A say about the topic?",
            options: [
                { value: "a", text: "Listens to music to relax, not to wake up or study.", correct: true },
                { value: "b", text: "Listens to music while studying to stay motivated.", correct: false },
                { value: "c", text: "Sings along to music with a remote as a microphone.", correct: false },
                { value: "d", text: "Listens to music after waking up to energize.", correct: false }
            ]
        },
        qB: {
            text: "B: What does speaker B say about the topic?",
            options: [
                { value: "a", text: "Listens to music to relax, not to wake up or study.", correct: false },
                { value: "b", text: "Listens to music while studying to stay motivated.", correct: true },
                { value: "c", text: "Sings along to music with a remote as a microphone.", correct: false },
                { value: "d", text: "Listens to music after waking up to energize.", correct: false }
            ]
        },
        qC: {
            text: "C: What does speaker C say about the topic?",
            options: [
                { value: "a", text: "Listens to music to relax, not to wake up or study.", correct: false },
                { value: "b", text: "Listens to music while studying to stay motivated.", correct: false },
                { value: "c", text: "Sings along to music with a remote as a microphone.", correct: true },
                { value: "d", text: "Listens to music after waking up to energize.", correct: false }
            ]
        },
        qD: {
            text: "D: What does speaker D say about the topic?",
            options: [
                { value: "a", text: "Listens to music to relax, not to wake up or study.", correct: false },
                { value: "b", text: "Listens to music while studying to stay motivated.", correct: false },
                { value: "c", text: "Sings along to music with a remote as a microphone.", correct: false },
                { value: "d", text: "Listens to music after waking up to energize.", correct: true }
            ]
        }
    }
];

// Current test index and user answers
let currentTestIndex = 0;
let userAnswers = Array(tests.length).fill({ qA: null, qB: null, qC: null, qD: null });
let testScores = Array(tests.length).fill(0);
let isChecked = false;

// Load test
function loadTest(index) {
    currentTestIndex = parseInt(index);
    const test = tests[currentTestIndex];
    document.getElementById("instruction").textContent = test.instruction;
    
    document.getElementById("q-a-text").textContent = test.qA.text;
    const qAOptions = document.getElementById("q-a-options");
    qAOptions.innerHTML = "";
    test.qA.options.forEach(option => {
        const li = document.createElement("li");
        li.innerHTML = `<input type="radio" name="q-a" value="${option.value}" ${userAnswers[currentTestIndex].qA === option.value ? "checked" : ""} onchange="saveAnswer(${currentTestIndex}, 'qA', this.value)"> ${option.text}`;
        qAOptions.appendChild(li);
    });

    document.getElementById("q-b-text").textContent = test.qB.text;
    const qBOptions = document.getElementById("q-b-options");
    qBOptions.innerHTML = "";
    test.qB.options.forEach(option => {
        const li = document.createElement("li");
        li.innerHTML = `<input type="radio" name="q-b" value="${option.value}" ${userAnswers[currentTestIndex].qB === option.value ? "checked" : ""} onchange="saveAnswer(${currentTestIndex}, 'qB', this.value)"> ${option.text}`;
        qBOptions.appendChild(li);
    });

    document.getElementById("q-c-text").textContent = test.qC.text;
    const qCOptions = document.getElementById("q-c-options");
    qCOptions.innerHTML = "";
    test.qC.options.forEach(option => {
        const li = document.createElement("li");
        li.innerHTML = `<input type="radio" name="q-c" value="${option.value}" ${userAnswers[currentTestIndex].qC === option.value ? "checked" : ""} onchange="saveAnswer(${currentTestIndex}, 'qC', this.value)"> ${option.text}`;
        qCOptions.appendChild(li);
    });

    document.getElementById("q-d-text").textContent = test.qD.text;
    const qDOptions = document.getElementById("q-d-options");
    qDOptions.innerHTML = "";
    test.qD.options.forEach(option => {
        const li = document.createElement("li");
        li.innerHTML = `<input type="radio" name="q-d" value="${option.value}" ${userAnswers[currentTestIndex].qD === option.value ? "checked" : ""} onchange="saveAnswer(${currentTestIndex}, 'qD', this.value)"> ${option.text}`;
        qDOptions.appendChild(li);
    });

    document.getElementById("q-a-feedback").textContent = "";
    document.getElementById("q-b-feedback").textContent = "";
    document.getElementById("q-c-feedback").textContent = "";
    document.getElementById("q-d-feedback").textContent = "";
    document.getElementById("q-a-feedback").classList.remove("correct", "incorrect");
    document.getElementById("q-b-feedback").classList.remove("correct", "incorrect");
    document.getElementById("q-c-feedback").classList.remove("correct", "incorrect");
    document.getElementById("q-d-feedback").classList.remove("correct", "incorrect");
    document.getElementById("test-score").textContent = testScores[currentTestIndex] > 0 ? `Score for this test: ${testScores[currentTestIndex]}/4` : "";
    document.getElementById("next-btn").disabled = true;
    isChecked = false;

    document.getElementById("test-select").value = currentTestIndex;
}

// Save user answer
function saveAnswer(testIndex, question, value) {
    userAnswers[testIndex][question] = value;
    if (isChecked) {
        checkAnswers(); // Re-check answers if user changes selection after checking
    }
}

// Check answers
function checkAnswers() {
    const test = tests[currentTestIndex];
    const qAAnswer = document.querySelector('input[name="q-a"]:checked');
    const qBAnswer = document.querySelector('input[name="q-b"]:checked');
    const qCAnswer = document.querySelector('input[name="q-c"]:checked');
    const qDAnswer = document.querySelector('input[name="q-d"]:checked');

    if (!qAAnswer || !qBAnswer || !qCAnswer || !qDAnswer) {
        alert("Please select an answer for all four speakers.");
        return;
    }

    let testScore = 0;

    // Check Q-A
    const qACorrect = test.qA.options.find(opt => opt.value === qAAnswer.value).correct;
    const qAFeedback = document.getElementById("q-a-feedback");
    qAFeedback.textContent = qACorrect ? "Correct!" : "Incorrect. The correct answer is: " + test.qA.options.find(opt => opt.correct).text;
    qAFeedback.classList.add(qACorrect ? "correct" : "incorrect");
    if (qACorrect) testScore++;

    // Check Q-B
    const qBCorrect = test.qB.options.find(opt => opt.value === qBAnswer.value).correct;
    const qBFeedback = document.getElementById("q-b-feedback");
    qBFeedback.textContent = qBCorrect ? "Correct!" : "Incorrect. The correct answer is: " + test.qB.options.find(opt => opt.correct).text;
    qBFeedback.classList.add(qBCorrect ? "correct" : "incorrect");
    if (qBCorrect) testScore++;

    // Check Q-C
    const qCCorrect = test.qC.options.find(opt => opt.value === qCAnswer.value).correct;
    const qCFeedback = document.getElementById("q-c-feedback");
    qCFeedback.textContent = qCCorrect ? "Correct!" : "Incorrect. The correct answer is: " + test.qC.options.find(opt => opt.correct).text;
    qCFeedback.classList.add(qCCorrect ? "correct" : "incorrect");
    if (qCCorrect) testScore++;

    // Check Q-D
    const qDCorrect = test.qD.options.find(opt => opt.value === qDAnswer.value).correct;
    const qDFeedback = document.getElementById("q-d-feedback");
    qDFeedback.textContent = qDCorrect ? "Correct!" : "Incorrect. The correct answer is: " + test.qD.options.find(opt => opt.correct).text;
    qDFeedback.classList.add(qDCorrect ? "correct" : "incorrect");
    if (qDCorrect) testScore++;

    // Update test score
    testScores[currentTestIndex] = testScore;
    document.getElementById("test-score").textContent = `Score for this test: ${testScore}/4`;

    // Enable Next button
    document.getElementById("next-btn").disabled = false;
    isChecked = true;
}

// Previous test
function previousTest() {
    if (currentTestIndex > 0) {
        currentTestIndex--;
        loadTest(currentTestIndex);
    }
}

// Next test
function nextTest() {
    if (currentTestIndex < tests.length - 1) {
        currentTestIndex++;
        loadTest(currentTestIndex);
    } else {
        showResults();
    }
}

// Show results
function showResults() {
    timerRunning = false;
    let totalScore = testScores.reduce((a, b) => a + b, 0);

    document.getElementById("question-section").style.display = "none";
    document.getElementById("navigation").style.display = "none";
    document.getElementById("test-select").style.display = "none";
    document.getElementById("results").style.display = "block";
    document.getElementById("score").textContent = `You scored ${totalScore} out of ${tests.length * 4}`;
}

// Restart test
function restartTest() {
    currentTestIndex = 0;
    userAnswers = Array(tests.length).fill({ qA: null, qB: null, qC: null, qD: null });
    testScores = Array(tests.length).fill(0);
    timerRunning = true;
    minutes = 32;
    seconds = 0;
    document.getElementById("question-section").style.display = "block";
    document.getElementById("navigation").style.display = "flex";
    document.getElementById("test-select").style.display = "block";
    document.getElementById("results").style.display = "none";
    loadTest(currentTestIndex);
}

// Load first test
loadTest(currentTestIndex);