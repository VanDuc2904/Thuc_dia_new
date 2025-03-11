const readingData = {
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
        part2: {
            topics: [
                {
                    title: "Quy trình nộp bài papers work",
                    steps: ["Press 'open a new window'", "Drag or drop your files", "Press the 'send' button", "Check your email"]
                },
                {
                    title: "Traffic lights",
                    steps: ["Out of order", "Long delays", "People not able to get to work on time", "Traffic lights working again", "No further delays"]
                }
            ]
        },
        part3: {
            topic: "Reading books",
            people: [
                { name: "A", traits: ["Plans their reading schedule", "Reads more than another family member"] },
                { name: "B", traits: ["Reads many books at once", "Wants to read a lot of books"] },
                { name: "C", traits: ["Difficulty finishing a book"] },
                { name: "D", traits: ["Thinks factual books are boring", "Has limited time to read books"] }
            ],
            descriptions: [
                "A: My wife often complains about not having time to read...",
                "B: I used to struggle very much to finish reading a book...",
                "C: I often keep a book on the bedside table to read before going to bed...",
                "D: My job requires reading a lot of books..."
            ]
        },
        part4: {
            topic: "Coffee",
            points: [
                "The custom of coffee drinking begins to spread",
                "Coffee encourages",
                "A habit that has become a big economy",
                "Problems of coffee economy",
                "A remedy of unjust revenue distribution",
                "Health risks versus health benefits debate",
                "The ancient origin of coffee"
            ]
        }
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
        part2: {
            topics: [
                {
                    title: "Hand in assignment",
                    steps: ["Check and correct mistakes", "Print out your report", "Complete a cover sheet", "Bring to the front desk", "Staff confirms everything"]
                },
                {
                    title: "Car park",
                    steps: ["Take a ticket", "Display the ticket", "Put ticket in the machine", "Machine reads information", "Pay the amount"]
                }
            ]
        },
        part3: {
            topic: "Visit a city (Stevenson)",
            people: [
                { name: "A", traits: ["Public transport system was good", "Walking too much causes a problem"] },
                { name: "B", traits: ["Likes the natural resort", "Visits one part of the city"] },
                { name: "C", traits: ["Likes public theatre", "Spends a lot on shopping"] },
                { name: "D", traits: ["Pays a lot for their meal"] }
            ],
            descriptions: [
                "A: When I first came to this city, I felt very scared...",
                "B: I don’t like big cities and rarely go out to cities...",
                "C: I went to this city last summer and really liked the atmosphere...",
                "D: When I go out, I only care about two things..."
            ]
        },
        part4: {
            topic: "Consumer age",
            points: [
                "Making things last longer",
                "A temporary experiment",
                "The reason of secrecy",
                "Still relevant to our times",
                "The difficulty of being generous",
                "Reason to reach a compromise",
                "Important lessons for all of us"
            ]
        }
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
        part2: {
            topics: [
                {
                    title: "Participate in a race",
                    steps: ["Go to the information point", "Register 30 minutes before", "Give your photo card", "Wear a numbered armband", "Join the warm-up area"]
                },
                {
                    title: "Fire instructions",
                    steps: ["Leave bags at the desk", "Walk to Emergency Exit", "Take stairs to ground floor", "Leave through front entrance", "Gather on the grass"]
                }
            ]
        },
        part3: {
            topic: "Plans for a new station",
            people: [
                { name: "A", traits: ["People should plan journeys better"] },
                { name: "B", traits: ["Bus is too busy", "New station will improve train travel"] },
                { name: "C", traits: ["Bus service is good", "Transport system doesn’t need improving"] },
                { name: "D", traits: ["Better medical facilities needed", "New station will cost too much"] }
            ],
            descriptions: [
                "A: I see too many people who do not arrange a good time...",
                "B: Buses are often full of people, especially during rush hour...",
                "C: In my opinion, the bus is very clean and comfortable...",
                "D: Building a new public transportation system will be very costly..."
            ]
        },
        part4: {
            topic: "Doggett’s coat and badge",
            points: [
                "The easiest way to travel",
                "Result of a lucky escape",
                "Origins of what the winner receives",
                "A need for change",
                "Earning a reputation",
                "Generations of champions",
                "Not in it for the money"
            ]
        }
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
        part2: {
            topics: [
                {
                    title: "Quy trình nộp report",
                    steps: ["Look at websites", "Save links", "Include a list of books", "Correct mistakes", "Send by email"]
                },
                {
                    title: "Quá trình dùng máy in printer",
                    steps: ["Find a place", "Turn it on", "Light comes on", "Green light means ready", "Put papers in"]
                }
            ]
        },
        part3: {
            topic: "Art",
            people: [
                { name: "A", traits: ["Has some artistic skills", "Seeing exhibitions is boring"] },
                { name: "B", traits: ["Prefers seeing exhibitions alone", "Visitors should focus on the art"] },
                { name: "C", traits: ["Has good knowledge of art"] },
                { name: "D", traits: ["Prefers going with others", "Has been going all their life"] }
            ],
            descriptions: [
                "A: I know a little about famous painters and their works...",
                "B: I find going to see paintings similar to reading books...",
                "C: I find polite art very fascinating...",
                "D: My parents often took me to see art exhibitions when I was a child..."
            ]
        },
        part4: {
            topic: "Early Australia",
            points: [
                "An alternative history of settlement",
                "Natural barrier to resettlement",
                "Technology helps uncover the ocean’s secret",
                "A journey made by stages",
                "A new evidence that leads to speculation",
                "Lack of knowledge and skills",
                "Determination of the explorers through the ages"
            ]
        }
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
        part2: {
            topics: [
                {
                    title: "Betty Barr’s life",
                    steps: ["Born in Shanghai 1933", "Shanghai had many foreigners", "Went to Wellesley College", "Taught in Hong Kong", "Returned to China in 1980s"]
                },
                {
                    title: "Key card",
                    steps: ["Need key card for entry", "See staff if lost", "Provide name and flat number", "Show ID card", "Get a new key card"]
                }
            ]
        },
        part3: {
            topic: "Volunteering to clean a local park",
            people: [
                { name: "A", traits: ["Park is beautiful", "Asks for others to help"] },
                { name: "B", traits: ["Too busy to clean", "Volunteering helps future employment"] },
                { name: "C", traits: ["Local areas need cleaning", "Cleaning needs to be regular"] },
                { name: "D", traits: ["Volunteering important for students"] }
            ],
            descriptions: [
                "A: I feel very lucky to have this park here...",
                "B: I’m a very busy person and I have to spend this weekend...",
                "C: I think this volunteering is a good idea but it doesn’t have...",
                "D: My family and I often spend time at the park..."
            ]
        },
        part4: {
            topic: "Eating in China",
            points: [
                "The origins of Chinese food",
                "The influence of philosophy",
                "Regional variations",
                "Cooking methods",
                "The style of eating",
                "Changes in the Chinese diets",
                "Effects of a changing diet"
            ]
        }
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
        part2: {
            topics: [
                {
                    title: "Instructions for new students",
                    steps: ["Go to help desk", "Provide name and address", "Get an ID card", "Use card for library", "Access materials online"]
                },
                {
                    title: "Solve a problem",
                    steps: ["Find out what you know", "Form a hypothesis", "Perform experiments", "Compare with past results", "Add to knowledge"]
                }
            ]
        },
        part3: {
            topic: "Going on holiday",
            people: [
                { name: "A", traits: ["Prefers staying home", "Likes going walking"] },
                { name: "B", traits: ["Likes tourist attractions", "Going to the beach is boring"] },
                { name: "C", traits: ["Holiday requires good weather", "Wants mountaineering trip"] },
                { name: "D", traits: ["Never been abroad"] }
            ],
            descriptions: [
                "A: Last year, I went on a mountain climbing trip...",
                "B: When I travel somewhere, I often ask for bus routes...",
                "C: My family and I often plan to travel every time...",
                "D: Next month’s trip will be the first time I travel..."
            ]
        },
        part4: {
            topic: "Frozen land",
            points: [
                "Who is in charge?",
                "First step on the ice",
                "Where is the end of the Earth?",
                "Hidden geography",
                "Race to the pole",
                "Less effort needed",
                "Why is it so cold"
            ]
        }
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
        part2: {
            topics: [
                {
                    title: "Buying a new house",
                    steps: ["Choose the location", "Consider several factors", "Look at price", "Check employment, shops, schools", "Depends on personal circumstances"]
                },
                {
                    title: "Using public cycle",
                    steps: ["Click to choose bike", "Select 'hire the cycle'", "Enter unlock code", "Wait for green lights", "Return to collection point"]
                }
            ]
        },
        part3: {
            topic: "Sports",
            people: [
                { name: "A", traits: ["Work out with friends is good", "Proper meal is important"] },
                { name: "B", traits: ["Routine helps do more sport"] },
                { name: "C", traits: ["Exercise for young and elderly", "Competitions not useful for all"] },
                { name: "D", traits: ["Pain not necessary", "Seeks expert advice"] }
            ],
            descriptions: [
                "A: Exercising with friends is a fantastic idea...",
                "B: Establishing a consistent workout routine...",
                "C: Age is just a number when it comes to exercise...",
                "D: Experiencing pain during exercise isn’t necessary..."
            ]
        },
        part4: {
            topic: "Meatless diet",
            points: [
                "Types of vegetarian",
                "Various explanations",
                "Possible to happen",
                "Farming factory – it is a harmful thing",
                "Respect the life",
                "Health gets better with diet",
                "Our responsibilities for global"
            ]
        }
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
        part2: {
            topics: [
                {
                    title: "Diễn viên nổi tiếng Jay Mist",
                    steps: ["Moved to the US", "Studied and exercised", "Joined bodybuilding", "Got a starring role", "Gained fame"]
                },
                {
                    title: "Quy trình trồng khoai",
                    steps: ["Use earth and old potato", "Check roots and color", "Put in pot", "Water daily", "See plant grow"]
                }
            ]
        },
        part3: {
            topic: "Visit an island",
            people: [
                { name: "Ali", traits: ["Forgot to bring something", "Liked to be alone"] },
                { name: "Bruno", traits: ["Spent a lot on transport"] },
                { name: "Carla", traits: ["Thought public transport could improve", "Liked to walk"] },
                { name: "Deniz", traits: ["Loved eating food", "Liked buying things"] }
            ],
            descriptions: [
                "Ali: I like traveling to the beach...",
                "Bruno: As an architect, I have always been interested...",
                "Carla: The sharp bends of the island made me abandon...",
                "Deniz: There’s a lot of food here and I spend most..."
            ]
        },
        part4: {
            topic: "Music",
            points: [
                "A physically demanding activity",
                "A good way to boost your memory",
                "A great opportunity to broaden your social circle",
                "A way to learn discipline and the importance of routine",
                "A creative outlet for expressing emotions",
                "Enhanced sensitivity to other people’s feelings",
                "Develop a greater sense of well-being"
            ]
        }
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
        part2: {
            topics: [
                {
                    title: "Quy trình vào animal hospital",
                    steps: ["Collect ticket at main office", "Show ticket at door", "See photography exhibition", "Guide explains events", "Play and feed animals"]
                },
                {
                    title: "A famous football player",
                    steps: ["Played local teams", "Joined Cannes FC", "Became brilliant player", "Moved to Italy and Spain", "Worked as manager"]
                }
            ]
        },
        part3: {
            topic: "Watching television",
            people: [
                { name: "A", traits: ["Watches TV instead of studying", "Likes programs over weeks"] },
                { name: "B", traits: ["Avoids reality TV", "Lost interest in football"] },
                { name: "C", traits: ["Gains knowledge from TV"] },
                { name: "D", traits: ["Not selective viewer", "Keeps up with cinema and music"] }
            ],
            descriptions: [
                "A: I know I have to spend time studying but there are...",
                "B: I often spend time watching news on TV in the evening...",
                "C: I wasn’t good when I was in school because I often...",
                "D: My husband usually schedules TV viewing for the weekend..."
            ]
        },
        part4: {
            topic: "Tulips",
            points: [
                "The economy during the Golden Age",
                "Coming into fashion",
                "An object of trade",
                "Different types of tulip",
                "Trade mechanics",
                "Trade across Europe",
                "An unexpected turn of events"
            ]
        }
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
        part2: {
            topics: [
                {
                    title: "Enter the conference hall",
                    steps: ["Go to the lifts", "Take lift to third floor", "Show pass at main desk", "Get seat number", "Find your seat"]
                },
                {
                    title: "Natural history center",
                    steps: ["Entrance on main square", "See stairs to the left", "Ticket office at top", "Staff provide maps", "Get tour information"]
                }
            ]
        },
        part3: {
            topic: "Eating and cooking",
            people: [
                { name: "Cecilia", traits: ["Likes to eat with friends"] },
                { name: "Benigno", traits: ["Prefers to eat alone", "Needs to save money"] },
                { name: "Gloria", traits: ["Likes a wide range of dishes", "Takes a cookery course"] },
                { name: "Alon", traits: ["Only wants a few foods", "Likes home cooked food"] }
            ],
            descriptions: [
                "Cecilia: When I was a kid, I was often given ready-made...",
                "Benigno: I used to often go to the most fashionable...",
                "Gloria: Going to a restaurant is for the social atmosphere...",
                "Alon: I don’t understand why so many people want to find..."
            ]
        },
        part4: {
            topic: "Zoo",
            points: [
                "Symbol of privilege and wealth",
                "Opening the door for everyone",
                "Away from amusement towards instruction",
                "Away from enclosure towards greater freedom",
                "A different set of values",
                "A new mission of conservation",
                "A modern day alternative"
            ]
        }
    }
};

