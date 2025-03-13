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
        instruction: "Listen to the lecturer giving a talk about script production and answer the questions.",
        q1: {
            text: "16.1: What is the lecturer's main criticism of the scripts?",
            options: [
                { value: "a", text: "The characters' background are not adequately explored.", correct: true },
                { value: "b", text: "The scripts are too innovative and creative.", correct: false },
                { value: "c", text: "The dialogue in the scripts is overly complex.", correct: false }
            ]
        },
        q2: {
            text: "16.2: What does the lecturer say about the impact of the industry?",
            options: [
                { value: "a", text: "The new industry demands are negatively influencing script production.", correct: true },
                { value: "b", text: "The industry is providing more opportunities for writers.", correct: false },
                { value: "c", text: "The industry has no effect on script quality.", correct: false }
            ]
        }
    },
    {
        instruction: "Listen to the lecturer giving a talk about a regional development plan and answer the questions.",
        q1: {
            text: "16.1: How does the lecturer evaluate the current implementation of the plan?",
            options: [
                { value: "a", text: "It doesn't do enough to promote alternatives to driving.", correct: true },
                { value: "b", text: "It is highly effective in reducing traffic congestion.", correct: false },
                { value: "c", text: "It focuses only on economic growth.", correct: false }
            ]
        },
        q2: {
            text: "16.2: What is the lecturer's concern about the plan's resource management?",
            options: [
                { value: "a", text: "The plan is not making efficient use of existing land.", correct: true },
                { value: "b", text: "The plan uses land resources very effectively.", correct: false },
                { value: "c", text: "The plan ignores water resource management.", correct: false }
            ]
        }
    },
    {
        instruction: "Listen to the lecturer giving a talk about sport and answer the questions.",
        q1: {
            text: "16.1: What is the lecturer's opinion of sport?",
            options: [
                { value: "a", text: "They have a harmful effect.", correct: true },
                { value: "b", text: "They are essential for physical health.", correct: false },
                { value: "c", text: "They are only suitable for young people.", correct: false }
            ]
        },
        q2: {
            text: "16.2: What does the lecturer say about the role of sport in students' lives?",
            options: [
                { value: "a", text: "It helps balance students' lives.", correct: true },
                { value: "b", text: "It distracts students from their studies.", correct: false },
                { value: "c", text: "It has no significant impact on students.", correct: false }
            ]
        }
    },
    {
        instruction: "Listen to the lecturer giving a talk about working from home and answer the questions.",
        q1: {
            text: "16.1: What is the lecturer's overall opinion of working from home?",
            options: [
                { value: "a", text: "It wasn't as good as she had expected.", correct: true },
                { value: "b", text: "It is the best way to improve productivity.", correct: false },
                { value: "c", text: "It is suitable for everyone.", correct: false }
            ]
        },
        q2: {
            text: "16.2: What does the lecturer say about the suitability of working from home?",
            options: [
                { value: "a", text: "It depends on your situation and personality.", correct: true },
                { value: "b", text: "It works well for all types of people.", correct: false },
                { value: "c", text: "It is only effective for extroverts.", correct: false }
            ]
        }
    },
    {
        instruction: "Listen to the lecturer giving a talk about CCTV security cameras and answer the questions.",
        q1: {
            text: "16.1: What does the lecturer say about employees' concerns regarding CCTV?",
            options: [
                { value: "a", text: "Employees probably worry unnecessarily.", correct: true },
                { value: "b", text: "Employees are completely justified in their concerns.", correct: false },
                { value: "c", text: "Employees are unaware of the cameras.", correct: false }
            ]
        },
        q2: {
            text: "16.2: What does the lecturer believe about the public's reaction to CCTV?",
            options: [
                { value: "a", text: "People should feel reassured.", correct: true },
                { value: "b", text: "People will feel more anxious.", correct: false },
                { value: "c", text: "People will ignore the cameras.", correct: false }
            ]
        }
    },
    {
        instruction: "Listen to the lecturer giving a talk about writer's block and answer the questions.",
        q1: {
            text: "16.1: What does the lecturer recommend to overcome writer's block?",
            options: [
                { value: "a", text: "Create dedicated periods.", correct: true },
                { value: "b", text: "Write without any breaks.", correct: false },
                { value: "c", text: "Avoid writing altogether for a while.", correct: false }
            ]
        },
        q2: {
            text: "16.2: What does the lecturer say is a common mistake when dealing with writer's block?",
            options: [
                { value: "a", text: "Refusing to seek the advice of other people.", correct: true },
                { value: "b", text: "Asking too many people for advice.", correct: false },
                { value: "c", text: "Spending too much time on research.", correct: false }
            ]
        }
    },
    {
        instruction: "Listen to the lecturer giving a talk about television series and answer the questions.",
        q1: {
            text: "16.1: What does the lecturer say about the quality of television series?",
            options: [
                { value: "a", text: "It has the consistent quality throughout.", correct: true },
                { value: "b", text: "The quality declines over time.", correct: false },
                { value: "c", text: "The quality is unpredictable.", correct: false }
            ]
        },
        q2: {
            text: "16.2: What does the lecturer say influences the production of television series?",
            options: [
                { value: "a", text: "Viewer habits influence the way that series are made.", correct: true },
                { value: "b", text: "Viewer habits have no impact on production.", correct: false },
                { value: "c", text: "Viewer habits make production more expensive.", correct: false }
            ]
        }
    },
    {
        instruction: "Listen to the lecturer giving a talk about advertising and sponsoring in sports and answer the questions.",
        q1: {
            text: "16.1: What does the lecturer say about the benefit of advertising in sports?",
            options: [
                { value: "a", text: "It can help reach new customers.", correct: true },
                { value: "b", text: "It has no real benefits for the sport.", correct: false },
                { value: "c", text: "It only benefits large companies.", correct: false }
            ]
        },
        q2: {
            text: "16.2: What does the lecturer say about the potential downside of sponsoring in sports?",
            options: [
                { value: "a", text: "They can generate negative publicity for the sport.", correct: true },
                { value: "b", text: "They always improve the sport's reputation.", correct: false },
                { value: "c", text: "They make the sport less competitive.", correct: false }
            ]
        }
    },
    {
        instruction: "Listen to the lecturer giving a talk about making plans and answer the questions.",
        q1: {
            text: "16.1: What does the lecturer say about the benefit of making plans?",
            options: [
                { value: "a", text: "They help you make decisions.", correct: true },
                { value: "b", text: "They make life more complicated.", correct: false },
                { value: "c", text: "They are unnecessary for most people.", correct: false }
            ]
        },
        q2: {
            text: "16.2: What does the lecturer say is required when making plans?",
            options: [
                { value: "a", text: "It requires you to set yourself certain limits.", correct: true },
                { value: "b", text: "It requires you to be completely flexible.", correct: false },
                { value: "c", text: "It requires you to ignore your goals.", correct: false }
            ]
        }
    },
    {
        instruction: "Listen to the lecturer giving a talk about a promotion campaign for a product and answer the questions.",
        q1: {
            text: "16.1: What is the lecturer's opinion of the promotion campaign?",
            options: [
                { value: "a", text: "It is making exaggerated claims.", correct: true },
                { value: "b", text: "It is very effective in attracting customers.", correct: false },
                { value: "c", text: "It is a cost-effective strategy.", correct: false }
            ]
        },
        q2: {
            text: "16.2: What does the lecturer say about the production of the product?",
            options: [
                { value: "a", text: "It costs too much to make to be profitable.", correct: true },
                { value: "b", text: "It is affordable and highly profitable.", correct: false },
                { value: "c", text: "It has no impact on the campaign's success.", correct: false }
            ]
        }
    },
    {
        instruction: "Listen to the lecturer giving a talk about a new guide and answer the questions.",
        q1: {
            text: "16.1: What does the lecturer say about the effect of the new guide?",
            options: [
                { value: "a", text: "It creates a sense of adventure.", correct: true },
                { value: "b", text: "It makes travel more boring.", correct: false },
                { value: "c", text: "It confuses the readers.", correct: false }
            ]
        },
        q2: {
            text: "16.2: What does the lecturer say about the guide's suitability?",
            options: [
                { value: "a", text: "It is only suitable for a particular generation.", correct: true },
                { value: "b", text: "It is suitable for all age groups.", correct: false },
                { value: "c", text: "It is only suitable for experienced travelers.", correct: false }
            ]
        }
    },
    {
        instruction: "Listen to the lecturer giving a talk about life after university and answer the questions.",
        q1: {
            text: "16.1: What advice does the lecturer give for life after university?",
            options: [
                { value: "a", text: "Be flexible and open-minded.", correct: true },
                { value: "b", text: "Stick to a rigid plan.", correct: false },
                { value: "c", text: "Avoid taking any risks.", correct: false }
            ]
        },
        q2: {
            text: "16.2: What does the lecturer say about job opportunities after university?",
            options: [
                { value: "a", text: "They are becoming more competitive.", correct: true },
                { value: "b", text: "They are easier to find than before.", correct: false },
                { value: "c", text: "They are only available in certain fields.", correct: false }
            ]
        }
    },
    {
        instruction: "Listen to the lecturer giving a talk about a new restaurant and answer the questions.",
        q1: {
            text: "16.1: What does the lecturer say about the restaurant's service?",
            options: [
                { value: "a", text: "Standard of service wasn't good.", correct: true },
                { value: "b", text: "The service was excellent.", correct: false },
                { value: "c", text: "The service was average.", correct: false }
            ]
        },
        q2: {
            text: "16.2: What does the lecturer suggest the restaurant should do?",
            options: [
                { value: "a", text: "They need to make the customers feel valued and welcome.", correct: true },
                { value: "b", text: "They should focus on improving the food quality.", correct: false },
                { value: "c", text: "They should lower their prices.", correct: false }
            ]
        }
    },
    {
        instruction: "Listen to the lecturer giving a talk about a new novel and answer the questions.",
        q1: {
            text: "16.1: What does the lecturer say about the characters in the new novel?",
            options: [
                { value: "a", text: "They are difficult to relate to.", correct: true },
                { value: "b", text: "They are very relatable and realistic.", correct: false },
                { value: "c", text: "They are overly dramatic.", correct: false }
            ]
        },
        q2: {
            text: "16.2: What is the lecturer's overall criticism of the novel?",
            options: [
                { value: "a", text: "It lacks originality.", correct: true },
                { value: "b", text: "It is too creative and unique.", correct: false },
                { value: "c", text: "It is too short and underdeveloped.", correct: false }
            ]
        }
    },
    {
        instruction: "Listen to the lecturer giving a talk about a research into happiness and answer the questions.",
        q1: {
            text: "16.1: What does the lecturer say about the media coverage of the research?",
            options: [
                { value: "a", text: "It has not been accurately reported by the media.", correct: true },
                { value: "b", text: "The media has reported it very accurately.", correct: false },
                { value: "c", text: "The media has ignored the research completely.", correct: false }
            ]
        },
        q2: {
            text: "16.2: What does the lecturer predict about the research's outcome?",
            options: [
                { value: "a", text: "The research is unlikely to find a conclusive answer.", correct: true },
                { value: "b", text: "The research will provide clear answers.", correct: false },
                { value: "c", text: "The research will change people's views on happiness.", correct: false }
            ]
        }
    },
    {
        instruction: "Listen to the lecturer giving a talk about criticism of a new novel and answer the questions.",
        q1: {
            text: "16.1: What does the lecturer say about the characters in the novel?",
            options: [
                { value: "a", text: "The characters were interesting.", correct: true },
                { value: "b", text: "The characters were boring and predictable.", correct: false },
                { value: "c", text: "The characters were unrealistic.", correct: false }
            ]
        },
        q2: {
            text: "16.2: What does the lecturer predict about the novel's impact on the author?",
            options: [
                { value: "a", text: "It will establish the author's popularity.", correct: true },
                { value: "b", text: "It will harm the author's reputation.", correct: false },
                { value: "c", text: "It will have no impact on the author's career.", correct: false }
            ]
        }
    },
    {
        instruction: "Listen to the lecturer giving a talk about professionalism at work and answer the questions.",
        q1: {
            text: "16.1: What does the lecturer recommend for maintaining professionalism?",
            options: [
                { value: "a", text: "Maintain a positive attitude.", correct: true },
                { value: "b", text: "Focus only on your tasks.", correct: false },
                { value: "c", text: "Avoid interacting with colleagues.", correct: false }
            ]
        },
        q2: {
            text: "16.2: What does the lecturer say about the definition of professionalism?",
            options: [
                { value: "a", text: "Change its definition.", correct: true },
                { value: "b", text: "It should remain the same.", correct: false },
                { value: "c", text: "It is too strict for modern workplaces.", correct: false }
            ]
        }
    },
    {
        instruction: "Listen to the lecturer giving a talk about a musician's life and answer the questions.",
        q1: {
            text: "16.1: What does the lecturer predict about the musician's career?",
            options: [
                { value: "a", text: "He will probably retire from singing.", correct: true },
                { value: "b", text: "He will continue to perform for many years.", correct: false },
                { value: "c", text: "He will switch to acting instead.", correct: false }
            ]
        },
        q2: {
            text: "16.2: What does the lecturer say about the musician's potential?",
            options: [
                { value: "a", text: "He could have been more successful.", correct: true },
                { value: "b", text: "He reached his full potential.", correct: false },
                { value: "c", text: "He was too successful for his talent.", correct: false }
            ]
        }
    },
    {
        instruction: "Listen to the lecturer giving a talk about a book about the life of a scientist and answer the questions.",
        q1: {
            text: "16.1: What does the lecturer say about the book's language?",
            options: [
                { value: "a", text: "It uses simple language to describe complex ideas.", correct: true },
                { value: "b", text: "The language is too complicated for most readers.", correct: false },
                { value: "c", text: "The language is too technical and scientific.", correct: false }
            ]
        },
        q2: {
            text: "16.2: What does the lecturer say about the book's originality?",
            options: [
                { value: "a", text: "It is similar to the previous book about the scientist.", correct: true },
                { value: "b", text: "It is completely unique and original.", correct: false },
                { value: "c", text: "It introduces new scientific concepts.", correct: false }
            ]
        }
    },
    {
        instruction: "Listen to the lecturer giving a talk about taking a break from studying and answer the questions.",
        q1: {
            text: "16.1: Why did the student take a break from studying, according to the lecturer?",
            options: [
                { value: "a", text: "He wasn't ready to start higher education.", correct: true },
                { value: "b", text: "He wanted to travel the world.", correct: false },
                { value: "c", text: "He needed to earn money first.", correct: false }
            ]
        },
        q2: {
            text: "16.2: What was the main benefit of taking a break, according to the lecturer?",
            options: [
                { value: "a", text: "To be more independent.", correct: true },
                { value: "b", text: "To improve academic performance.", correct: false },
                { value: "c", text: "To make new friends.", correct: false }
            ]
        }
    },
    {
        instruction: "Listen to the lecturer giving a talk about a promotion campaign for a product and answer the questions.",
        q1: {
            text: "16.1: What is the lecturer's opinion of the promotion campaign?",
            options: [
                { value: "a", text: "It is making exaggerated claims.", correct: true },
                { value: "b", text: "It is very effective in attracting customers.", correct: false },
                { value: "c", text: "It is a cost-effective strategy.", correct: false }
            ]
        },
        q2: {
            text: "16.2: What does the lecturer say about the production of the product?",
            options: [
                { value: "a", text: "It costs too much to make to be profitable.", correct: true },
                { value: "b", text: "It is affordable and highly profitable.", correct: false },
                { value: "c", text: "It has no impact on the campaign's success.", correct: false }
            ]
        }
    },
    {
        instruction: "Listen to the lecturer giving a talk about managing financial spending and answer the questions.",
        q1: {
            text: "16.1: What does the lecturer recommend for managing spending?",
            options: [
                { value: "a", text: "Monitor your spending for a weekly plan.", correct: true },
                { value: "b", text: "Spend freely without a plan.", correct: false },
                { value: "c", text: "Avoid tracking your expenses.", correct: false }
            ]
        },
        q2: {
            text: "16.2: What additional advice does the lecturer give for financial management?",
            options: [
                { value: "a", text: "Seek advice from someone who has experience.", correct: true },
                { value: "b", text: "Rely only on your own judgment.", correct: false },
                { value: "c", text: "Ignore advice from others.", correct: false }
            ]
        }
    },
    {
        instruction: "Listen to the lecturer giving a talk about the importance of sleep and answer the questions.",
        q1: {
            text: "16.1: What does the lecturer say is the most important factor for good sleep?",
            options: [
                { value: "a", text: "Blocking out noise and light is a key.", correct: true },
                { value: "b", text: "Sleeping for at least 8 hours.", correct: false },
                { value: "c", text: "Using a comfortable mattress.", correct: false }
            ]
        },
        q2: {
            text: "16.2: What does the lecturer say about people's awareness of sleep issues?",
            options: [
                { value: "a", text: "People can't always recognize the symptoms of tiredness.", correct: true },
                { value: "b", text: "People are fully aware of their sleep problems.", correct: false },
                { value: "c", text: "People often exaggerate their tiredness.", correct: false }
            ]
        }
    },
    {
        instruction: "Listen to the lecturer giving a talk about two famous writers and answer the questions.",
        q1: {
            text: "16.1: What does the lecturer say about the relationship between the two writers?",
            options: [
                { value: "a", text: "They both make references to each other in their work.", correct: true },
                { value: "b", text: "They never collaborated with each other.", correct: false },
                { value: "c", text: "They were rivals throughout their careers.", correct: false }
            ]
        },
        q2: {
            text: "16.2: What does the lecturer say about the writers' work in general?",
            options: [
                { value: "a", text: "The meaning of their work is not always easily identified.", correct: true },
                { value: "b", text: "Their work is very simple to understand.", correct: false },
                { value: "c", text: "Their work is only appreciated by experts.", correct: false }
            ]
        }
    }
];

