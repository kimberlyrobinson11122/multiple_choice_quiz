var seconds = 200;
var timer;
var questionIndex=0; 
var quizArea=document.querySelector(".quiz_area");
var grading=document.querySelector("grading")

//var userAnswer;
var highScore = 0;
var playerInitials = "";

var questionsArray = [
  {
    //question 1
    question:
      "Which functions for adding or removing from an array, select where all three are correct:",
    choices: [
      "A - pop removes from beginning, unshift adds to the beginning, shift add to the end",
      "B - pop removes from end, shift add to the end, unshift adds to the beginning",
      "C - push adds to end, pop removes from end, shift removes from beginning",
      "D - unshift adds to the beginning, pop removes from beginning, shift removes from end",
    ], 
    answer:"C - push adds to end, pop removes from end, shift removes from beginning"
  },
    

    //question 2
  { question: 
      "Which are true statements about a website frame?",
    choices: 
    [
      "it can be called a screen blueprint or a page schematic",
      "wireframe depicts the page layout or arrangement of website content",
      "website wireframe's purpose is usually driven by a business objective and a creative idea",
      "all of the above",
    ], 
    answer:"all of the above"
  },


//     //question 3
//   { question: 
//       "What is typography in CSS?",
//     choices: 
//     [
//       "the art or procedure of arranging data or processing data on a page",
//       "styling the wireframe",
//       "refers to the CSS properties that allow you to define the color, size, spacing, and shape of text",
//       "adding type of blocks to the structure to the website",
//     ], 
//     answer: "refers to the CSS properties that allow you to define the color, size, spacing, and shape of text"
//   },


//     //question 4
//   { question: 
//     "What is a viewport?",
//   choices: 
//   [
//     "virtual places within an operating system where network connections start and end",
//     "on a computer it is a place where you can attach another piece of equipment",
//     "represents an area in computer graphics that is currently be viewwed",
//     "is a query of one or more tables that provides another way of presenting the information",
//   ], 
//   answer:"represents an area in computer graphics that is currently be viewwed"
//   },


//     //question 5
//   { question: 
//     "Is Responsive Web Design a separate technology?",
//   choices: 
//   [
//     "Yes",
//     "No",
//     "On certain occasions in CSS",
//     "only when used in Javascript",
//   ], 
//   answer:"No"
//   },  


//    //question 6
//   { question: 
//     "What does CSS stand for?",
//   choices: 
//   [
//     "Cosmic Scripting Scheme",
//     "Creative Style Syntax",
//     "Cascading Style Sheets",
//     "Cybernetic Styling System",
//   ], 
//   answer:"Cascading Style Sheets"
//   },


//   //question 7
//   { question: 
//   "What directions does Javascript read code?",
//   choices: 
//   [
//   "right to left",
//   "top to bottom",
//   "bottom to top",
//   "left to right",
//   ], 
//   answer:"top to bottom"
//   },


//   //question 8
//   { question: 
//   "Using Javascript, in a function, does RETURN work both inside and outside of the function body",
//   choices: 
//   [
//   "yes, of course",
//   "when RETURN is used correctly, it works both inside and outside",
//   "no, because the teacher said so",
//   "no, RETURN only works inside a function",
//   ], 
//   answer:"no, RETURN only works inside a function"
//   },


//   //question 9
//   { question: 
//   "What is a function in Javascript?",
//   choices: 
//   [
//   "A function is a chunk of code that can be repeated multiple times and is used quite often",
//   "A function in JavaScript is a type of alien life form that communicates with intergalactic servers to summon cosmic energies for website animations",
//   "A function is designed to analyze historical data and predict future trends",
//   "A function in JavaScript is a magical incantation that compels web browsers to dance according to the whims of the developer",
//   ], 
//   answer:"A function is a chunk of code that can be repeated multiple times and is used quite often"
//   },


// //question 10
//   { question: 
//   "What is an array in Javascript?",
//   choices: 
//   [
//   "An array in Javascript is a virtual filing cabinet where the browser stores its favorite memes and GIFs for quick retrieval during moments of digital boredom",
//   "An array in Javascript is a dynamic list of things (objects, functions, anything, etc.)",
//   "An array in Javascript is a mystical portal that transports data to parallel dimensions within the web browser, allowing for multidimensional data manipulation",
//   "An array in Javascript is a sentient entity capable of independent thought, organizing data according to its own mysterious algorithms, and occasionally playing pranks on unsuspecting programmers",
//   ], 
//   answer:"An array in Javascript is a dynamic list of things (objects, functions, anything, etc.)"
//   },
  
{

//score

}
];

