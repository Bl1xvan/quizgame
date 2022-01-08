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
           "<button class=\"qsubmit\">submit</button>" +
            "</div>"};
    }
}
const questions = [];

const question1 = new Question("1", "color", "red", "green", "blue", "orange");
const question2 = new Question("2", "food", "chicken", "pot pie", "cake", "brussel sprouts");
const question3 = new Question("3", "animal", "cat", "dog", "bird", "frog");
const question4 = new Question("4", "country", "Japan", "London", "China", "America");

questions.push(question1.QuestionLayout());
questions.push(question2.QuestionLayout());
questions.push(question3.QuestionLayout());
questions.push(question4.QuestionLayout());

const questionlayout = document.getElementById("questionlayout");

questionlayout.innerHTML = questions.reverse();

const submitplus = document.querySelectorAll(".qsubmit");

submitplus.forEach(box =>{box.addEventListener("click", nextBox)})

function nextBox(e){
    let box = e.target.parentElement;
    box.style.display = "none";
}



///Maybe don't use forEach with ClassName?










