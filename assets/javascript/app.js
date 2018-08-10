
$(document).ready(function(){

//Set up variables and arrays

var arrQA= [    {q: "How many moons does Mars have?" , a: "Two", b: "Three", c: "Four", d: "It doesn't have any moons", r: "a" },
                {q: "What speed does the 'c' in emc2 stand for?", a: "carbon", b: "center", c: "light", d: "energy", r: "c" },
                {q: "What does the 'm' in 'emc2' stand for?", a: "more", b: "matter", c: "metal", d: "master", r: "b" },
                {q: "Which planet is closest to the sun in January?", a: "earth", b: "mars", c: "jupiter", d: "mercury", r: "d" },
                {q: "Which planet is closest to the earth?", a: "mercury", b: "venus", c: "mars", d: "krypton", r: "b" },
                {q: "What is 'Andromeda'?", a: "a planet", b: "a galaxy", c: "a nebulae", d: "a dog", r: "b" },
                {q: "What does the 'e' in 'emc2' stand for?", a: "energy", b: "event", c: "excrutiating", d: "entry", r: "a" },
                {q: "How many people have seen the backside of the moon in person?", a: "30", b: "15", c: "24", d: "0", r: "c" },
                {q: "How far is it to the sun?", a: "1 light hour", b: "1 light day", c: "1 light second", d: "8 light minutes", r: "d" },
                {q: "How many moons does Jupiter have?", a: "4", b: "8", c: "16", d: "79", r: "d" },
                {q: "What year did man first land on the moon?", a: "1965", b: "1969", c: "1973", d: "never - it was a hoax", r: "b" },
                {q: "What is thought to be at the center of our galaxy?", a: "a McDonalds", b: "a singularity", c: "a black hole", d: "a star cluster", r: "c" }
                
              
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
  $("#qCorrect").text("Questions Right: " + sumCorrect + " "); 
  
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
    
    $("#qWrong").text("Questions Wrong: " + sumWrong + " ");

    document.onkeypress=function(e){
      updateAndNextQuestion();
    }
  }
  // document.onkeypress=function(e){
  //   updateAndNextQuestion();
  // }


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

$("#feedback").empty();
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
  
      
          scoreAnswer();
        }
      }, 1000);
      
  }

 initialize();
 
});