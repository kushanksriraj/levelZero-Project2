const readlineSync = require('readline-sync');
const chalk = require('chalk');

const indian  = chalk.hex('#FF9933').bold('Indian');
const startup = chalk.hex('#FFFFFF').bold('Start-up');
const quiz    = chalk.hex('#138808').bold('Quiz');

const userName = readlineSync.question(`Enter your name to begin: `);

console.clear();

console.log(`Welcome ${chalk.underline(userName)} to the ${indian} ${startup} ${quiz}!
`);

console.log(chalk.bgRed.bold(`Rules :`) + chalk.bold(`
   1) For each question, enter the option number as 1, 2, 3 or 4.
   2) You DO NOT need to press enter after the option number.
   3) You will get 5 points for each correct answer. [+5 for correct]
   4) 1 point will be deducted for each wrong answer. [-1 for wrong]
   5) After every right answer, you will get to see interesting facts!`
));

readlineSync.question(chalk.bold(`
Press enter to start the quiz:`));


//---------------------------QUIZ BEGINS-----------------------------

let score = 0;

//play()
function play(qno, question, options, answer, fact){
  
  //print question
  console.log(chalk.bgRed.bold("Q."+qno+" of 10:\n\n") + "    " + question);

  //get user's answer
  let ansIndex = readlineSync.keyInSelect(options, 
                                          "Enter option number : ", 
                                          {cancel : false}
                                          );
  
  //quiz logic
  if(options[ansIndex].toLowerCase() === answer.toLowerCase()){
    console.log(chalk.inverse.green("You are right!\n"));
    score = score + 5;

    console.log(chalk.bold("Current score : ") 
               + chalk.inverse.green.bold(score) + "\n");

    console.log(chalk.inverse.bold("FACT:")+ "  " + chalk.yellowBright(fact));
  }
  else{
    console.log(chalk.bgHex('#FF0000')("You are wrong!\n"));
    score = score - 1;
    console.log(chalk.bold("Current score : ") 
               + chalk.inverse.red.bold(score) + "\n");
  }

  const userResponse = readlineSync.question(
                      chalk.bold("\nPress enter to continue or type !q to quit: "));

 return userResponse;
}


