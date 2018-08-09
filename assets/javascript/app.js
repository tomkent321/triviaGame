// You'll create a trivia game that shows only one question until the player answers it or their time runs out.


// If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.

// The scenario is similar for wrong answers and time-outs.


// If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
// If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.



// **************************************************************

// On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).


//Set up variables and arrays

var arrQA= [    {q: "How many moons does Mars have?" , a: "Two", b: "Three", c: "Four", d: "It doesn't have any moons", r: "a" },
                {q: "What speed does the 'C' in emc2 stand for?", a: "Two", b: "Three", c: "Four", d: "It doesn't have any moons", r: "c" },
                {q: "What does the 'M' in 'emc2' stand for?", a: "Two", b: "Three", c: "Four", d: "It doesn't have any moons", r: "d" }
              
              ]; 

var numQ;  //the number of this question (will not be the same question everytimd)
var numQLeft = arrQA.length; //how many questions total 
var ttlQ; // total number of question user can expect
var qIndex = 0; //starts the game at the first question
var qText; //used to find the question in the array not to show a number to the user 
var userAnswer; 
var answerGiven = false;
var correct; 
var sumCorrect;
var pctCorrect;
var timeLeft;
var triviaIQ;
var gameTime = 17;  //seconds for each answer
var qRun = false;  // sets the ability for user to answer



function initialize(){  
    numQ = 0;  
    numQLeft = 0; 
    ttlQ = 0; 
    timerInterval = 0; 
    userAnswer = ""; 
    correct = 0; 
    sumCorrect = 0;
    pctCorrect = 0;
    timeLeft = 0;
    triviaIQ = 0;
    qIndex = 0;
        
  }
 

//set  and display UI


// random number generator




    //show question
function makeQuestion(){

//generate the next question



  $("#question").text(arrQA[qIndex].q);
  $("#a").text(arrQA[qIndex].a);
  $("#b").text(arrQA[qIndex].b);
  $("#c").text(arrQA[qIndex].c);
  $("#d").text(arrQA[qIndex].d);

  qRun = true;

  timer();
  //getAnswer();

  qIndex++;
}

  
  


 function getAnswer() {
 

// while (qRun == true&& answerGiven == false) {

$("#a").on("click", function(){
  userAnswer = "a";
  
  // scoreAnswer();
});

$("#b").on("click", function(){
  userAnswer = "b";
  
  // scoreAnswer();
});
$("#c").on("click", function(){
  userAnswer = "c";
  
  // scoreAnswer();
});
$("#d").on("click", function(){
  userAnswer = "d";
  // answerGiven = true;
  // scoreAnswer();
});

// }
clearInterval(XPathExpression);
 }

 function scoreAnswer() {

  if ( userAnswer === arrQA[qIndex].r) {
  // right answer
  $(".feedback").text("Correct!").attr("color", "green");
  sumCorrect++;


  } else {
    //wrong answer
    $(".feedback").text("Sorry!").attr("color", "red");

  }

  showRightAnswer();
numQLeft--;

} 

function showRightAnswer() {



  if(arrQA[qIndex].r == "a"){
    $("#a").text(arrQA[qIndex].a).attr("fontWeight","bolder");
  }else{
    $("#a").text("                               ");
  }

  if(arrQA[qIndex].r == "b"){
    $("#b").text(arrQA[qIndex].b).attr("fontWeight","bolder");
  }else{
  $("#b").text("                               ");
  }

  if(arrQA[qIndex].r == "c"){
    $("#c").text(arrQA[qIndex].b).attr("fontWeight","bolder");
  }else{
  $("#c").text("                               ");
  }

  if(arrQA[qIndex].r == "d"){
    $("#d").text(arrQA[qIndex].b).attr("fontWeight","bolder");
  }else{
  $("#d").text("                               ");
  }

  }




function updateAndNextQuestion() {

timerShort();


if(numQLeft > 0) {

  $("#a").text("");
  $("#b").text("");
  $("#c").text("");
  $("#d").text("");

  
} else {

  gameOver();
}

  }

  

function gameOver() {



}





            
              

    function timer() {
      
      targetTime = new Date().getTime() + gameTime * 1000;

      // Update the count down every 1 second
      var x = setInterval(function() {
      var timeNow =  new Date().getTime(); 
      var timeLeft = targetTime - timeNow;
      var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
      if(seconds > 0){
        $("#time-left").html("<h2>" + seconds + "</h2>");
      }
        // If the count down is finished, write some text 
        if (timeLeft < 1) {
          clearInterval(x);
          //question time is up
          qRun = false;
          //$("#time-left").html("<h2>Times UP!</h2>");
          $(".feedback").text("Sorry!").attr("color", "red");
          //showRightAnswer();
        }
      }, 1000);
      
      }

      function timerShort() {
      
        targetTime = new Date().getTime() + 2000;
  
        // Update the count down every 1 second
        var x = setInterval(function() {
        var timeNow =  new Date().getTime(); 
        var timeLeft = targetTime - timeNow;
        var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
          
          //$("#time-left").html("<h2>" + seconds + "</h2>");
        
          // If the count down is finished, write some text 
          if (timeLeft < 0) {
            clearInterval(XPathExpression);
            //question time is up
            //qRun = false;
            //$("#time-left").html("<h2>Times UP!</h2>");
          }
        }, 1000);
        
        }






