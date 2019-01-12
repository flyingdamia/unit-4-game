var wins = 0;
var losses = 0;
var randomNumberGen = 0;
var scoreTotal = 0;

var crystal = {
    pink, yellow, green, blue: {
      value: 0
    }
  };

  

  var randomFRTO = function(fr, to) {
    return Math.floor(Math.random() * (to - fr + 1)) + fr;
  };

  var start = function() {
    randomNumberGen = randomFRTO(1, 150);
    scoreTotal = 0;
    
    crystal.pink.value = randomFRTO(1, 10);
    crystal.yellow.value = randomFRTO(2, 4);
    crystal.green.value = randomFRTO(11, 29);
    crystal.blue.value = randomFRTO(20, 24);
    
    $("#random-num-gen").text(randomNumberGen);
    $("#score-total").text(scoreTotal);  
  };
  
  
  
  var addNum = function(crystalchosen) {
  scoreTotal += crystalchosen.value;
  $("#score-total").text(scoreTotal);
  WinsLosses();
  };


 
  start();
  $("#pink").click(function() {
    addNum(crystal.pink);
  }); 
  $("#yellow").click(function() {
    addNum(crystal.yellow);
  });
  $("#green").click(function() {
    addNum(crystal.green);
  });
  $("#blue").click(function() {
    addNum(crystal.blue);
  });


  
  var WinsLosses = function() {
    if (scoreTotal === randomNumberGen) {
      wins++;
      $("#wins").text(wins);
      alert("You Won!");
      start();
    }  
    else if (scoreTotal > randomNumberGen) {
      losses++;
      $("#losses").text(losses);
      alert("You lost!");
      start();
    }
  };