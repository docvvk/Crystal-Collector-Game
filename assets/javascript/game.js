//choose a computer random number between 19 and 120
//assign random number to html
//choose 4 random numbers for 4 jewels between 1 and 12
//assign these to 4 crystals
//create variables -- wins, losses and total score
//assign variables to html
//on clicking crystals -- random numbers adding  into totalscore
//if totalscore is equal to computer random number
    //show youwin image
    //wins increase by one
    //reset game by pressing space
    //winsound play
//if total score > computer random number
    //loses increase by one
    //lose sound play
    //show you lose image
    //reset game by pressing space
//reset game
    //wins = 0
    //loses = 0
    //userTotal = 0
    //win image display none
    //lose image display none    

    $(function(){
    var randomNumber = Math.floor(Math.random()*(120-19)+19);
    console.log(randomNumber);

    // $(".randNum").text("Random Number: " + randomNumber);

    var num1 = Math.floor(Math.random()*(12-1)+1);
    var num2 = Math.floor(Math.random()*(12-1)+1);
    var num3 = Math.floor(Math.random()*(12-1)+1);
    var num4 = Math.floor(Math.random()*(12-1)+1);

    var userTotal = 0;
    var wins = 0;
    var loses = 0;

    var clickSound = new Audio("./assets/sounds/keyboard_tap.mp3");
    var wonSound = new Audio("./assets/sounds/you-win.wav");
    var lostSound = new Audio("./assets/sounds/you-lose.wav");

    $(".totalScore").text("Total Score: " + userTotal);

    function resetGame() {
        randomNumber = Math.floor(Math.random()*(120-19)+19);
        $(".randNum").text("Random Number: " + randomNumber);
        
        num1 = Math.floor(Math.random()*(12-1)+1);
        num2 = Math.floor(Math.random()*(12-1)+1);
        num3 = Math.floor(Math.random()*(12-1)+1);
        num4 = Math.floor(Math.random()*(12-1)+1);
        
        $(".wins").text("Wins: 0");
        $(".loses").text("Loses: 0");
        userTotal = 0;
        $(".totalScore").text(userTotal);
    };
    
    function won() {
        wonSound.play();
        wins++;
        alert("You Win");
        $(".wins").text("Wins: " + wins);
        resetGame();
    };

    function lost() {
        lostSound.play();
        loses++;
        alert("You Lost");
        $(".loses").text("Loses: " + loses);
        resetGame();
    };

    function check() {
        if (userTotal == randomNumber) {
            won();
        } else if (userTotal > randomNumber) {
            lost();
        }
    };
    
    // adding click events
    $(".num1").on("click", function() {
        clickSound.play();
        userTotal += num1;
        $(".totalScore").text(userTotal);
        check();
        console.log("New total: ", userTotal);
    });
    $(".num2").on("click", function() {
        clickSound.play();
        userTotal += num2;
        $(".totalScore").text(userTotal);
        check();
        console.log("New total: ", userTotal);
    })
    $(".num3").on("click", function() {
        clickSound.play();
        $(".totalScore").text(userTotal);
        check();
        userTotal += num3;
        console.log("New total: ", userTotal);
    })
    $(".num4").on("click", function() {
        clickSound.play();
        $(".totalScore").text(userTotal);
        check();
        userTotal += num4;
        console.log("New total: ", userTotal);
    })

    $(window).keypress(function (x) { 
        if (x.keyCode == 0 || x.keyCode == 32) {
            console.log("Space");
            x.preventDefault();
            resetGame();
        }
     })


});