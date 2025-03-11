// listening.js

const listeningData = {
    "test7": {
        part1: {
            description: "A conversation about college life.",
            dialogue: "Person A: So, how’s college going?\nPerson B: It’s great! The campus is huge, and the classes are interesting.",
            questions: [
                { id: 1, text: "Where does she walk every night?", options: ["The university area", "The park", "The college"], answer: "The college" },
                { id: 2, text: "How many chairs do they need to prepare for a meeting?", options: ["10", "20", "30"], answer: "20" },
                { id: 3, text: "Where did she ask the coffee shop to look for her lost item?", options: ["On the sofa", "In the corner", "On the table"], answer: "In the corner" },
                { id: 4, text: "Where did they meet?", options: ["The parking lot", "The front entrance", "The school gate"], answer: "The front entrance" },
                { id: 5, text: "The daughter is calling her father. What did she buy?", options: ["Trousers", "A dress", "Glasses"], answer: "A dress" }
            ]
        },
        part2: {
            description: "Instructions for school activities.",
            dialogue: "Staff: There will be a school party soon.\nStudent: What should we prepare?\nStaff: Order the food.\nStudent: Okay, and what else?\nStaff: When will she need a computer?\nStudent: On Friday.\nStaff: What country will they study next semester?\nStudent: France.\nStaff: What do they need to repair for the building?\nStudent: The windows.\nStaff: What does the actor like to do?\nStudent: Drawing.\nStaff: What new thing is being built at the school?\nStudent: A Performance space.\nStaff: What does he like about Dubai?\nStudent: He enjoys his job here.\nStaff: What does he advise young people to do to save money?\nStudent: Cook for yourself.",
            questions: [
                { id: 6, text: "There will be a school party soon, what should the teacher prepare?", options: ["Prepare drinks", "Arrange the seat", "Order the food"], answer: "Order the food" },
                { id: 7, text: "When will she need a computer?", options: ["Friday", "Thursday", "Monday"], answer: "Friday" },
                { id: 8, text: "What country will they study next semester?", options: ["France", "Italy", "Germany"], answer: "France" },
                { id: 9, text: "What do they need to repair for the building?", options: ["Windows", "Doors", "Gate"], answer: "Windows" },
                { id: 10, text: "What does the actor like to do?", options: ["Jogging", "Swimming", "Drawing"], answer: "Drawing" },
                { id: 11, text: "What new thing is being built at the school?", options: ["A stadium", "A Performance space", "A school yard"], answer: "A Performance space" },
                { id: 12, text: "What does he like about Dubai?", options: ["He gets a higher salary", "He enjoys the weather here", "He enjoys his job here"], answer: "He enjoys his job here" },
                { id: 13, text: "What does he advise young people to do to save money?", options: ["Cook for yourself", "Save money", "Buy things online"], answer: "Cook for yourself" }
            ]
        },
        part3: {
            description: "Multiple perspectives on art (Topic: ART).",
            descriptionSections: [
                { subtitle: "Social activity", text: "I personally don't like and don't have a talent for fine arts, especially painting. But I see it as a great way to engage in social charity activities. I'm passionate about teaching children how to draw because I love kids. I'm also part of a volunteer organization that specializes in teaching art to poor children, which makes me very happy." },
                { subtitle: "With children", text: "I think drawing with my children is a great way to understand them better. No matter how busy my work is, I always make time to sit and draw with my kids. This helps us bond more and gives me the chance to talk with them more." },
                { subtitle: "As part of their job", text: "I've loved literature, art, and drawing since I was a child. Now, I'm a writer and a comic book creator. In my stories, I occasionally include some illustrations to make the book more vivid and lively." },
                { subtitle: "Alone", text: "I'm currently taking a drawing course and I really want to be serious about it. When practicing drawing, I prefer not to draw with friends, even though they often invite me to join them. I want to focus entirely on my work." }
            ],
            dialogue: "W: The government is discussing adding more farming space to big cities. What do you think about this?\nM: I think it’s a bad idea. Cities are already too crowded, and people don’t even have enough land for housing. How can we take land for farming and raising livestock?\nW: We could use spaces like balconies or parks for farming. These farming areas would make the city more beautiful and a better place to live. Plus, it would benefit the local economy since the city could become more self-sufficient in food production without relying on imports from other regions.\nM: I agree that farming areas would make the landscape greener and more attractive. But adding farming space won’t significantly boost the local economy. Farmers have been transporting food into cities for a long time, and we’ve never had issues with food supply or shortages.\nW: You make a good point. With limited farming space, it wouldn’t be enough to meet the food demands of city residents. We would still rely on food supplies from suburban areas.\nM: Exactly. A few small farming spaces won’t fulfill the food demand, but they would take up a lot of valuable land that could be used for housing.",
            dialogueKeypoints: [
                "Living space is more important than farming space: M",
                "Urban farming sites can be visually appealing: B",
                "Urban farming can benefit local economics: W",
                "Urban farming cannot meet food needs: B"
            ],
            questions: [
                { id: 1, text: "Who sees art as a social charity activity?", options: ["Social activity", "With children", "As part of their job", "Alone"], answer: "Social activity" },
                { id: 2, text: "Who draws with children to bond?", options: ["Social activity", "With children", "As part of their job", "Alone"], answer: "With children" },
                { id: 3, text: "Who uses illustrations in their job?", options: ["Social activity", "With children", "As part of their job", "Alone"], answer: "As part of their job" },
                { id: 4, text: "Who prefers drawing alone?", options: ["Social activity", "With children", "As part of their job", "Alone"], answer: "Alone" }
            ]
        }
    },
    "test3": {
        part1: {
            description: "A talk about meeting at a specific time.",
            dialogue: "Person A: Let’s meet at quarter to eight.\nPerson B: Sure, see you then!",
            questions: [
                { id: 1, text: "What time will they meet?", options: ["Half past eight", "Quarter to seven", "Quarter to eight"], answer: "Quarter to eight" },
                { id: 2, text: "Where did they meet for the bus home?", options: ["Hotel entrance", "Bus station", "Market place"], answer: "Market place" },
                { id: 3, text: "How old is Stephanie?", options: ["21", "22", "23"], answer: "21" },
                { id: 4, text: "Where is the club near?", options: ["A park", "A library", "A coffee shop"], answer: "A park" },
                { id: 5, text: "What to feed the cat?", options: ["Milk", "Fish", "Cat food"], answer: "Fish" }
            ]
        },
        part2: {
            description: "Family activities and recommendations.",
            dialogue: "Parent: What does this family do most weekends?\nChild: They go for a walk.\nParent: What does he need to buy for his sister?\nChild: Chocolates.\nParent: The train was delayed. What time does the train leave?\nChild: 9.30.\nParent: Which area has the best weather?\nChild: In the east.\nParent: Why was the museum visit cancelled?\nChild: Not enough people.\nParent: Where is the cafe?\nChild: Opposite the gift shop.\nParent: Where is the tea served?\nChild: The river boat.\nParent: Which room is the largest in her house?\nChild: Kitchen.",
            questions: [
                { id: 6, text: "What does this family do most weekends?", options: ["Goes with their friends", "Goes bowling", "Goes for a walk"], answer: "Goes for a walk" },
                { id: 7, text: "What does he need to buy for his sister?", options: ["Chocolates", "Eggs", "Milk"], answer: "Chocolates" },
                { id: 8, text: "The train was delayed. What time does the train leave?", options: ["8.45", "9.15", "9.30"], answer: "9.30" },
                { id: 9, text: "Which area has the best weather?", options: ["In the south", "In the east", "In the west"], answer: "In the east" },
                { id: 10, text: "Why was the museum visit cancelled?", options: ["Join other activities", "Poor weather conditions", "Not enough people"], answer: "Not enough people" },
                { id: 11, text: "Where is the cafe?", options: ["Next to the station", "Near the gift shop", "Opposite the gift shop"], answer: "Opposite the gift shop" },
                { id: 12, text: "Where is the tea served?", options: ["The building", "The river boat", "The museum"], answer: "The river boat" },
                { id: 13, text: "Which room is the largest in her house?", options: ["Living room", "Bedroom", "Kitchen"], answer: "Kitchen" }
            ]
        },
        part3: {
            description: "Multiple perspectives on protecting the environment (Topic: Protecting the Environment).",
            descriptionSections: [
                { subtitle: "Using less water", text: "I think a lot of people overemphasize protecting the environment by cutting down on personal vehicles, avoiding plastic bags, planting a lot of trees, and so on. But I personally believe we should focus on protecting the environment through small daily actions we often overlook. For example, turning off the water while brushing our teeth or washing our hands. If everyone saves a little water like that, it would add up to a huge amount saved globally." },
                { subtitle: "Shopping online", text: "I usually shop online to reduce the need to drive to the supermarket, which produces harmful emissions for the environment. Additionally, I can avoid using plastic bags for groceries when shopping in person. By simply sitting at home and clicking a few buttons, I can buy everything I want without emitting harmful gases from a car." },
                { subtitle: "Not driving to work", text: "I used to drive to work for a long period, but then I realized that the excessive use of personal cars contributes significantly to environmental pollution. Therefore, I chose to ride a bicycle to work, which benefits both the environment and my health." },
                { subtitle: "Using less electricity", text: "I'm not that into environmental protection and usually just do what’s convenient for me. But my electric bill last month shocked me because it was so expensive, and I realized that I needed to save money. So from now on, I’ll have to manage my electricity use more efficiently." }
            ],
            dialogue: "W: Did you hear about the concert last night? A lot of young people attended.\nM: Yes, I know about that concert; it was very popular. I don’t understand why so many young people are so eager to attend. They're blindly idolizing young singers, and these idols don’t really teach them anything good.\nW: I see it differently. The young singers today are very talented, and they do a lot of charitable work for society. I think young people look up to them and follow their example.\nM: Yes, they volunteer a lot, but they do it for the wrong reasons. They only want to boost their own fame.\nW: Oh, I think you don't like young singers because you don't enjoy their music, right?\nM: Exactly, I only like listening to classical music from previous generations. I think music preferences are very personal and each generation has its own unique taste in music. But music is always a universal language that conveys emotions everyone can understand.\nW: I didn’t study music like you, so I don’t really have any ideas about this.\nM: You don’t need to study music to understand it. Just think about why you cry during a sad movie scene when the music plays or why you feel energized when you hear a happy song. Isn’t that right?\nW: Yes, I think that’s why films always try to include at least one piece of music.",
            dialogueKeypoints: [
                "Singers play a good role for young people: W",
                "Taste in music is a highly personal thing: B",
                "Music is a universal language: M",
                "Music can manipulate people's feelings: B"
            ],
            questions: [
                { id: 1, text: "Who suggests using less water?", options: ["Using less water", "Shopping online", "Not driving to work", "Using less electricity"], answer: "Using less water" },
                { id: 2, text: "Who shops online to reduce emissions?", options: ["Using less water", "Shopping online", "Not driving to work", "Using less electricity"], answer: "Shopping online" },
                { id: 3, text: "Who rides a bicycle to work?", options: ["Using less water", "Shopping online", "Not driving to work", "Using less electricity"], answer: "Not driving to work" },
                { id: 4, text: "Who reduces electricity to save money?", options: ["Using less water", "Shopping online", "Not driving to work", "Using less electricity"], answer: "Using less electricity" }
            ]
        }
    },
    "test4": {
        part1: {
            description: "A discussion about a schedule and activities.",
            dialogue: "Person A: What time is the meeting?\nPerson B: 10.15.\nPerson A: Why did he call his friend?\nPerson B: Suggest a drink.\nPerson A: How does he feel?\nPerson B: Sick.\nPerson A: What is the mother asking her daughter to buy?\nPerson B: Eggs.\nPerson A: When do they meet?\nPerson B: 10.00.",
            questions: [
                { id: 1, text: "What time is the meeting?", options: ["9.15", "10.15", "10.30"], answer: "10.15" },
                { id: 2, text: "Why did he call his friend?", options: ["To make an appointment", "To say hello", "Suggest a drink"], answer: "Suggest a drink" },
                { id: 3, text: "How does he feel?", options: ["Sick", "Sad", "Well"], answer: "Sick" },
                { id: 4, text: "What is the mother asking her daughter to buy?", options: ["Eggs", "Chocolates", "Bread"], answer: "Eggs" },
                { id: 5, text: "When do they meet?", options: ["8.00", "9.00", "10.00"], answer: "10.00" }
            ]
        },
        part2: {
            description: "Work-related conversations and recommendations.",
            dialogue: "Person A: Why can't she pick up her child?\nPerson B: Stay late at the office.\nPerson A: What movie does she recommend?\nPerson B: Action film.\nPerson A: A man is calling his friend. Where is he?\nPerson B: The town hall.\nPerson A: What means of transport does he use to get to work?\nPerson B: By bus.\nPerson A: What time do experts recommend eating fruit?\nPerson B: In the morning.\nPerson A: Why does she wake up early?\nPerson B: To have some quiet time.\nPerson A: Why is he learning to drive?\nPerson B: He has to drive to work.\nPerson A: What does he buy directly at the shop?\nPerson B: Clothes.",
            questions: [
                { id: 6, text: "Why can't she pick up her child?", options: ["Meet her client", "Have an urgent meeting", "Stay late at the office"], answer: "Stay late at the office" },
                { id: 7, text: "What movie does she recommend?", options: ["Comedy film", "Action film", "Horror film"], answer: "Action film" },
                { id: 8, text: "A man is calling his friend. Where is he?", options: ["The park", "The station", "The town hall"], answer: "The town hall" },
                { id: 9, text: "What means of transport does he use to get to work?", options: ["By bus", "By train", "By car"], answer: "By bus" },
                { id: 10, text: "What time do experts recommend eating fruit?", options: ["In the morning", "In the afternoon", "In the evening"], answer: "In the morning" },
                { id: 11, text: "Why does she wake up early?", options: ["To exercise", "To have some quiet time", "To do housework"], answer: "To have some quiet time" },
                { id: 12, text: "Why is he learning to drive?", options: ["Driving a car is his dream", "He hates public transport", "He has to drive to work"], answer: "He has to drive to work" },
                { id: 13, text: "What does he buy directly at the shop?", options: ["Books", "Clothes", "Trousers"], answer: "Clothes" }
            ]
        },
        part3: {
            description: "Multiple perspectives on studying habits (Topic: Studying Habits).",
            descriptionSections: [
                { subtitle: "In various places", text: "I can study in different places, like coffee shops, libraries, or parks. For me, the location isn't that important because I have good concentration skills." },
                { subtitle: "In a quiet place", text: "I can't study in very noisy places because I can't focus on my homework. If I study in a café, I end up not getting anything done. So, I usually study in places such as my room in my house or in my office." },
                { subtitle: "With music", text: "I prefer listening to music while studying. I usually play motivational songs to help keep me alert, especially when studying in the morning. Music is like a cup of coffee, keeping me awake and motivated in my studies." },
                { subtitle: "Late at night", text: "I often can't focus on studying during the day; I feel tired and sleepy when I have to wake up early and study. So, I usually study at night when everyone in the house is asleep. The quiet atmosphere at night allows me to focus the best and be the most productive." }
            ],
            dialogue: "W: Hi, what are you reading?\nM: I'm reading an article about the concept of beauty.\nW: Oh really, that sounds interesting. Beauty is something that can't be defined because everyone has a different perspective on it, right?\nM: Actually, people have quite similar perspectives on beauty. We always prefer beautiful things and are drawn to them.\nW: Beauty in the past and now is very different. The older generation might see traditional things as beautiful, while the younger generation considers unique and unconventional things as beautiful. So, not everyone has the same view on beauty.\nM: Beauty can be found in many places we wouldn't expect, or even within something considered ugly, there's always some beauty present. So, nothing in the world is entirely ugly.\nW: Exactly. That's why the definition of beauty is constantly changing. In a few decades, people might find things beautiful that we once considered ugly.\nM: That's one perspective. Let's wait and see how it changes.",
            dialogueKeypoints: [
                "People share the very similar ideas about beauty: M",
                "Views of beauty change over time: W",
                "Beauty can be found in unlikely places: B",
                "Traditional ideas of beauty are going to change: W"
            ],
            questions: [
                { id: 1, text: "Who can study in various places?", options: ["In various places", "In a quiet place", "With music", "Late at night"], answer: "In various places" },
                { id: 2, text: "Who prefers a quiet place?", options: ["In various places", "In a quiet place", "With music", "Late at night"], answer: "In a quiet place" },
                { id: 3, text: "Who studies with music?", options: ["In various places", "In a quiet place", "With music", "Late at night"], answer: "With music" },
                { id: 4, text: "Who studies late at night?", options: ["In various places", "In a quiet place", "With music", "Late at night"], answer: "Late at night" }
            ]
        }
    },
    "test10": {
        part1: {
            description: "A suggestion to meet and activities.",
            dialogue: "Person A: Why did he call his friend?\nPerson B: Suggest a drink.\nPerson A: When did they decide to meet?\nPerson B: 9am on Sunday.\nPerson A: A girl is calling her mother. Which dress does she want?\nPerson B: Long and red.\nPerson A: What day is the new appointment?\nPerson B: Thursday 13th.\nPerson A: A man is calling his wife. Where did they meet?\nPerson B: Outside a shop.",
            questions: [
                { id: 1, text: "Why did he call his friend?", options: ["To make an appointment", "To say hello", "Suggest a drink"], answer: "Suggest a drink" },
                { id: 2, text: "When did they decide to meet?", options: ["7am on Friday", "9am on Sunday", "9am on Saturday"], answer: "9am on Sunday" },
                { id: 3, text: "A girl is calling her mother. Which dress does she want?", options: ["Long and green", "Long and red", "Short and red"], answer: "Long and red" },
                { id: 4, text: "What day is the new appointment?", options: ["Thursday 13th", "Tuesday 13th", "Wednesday 10th"], answer: "Thursday 13th" },
                { id: 5, text: "A man is calling his wife. Where did they meet?", options: ["At the park", "At the station", "Outside a shop"], answer: "Outside a shop" }
            ]
        },
        part2: {
            description: "Conversations about past activities and locations.",
            dialogue: "Person A: What did she do last weekend?\nPerson B: Stayed at home.\nPerson A: How many weeks have they been in India?\nPerson B: 2 weeks.\nPerson A: Where is the office?\nPerson B: Opposite the hotel.\nPerson A: Where do they wait for the bus?\nPerson B: By the hotel’s main entrance.\nPerson A: What does his wife like to do?\nPerson B: Photography.\nPerson A: What outdoor activities do they do in the afternoon?\nPerson B: Play golf.",
            questions: [
                { id: 6, text: "What did she do last weekend?", options: ["Stayed at home", "Went shopping", "Went to the cinema"], answer: "Stayed at home" },
                { id: 7, text: "How many weeks have they been in India?", options: ["1 week", "2 weeks", "3 weeks"], answer: "2 weeks" },
                { id: 8, text: "Where is the office?", options: ["Opposite the hotel", "Near the park", "Opposite the station"], answer: "Opposite the hotel" },
                { id: 9, text: "Where do they wait for the bus?", options: ["Next to the hotel", "Near the hotel's main entrance", "By the hotel’s main entrance"], answer: "By the hotel’s main entrance" },
                { id: 10, text: "What does his wife like to do?", options: ["Sightseeing", "Going shopping", "Photography"], answer: "Photography" },
                { id: 11, text: "What outdoor activities do they do in the afternoon?", options: ["Play golf", "Go to dance classes", "Play bridge"], answer: "Play golf" }
            ]
        },
        part3: {
            description: "Multiple perspectives on the use of the internet (Topic: The Use of the Internet).",
            descriptionSections: [
                { subtitle: "Watch films", text: "I am a big fan of newly released movies, but the cost of going to the cinema is too high. I'm just a student, so I can't afford to go to the cinema regularly to indulge in my hobby. Therefore, I think the internet is great because it allows me to watch movies for free at home. I save both the time of going to the cinema and a considerable amount of money." },
                { subtitle: "Complete assignments", text: "The internet is a great resource for research, finding materials, and useful information for studying. My friends and I often go to each other's houses to do homework together. Instead of spending hours trying to figure out how to do our homework, we quickly go online and find the answers." },
                { subtitle: "Communicate with friends", text: "In today's digital age, the internet helps us access social media to stay constantly connected with friends. Especially since I have relatives mainly living abroad or in distant cities, the internet has been a great help for my family to stay in touch. We often video call each other to share daily stories." },
                { subtitle: "Find transport information", text: "I see that people often use the internet to watch movies, read newspapers, quickly update the news, and so on. But I usually use the internet to find directions and public transport to my friends' and relatives' houses. I'm a forgetful person, and I often forget the way, even if I've been there a hundred times. So the internet helps me a lot in not getting lost and easily find nearby public transport." }
            ],
            dialogue: "M: Have you heard about the upcoming presidential election? A lot of young people have already voted, which shows that they're becoming more interested in politics.\nW: Yes, it's very different from our time. When I was 18, I never paid attention to politics.\nM: The technology era now gives us so many ways to engage with politics. Politicians often post their political activities on social media much more than they did in the past.\nW: Actually, politicians still carry out traditional political activities too. They still hand out flyers and participate in volunteer work.\nM: The development of information technology also overwhelms us with information. There’s so much news online that we don't know what to read. This makes keeping up with political news much more challenging than before.\nW: I think that as technology advances, it becomes easier for us to stay updated on the news. Technology allows us to use advanced filters to easily sort out the news we need to know.\nM: There are also more women involved in politics now than before. It seems society has become more open to women.\nW: Exactly. Women have the same education and learning abilities as men. They even lead in many areas of life. In the future, more and more women will be participating in political activities.",
            dialogueKeypoints: [
                "Young people are becoming more interested in politics: B",
                "Social media has changed political activism: M",
                "People are better informed political issues: W",
                "More women are likely to participate in politics: B"
            ],
            questions: [
                { id: 1, text: "Who watches films online?", options: ["Watch films", "Complete assignments", "Communicate with friends", "Find transport information"], answer: "Watch films" },
                { id: 2, text: "Who uses the internet for assignments?", options: ["Watch films", "Complete assignments", "Communicate with friends", "Find transport information"], answer: "Complete assignments" },
                { id: 3, text: "Who communicates with friends online?", options: ["Watch films", "Complete assignments", "Communicate with friends", "Find transport information"], answer: "Communicate with friends" },
                { id: 4, text: "Who finds transport information online?", options: ["Watch films", "Complete assignments", "Communicate with friends", "Find transport information"], answer: "Find transport information" },
                { id: 12, text: "The concert will end with?", options: ["A surprise performance", "Some special offers", "The city’s favorite group"], answer: "The city’s favorite group" },
                { id: 13, text: "What was the writer's first job?", options: ["Cook", "Reporter", "Teacher"], answer: "Teacher" }
            ]
        }
    },
    "test9": {
        part1: {
            description: "A talk about health and visits.",
            dialogue: "Person A: How does he feel?\nPerson B: Sick.\nPerson A: How long does it take to get to the station?\nPerson B: 20 minutes.\nPerson A: What did he call to say?\nPerson B: To say thank you.\nPerson A: Who is coming to visit him this weekend?\nPerson B: His sister and her children.",
            questions: [
                { id: 1, text: "How does he feel?", options: ["Sick", "Sad", "Well"], answer: "Sick" },
                { id: 2, text: "How long does it take to get to the station?", options: ["15 minutes", "20 minutes", "25 minutes"], answer: "20 minutes" },
                { id: 3, text: "What did he call to say?", options: ["To say hello", "To meet Felix", "To say thank you"], answer: "To say thank you" },
                { id: 4, text: "Who is coming to visit him this weekend?", options: ["His mother", "His sister", "His sister and her children"], answer: "His sister and her children" }
            ]
        },
        part2: {
            description: "Work and travel plans.",
            dialogue: "Person A: What time is the meeting?\nPerson B: 2pm.\nPerson A: Why can't she pick up her child?\nPerson B: Stay late at the office.\nPerson A: How much do the cleaning products cost?\nPerson B: One pound fifty.\nPerson A: Where is she going with her family?\nPerson B: The mountains.\nPerson A: What did he usually do last year?\nPerson B: Cycling.\nPerson A: How many minutes did he have to speak?\nPerson B: 15.",
            questions: [
                { id: 5, text: "What time is the meeting?", options: ["2pm", "10am", "11am"], answer: "2pm" },
                { id: 6, text: "Why can't she pick up her child?", options: ["Meet her client", "Have an urgent meeting", "Stay late at the office"], answer: "Stay late at the office" },
                { id: 7, text: "How much do the cleaning products cost?", options: ["One pound fifty", "Two pounds", "One pence"], answer: "One pound fifty" },
                { id: 8, text: "Where is she going with her family?", options: ["The mountains", "The lake", "The park"], answer: "The mountains" },
                { id: 9, text: "What did he usually do last year?", options: ["Running", "Cycling", "Walking"], answer: "Cycling" },
                { id: 10, text: "How many minutes did he have to speak?", options: ["10", "15", "25"], answer: "15" }
            ]
        },
        part3: {
            description: "Multiple perspectives on places to run (Topic: Places to Run).",
            descriptionSections: [
                { subtitle: "In the fitness centre", text: "My friends often invite me to go jogging on the street, but I find it too dangerous. There’s a lot of traffic, which can be dangerous for people jogging on the street. So, I bought a one-year gym membership and go there to exercise every day." },
                { subtitle: "In the street", text: "I usually wake up early in the morning to exercise, and I choose to jog on the street because of its convenience. I just need to step out of the house, and I can start exercising. However, I have to go jogging early to avoid cyclists. My friends go to the gym to exercise a lot, but I find something artificial about the whole thing." },
                { subtitle: "At the seaside", text: "I see many people wake up early to go jogging and exercise to stay healthy. As for me, I usually walk along the beach simply to relax because there’s a beautiful beach near my house. Every morning, I spend time walking on the white sand; it really helps a lot with my mental well-being." },
                { subtitle: "On the running track", text: "Near my house, there’s a stadium where many people go to exercise. I often run on the track there, and it makes me feel like I’m running more professionally. My personality is quite competitive, so I also time myself and race with my friends there." }
            ],
            dialogue: "W: I'm thinking about switching to another job.\nM: Why? Your current job is very stable.\nW: I think I should try my hand at different fields. The jobs I take should only last around 1-2 years. I don't like staying too long in one job or with one company; that would be really boring. Nowadays, many companies offer temporary jobs, which allows me to try out different fields.\nM: Oh, but if you stay longer at one company, they might offer you more opportunities for career advancement. I always want to stay long-term with a company that suits me.\nW: Nowadays, young people who have just graduated from university are very talented and have many qualifications. I'm afraid that if I stick with one job and don't change to accumulate knowledge in various fields, it will be hard to compete with these young, talented people.\nM: We also need to consider job satisfaction. If we do well, we need to be encouraged and motivated. That helps employees feel that their efforts and contributions to the company are worthwhile.\nW: You're absolutely right, I couldn't agree more. In this age of technological advancement, many jobs have been replaced by machines. More and more people are losing their jobs due to the development of technology and engineering. I think this is a concerning issue.\nM: I don't think so. Technology is helping us do our work more quickly, easily, and conveniently than ever. If we know how to leverage technology in our jobs, productivity will increase significantly, which in turn helps develop the economy and society.",
            dialogueKeypoints: [
                "Continuity is important when planning a career: M",
                "Job security cannot be guaranteed: W",
                "Job satisfaction is important for motivator: B",
                "Technological improvement is good for the economy: M"
            ],
            questions: [
                { id: 1, text: "Who runs in the fitness centre?", options: ["In the fitness centre", "In the street", "At the seaside", "On the running track"], answer: "In the fitness centre" },
                { id: 2, text: "Who runs in the street?", options: ["In the fitness centre", "In the street", "At the seaside", "On the running track"], answer: "In the street" },
                { id: 3, text: "Who runs at the seaside?", options: ["In the fitness centre", "In the street", "At the seaside", "On the running track"], answer: "At the seaside" },
                { id: 4, text: "Who runs on the running track?", options: ["In the fitness centre", "In the street", "At the seaside", "On the running track"], answer: "On the running track" },
                { id: 11, text: "Who does she live with?", options: ["Her colleague", "Her sister", "Best friends"], answer: "Best friends" },
                { id: 12, text: "Why does she want to be a writer?", options: ["Help people", "Make money", "Her dream"], answer: "Help people" },
                { id: 13, text: "Why was the flight canceled?", options: ["There are no flight staff", "Plane maintenance", "Poor weather conditions"], answer: "Poor weather conditions" }
            ]
        }
    },
    "test8": {
        part1: {
            description: "A conversation about room and sports.",
            dialogue: "Person A: Which room will they study in?\nPerson B: Room 301.\nPerson A: What time is the football match?\nPerson B: 1pm.\nPerson A: What is the phone number of the shop?\nPerson B: 20 10 30.\nPerson A: What did they bring for the picnic?\nPerson B: Food.",
            questions: [
                { id: 1, text: "Which room will they study in?", options: ["Room 201", "Room 301", "Room 302"], answer: "Room 301" },
                { id: 2, text: "What time is the football match?", options: ["1pm", "7pm", "4pm"], answer: "1pm" },
                { id: 3, text: "What is the phone number of the shop?", options: ["20 10 30", "10 20 30", "30 10 20"], answer: "20 10 30" },
                { id: 4, text: "What did they bring for the picnic?", options: ["Clothes", "Fruit", "Food"], answer: "Food" }
            ]
        },
        part2: {
            description: "Past activities and plans.",
            dialogue: "Person A: How many copies did he sell?\nPerson B: Over 300000 copies.\nPerson A: Where did they go last year?\nPerson B: Camping.\nPerson A: What do they plan to do together?\nPerson B: Make plans later.\nPerson A: What does the man drink?\nPerson B: Iced tea.\nPerson A: Who did she take the picture of?\nPerson B: The girl's team.\nPerson A: Where do they go when they travel to India?\nPerson B: Go to the park.\nPerson A: What is the weather like today?\nPerson B: Cold and wet.",
            questions: [
                { id: 5, text: "How many copies did he sell?", options: ["Over 300000 copies", "100.000 copies", "30.000 copies"], answer: "Over 300000 copies" },
                { id: 6, text: "Where did they go last year?", options: ["Camping", "Cycling", "Bowling"], answer: "Camping" },
                { id: 7, text: "What do they plan to do together?", options: ["Go to the coffee shop", "Make plans later", "Have dinner together"], answer: "Make plans later" },
                { id: 8, text: "What does the man drink?", options: ["Water and iced tea", "Water", "Iced tea"], answer: "Iced tea" },
                { id: 9, text: "Who did she take the picture of?", options: ["The girl's team", "The boy’s team", "Anna, Sara and the girl's team"], answer: "The girl's team" },
                { id: 10, text: "Where do they go when they travel to India?", options: ["Go to the park", "Go to famous places", "Go out to eat"], answer: "Go to the park" },
                { id: 11, text: "What is the weather like today?", options: ["Cold and not wet", "Hot and wet", "Cold and wet"], answer: "Cold and wet" }
            ]
        },
        part3: {
            description: "Multiple perspectives on online shopping (Topic: Online Shopping).",
            descriptionSections: [
                { subtitle: "The products are delivered", text: "I used to be the person who didn’t like shopping online, but ever since I experienced home delivery, I no longer shop in stores. When I shop online, the delivery person brings the package right to my door, even up to my floor, and knocks on my apartment door, so I don’t even need to step outside. I really enjoy this convenience." },
                { subtitle: "It is cheaper", text: "Shopping online has helped me save quite a bit of money. After a few months of online shopping, I was able to save enough to buy a new bicycle. But don't get me wrong, I haven't been eating any less or cutting back on the groceries I buy. It's just that online shopping allows me to compare prices and choose the store with the best deal." },
                { subtitle: "It saves time", text: "I’m a pretty busy person, and I often don’t have enough time because of my hectic work schedule. That’s why I always shop online to save time. This way, I don’t need to go to the store in person, and someone will deliver the items directly to me. Additionally, online shopping is very convenient because, with just a few clicks, I can buy everything I want without having to go from one store to another." },
                { subtitle: "There are more choices", text: "I don't shop online because it's cheaper or because of the fast shipping. I shop online because, when browsing online stores, I have a wide range of choices. For the same item, there are many different types and brands for me to choose from and compare, which allows me to pick the one I like the most." }
            ],
            dialogue: "M: Have you heard about the upcoming presidential election? A lot of young people have already voted, which shows that they're becoming more interested in politics.\nW: Yes, it's very different from our time. When I was 18, I never paid attention to politics.\nM: The technology era now gives us so many ways to engage with politics. Politicians often post their political activities on social media much more than they did in the past.\nW: Actually, politicians still carry out traditional political activities too. They still hand out flyers and participate in volunteer work.\nM: The development of information technology also overwhelms us with information. There’s so much news online that we don't know what to read. This makes keeping up with political news much more challenging than before.\nW: I think that as technology advances, it becomes easier for us to stay updated on the news. Technology allows us to use advanced filters to easily sort out the news we need to know.\nM: There are also more women involved in politics now than before. It seems society has become more open to women.\nW: Exactly. Women have the same education and learning abilities as men. They even lead in many areas of life. In the future, more and more women will be participating in political activities.",
            dialogueKeypoints: [
                "Young people are becoming more interested in politics: B",
                "Social media has changed political activism: M",
                "People are better informed political issues: W",
                "More women are likely to participate in politics: B"
            ],
            questions: [
                { id: 1, text: "Who likes home delivery?", options: ["The products are delivered", "It is cheaper", "It saves time", "There are more choices"], answer: "The products are delivered" },
                { id: 2, text: "Who shops online to save money?", options: ["The products are delivered", "It is cheaper", "It saves time", "There are more choices"], answer: "It is cheaper" },
                { id: 3, text: "Who shops online to save time?", options: ["The products are delivered", "It is cheaper", "It saves time", "There are more choices"], answer: "It saves time" },
                { id: 4, text: "Who shops online for more choices?", options: ["The products are delivered", "It is cheaper", "It saves time", "There are more choices"], answer: "There are more choices" },
                { id: 12, text: "How did he adjust the meeting?", options: ["Cancel the meeting", "Having the meeting without him", "Having the meeting another day"], answer: "Having the meeting without him" },
                { id: 13, text: "Which door do they need to take to get to Edinburgh?", options: ["Two", "Three", "Four"], answer: "Two" }
            ]
        }
    },
    "test12": {
        part1: {
            description: "A conversation about daily routines and meetings.",
            dialogue: "Person A: When do they meet each other?\nPerson B: On Thursday morning.\nPerson A: How old is this city?\nPerson B: 1500 years.\nPerson A: What colour is Jack's house?\nPerson B: Red.\nPerson A: What does her sister look like?\nPerson B: Short.",
            questions: [
                { id: 1, text: "When do they meet each other?", options: ["On Thursday morning", "On Wednesday morning", "On Tuesday morning"], answer: "On Thursday morning" },
                { id: 2, text: "How old is this city?", options: ["150 years", "1500 years", "2000 years"], answer: "1500 years" },
                { id: 3, text: "What colour is Jack's house?", options: ["Red", "Black", "Green"], answer: "Red" },
                { id: 4, text: "What does her sister look like?", options: ["Short", "Tall", "Thin"], answer: "Short" }
            ]
        },
        part2: {
            description: "Past activities and advice.",
            dialogue: "Person A: What did he usually do last year?\nPerson B: Cycling.\nPerson A: How does he travel?\nPerson B: By train.\nPerson A: How long does it take her to ride her bike?\nPerson B: 35 minutes.\nPerson A: What does she usually do in her free time?\nPerson B: Go to the theatre and play sports.\nPerson A: Which sports is she good at?\nPerson B: Football.\nPerson A: What are the similarities between his mom and aunt?\nPerson B: They were thin.\nPerson A: What time does she usually write?\nPerson B: In the afternoons.",
            questions: [
                { id: 5, text: "What did he usually do last year?", options: ["Running", "Cycling", "Walking"], answer: "Cycling" },
                { id: 6, text: "How does he travel?", options: ["By train", "By car", "By bus"], answer: "By train" },
                { id: 7, text: "How long does it take her to ride her bike?", options: ["35 minutes", "25 minutes", "20 minutes"], answer: "35 minutes" },
                { id: 8, text: "What does she usually do in her free time?", options: ["Go to the theatre and play sports", "Play sports and go shopping", "Stay at home and shop online"], answer: "Go to the theatre and play sports" },
                { id: 9, text: "Which sports is she good at?", options: ["Running", "Swimming", "Football"], answer: "Football" },
                { id: 10, text: "What are the similarities between his mom and aunt?", options: ["They were thin", "They have the same eye color", "They have the same hair color"], answer: "They were thin" },
                { id: 11, text: "What time does she usually write?", options: ["In the evenings", "In the afternoons", "In the mornings"], answer: "In the afternoons" }
            ]
        },
        part3: {
            description: "Multiple perspectives on listening to music (Topic: Listening to Music).",
            descriptionSections: [
                { subtitle: "To relax", text: "I see a lot of people listen to music right when they wake up to help them feel alert. But if I listen to music as soon as I wake up, it gives me a headache all day and makes it hard for me to focus on anything. So, I just listen to music to relax when I’m feeling comfortable, not for any other reason." },
                { subtitle: "While studying", text: "I have a habit of listening to music while studying; it helps me stay motivated and alert while doing my assignments. If I don't play music, I could fall asleep at any moment, and I'll study in a discouraged mood." },
                { subtitle: "While singing", text: "My brothers and friends often say that I have a beautiful voice, so I often sing when I meet them. I usually play music on the TV and hold the remote control, pretending it's a microphone so I can sing." },
                { subtitle: "After waking up", text: "I usually listen to a pop or rock song as soon as I get out of bed in the morning because it helps me wake up instantly. If I don't listen to music at that moment, I don't know when I'll be able to get up and go to work." }
            ],
            dialogue: "M: Have you heard about the upcoming presidential election? A lot of young people have already voted, which shows that they're becoming more interested in politics.\nW: Yes, it's very different from our time. When I was 18, I never paid attention to politics.\nM: The technology era now gives us so many ways to engage with politics. Politicians often post their political activities on social media much more than they did in the past.\nW: Actually, politicians still carry out traditional political activities too. They still hand out flyers and participate in volunteer work.\nM: The development of information technology also overwhelms us with information. There’s so much news online that we don't know what to read. This makes keeping up with political news much more challenging than before.\nW: I think that as technology advances, it becomes easier for us to stay updated on the news. Technology allows us to use advanced filters to easily sort out the news we need to know.\nM: There are also more women involved in politics now than before. It seems society has become more open to women.\nW: Exactly. Women have the same education and learning abilities as men. They even lead in many areas of life. In the future, more and more women will be participating in political activities.",
            dialogueKeypoints: [
                "Young people are becoming more interested in politics: B",
                "Social media has changed political activism: M",
                "People are better informed political issues: W",
                "More women are likely to participate in politics: B"
            ],
            questions: [
                { id: 1, text: "Who listens to music to relax?", options: ["To relax", "While studying", "While singing", "After waking up"], answer: "To relax" },
                { id: 2, text: "Who listens to music while studying?", options: ["To relax", "While studying", "While singing", "After waking up"], answer: "While studying" },
                { id: 3, text: "Who listens to music while singing?", options: ["To relax", "While studying", "While singing", "After waking up"], answer: "While singing" },
                { id: 4, text: "Who listens to music after waking up?", options: ["To relax", "While studying", "While singing", "After waking up"], answer: "After waking up" },
                { id: 12, text: "What did she advise for people who lack motivation at work?", options: ["Quit the job", "Ask for a salary increase", "Request a transfer"], answer: "Request a transfer" }
            ]
        }
    },
    "test11": {
        part1: {
            description: "A conversation about daily routines and visits.",
            dialogue: "Person A: What does her sister drink?\nPerson B: Tea.\nPerson A: What is the population of this village?\nPerson B: 10.000.\nPerson A: Where does he want to go tomorrow?\nPerson B: The town hall.\nPerson A: What floor is the office on?\nPerson B: On the first floor.\nPerson A: When can they play football at school?\nPerson B: Wednesday afternoon.",
            questions: [
                { id: 1, text: "What does her sister drink?", options: ["Water", "Tea", "Coffee"], answer: "Tea" },
                { id: 2, text: "What is the population of this village?", options: ["10.000", "2.000", "5.000"], answer: "10.000" },
                { id: 3, text: "Where does he want to go tomorrow?", options: ["The town hall", "The city center", "The museum"], answer: "The town hall" },
                { id: 4, text: "What floor is the office on?", options: ["On the first floor", "On the second floor", "On the third floor"], answer: "On the first floor" },
                { id: 5, text: "When can they play football at school?", options: ["Friday afternoon", "Wednesday afternoon", "Thursday afternoon"], answer: "Wednesday afternoon" }
            ]
        },
        part2: {
            description: "School activities and locations.",
            dialogue: "Person A: Where is the office?\nPerson B: Opposite the hotel.\nPerson A: A man is calling his wife. Where did they meet?\nPerson B: Outside a shop.\nPerson A: What time do he have dinner these days?\nPerson B: 7 o'clock.\nPerson A: What does he do after work?\nPerson B: Play football.",
            questions: [
                { id: 6, text: "Where is the office?", options: ["Opposite the hotel", "Near the park", "Opposite the station"], answer: "Opposite the hotel" },
                { id: 7, text: "A man is calling his wife. Where did they meet?", options: ["At the park", "At the station", "Outside a shop"], answer: "Outside a shop" },
                { id: 8, text: "What time do he have dinner these days?", options: ["6 o'clock", "7 o'clock", "8 o'clock"], answer: "7 o'clock" },
                { id: 9, text: "What does he do after work?", options: ["Go to the coffee shop", "Play football", "Go home"], answer: "Play football" }
            ]
        },
        part3: {
            description: "Multiple perspectives on environmental problems (Topic: Environmental Problem).",
            descriptionSections: [
                { subtitle: "Give away used items", text: "I often don't have time to think about how to reuse my belongings or clothes, but I don't want to throw them away because that would be wasteful. So, I think a better way is to donate them to charity organizations or give them to others. Many people are in need of these things." },
                { subtitle: "Buy environmentally friendly products", text: "A good way to protect the environment is by not using plastic bags or by bringing reusable bags when going to the market, which helps reduce the disposal of plastic bags, a material that is difficult to decompose. However, I'm a very busy person and rarely have time to prepare my own bags when going shopping, and I usually drive to buy groceries quickly instead of walking. I guess I can't protect the environment by not driving. But I have a principle of only buying eco-friendly products, so I think I’m still contributing in a small way to protecting the Earth." },
                { subtitle: "Reuse containers for storing food", text: "I see that too many people are wasting food containers, as they often throw them away after use, such as glass jars or plastic bottles. I can reuse them to store food and neatly organize them in my refrigerator. Reusing these containers is a very easy way to protect the environment that anyone can do." },
                { subtitle: "Does not use commercial cleaning products", text: "I find the act of giving away old or secondhand items a bit hypocritical. Why do people give away their old things, only to go out and buy the same item but brand new? Not only does this fail to protect the environment, but it also causes double the harm. Personally, I have a way of protecting the environment by not releasing harmful chemicals into it. I do this by not purchasing chemical cleaning solutions. Instead, I make use of natural products like lemons to create my own floor-cleaning solutions." }
            ],
            dialogue: "M: Hi, what have you been studying lately?\nW: Oh, I'm still studying technology and information systems—it's a really hot topic these days.\nM: That's a fascinating field. I still can't imagine the future of humanity alongside technology. I think within the next hundred years, humans won't be able to keep up with the pace of information technology development.\nW: I believe that the younger generation and future generations will become increasingly smarter, and they'll discover even more amazing things about information technology to benefit society.\nM: But if technology advances too quickly and becomes too sophisticated, won't that cause a lot of people to lose their jobs? Many industries could be replaced by machines and robots. In the future, machines might even be smarter than humans.\nW: I think machines are just there to support humans in their work; they can't replace us or be smarter than us. If machines and robots are involved in the work process, they will make our jobs less strenuous and improve efficiency. This, in turn, will drive continuous economic and social development alongside technological advancements.\nM: What about the issue of personal data breaches? We should have more policies to protect personal information and prevent machines from leaking important personal data.\nW: I agree with you. A major issue with information technology is the potential for data breaches. If we can improve this, it would be fantastic.",
            dialogueKeypoints: [
                "The future generation will fail to cope with new information: M",
                "The information revolution will be good for the economy: W",
                "No computer is superior to the human brain: W",
                "More should be done to protect individual privacy: B"
            ],
            questions: [
                { id: 1, text: "Who gives away used items?", options: ["Give away used items", "Buy environmentally friendly products", "Reuse containers for storing food", "Does not use commercial cleaning products"], answer: "Give away used items" },
                { id: 2, text: "Who buys eco-friendly products?", options: ["Give away used items", "Buy environmentally friendly products", "Reuse containers for storing food", "Does not use commercial cleaning products"], answer: "Buy environmentally friendly products" },
                { id: 3, text: "Who reuses containers?", options: ["Give away used items", "Buy environmentally friendly products", "Reuse containers for storing food", "Does not use commercial cleaning products"], answer: "Reuse containers for storing food" },
                { id: 4, text: "Who avoids commercial cleaning products?", options: ["Give away used items", "Buy environmentally friendly products", "Reuse containers for storing food", "Does not use commercial cleaning products"], answer: "Does not use commercial cleaning products" },
                { id: 10, text: "What did they both like about the movie?", options: ["The characters", "The ending", "The plot"], answer: "The ending" },
                { id: 11, text: "What area is he describing?", options: ["A university area", "A park", "A library"], answer: "A university area" },
                { id: 12, text: "A man wants to buy a new house. What is his biggest problem?", options: ["Choosing the proper area", "Financial problems", "Persuading his family"], answer: "Persuading his family" }
            ]
        }
    }
};