function displayNextQuestion() {
    if (questionIndex == questionsArray.length - 1) {
        clearInterval(timer)
        quizArea.classList.add("hidden")
        document.querySelector(".timer").classList.add("hidden")
        document.querySelector("#highScoresList").classList.remove("hidden")
        document.querySelector("#scoreDisplayed").innerHTML = `Good job, you are all finished! <br/> Your final score is ${highScore}.`
        
        console.log(highScore)
        return
    } else {
        var questionHeader = document.createElement("h2")
        questionHeader.textContent=questionsArray[questionIndex].question
        quizArea.appendChild(questionHeader)

        var choices = questionsArray[questionIndex].choices
        for (var i = 0; i < choices.length; i++) {
              var button = document.createElement("button")
              button.textContent = choices[i]
              button.classList.add("choice-button")
              quizArea.appendChild(button)

        }
       }
    }

var start_btn = document.getElementById("startQuizButton")
console.log(start_btn)

start_btn.addEventListener("click", function(){
        //rid of the stuff on the screen
        document.querySelector(".quiz_area").innerHTML=""

        //start timer
        start_timer()

        //display current question and answer options
        displayNextQuestion() 
       
})

quizArea.addEventListener("click", function(e){
  if (e.target.matches(".choice-button")) {
      var selectedAnswer = e.target.textContent
      var correctAnswer = questionsArray[questionIndex].answer
      
      if (selectedAnswer === correctAnswer) {
          // correct answer
          quizArea.textContent = "Correct!"
          // increment score
          highScore++
      } else {
          // incorrect answer
          quizArea.textContent = "Incorrect!"
          // decrement timer by 10 seconds
          seconds -= 10
          // make sure time doesn't go past zero
          if (seconds < 0) {
              seconds = 0
         }
      }
      
      // go to the next question
      questionIndex++
      
      // timed out grading
      setTimeout(function() {
        quizArea.textContent = " "
      }, 1000)

      // display the next question after a small delay
      setTimeout(displayNextQuestion, 1000)
  }
});


function start_timer() {
        timer = setInterval(function() {
                seconds --
                document.getElementById("countdown_clock").textContent=seconds
                if (seconds <= 0) {
                        clearInterval(timer)
                        //clearing interval
                        //execute in game function
                }
        }, 1000);
        //milliseconds
}

function userEntersInitials() {
  //add initials
  var inputInitials = document.getElementById("inputInitials").value;
  console.log(inputInitials)
  
      var savedScores = JSON.parse(localStorage.getItem("Scores")) || [] // json parsed
        
        savedScores.push({initals: inputInitials, score: highScore})
        localStorage.setItem("Scores", JSON.stringify(savedScores))
        document.querySelector(".quiz_area").classList.add("hidden");
        document.getElementById("leaderBoard").classList.remove("hidden");
        document.getElementById("highScoresList").classList.remove("hidden");
        document.querySelector(".timer").classList.add("hidden");
        updateViewHighScore();

  // if (inputInitials !== "") {
  //       winnerInitials = inputInitials.toUpperCase();
  //       document.getElementById("initialsDisplayed").textContent = "Initials " + winnerInitials;
  //       document.getElementById("initialsContainer").style.display = "none";
  //       document.getElementById("highScoreBox").style.display = "block";
  // }
}

function updateViewHighScore() {

    //view high score
    var savedScores = JSON.parse(localStorage.getItem("Scores")) || [];
    
    //high to low
    savedScores.sort((a, b) => b.score - a.score);
    console.log(savedScores);
    //clear
    document.getElementById("highScoresList").innerHTML = "";

      savedScores.forEach((score, index) => {

        //create list
        var listItem = document.createElement("li");

        listItem.textContent = `${index + 1}. ${score.initals}: ${score.score}`;

        //Append
        document.getElementById("players").appendChild(listItem);
    });
}

var view_high_scores = document.getElementById("view_high_scores")

view_high_scores.addEventListener("click", function(event) {
  
    //click will display high score
    event.preventDefault();
    document.querySelector(".quiz_area").classList.add("hidden");
    document.getElementById("leaderBoard").classList.remove("hidden");
    document.getElementById("highScoresList").classList.remove("hidden");
    document.querySelector(".timer").classList.add("hidden");
    updateViewHighScore();
  
});

document.getElementById("addInitials").addEventListener("click", userEntersInitials);