// Current test index and user answers
let currentTestIndex = 0;
let userAnswers = Array(tests.length).fill({ q1: null, q2: null });
let testScores = Array(tests.length).fill(0);
let isChecked = false;

// Load test
function loadTest(index) {
    currentTestIndex = parseInt(index);
    const test = tests[currentTestIndex];
    document.getElementById("instruction").textContent = test.instruction;
    
    document.getElementById("q1-text").textContent = test.q1.text;
    const q1Options = document.getElementById("q1-options");
    q1Options.innerHTML = "";
    test.q1.options.forEach(option => {
        const li = document.createElement("li");
        li.innerHTML = `<input type="radio" name="q1" value="${option.value}" ${userAnswers[currentTestIndex].q1 === option.value ? "checked" : ""} onchange="saveAnswer(${currentTestIndex}, 'q1', this.value)"> ${option.text}`;
        q1Options.appendChild(li);
    });

    document.getElementById("q2-text").textContent = test.q2.text;
    const q2Options = document.getElementById("q2-options");
    q2Options.innerHTML = "";
    test.q2.options.forEach(option => {
        const li = document.createElement("li");
        li.innerHTML = `<input type="radio" name="q2" value="${option.value}" ${userAnswers[currentTestIndex].q2 === option.value ? "checked" : ""} onchange="saveAnswer(${currentTestIndex}, 'q2', this.value)"> ${option.text}`;
        q2Options.appendChild(li);
    });

    document.getElementById("q1-feedback").textContent = "";
    document.getElementById("q2-feedback").textContent = "";
    document.getElementById("q1-feedback").classList.remove("correct", "incorrect");
    document.getElementById("q2-feedback").classList.remove("correct", "incorrect");
    document.getElementById("test-score").textContent = testScores[currentTestIndex] > 0 ? `Score for this test: ${testScores[currentTestIndex]}/2` : "";
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
    const q1Answer = document.querySelector('input[name="q1"]:checked');
    const q2Answer = document.querySelector('input[name="q2"]:checked');

    if (!q1Answer || !q2Answer) {
        alert("Please select an answer for both questions.");
        return;
    }

    let testScore = 0;

    // Check Q1
    const q1Correct = test.q1.options.find(opt => opt.value === q1Answer.value).correct;
    const q1Feedback = document.getElementById("q1-feedback");
    q1Feedback.textContent = q1Correct ? "Correct!" : "Incorrect. The correct answer is: " + test.q1.options.find(opt => opt.correct).text;
    q1Feedback.classList.add(q1Correct ? "correct" : "incorrect");
    if (q1Correct) testScore++;

    // Check Q2
    const q2Correct = test.q2.options.find(opt => opt.value === q2Answer.value).correct;
    const q2Feedback = document.getElementById("q2-feedback");
    q2Feedback.textContent = q2Correct ? "Correct!" : "Incorrect. The correct answer is: " + test.q2.options.find(opt => opt.correct).text;
    q2Feedback.classList.add(q2Correct ? "correct" : "incorrect");
    if (q2Correct) testScore++;

    // Update test score
    testScores[currentTestIndex] = testScore;
    document.getElementById("test-score").textContent = `Score for this test: ${testScore}/2`;

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
    document.getElementById("score").textContent = `You scored ${totalScore} out of ${tests.length * 2}`;
}

// Restart test
function restartTest() {
    currentTestIndex = 0;
    userAnswers = Array(tests.length).fill({ q1: null, q2: null });
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