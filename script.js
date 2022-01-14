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
let answerlog = 0;
const score = new Map();
const questionlayout = document.getElementById("questionlayout");
let answertoPush;

////Maybe do something to score Map itself???

Question.prototype.fourScores = function(a, b, c, d){
    score.set(this.AnswerOne, a);
    score.set(this.AnswerTwo, b);
    score.set(this.AnswerThree, c);
    score.set(this.AnswerFour, d);
}

const question1 = new Question("1", "color", "red", "green", "blue", "orange");
const question2 = new Question("2", "food", "chicken", "pot pie", "cake", "brussel sprouts");
const question3 = new Question("3", "animal", "cat", "dog", "bird", "frog");
const question4 = new Question("4", "country", "Japan", "London", "China", "America");

question1.fourScores(1, 2, 3, 4);
question2.fourScores(4, 2, 3, 1);
question3.fourScores(4, 1, 3, 2);
question4.fourScores(3, 2, 1, 4);

console.log(score);
const paragraph = "<div class=\"qbody\"><div class=\"qques\">Here's Your Result!</div>"
                    + "<div id=\"holdimage\"><h3 id=\"imagename\"></h3>"
                    + "<img id=\"imgresult\" src=\"images/triangle.png\" alt=\"triangle\">" +
                        "</div></div>";


questions.push(question1.QuestionLayout());
questions.push(question2.QuestionLayout());
questions.push(question3.QuestionLayout());
questions.push(question4.QuestionLayout());
questions.push(paragraph);

questionlayout.innerHTML = questions.reverse();
const submitplus = document.querySelectorAll(".qsubmit");
submitplus.forEach(box =>{box.addEventListener("click", nextBox)})
const answers = document.querySelectorAll(".qansw");
answers.forEach(answer =>{answer.addEventListener("click", chooseAnswer)});

const imgresult = document.getElementById("imgresult");
const imagename = document.getElementById("imagename");

function chooseAnswer(){
    this.parentElement.lastChild.removeAttribute("disabled");
    this.parentElement.lastChild.classList.remove("disabled");
    this.parentElement.lastChild.classList.add("enabled");
    for(let x of answers){
        x.classList.remove("active");
    }
    this.classList.add("active");
    const chosenAnswer = this.innerText;
    answertoPush = score.get(chosenAnswer);
}

function finalimage(x){
    if(x > 0 && x <= 4){
        return "circle";
    }
    if(x > 4 && x <= 8){
        return "triangle";
    }
    if(x > 8 && x <= 12){
        return "square";
    }
    if(x > 12 && x <= 16){
        return "star";
    }
}

function nextBox(){
    answerlog += answertoPush;
    const box = this.parentElement;
    box.style.display = "none";
    let image = finalimage(answerlog);
    imgresult.setAttribute("src", "images/" + image + ".png");
    imgresult.setAttribute("alt", image);
    imagename.innerText = image;
}


///FINALLY! Just need to put some images in and I'll be all set!










