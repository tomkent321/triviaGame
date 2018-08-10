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

// var arrQA2 = [ ["How many moons does Mars have?", "Two", "Three","Unknow", 0 ],
//                 ["What is 'C' ?", "Color", "Careless","Light", "Cat", 2 ],
//                 ["How many moons does Venus have?", "Two", "Three","Unknow", 0 ],





// ];





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
var gameTime = 17;  //seconds for each answer
//var qRun = false;  // sets the ability for user to answer
var stopLong;



function initialize(){   
    userAnswer = ""; 
    correct = 0; 
    sumCorrect = 0;
    sumWrong = 0
    pctCorrect = 0;
    timeLeft = 0;
    triviaIQ = 0;
    qIndex = 0;
    
    $("#qCorrect").text("Questions Wrong: 0");
    $("#qWrong").text("Questions Wrong: 0");
    $("#qTotal").text("Total Questions: "+ ttlQ);
    $("#qLeft").text("Questions Left: " + numQLeft);
    

    //makeQuestion();    
  }
 




    //show question
function makeQuestion(){


  $("#question").text(arrQA[qIndex].q);

  $("#a").text(arrQA[qIndex].a);
  $("#b").text(arrQA[qIndex].b);
  $("#c").text(arrQA[qIndex].c);
  $("#d").text(arrQA[qIndex].d);

  //qRun = true;

  timer();
  getAnswer();

}


 function getAnswer() {
 

//this is terribly unDRY, rewrite if time to get the data value on a class call

$("#a").on("click", function(){
  userAnswer = "a";
  unClickAs();
  clearInterval(stopLong);
  $("#a").addClass("selected-answer");
  $("#time-left").empty();
  scoreAnswer();
});

$("#b").on("click", function(){
  userAnswer = "b";
  unClickAs();
  $("#b").addClass("selected-answer");
  clearInterval(stopLong);
  $("#time-left").empty();
  scoreAnswer();
});
$("#c").on("click", function(){
  userAnswer = "c";
  unClickAs();
  clearInterval(stopLong);
  $("#time-left").empty();
  scoreAnswer();
});
$("#d").on("click", function(){
  userAnswer = "d";
  unClickAs();
  clearInterval(stopLong);
  $("#time-left").empty();
  scoreAnswer();
});


// }

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
  
  
  $("#" + rightAnswer).addClass("right-answer"); // make this class ouline and highlight the answer
  sumCorrect++;

  //clearTimeout(scoreAnswer());

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
    $("#feedback").text("Wrong!    ----  Press any key for next question").attr("color", "red");
    $("#qWrong").text("Questions Wrong: " + sumWrong);

    document.onkeypress=function(e){
      updateAndNextQuestion();
    }
  }

    numQLeft--;
    $("#qLeft").text("Questions Left: " + numQLeft);


} 


function updateAndNextQuestion() {


if(numQLeft > 0) {

//$("scores").empty();

// or
clearTimeout(scoreAnswer());

$("#a").empty().removeClass("selected-answer right-answer");
$("#b").empty().removeClass("selected-answer right-answer");
$("#c").empty().removeClass("selected-answer right-answer");
$("#d").empty().removeClass("selected-answer right-answer");

qIndex++;

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
        $("#time-left").html("<h2>" + seconds + "</h2>");
      }
        // the count down is finished
        if (timeLeft < 1) {
          clearInterval(stopLong);
          //question time is up
         // qRun = false;
          //$("#time-left").html("<h2>Times UP!</h2>");
          $("#time-left").html("<h2>0</h2>");
          $(".feedback").text("Sorry!").attr("color", "red");
      
          scoreAnswer();
        }
      }, 1000);
      
  }

      


// for (var i = 0; i < movies.length; i++) {

//   // Then dynamicaly generating buttons for each movie in the array
//   // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
//   var a = $("<button>");
//   // Adding a class of movie to our button
//   a.addClass("movie");
//   // Adding a data-attribute
//   a.attr("data-name", movies[i]);
//   // Providing the initial button text
//   a.text(movies[i]);
//   // Adding the button to the buttons-view div
//   $("#buttons-view").append(a);
// }