// You'll create a trivia game that shows only one question until the player answers it or their time runs out.


// If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.

// The scenario is similar for wrong answers and time-outs.


// If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
// If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.



// **************************************************************

// On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).


//Set up variables and arrays

var arrQA= [    {q: "How many moons does Mars have?" , a: "Two", b: "Three", c: "Four", d: "It doesn't have any moons", r: "a" },
                {q: "What speed does the 'C' in emc2 stand for?", a: "light", u: false},
                {q: "What does the 'M' in 'emc2' stand for?", a: "Mass", u: false}
              
              ]; 

var numQ;  //the number of this question (will not be the same question everytimd)
var numQLeft; 
var ttlQ; // total number of question user can expect
var qIndex = 0; //starts the game at the first question
var qText; //used to find the question in the array not to show a number to the user 
var userAnswer; 
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
    
    
      
  }
 

//set  and display UI


// random number generator




    //show question
function makeQuestion(){

//generate the next question



  $("#question").text(qText = arrQA[qIndex].q);
  $(".inputLine").append("<p id= a>" + arrQA[qIndex].a + "</p>");
  $(".inputLine").append("<p id= b>" + arrQA[qIndex].b + "</p>");
  $(".inputLine").append("<p id= c>" + arrQA[qIndex].c + "</p>");
  $(".inputLine").append("<p id= d>" + arrQA[qIndex].d + "</p>");
  
  alert("check");

  timer();

  qIndex++;
}

  
  
  

 //function answer()
 


    //evalResponse
              // capture response and store

        //evaluate answer
          //stop timer
          //while time > 0
            //if userAnswer == answer right score++
              // correct++
              //show correct panel
              //update UI
            //else if false 
              //stop timer
              //show incorrect notice  and correct answer below at the same time
              //show correct answer
              // set pause to see correct answer
              // call show question
              //update UI

    // else if no answer 
          // show time out response
          //show incorrect notice
          //show correct answer
          // set pause to see correct answer
          // call show question
          //update UI




    //update UI
      //show scores
          
          //remove win or loss notice
          //# of questions given
          //# questions remaining
          // questions right
          // questions wrong
          // Trivia IQ
          //stop timer just to be sure

    //
            
    //shorPause
              //giving time to see right answer
              

    //initialize/restart


            
              

    function timer() {
      
      targetTime = new Date().getTime() + gameTime * 1000;

      // Update the count down every 1 second
      var x = setInterval(function() {
      var timeNow =  new Date().getTime(); 
      var timeLeft = targetTime - timeNow;
      var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        $("#time-left").html("<h2>" + seconds + "</h2>");
      
        // If the count down is finished, write some text 
        if (timeLeft < 0) {
          clearInterval(XPathExpression);
          //question time is up

          $("#time-left").html("<h2>Times UP!</h2>");
        }
      }, 1000);
      
      }








function countDown() {
// Set the date we're counting down to
var countDownDate = new Date().getTime() + gameTime * 1000;

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
var now = new Date().getTime();

  // Find the distance between now and the count down date
var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  //document.getElementById("time-left").innerHTML = seconds;
  $("#time-left").html("<h2>" + seconds + "</h2>");

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    //document.getElementById("time-left").innerHTML = "EXPIRED";
    $("#time-left").html("<h2>Times UP!</h2>");
  }
}, 1000);

}