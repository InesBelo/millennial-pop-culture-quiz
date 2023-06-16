/** Quiz Questions List */
const questions = [
    {
        question: "What was the name of the popular 2009 Quentin Tarantino movie that had only 30% of its dialogue in English?",
        answers: [
            { text: "Pulp Fiction", correct: false},
            { text: "Django Unchained", correct: false},
            { text: "Kill Bill: Vol.1", correct: false},
            { text: "Inglorious Baterds", correct: true},
        ]
    },
    {
        question: "What is the name of the iconic cartoon that started as a series of short skits on the Tracey Ullman Show in 1987?",
        answers: [
        { text: "The Simpsons", correct: true},
        { text: "Futurama", correct: false},
        { text: "South Park", correct: false},
        { text: "King of the Hill", correct: false},
        ]
    },
    {
        question: "What is the name of the group responsible for the hit song 'Macarena'?",
        answers: [
        { text: "Los del Aire", correct: false},
        { text: "Los del Río", correct: true},
        { text: "Los de la Noche", correct: false},
        { text: "Los del Mar", correct: false},
        ]
    },
    {
        question: "What 00's medical drama popularized the term 'Seriously?'",
        answers: [
        { text: "Grey's Anatomy", correct: true},
        { text: "Private Practice", correct: false},
        { text: "Nip/Tuck", correct: false},
        { text: "House", correct: false},
        ]
    },
    {
        question: "What year was the Berlin Wall torn down?",
        answers: [
        { text: "1988", correct: true},
        { text: "1989", correct: false},
        { text: "1990", correct: false},
        { text: "1991", correct: false},
        ]
    },
    {
        question: "What is the name of the van that Scooby Doo and his friends travel around in?",
        answers: [
        { text: "The Secret Ride", correct: false},
        { text: "The Fast Car", correct: false},
        { text: "The Phantom Heap", correct: false},
        { text: "The Mistery Machine", correct: true},
        ]
    },
    {
        question: "What was the highest-grossing film of the 00's?",
        answers: [
        { text: "Avatar (2009)", correct: true},
        { text: "The Lord of the Rings: The Return of the King (2003)", correct: false},
        { text: "Pirates of the Caribbean: Dead Man's Chest (2006)", correct: false},
        { text: "The Dark Knight (2008)", correct: false},
        ]
    },
    {
        question: "What is the name of the infamous haircut inspired by a 'Must See TV' sitcom from the 90's",
        answers: [
        { text: "'The Xena', from Lucy Lawless character on 'Xena: the Warrior Princess'", correct: false},
        { text: "'The Buffy', from Sarah Michelle Gellar character on 'Buffy: the Vampire Slayer'", correct: false},
        { text: "'The Scully', from Gillian Anderson character on 'The X-Files'", correct: false},
        { text: "'The Rachel', from Jennifer Anniston character on 'Friends'", correct: true},
        ]
    },
    {
        question: "Which shoe had a resurgence in the 80's?",
        answers: [
        { text: "Converse All-Stars", correct: true},
        { text: "Doc Martens", correct: false},
        { text: "Air Jordans", correct: false},
        { text: "Adidas Superstar", correct: false},
        ]
    },
    {
        question: "Which boy band announced their breakup in 2002?",
        answers: [
        { text: "Backstreet Boys", correct: false},
        { text: "New Kids on the Block", correct: false},
        { text: "NSYNC", correct: true},
        { text: "Boyz 2 Men", correct: false},
        ]
    },
    {
        question: "Who won the Literature Nobel Prize in 2006?",
        answers: [
        { text: "Mario Vargas Llosa", correct: false},
        { text: "José Saramago", correct: false},
        { text: "Orhan Pamuk", correct: true},
        { text: "Doris Lessing", correct: false},
        ]
    },
    {
        question: "Who was the British Prime Minister when Queen Elizabeth II celebrated her Golden Jubilee in 2002?",
        answers: [
        { text: "Tony Blair", correct: true},
        { text: "Theresa May", correct: false},
        { text: "Margaret Thatcher", correct: false},
        { text: "David Cameron", correct: false},
        ]
    },
    {
        question: "What was the first rap song to hit No.1 on the Billboard Hot 100?",
        answers: [
        { text: "'I Used to Love H.E.R' by Common (1994)", correct: false},
        { text: "'N.Y. State of Mind' by Nas (1994)", correct: false},
        { text: "'Hit 'Em Up' by Tupac Shakur", correct: false},
        { text: "'Ice Ice Baby' by Vanilla Ice", correct: true},
        ]
    },
    {
        question: "Who was synonymous with working out videos during the 80's",
        answers: [
        { text: "Jamie Lee Curtis", correct: false},
        { text: "Olivia Newton-John", correct: false},
        { text: "Jane Fonda", correct: true},
        { text: "Lily Tomlin", correct: false},
        ]
    },
    {
        question: "What is the name of the evil wizard who featured in the animated show He-Man?",
        answers: [
        { text: "Gargamel", correct: false},
        { text: "Medivh", correct: false},
        { text: "Skeletor", correct: true},
        { text: "Randal Flagg", correct: false},
        ]
    },
    {
        question: "What is the name of the iconic 80's hairstyle that was short at the front and sides, but long at the back?",
        answers: [
        { text: "The Shag", correct: false},
        { text: "The Wedge", correct: false},
        { text: "The Mullet", correct: true},
        { text: "The Feathered Flip", correct: false},
        ]
    },
    {
        question: "What sort of car is used as a time machine in 'Back to the Future' (1985)?",
        answers: [
        { text: "Ferrari Testarossa", correct: false},
        { text: "DeLorean DMC-12", correct: true},
        { text: "Datsun 240Z", correct: false},
        { text: "Pontiac Firebird", correct: false},
        ]
    },
    {
        question: "What social networking website was founded by Tom Anderson and Chris DeWolfe in 2003?",
        answers: [
        { text: "Flickr", correct: false},
        { text: "Orkut", correct: false},
        { text: "Hi5", correct: false},
        { text: "MySpace", correct: true},
        ]
    },
    {
        question: "What was Dexter's profession in the TV show 'Dexter'?",
        answers: [
        { text: "Thanatologist", correct: false},
        { text: "Medico-legal Doctor", correct: false},
        { text: "Forensic Technician", correct: true},
        { text: "Biologic Anthropologist", correct: false},
        ]
    },
    {
        question: "Which confectionary product was made famous by the E.T.?",
        answers: [
        { text: "Penny Sweets", correct: false},
        { text: "Reese's Pieces", correct: true},
        { text: "Opal Fruits", correct: false},
        { text: "Fizzle Sticks", correct: false},
        ]
    },
    {
        question: "Who was the lead actor in the popular 2003 comedy movie 'School of Rock?'",
        answers: [
        { text: "Ben Stiller", correct: false},
        { text: "Will Ferrel", correct: false},
        { text: "Adam Sandler", correct: false},
        { text: "Jack Black", correct: true},
        ]
    },
    {
        question: "What video game was the first ever to be played in space?",
        answers: [
        { text: "Starcraft", correct: false},
        { text: "Tetris", correct: true},
        { text: "Planescape: Torment", correct: false},
        { text: "Homeworld", correct: false},
        ]
    },
    {
        question: "'Power Rangers' was banned in what country until 2011?",
        answers: [
        { text: "New Zealand", correct: true},
        { text: "Australia", correct: false},
        { text: "Fiji", correct: false},
        { text: "Brazil", correct: false},
        ]
    },
    {
        question: "In 2000, file sharing service Napster was sued by which veteran rock band citing copyright infringement issues?",
        answers: [
        { text: "Aerosmith", correct: false},
        { text: "The Rolling Stones", correct: false},
        { text: "Metallica", correct: true},
        { text: "Iron Maiden", correct: false},
        ]
    },
    {
        question: "Whitney Houston had a massive hit in 1992 with a cover of whose hit?",
        answers: [
        { text: "'Common People', by Pulp", correct: false},
        { text: "'I Will Always Love You', by Dolly Parton", correct: true},
        { text: "'Waterfalls', by TLC", correct: false},
        { text: "'Big Time Sensuality', by Björk", correct: false},
        ]
    },
    {
        question: "Which computer sold in the 80's still holds the Guinness World Record for the highest-selling computer of all time?",
        answers: [
        { text: "VIC-20", correct: false},
        { text: "The Commodore 64", correct: true},
        { text: "Apple II", correct: false},
        { text: "Atari 400/800", correct: false},
        ]
    },
    {
        question: "'Buffy' was the original name for which iconic Star Wars character?",
        answers: [
        { text: "Obi-Wan Kenobi", correct: false},
        { text: "Ahsoka Tano", correct: false},
        { text: "Jabba the Hut", correct: false},
        { text: "Yoda", correct: true},
        ]
    },
    {
        question: "Who was the top-selling artist of the 00's?",
        answers: [
        { text: "Beyoncé", correct: false},
        { text: "Usher", correct: false},
        { text: "Eminem", correct: true},
        { text: "Britney Spears", correct: false},
        ]
    },
    {
         question: "What 00's rock band had a breakout hit with their song, 'Sugar, We're Going Down?'",
        answers: [
        { text: "Fall Out Boy", correct: true},
        { text: "30 Seconds to Mars", correct: false},
        { text: "Panic! at the Disco", correct: false},
        { text: "Good Charlotte", correct: false},
        ]
    },
    {
        question: "What music band is featurend on Beavis shirt (from the show 'Beavis and Butt-Head')?",
        answers: [
        { text: "Pearl Jam", correct: false},
        { text: "Metallica", correct: true},
        { text: "Red Hot Chilli Peppers", correct: false},
        { text: "Nirvana", correct: false},
        ]
    },
    {
        question: "What was the bestselling video game console of the 90's?",
        answers: [
        { text: "Sony Playstation", correct: true},
        { text: "Sega Saturn", correct: false},
        { text: "Nintendo 64", correct: false},
        { text: "Game Boy Color", correct: false},
        ]
    },
    {
        question: "Which Spice Girls singer wasn't an original member of the group?",
        answers: [
        { text: "Victoria Beckam (née Adams, 'Posh Spice')", correct: false},
        { text: "Emma Button ('Baby Spice')", correct: true},
        { text: "Melanie Brown ('Scary Spice')", correct: false},
        { text: "Geri Halliwell ('Ginger Spice')", correct: false},
        ]
    },
    {
        question: "Which video game was the most popular video game of the 80's?",
        answers: [
        { text: "Mario Bros.", correct: true},
        { text: "Donkey Kong", correct: false},
        { text: "Pac-Man", correct: false},
        { text: "Robotron 2084", correct: false},
        ]
    },
    {
        question: "The popular term 'podcast' first came into existence in which year?",
        answers: [
        { text: "2000", correct: false},
        { text: "2002", correct: false},
        { text: "2004", correct: true},
        { text: "2006", correct: false},
        ]
    },
    {
        question: "When was the verb 'to google' added to the Oxford English Dictionary?",
        answers: [
        { text: "2006", correct: true},
        { text: "2007", correct: false},
        { text: "2008", correct: true},
        { text: "2009", correct: false},
        ]
    },
    {
        question: "What was the first animated feature film ever to be nominated for a Best Picture Oscar?",
        answers: [
        { text: "'Princess Mononoke' (1997)", correct: false},
        { text: "'Beauty and the Beast' (1991)", correct: true},
        { text: "'Swan Princess'", correct: false},
        { text: "'Thumbelina'", correct: false},
        ]
    },
    {
        question: "The child actor Macaulay Culkin was paid 1$ Million for starring in what movie?",
        answers: [
        { text: "'Home Alone'(1990)", correct: false},
        { text: "'My Girl'(1991)", correct: true},
        { text: "'The Good Son' (1993)", correct: false},
        { text: "'Uncle Buck'(1989)", correct: false},
        ]
    },
    {
        question: "Where did the company of 'Facebook' begin in the early 00's?",
        answers: [
        { text: "At Starbucks", correct: false},
        { text: "In Mark Zuckerberg's mother's garage", correct: false},
        { text: "At Harvard University", correct: true},
        { text: "At USA Science & Engineering Festival", correct: false},
        ]
    },
    {
        question: "What major event in European history occurred in 2002?",
        answers: [
        { text: "The Schengen Agreement was first signed by five european countries", correct: false},
        { text: "The Euro as currency was officially introduced in twelve european countries", correct: true},
        { text: "Cyprus and Malta joined the EU along with eight Central and Eastern European countries", correct: false},
        { text: "The Lisbon Treaty was signed to make EU more democratic and able to tackle global challenges, such as climate change", correct: false},
        ]
    },
    {
        question: "In 2008, who set the record for the most gold medals won in a single Olympics?",
        answers: [
        { text: "Usain Bolt", correct: false},
        { text: "Michael Phelps", correct: true},
        { text: "Simone Biles", correct: false},
        { text: "Larisa Latynina", correct: false},
        ]
    },
    {
        question: "Which country tested its first nuclear weapon in 2006, prompting international outrage?",
        answers: [
        { text: "USA", correct: false},
        { text: "North Korea", correct: true},
        { text: "Russia", correct: false},
        { text: "China", correct: false},
        ]
    },
    {
        question: "What famous fashion accessory was invented in the 90's by a high school teacher?",
        answers: [
        { text: "Toe ring", correct: false},
        { text: "Scrunchie", correct: false},
        { text: "Bandana", correct: false},
        { text: "Slap Bracelet", correct: true},
        ]
    },
    {
        question: "The now iconic line 'Remember remember, the 5th of November', hails from which popular movie of the 00's?",
        answers: [
        { text: "'The Departed' (2006)", correct: false},
        { text: "'Equilibrium' (2002)", correct: false},
        { text: "'The Prestige' (2006)", correct: false},
        { text: "V for Vendetta (2005)", correct: true},
        ]
    },
    {
        question: "The now iconic line 'Remember remember, the 5th of November', hails from which popular movie of the 00's?",
        answers: [
        { text: "'The Departed' (2006)", correct: false},
        { text: "'Equilibrium' (2002)", correct: false},
        { text: "'The Prestige' (2006)", correct: false},
        { text: "V for Vendetta (2005)", correct: true},
        ]
    },
    {
        question: "Which footwear company became hugely popular in the 80's after the popularity of punk rock?",
        answers: [
        { text: "Buffalo", correct: false},
        { text: "Doc Martens", correct: true},
        { text: "Penny Loafers", correct: false},
        { text: "Lotto", correct: true},
        ]
    },
    {
        question: "What year was the first iPhone released?",
        answers: [
        { text: "2005", correct: false},
        { text: "2006", correct: false},
        { text: "2007", correct: true},
        { text: "2008", correct: false},
        ]
    },
    {
        question: "What social media platform was founded in 2006 that limits posts to 140 characters?",
        answers: [
        { text: "Facebook", correct: false},
        { text: "Instagram", correct: false},
        { text: "Spark", correct: false},
        { text: "Twitter", correct: true},
        ]
    },
    {
        question: "When was the 'World Wide Web' first introduced?",
        answers: [
        { text: "1988", correct: false},
        { text: "1989", correct: false},
        { text: "1990", correct: false},
        { text: "1991", correct: true},
        ]
    },
    {
        question: "What was the bestselling Rock album of the 90's?",
        answers: [
        { text: "Nirvana's 'Nevermind' (1991)", correct: false},
        { text: "Green Day's 'Dookie' (1994)", correct: false},
        { text: "Alanis Morissette's 'Jagged Little Pill' (1995)", correct: true},
        { text: "No Doubt's 'Tragic Kingdom' (1995)", correct: false},
        ]
    },
    {
        question: "When did the Google search engine first debut?",
        answers: [
        { text: "1995", correct: false},
        { text: "1996", correct: false},
        { text: "1997", correct: false},
        { text: "1998", correct: true},
        ]
    },
    {
        question: "Which country officially became a democracy on 24 March 2008?",
        answers: [
        { text: "South Korea", correct: false},
        { text: "Buthan", correct: true},
        { text: "Nepal", correct: false},
        { text: "Tibet", correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-btns");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion(); 
}

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
}




















