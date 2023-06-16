/**
 * All quiz questions were taken from https://groupgames101.com/80s-trivia-questions-and-answers/?utm_content=cmp-true
 * https://parade.com/1075273/jessicasager/90s-trivia/
 * https://antimaximalist.com/2000s-trivia/
 * https://www.boredpanda.com/2000s-trivia/?utm_source=google&utm_medium=organic&utm_campaign=organic
 */


const questions = [
    {
        numb: 1,
        question: "What is the name of the group responsible for the hit song 'Macarena'?",
        answer: "Los del Río",
        options: [
            "Los del Aire",
            "Los del Río",
            "Los de la Noche",
            "Los del Mar"
        ]
    },
    {
        numb: 2,
        question: "Whitney Houston had a massive hit in 1992 with a cover of whose hit?",
        answer: "'I Will Always Love You', by Dolly Parton",
        options: [
            "'Common People', by Pulp",
            "'I Will Always Love You', by Dolly Parton",
            "'Waterfalls', by TLC",
            "'Big Time Sensuality', by Björk"
        ]
    },
    {
        numb: 3,
        question: "What's the infamous haircut name inspired by a 'Must See TV' sitcom from the 90's?",
        answer: "'The Rachel', from Jennifer Anniston carachter on 'Friends'",
        options: [
            "'The Xena', from Lucy Lawless character on 'Xena: the Warrior Princess'",
            "'The Buffy', from Sarah Michelle Gellar character on 'Buffy: the Vampire Slayer '",
            "'The Scully', from Gillian Anderson character on 'The X-Files'",
            "'The Rachel', from Jennifer Anniston character on 'Friends'"
        ]
    },
    {
        numb: 4,
        question: "What was the first animated feature film ever to be nominated for a Best Picture Oscar?",
        answer: "Walt Disney Studios 'Beauty and the Beast'(1991)",
        options: [
            "Studio Ghibli 'Princess Mononoke'(1997)",
            "Walt Disney Studios 'Beauty and the Beast'(1991)",
            "Nest Entertainment and Rich Animation Studios 'Swan Princess'(1994)",
            "Warner Bros 'Thumbelina'(1994)"
        ]
    },
    {
        numb: 5,
        question: "The child actor Macaulay Culkin was paid 1$ Million for starring in what movie?",
         answer: "'My Girl'(1991)",
        options: [
            "'Home Alone'(1990)",
            "'My Girl'(1991)",
            "'The Good Son' (1993)",
             "'Uncle Buck'(1989)"
        ]
     },
     {
        numb: 6,
        question: "What famous fashion accessory was invented in the 90's by a high school teacher?",
        answer: "Slap bracelets",
        options: [
            "Toe rings",
            "Scrunchies",
            "Bandanas",
            "Slap bracelets"
        ]
    },
    {
        numb: 7,
        question: "Power Rangers was banned in what country until 2011?",
        answer: "New Zealand",
        options: [
            "New Zealand",
            "Australia",
            "Fiji",
            "Brazil"
        ]
    },
    {
        numb: 8,
        question: "What video game was the first ever to be played in space?",
        answer: "Tetris",
        options: [
            "'Starcraft",
            "'Tetris'",
            "Planescape: Torment",
            "Homeworld"
        ]
    },
    {
        numb: 9,
        question: "What was the first rap song to hit No.1 on the Billboard Hot 100?",
        answer: "'Ice Ice Baby' by Vanilla Ice (1990)",
        options: [
            "'I Used to Love H.E.R.' by Common (1994)",
            "'N.Y. State of Mind' by Nas (1994)",
            "'Hit 'Em Up' by Tupac Shakur (1996)",
            "'Ice Ice Baby' by Vanilla Ice (1990)"
        ]
    },
    {
        numb: 10,
        question: "What was the bestselling video game console of the 90's?",
        answer: "Sony Playstation",
        options: [
            "Sony Playstation",
            "Sega Saturn",
            "Nintendo 64",
            "Game Boy Color"
        ]
    },
    {
        numb: 11,
        question: "What music band is featurend on Beavis shirt (from the show 'Beavis and Butt-Head')?",
        answer: "Metallica",
        options: [
            "Pearl Jam",
            "Metallica",
            "Red Hot Chilli Peppers",
            "Nirvana"
        ]
    },
    {
        numb: 12,
        question: "'Tamagotchi' is a combination of two japanese words that mean what?",
        answer: "'Egg' and 'friend'",
        options: [
            "'Egg' and 'friend'",
            "'Cat' and 'dog'",
            "'Friend' and 'cat'",
            "'Egg' and 'dog'"
        ]
    },
    {
        numb: 13,
        question: "When was the 'World Wide Web' first introduced?",
        answer: "1991",
        options: [
            "1988",
            "1989",
            "1990",
            "1991"
        ]
    },
    {
        numb: 14,
        question: "What was the bestselling Rock album of the 90's?",
        answer: "Alanis Morissette's 'Jagged Little Pill' (1995)",
        options: [
            "Nirvana's 'Nevermind' (1991)",
            "Green Day's 'Dookie' (1994)",
            "Alanis Morissette's 'Jagged Little Pill' (1995)",
            "No Doubt's 'Tragic Kingdom' (1995)"
        ]
    },
    {
        numb: 14,
        question: "When did the Google search engine first debut?",
        answer: "1998",
        options: [
            "1995",
            "1996",
            "1997",
            "1998"
        ]
    },
    {
        numb: 15,
        question: "Which Spice Girls singer wasn't an original member of the group?",
        answer: "Emma Button ('Baby Spice')",
        options: [
            "Victoria Beckam (née Adams, 'Posh Spice')",
            "Emma Button ('Baby Spice')",
            "Melanie Brown ('Scary Spice')",
            "Geri Halliwell ('Ginger Spice')"
        ]
    },
    {
        numb: 16,
        question: "What does VHS stand for?",
        answer: "Video Home System",
        options: [
            "Video Home System",
            "Video House System",
            "Videomapping House System",
            "Variety Home System"
        ]
    },
    {
        numb: 17,
        question: "Which video game was the most popular video game of the 80's?",
        answer: "Mario Bros.",
        options: [
            "Mario Bros.",
            "Donkey Kong",
            "Pac-Man",
            "Robotron 2084"
        ]
    },
    {
        numb: 18,
        question: "Which computer sold in the 80's still holds the Guinness World Record for the highest-selling computer of all time?",
        answer: "The Commodore 64",
        options: [
            "VIC-20",
            "The Commodore 64",
            "Apple II",
            "Atari 400/800"
        ]
    },
    {
        numb: 19,
        question: "What year was the Berlin Wall torn down?",
        answer: "1989",
        options: [
            "1988",
            "1989",
            "1990",
            "1991"
        ]
    },
    {
        numb: 20,
        question: "Which advertising slogan was launched by Nike in 1988?",
        answer: "'Just do it'",
        options: [
            "'The quicker picker upper",
            "'Just do it",
            "'The original. If your grandfather hadn't worn it, you wouldn't exist'",
            "Let's go places"
        ]
    },
    {
        numb: 21,
        question: "What was the name of the space shuttle that tragically exploded in 1986?",
        answer: "'Challenger'",
        options: [
            "'Challenger'",
            "'Commander'",
            "'Defender'",
            "Surrender'"
        ]
    },
    {
        numb: 22,
        question: "Which shoe had a resurgence in the 80's?",
        answer: "Converse Chuck Taylor All-Star",
        options: [
            "Converse All-Stars",
            "Doc Martens",
            "Air Jordans",
            "Adidas Superstar"
        ]
    },
    {
        numb: 23,
        question: "Who was synonymous with workout videos during the 80's?",
        answer: "Jane Fonda",
        options: [
            "Jamie Lee Curtis",
            "Olivia Newton-John",
            "Lily Tomlin",
            "Jane Fonda"
        ]
    },
    {
        numb: 24,
        question: "What is the name of the iconic hairstyle that was short at the front and sides, but long at the back?",
        answer: "The Mullet",
        options: [
            "The Shag",
            "The Wedge",
            "The Mullet",
            "The Feathered Flip"
        ]
    },
    {
        numb: 25,
        question: "What sort of car is used as a time machine in 'Back to the Future' (1985)?",
        answer: "DeLorean DMC-12",
        options: [
            "Ferrari Testarrossa",
            "DeLorean DMC-12",
            "Datsun 240Z",
            "Pontiac Firebird"
        ]
    },
    {
        numb: 26,
        question: "Which confectionary product was made famous by E.T.?",
        answer: "Reese's Pieces",
        options: [
            "Penny Sweets",
            "Opal Fruits",
            "Reese's Pieces",
            "Fizzle Sticks"
        ]
    },
    {
        numb: 27,
        question: "What is the name of the iconic cartoon that started as a series of short skits on the Tracey Ullman Show in 1987?",
        answer: "'The Simpsons'",
        options: [
            "'Futurama'",
            "'King of the Hill'",
            "'South Park'",
            "'The Simpsons'"
        ]
    },
    {
        numb: 28,
        question: "'Buffy' was the original name for which iconic Star Wars character?",
        answer: "Yoda",
        options: [
            "Obi-Wan Kenobi",
            "Ahsoka Tano",
            "Jabba the Hut",
            "Boba Fett"
        ]
    },
    {
        numb: 29,
        question: "What is the name of the evil wizard who featured in the animated show He-Man?",
        answer: "Skeletor",
        options: [
            "Gargamel",
            "Skeletor",
            "Medivh",
            "Randal Flagg"
        ]
    },
    {
        numb: 30,
        question: "What is the name of the van that Scooby Doo and his friends travel around in?",
        answer: "The Mistery Machine",
        options: [
            "The Secret Ride",
            "The Fast Car",
            "The Phantom Heap",
            "The Mistery Machine"
        ]
    },
    {
        numb: 31,
        question: "Which footwear company became hugely popular in the 80's after the popularity of punk rock?",
        answer: "Doc Martens",
        options: [
            "Buffalo",
            "Doc Martens",
            "Peeny Loafers",
            "Lotto"
        ]
    },
    {
        numb: 31,
        question: "Who was the lead actor in the popular 2003 comedy 'School of Rock?'",
        answer: "Jack Black",
        options: [
            "Ben Stiller",
            "Will Ferrel",
            "Adam Sandler",
            "Jack Black"
        ]
    },
    {
        numb: 32,
        question: "What 00's rock band had a breakout hit with their song, 'Sugar, We're Going Down?'",
        answer: "Fall Out Boy",
        options: [
            "Fall Out Boy",
            "30 Seconds to Mars",
            "Panic! at the Disco",
            "Good Charlotte"
        ]
    },
    {
        numb: 33,
        question: "What 00's medical drama popularized the word 'Seriously?'",
        answer: "Grey's Anatomy",
        options: [
            "Grey's Anatomy",
            "Private Practice",
            "Nip/Tuck",
            "House"
        ]
    },
    {
        numb: 34,
        question: "What singer was introduced to the world in 2008 with the hit song 'Just Dance'",
        answer: "Lady Gaga",
        options: [
            "Katy Perry",
            "Private Practice",
            "Kelly Clarkson",
            "Taylor Swift"
        ]
    },
    {
        numb: 35,
        question: "Who was the top-selling artist of the 00's?",
        answer: "Eminem",
        options: [
            "Beyoncé",
            "Usher",
            "Eminem",
            "Britney Spears"
        ]
    },
    {
        numb: 36,
        question: "What year was the first iPhone released?",
        answer: "2007",
        options: [
            "2005",
            "2006",
            "2007",
            "2008"
        ]
    },
    {
        numb: 37,
        question: "What was the shorthand term used to reference the year 2000?",
        answer: "Y2K",
        options: [
            "Z2Y",
            "K1Y",
            "Y2K",
            "W2Y"
        ]
    },
    {
        numb: 38,
        question: "What was the highest-grossing film of the 00's?",
        answer: "Avatar (2009)",
        options: [
            "The Lord of the Rings: The Return of the King (2003)",
            "Pirates of the Caribbean: Dead Man's Chest (2006)",
            "The Dark Knight (2008)",
            "Avatar (2009)"
        ]
    },
    {
        numb: 39,
        question: "Which boy band announced their breakup in 2002",
        answer: "'NSYNC",
        options: [
            "Backstreet Boys",
            "'NSYNC",
            "New Kids on the Block",
            "Boyz 2 Men"
        ]
    },
    {
        numb: 40,
        question: "What social media platform was founded in 2006 that limits posts to 140 characters?",
        answer: "Twitter",
        options: [
            "Facebook",
            "Instagram",
            "Spark",
            "Twitter"
        ]
    },
    {
        numb: 41,
        question: "In 2008, who set the record for the most gold medals won in a single Olympics?",
        answer: "Michael Phelps",
        options: [
            "Usain Bolt",
            "Michael Phelps",
            "Simone Biles",
            "Larisa Latynina"
        ]
    },
    {
        numb: 42,
        question: "In 2009, which musician interrupted Taylor Swift's acceptance speech at the MTV Video Music Awards?",
        answer: "Kanye West",
        options: [
            "Kanye West",
            "Jay-Z",
            "Eminem",
            "50 Cent"
        ]
    },
    {
        numb: 43,
        question: "In 2006, which country tested its first nuclear weapon, prompting international outrage?",
        answer: "North Korea",
        options: [
            "USA",
            "North Korea",
            "Russia",
            "China"
        ]
    },
    {
        numb: 44,
        question: "What social networking website was founded by Tom Anderson and Chris DeWolfe in 2003?",
        answer: "MySpace",
        options: [
            "Flickr",
            "Orkut",
            "HI5",
            "MySpace"
        ]
    },
    {
        numb: 45,
        question: "Who won the Nobel Prize in Literature in 2006?",
        answer: "The turkish writer Orhan Pamuk",
        options: [
            "The peruvian writer Mario Vargas Llosa",
            "The portuguese writer José Saramago",
            "The turkish writer Orhan Pamuk",
            "The british writer Doris Lessing"
        ]
    },
    {
        numb: 46,
        question: "What major event in European history occurred in 2002?",
        answer: "The Euro as currency was officially introduced in twelve european countries",
        options: [
            "The Schengen Agreement was first signed by five european countries",
            "The Euro as currency was officially introduced in twelve european countries",
            "Cyprus and Malta joined the EU along with eight Central and Eastern European countries",
            "The Lisbon Treaty was signed to make EU more democratic and able to tackle global challenges, such as climate change"
        ]
    },
    {
        numb: 46,
        question: "Who was the British Prime Minister when Queen Elizabeth II celebrated her Golden Jubilee in 2002?",
        answer: "Tony Blair",
        options: [
            "Theresa May",
            "David Cameron",
            "Margaret Thatcher",
            "Tony Blair"
        ]
    },
    {
        numb: 47,
        question: "In 2000, file sharing service Napster was sued by which veteran rock band citing copyright infringement issues?",
        answer: "Metallica",
        options: [
            "Aerosmith",
            "The Rolling Stones",
            "Metallica",
            "Iron Maiden"
        ]
    },
    {
        numb: 48,
        question: "The popular term 'podcast' first came into existence in which year?",
        answer: "2004",
        options: [
            "2000",
            "2002",
            "2004",
            "2006"
        ]
    },
    {
        numb: 49,
        question: "In the hit show 'Friends', what was the name of Ross and Rachel's daughter?",
        answer: "Emma",
        options: [
            "Sarah",
            "Emma",
            "Laura",
            "Amy"
        ]
    },
    {
        numb: 50,
        question: "What was Dexter's profession in the TV show 'Dexter'?",
        answer: "Forensic Technician",
        options: [
            "Thanatologist",
            "Medico Legal Expert",
            "Forensic Technician",
            "Biologic Anthropologist"
        ]
    },
    {
        numb: 51,
        question: "When was the verb 'to google' added to the Oxford English Dictionary?",
        answer: "2006",
        options: [
            "2006",
            "2007",
            "2008",
            "2009"
        ]
    },
    {
        numb: 52,
        question: "Which country officially became a democracy on 24 March 2008?",
        answer: "Buthan",
        options: [
            "South Korea",
            "Buthan",
            "Nepal",
            "Tibet"
        ]
    },
    {
        numb: 53,
        question: "What was the name of the popular 2009 Quentin Tarantino movie that had only 30 percent of its dialogue in English?",
        answer: "Inglourious Basterds",
        options: [
            "Pulp Fiction",
            "Django Unchained",
            "Kill Bill: Vol. 1",
            "Inglourious Basterds"
        ]
    },
    {
        numb: 54,
        question: "Where did the company of 'Facebook' begin in the early 00's?",
        answer: "At Harvard University",
        options: [
            "At Starbucks",
            "In Mark Zuckerberg's mother's garage",
            "At Harvard University",
            "At USA Science & Engineering Festival"
        ]
    },
    {
        numb: 55,
        question: "The now iconic line 'Remember remember, the 5th of November', hails from which popular movie of the 00's?",
        answer: "V for Vendetta (2005)",
        options: [
            "The Departed (2006)",
            "Equilibrium (2002)",
            "The Prestige (2006)",
            "V for Vendetta (2005)"
        ]
    },
    ]