//-------------------------Questions-------------------------
const questionsBank = [
  {
    question : 
    `Which Indian company was recently in news for testing an
    upper-stage rocket engine and became India's first private
    space tech startup to do so?`,

    options : ["Dhruva", "Astrome", "Skyroot", "Tesla"],

    answer : "Skyroot",

    fact : 
    `The 3-D printed rocket engine – Raman, named after 
    Nobel laureate CV Raman – has fewer moving parts and weighs 
    less than half of conventional rocket engines with a similar 
    capacity.`
  },
  
  {
    question : 
    `Which Indian cab provider recently announced to launch
    electric scooters?`,

    options : ["Uber", "BikeDekho", "Zoomcar", "Ola"],

    answer : "Ola",

    fact : 
    `The electric scooter, initially manufactured at a
    facility in the Netherlands, will be sold in India as well
    as Europe.`
  },
  
  {
    question : 
    `Which Indian IT multinational firm will provide control
    systems for the world's largest radio telescope?`,

    options : ["TCS", "Wipro", "UST Global", "Tech Mahindra"],

    answer : "TCS",

    fact : 
    `The Square Kilometre Array (SKA) programme, an
    international initiative building the world’s largest
    radio telescope will have control systems designed and
    built by TCS.`
  },

  {
    question : 
    `Which Indian mobile phone manufacturer recently
    announced it's new series of smartphones that got a lot
    of attention in social media and is completely designed
    and made in India?`,

    options : ["Lava", "Karbonn", "Micromax", "Intex"],

    answer : "Micromax",

    fact : 
    `Micromax In 1b's hands-on review is out on
    YouTube. Go check it out!`
  },

  {
    question : 
    `Which Indian Food delivery startup rencently announced
    that it will not charge commission on takeaway/self-pickup
    services and also on the payment gateway charges of such
    order?`,

    options : ["BoxBuddy", "Zomato", "Swiggy", "Khana Lelo"],

    answer : "Zomato",

    fact : 
    `Zomato reported a strong revenue performance in
    FY 2020, growing 105% from the previous year.`
  },

  {
    question : 
    `Which Indian mobile esport platform has replaced Nike
    as India's cricket team's sports kit sponsor?`,

    options : ["BrainBazi", "Dream11", "My11CircleL", "MPL"],

    answer : "MPL",

    fact : 
    `Mobile Premier League (MPL) has announced
    INR 37 Cr ($5 Mn) fund for Indian game developers
    and studios to develop their games for a national
    and international audience. The fund will be open to
    all developers and studios.`
  },

  {
    question : 
    `Which Indian payment interface has broken all records of
    number of online transactions in India in the first half
    of November, 2020?`,

    options : ["RazorPay", "UPI", "NEFT", "RTGS"],

    answer : "UPI",

    fact : 
    `UPI processed 1.12 Bn transactions worth INR 2,06,517 Crore
    or INR 2.06 Trillion in the first half of November, 2020.`
  },

  {
    question : 
    `The tech giant Google has announced to buy a 7.7% stake
    in which Indian telecom company?`,

    options : ["Jio", "Airtel", "Idea", "Vodafone"],

    answer : "Jio",

    fact : 
    `Google's investment in Jio Platforms is for
    manufacturing a new smartphone in India. Jio has announced
    its plans to roll out 5G enabled smartphones at an initial
    price of around INR 5,000.`
  },

 {
    question : 
    `PUBG has tied up with which cloud provider for it's
    comeback in India?`,

    options : ["Google Cloud", "Amazon Web Services", 
               "Paytm Cloud", "Microsoft Azure"],

    answer : "Microsoft Azure",

    fact : 
    `According to reports, KRAFTON, which is a
    collective of independent game development teams
    responsible for letious entertainment properties like
    PUBG and TERA have tied up with Microsoft Azure.`
  },

 {
    question : 
    `Microsoft has announced a collaboration with which
    Indian not-for-profit public limited company to empower
    1 lakh underprivileged young women across India with
    digital skills?`,

    options : ["HelpAge India", 
               "National Payments Corporation of India (NPCI)",
               "National Skill Development Corporation (NSDC)",
               "Agastya International Foundation"
              ],

    answer : "National Skill Development Corporation (NSDC)",

    fact : 
    `As part of this collaboration, more than 70 hours
    of course content will be made available free of cost,
    covering topics such as digital literacy, enhancing
    employability, nano entrepreneurship and communication 
    skills.`
  },

];


//--------------------Quiz Execution---------------------
for(let i=0; i < questionsBank.length; i++){

 console.clear();

 console.log(`The ${indian} ${startup} ${quiz}
 `);

 //get current question
 let currentSet = questionsBank[i];
 //call play()
 response = play(i+1, 
                 currentSet.question, 
                 currentSet.options, 
                 currentSet.answer, 
                 currentSet.fact
                 );

 if (response.toLowerCase() === "!q"){
   break;
 }

}

console.clear();


//------------------------Scores-------------------------
console.log(`The ${indian} ${startup} ${quiz}`);
console.log("\nYour final score : "
            + chalk.inverse.green.bold(score) + "\n");
            
console.log("Your name : " + chalk.underline.bold(userName) + "\n");

const highScores = [
  {
    playerName : "Kushank",
    score : 50
  }, 
  
  {
    playerName : "Vishal",
    score : 38
  },

  {
    playerName : "Jaya",
    score : 32
  },
  
  {
    playerName : "Arjun",
    score : 26
  },

  {
    playerName : "Aarav",
    score : 20
  },
];

console.log('Check out the high scores: ');
console.table(highScores);

let high = false;

highScores.forEach( person => {
  if(score >  person.score){
    high = true;
  }
})

if(high){
 console.log(`\nYay! You made a high score! 
 Your name will be added to the wall of fame of high scores!`);
 console.log("Just send me a screenshot of the scores!");
}
