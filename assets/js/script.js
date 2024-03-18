// create questions for quiz
// create the HTML for the quiz
// click start the timer starts and the screen shows the first question
// user answers question
//   if answer = true, no time is deducted
//     else answer = false then time decremented by 10s
// next question
//     same function repeats
// view high score


var seconds = 200;
var timer;
var questionIndex=0; 
var quizArea=document.querySelector(".quiz_area")
//var userAnswer;
var highScore = 0;

var questionsArray = [
  {
    //question 1
    question:
      "Which functions for adding or removing from an array, are where all three are correct below:",
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


    //question 3
  { question: 
      "What is typography in CSS?",
    choices: 
    [
      "the art or procedure of arranging data or processing data on a page",
      "styling the wireframe",
      "refers to the CSS properties that allow you to define the color, size, spacing, and shape of text",
      "adding type of blocks to the structure to the website",
    ], 
    answer: "refers to the CSS properties that allow you to define the color, size, spacing, and shape of text"
  },


    //question 4
  { question: 
    "What is a viewport?",
  choices: 
  [
    "virtual places within an operating system where network connections start and end",
    "on a computer it is a place where you can attach another piece of equipment",
    "represents an area in computer graphics that is currently be viewwed",
    "is a query of one or more tables that provides another way of presenting the information",
  ], 
  answer:"represents an area in computer graphics that is currently be viewwed"
  },


    //question 5
  { question: 
    "Is Responsive Web Design a separate technology?",
  choices: 
  [
    "Yes",
    "No",
    "On certain occasions in CSS",
    "only when used in Javascript",
  ], 
  answer:"No"
  },  


   //question 6
  { question: 
    "What does CSS stand for?",
  choices: 
  [
    "Cosmic Scripting Scheme",
    "Creative Style Syntax",
    "Cascading Style Sheets",
    "Cybernetic Styling System",
  ], 
  answer:"Cascading Style Sheets"
  },


  //question 7
  { question: 
  "What directions does Javascript read code?",
  choices: 
  [
  "right to left",
  "top to bottom",
  "bottom to top",
  "left to right",
  ], 
  answer:"left to right"
  },


  //question 8
  { question: 
  "Using Javascript, in a function, does RETURN work both inside and outside of the function body",
  choices: 
  [
  "yes, of course",
  "when RETURN is used correctly, it works both inside and outside",
  "no, because the teacher said so",
  "no, RETURN only works inside a function",
  ], 
  answer:"no, RETURN only works inside a function"
  },


  //question 9
  { question: 
  "What is a function in Javascript?",
  choices: 
  [
  "A function is a chunk of code that can be repeated multiple times and is used quite often",
  "A function in JavaScript is a type of alien life form that communicates with intergalactic servers to summon cosmic energies for website animations",
  "A function is designed to analyze historical data and predict future trends",
  "A function in JavaScript is a magical incantation that compels web browsers to dance according to the whims of the developer",
  ], 
  answer:"A function is a chunk of code that can be repeated multiple times and is used quite often"
  },


//question 10
  { question: 
  "What is an array in Javascript?",
  choices: 
  [
  "An array in Javascript is a virtual filing cabinet where the browser stores its favorite memes and GIFs for quick retrieval during moments of digital boredom",
  "An array in Javascript is a dynamic list of things (objects, functions, anything, etc.)",
  "An array in Javascript is a mystical portal that transports data to parallel dimensions within the web browser, allowing for multidimensional data manipulation",
  "An array in Javascript is a sentient entity capable of independent thought, organizing data according to its own mysterious algorithms, and occasionally playing pranks on unsuspecting programmers",
  ], 
  answer:"An array in Javascript is a dynamic list of things (objects, functions, anything, etc.)"
  },
  
{

//score

}
];

function displayNextQuestion() {
    if (questionIndex == questionsArray.length - 1) {
        clearInterval(timer)
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

var view_high_scores = document.getElementById("view_high_scores")
view_high_scores.addEventListener("click", function(event) {
  event.preventDefault();
  //click will display high score
  alert("High Score: " + highScore)
});




// Step 1: Creating Questions and Answers (DONE)
// 1 - Which functions for adding or removing from an array, are correct below:
// a - pop removes from beginning, unshift adds to the beginning, shift add to the end
// b - pop removes from end, shift add to the end, unshift adds to the beginning
// c - push adds to end, pop removes from end, shift removes from beginning
// d - unshift adds to the beginning, pop removes from beginning, shift removes from end

// Step 2: Displaying the Questions and Options
// Step 3: Checking the Answer(s)
// Step 4: Keeping Score each time
// Step 5: Moving onto the Next Question
