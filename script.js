class Question {
    constructor(Qnumber, Qques, Qans1, Qans2, Qans3, Qans4) {
        this.QuestionNumber = Qnumber;
        this.Qquestion = Qques;
        this.AnswerOne = Qans1;
        this.AnswerTwo = Qans2;
        this.AnswerThree = Qans3;
        this.AnswerFour = Qans4;
        this.QuestionLayout = function() {
           return "<div class=\"qbody\"> <div class=\"qheader\"><h3>Question "+ this.QuestionNumber +"</h3></div>" +
           "<div class=\"qques\">What is your favorite "+ this.Qquestion +"</div>" +
           "<button class=\"qansw even\">"+ this.AnswerOne +"</button>" +
           "<button class=\"qansw odd\">"+ this.AnswerTwo +"</button>" +
           "<button class=\"qansw odd\">"+ this.AnswerThree +"</button>" +
           "<button class=\"qansw even\">"+ this.AnswerFour +"</button>" +
           "<button class=\"qsubmit disabled\" disabled>submit</button>" +
            "</div>"};
        }
}
const questions = [];
const score = new Map();

////Can't put in constructor, too many parameters

const question1 = new Question("1", "color", "red", "green", "blue", "orange");
const question2 = new Question("2", "food", "chicken", "pot pie", "cake", "brussel sprouts");
const question3 = new Question("3", "animal", "cat", "dog", "bird", "frog");
const question4 = new Question("4", "country", "Japan", "London", "China", "America");

questions.push(question1.QuestionLayout());
questions.push(question2.QuestionLayout());
questions.push(question3.QuestionLayout());
questions.push(question4.QuestionLayout());


/////One more time!

/////Recall how to make a new branch, the go back to javascript prototypes. Namely Person.prototype.name
////Possibly do Questions.prototype.scores(a, b, c, d){score.set(this.AnswerOne, a)...and so forth}
////followed by question1.scores(1, 3, 4, 2); Instead of that freaking wall right there ;__;git
console.log(score)

const questionlayout = document.getElementById("questionlayout");

questionlayout.innerHTML = questions.reverse();

const submitplus = document.querySelectorAll(".qsubmit");

submitplus.forEach(box =>{box.addEventListener("click", nextBox)})

const answers = document.querySelectorAll(".qansw");

answers.forEach(answer =>{answer.addEventListener("click", chooseAnswer)});

const answerlog = [];
let answertoPush;

function chooseAnswer(){
    this.parentElement.lastChild.removeAttribute("disabled");
    this.parentElement.lastChild.classList.remove("disabled");
    this.parentElement.lastChild.classList.add("enabled");
    for(let x of answers){
        x.classList.remove("active");
    }
    this.classList.add("active");
    const chosenAnswer = this.innerText;
    answertoPush = chosenAnswer;  
    console.log(answertoPush);
}

function nextBox(){
    answerlog.push(answertoPush);
    console.log(answerlog);
    const box = this.parentElement;
    box.style.display = "none";
}


////Scoring System
////Picture at the end







