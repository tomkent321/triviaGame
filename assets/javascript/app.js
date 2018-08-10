
$(document).ready(function(){

//Set up variables and arrays

var arrQA= [    {q: "How many moons does Mars have?" , a: "Two", b: "Three", c: "Four", d: "It doesn't have any moons", r: "a" },
                {q: "What speed does the 'C' in emc2 stand for?", a: "Two", b: "Three", c: "Four", d: "It doesn't have any moons", r: "c" },
                {q: "What does the 'M' in 'emc2' stand for?", a: "Two", b: "Three", c: "Four", d: "It doesn't have any moons", r: "d" }
              
              ]; 


var numQLeft = arrQA.length; //how many questions total 
var ttlQ = arrQA.length; // total number of question user can expect
var qIndex = 0; //starts the game at the first question
var qText; //used to find the question in the array not to show a number to the user 
var userAnswer; 
var correct; 
var sumCorrect;
var sumWrong;
var pctCorrect;
var timeLeft;
var triviaIQ;
var gameTime = 10;  //seconds for each answer
var stopLong;
var timesUp;



function initialize(){   
    userAnswer = ""; 
    correct = 0; 
    sumCorrect = 0;
    sumWrong = 0
    pctCorrect = 0;
    timeLeft = 0;
    triviaIQ = 0;
    qIndex = 0;
    timesUp = false;
    
    $("#qCorrect").text("Questions Wrong: 0");
    $("#qWrong").text("Questions Wrong: 0");
    $("#qTotal").text("Total Questions: "+ ttlQ);
    $("#qLeft").text("Questions Left: " + numQLeft);

    makeQuestion();    
  }
 





  //show question
function makeQuestion(){


  $("#question").text(arrQA[qIndex].q);

  $("#a").text(arrQA[qIndex].a);
  $("#b").text(arrQA[qIndex].b);
  $("#c").text(arrQA[qIndex].c);
  $("#d").text(arrQA[qIndex].d);

  timer();
  getAnswer();

}


 function getAnswer() {
 
//this is terribly unDRY, rewrite if time to get the data value on a class call

$("#a").on("click", function(){
  userAnswer = "a";
  $("#a").addClass("selected-answer");
  unClickAs();
  clearInterval(stopLong);
  $("#time-left").empty();
  scoreAnswer();
});

$("#b").on("click", function(){
  userAnswer = "b";
  $("#b").addClass("selected-answer");
  unClickAs();
  clearInterval(stopLong);
  $("#time-left").empty();
  scoreAnswer();
});
$("#c").on("click", function(){
  userAnswer = "c";
  $("#c").addClass("selected-answer");
  unClickAs();
  clearInterval(stopLong);
  $("#time-left").empty();
  scoreAnswer();
});
$("#d").on("click", function(){
  userAnswer = "d";
  $("#d").addClass("selected-answer");
  unClickAs();
  clearInterval(stopLong);
  $("#time-left").empty();
  scoreAnswer();
});


 }

//  just keeps player from clicking after the bell
 function unClickAs(){
  $("#a").unbind("click");
  $("#b").unbind("click");
  $("#c").unbind("click");
  $("#d").unbind("click");
 }


 function scoreAnswer() {
 
  var rightAnswer = arrQA[qIndex].r;
  
  $("#" + rightAnswer).addClass("right-answer"); // make this class highlight the answer
  sumCorrect++;

  if ( userAnswer === rightAnswer) {
  // right answer
  $("#feedback").text("Correct!   ----  Press any key for next question").attr("color", "green");
  $("#qCorrect").text("Questions Right: " + sumCorrect); 
  
  document.onkeypress=function(e){
    updateAndNextQuestion();
  }

  } else {
    //wrong answer
    sumWrong++;

    if(timesUp){
      $("#feedback").text("Times Up! ----  Press any key for next question");
    } else {
      $("#feedback").text("Wrong!    ----  Press any key for next question");
    }
    
    $("#qWrong").text("Questions Wrong: " + sumWrong);

    document.onkeypress=function(e){
      updateAndNextQuestion();
    }
  }

    numQLeft--;
    $("#qLeft").text("Questions Left: " + numQLeft);
} 


function updateAndNextQuestion() {

timesUp = false;

if(numQLeft > 0) {

clearTimeout(scoreAnswer());

$("#a").empty().removeClass("selected-answer right-answer");
$("#b").empty().removeClass("selected-answer right-answer");
$("#c").empty().removeClass("selected-answer right-answer");
$("#d").empty().removeClass("selected-answer right-answer");

qIndex++;

$(".feedback").empty();
makeQuestion();


} else {

  $(".feedback").text("That's all the questions there are!");
}
}             

    function timer() {
      
      targetTime = new Date().getTime() + gameTime * 1000;

      // Update the count down every 1 second
      stopLong = setInterval(function() {
      var timeNow =  new Date().getTime(); 
      var timeLeft = targetTime - timeNow;
      var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
      if(seconds > 0){
        $("#time-left").html(seconds);
      }
        // the count down is finished
        if (timeLeft < 1) {
          clearInterval(stopLong);
          timesUp = true;
          $("#time-left").html("0");
          $(".feedback").text("Sorry!").attr("color", "red");
      
          scoreAnswer();
        }
      }, 1000);
      
  }

 initialize();
 
});