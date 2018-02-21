
  var questions = [{
    question: "What single on Migos album 'culture II' was co-produced by Kanye West?",
    choices: ["B.B.O", "Walk It", "Champtions", "Stirfy"],
    correctAnswer: 1
}, {
    question: "Lil Uzi's breakout hit was titled",
    choices: ["Im Dead, Picassos Dead, Walt Disney is dead, Steve Jobs is Dead", "Stranger Tings", "All Mi fr3nds r d3d", "XO Tour Llif3"],
    correctAnswer: 3
}, {
    question: "Who Is pharrells collaborator in the group N.E.R.D.?",
    choices: ["John", "Noreaga", "Clipse", "Chad", "Q-tip"],
    correctAnswer: 3
}, {
    question: "What Detroit House Legend was sampled on Drakes song 'Passionfruit?",
    choices: ["Moodymann", "Carl Craig", "Wolfeyes", "David Guetta"],
    correctAnswer: 0
}, {
    question: "Who's first album was titled Southernplayalisticadillacmuzik?",
    choices: ["Pharcyde", "Gucci Mane", "Dungeon Family", "Outkast"],
    correctAnswer: 3
}, {
    question: "What style of music from Houston utilized tape manipulation?",
    choices: ["Trap", "Musique concrète", "Chopped and Screwed", "Juke"],
    correctAnswer: 2
}, {
    question: "What's snoop doggs favorite snack?",
    choices: ["Oreos", "Cheddar Lays", "BBQ Fritos", "Honey-buns"],
    correctAnswer: 2
}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

$(document).ready(function () {

    
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();

   
    $(this).find(".nextButton").on("click", function () {
        if (!quizOver) {

            value = $("input[type='radio']:checked").val();

            if (value == undefined) {
                $(document).find(".quizMessage").text("Please select an answer");
                $(document).find(".quizMessage").show();
            } else {
                
                $(document).find(".quizMessage").hide();

                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }

                currentQuestion++; 
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
                  
                    $(document).find(".nextButton").text("Play Again?");
                    quizOver = true;
                }
            }
        } else {
            quizOver = false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });

});



// This displays the current question AND the choices
function displayCurrentQuestion() {


    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;

 
    $(questionClass).text(question);

    
    $(choiceList).find("li").remove();

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    }
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore() {
    $(document).find(".quizContainer > .result").text("You scored: " + correctAnswers + " out of: " + questions.length);
    $(document).find(".quizContainer > .result").show();
}

function hideScore() {
    $(document).find(".result").hide();
};

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

jQuery(function ($) {
    var timeAmount = 60 + 30,
        display = $('#time');
    startTimer(timeAmount, display);
});

function Correct() {
    $(".answers").empty();
    $(".question").html("YOU ARE CORRECT!" + "<br>" + '<img src="assets/images/correctAnswer.gif">'); ();
};