function loadContent() {
    const testSelect = document.getElementById("test-select");
    const selectedTest = testSelect.value;
    const part1Container = document.getElementById("part1-container");
    const part2Container = document.getElementById("part2-container");
    const part3Container = document.getElementById("part3-container");
    const scoreContainer = document.getElementById("score-container");
    const submitButton = document.getElementById("submit-clear");

    // Clear all containers
    part1Container.innerHTML = "";
    part2Container.innerHTML = "";
    part3Container.innerHTML = "";
    scoreContainer.innerHTML = "";
    submitButton.classList.add("hidden");

    if (selectedTest && listeningData[selectedTest]) {
        const test = listeningData[selectedTest];

        // Part 1
        if (test.part1) {
            part1Container.innerHTML = `<h2>Part 1: ${test.part1.description}</h2><pre>${test.part1.dialogue}</pre>`;
            test.part1.questions.forEach(q => {
                const qDiv = document.createElement("div");
                qDiv.classList.add("question");
                qDiv.innerHTML = `
                    <h3>${q.id}. ${q.text}</h3>
                    ${q.options.map((opt, index) => `
                        <div class="option">
                            <input type="radio" name="q1-${q.id}" id="q1-${q.id}-${index}" value="${opt}">
                            <label for="q1-${q.id}-${index}">${opt}</label>
                        </div>
                    `).join("")}
                    <div class="result" id="result-q1-${q.id}"></div>
                `;
                part1Container.appendChild(qDiv);
            });
        }

        // Part 2
        if (test.part2) {
            part2Container.innerHTML = `<h2>Part 2: ${test.part2.description}</h2><pre>${test.part2.dialogue}</pre>`;
            test.part2.questions.forEach(q => {
                const qDiv = document.createElement("div");
                qDiv.classList.add("question");
                qDiv.innerHTML = `
                    <h3>${q.id}. ${q.text}</h3>
                    ${q.options.map((opt, index) => `
                        <div class="option">
                            <input type="radio" name="q2-${q.id}" id="q2-${q.id}-${index}" value="${opt}">
                            <label for="q2-${q.id}-${index}">${opt}</label>
                        </div>
                    `).join("")}
                    <div class="result" id="result-q2-${q.id}"></div>
                `;
                part2Container.appendChild(qDiv);
            });
        }

        // Part 3
        if (test.part3) {
            part3Container.innerHTML = `<h2>Part 3: ${test.part3.description}</h2>`;
            test.part3.descriptionSections.forEach(section => {
                part3Container.innerHTML += `
                    <h3>${section.subtitle}</h3>
                    <p>${section.text}</p>
                `;
            });
            part3Container.innerHTML += `<pre>${test.part3.dialogue}</pre><h3>Key Points:</h3><ul>${test.part3.dialogueKeypoints.map(point => `<li>${point}</li>`).join("")}</ul>`;
            test.part3.questions.forEach(q => {
                const qDiv = document.createElement("div");
                qDiv.classList.add("question");
                qDiv.innerHTML = `
                    <h3>${q.id}. ${q.text}</h3>
                    ${q.options.map((opt, index) => `
                        <div class="option">
                            <input type="radio" name="q3-${q.id}" id="q3-${q.id}-${index}" value="${opt}">
                            <label for="q3-${q.id}-${index}">${opt}</label>
                        </div>
                    `).join("")}
                    <div class="result" id="result-q3-${q.id}"></div>
                `;
                part3Container.appendChild(qDiv);
            });
        }

        // Show submit button
        submitButton.classList.remove("hidden");
        submitButton.onclick = () => {
            let totalScore = 0;
            let totalQuestions = 0;

            // Check Part 1
            if (test.part1) {
                test.part1.questions.forEach(q => {
                    const selectedOption = document.querySelector(`input[name="q1-${q.id}"]:checked`);
                    const resultDiv = document.getElementById(`result-q1-${q.id}`);
                    if (selectedOption) {
                        const userAnswer = selectedOption.value;
                        totalQuestions++;
                        if (userAnswer === q.answer) {
                            totalScore++;
                            resultDiv.textContent = "Correct!";
                            resultDiv.className = "result correct";
                        } else {
                            resultDiv.textContent = `Incorrect! Correct answer: ${q.answer}`;
                            resultDiv.className = "result incorrect";
                        }
                    }
                });
                part1Container.innerHTML = ""; // Clear Part 1
            }

            // Check Part 2
            if (test.part2) {
                test.part2.questions.forEach(q => {
                    const selectedOption = document.querySelector(`input[name="q2-${q.id}"]:checked`);
                    const resultDiv = document.getElementById(`result-q2-${q.id}`);
                    if (selectedOption) {
                        const userAnswer = selectedOption.value;
                        totalQuestions++;
                        if (userAnswer === q.answer) {
                            totalScore++;
                            resultDiv.textContent = "Correct!";
                            resultDiv.className = "result correct";
                        } else {
                            resultDiv.textContent = `Incorrect! Correct answer: ${q.answer}`;
                            resultDiv.className = "result incorrect";
                        }
                    }
                });
                part2Container.innerHTML = ""; // Clear Part 2
            }

            // Check Part 3
            if (test.part3) {
                test.part3.questions.forEach(q => {
                    const selectedOption = document.querySelector(`input[name="q3-${q.id}"]:checked`);
                    const resultDiv = document.getElementById(`result-q3-${q.id}`);
                    if (selectedOption) {
                        const userAnswer = selectedOption.value;
                        totalQuestions++;
                        if (userAnswer === q.answer) {
                            totalScore++;
                            resultDiv.textContent = "Correct!";
                            resultDiv.className = "result correct";
                        } else {
                            resultDiv.textContent = `Incorrect! Correct answer: ${q.answer}`;
                            resultDiv.className = "result incorrect";
                        }
                    }
                });
                part3Container.innerHTML = ""; // Clear Part 3
            }

            // Display score
            if (totalQuestions > 0) {
                const scorePercent = (totalScore / totalQuestions) * 100;
                scoreContainer.innerHTML = `<h2>Score</h2><p>You scored ${totalScore} out of ${totalQuestions} (${scorePercent.toFixed(2)}%)</p>`;
            }
        };
    }
}