function loadContent() {
    const testSelect = document.getElementById("test-select");
    const selectedTest = testSelect.value;
    const passageContainer = document.getElementById("passage-container");
    const questionsContainer = document.getElementById("questions-container");
    const descriptionContainer = document.getElementById("description-container");
    const dialogueContainer = document.getElementById("dialogue-container");
    const checkButton = document.getElementById("check-answers");

    // Clear all containers
    passageContainer.innerHTML = "";
    questionsContainer.innerHTML = "";
    descriptionContainer.innerHTML = "";
    dialogueContainer.innerHTML = "";
    checkButton.classList.add("hidden");

    if (selectedTest && readingData[selectedTest]) {
        const test = readingData[selectedTest];

        // Part 1: Passage and Questions
        passageContainer.innerHTML = `<h2>Part 1</h2><p>${test.part1.passage}</p>`;
        questionsContainer.innerHTML = "<h2>Questions</h2>";
        test.part1.questions.forEach(q => {
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

        // Part 2: Topics
        descriptionContainer.innerHTML = "<h2>Part 2</h2>";
        test.part2.topics.forEach(topic => {
            descriptionContainer.innerHTML += `
                <h3>${topic.title}</h3>
                <ul>${topic.steps.map(step => `<li>${step}</li>`).join("")}</ul>
            `;
        });

        // Part 3: People and Descriptions
        dialogueContainer.innerHTML = `<h2>Part 3: ${test.part3.topic}</h2>`;
        test.part3.people.forEach(person => {
            dialogueContainer.innerHTML += `
                <p><strong>${person.name}:</strong> ${person.traits.join(", ")}</p>
            `;
        });
        dialogueContainer.innerHTML += "<h3>Descriptions</h3>";
        test.part3.descriptions.forEach(desc => {
            dialogueContainer.innerHTML += `<p>${desc}</p>`;
        });

        // Part 4: Topic Points
        dialogueContainer.innerHTML += `<h2>Part 4: ${test.part4.topic}</h2>`;
        dialogueContainer.innerHTML += `<ul>${test.part4.points.map(point => `<li>${point}</li>`).join("")}</ul>`;

        // Show check button for Part 1
        checkButton.classList.remove("hidden");
        checkButton.onclick = () => {
            test.part1.questions.forEach(q => {
                const selectedOption = document.querySelector(`input[name="q${q.id}"]:checked`);
                const resultDiv = document.getElementById(`result-q${q.id}`);
                if (selectedOption) {
                    const userAnswer = selectedOption.value;
                    resultDiv.textContent = userAnswer === q.answer ? "Correct!" : `Incorrect! Correct answer: ${q.answer}`;
                    resultDiv.className = "result " + (userAnswer === q.answer ? "correct" : "incorrect");
                }
            });
        };
    }
}
