
var Robot = (function(robot){
  $(document).ready(function() {
    var players = [];
    var p1;
    var p2;
    var p1Name;


    // Navigation

    $("#homeScreen").show();
    // When any button with nextButton class is clicked, move on to the next view.

    $(".nextButton").click(function(e) {
      var nextCard = $(this).attr("next");
      var moveAlong = true;
      switch (nextCard) {
        case "robotPage":
          moveAlong = ($("#userName").val() !== "");
          break;
        case "battlePage":
          moveAlong = ($("#userName").val() !== "");
          battleCards()
          break;
      }

      if (moveAlong) {
        $(".card").hide();
        $("." + nextCard).show();
      }
    });
    // Back Button Event listner
    $(".backButton").click(function(e) {
      var previousCard = $(this).attr("back");
      $(".card").hide();
      $("." + previousCard).show();
    });

    // Captures userName
    $("[next='robotPage']").on('click', function(e) {

      p1Name = $('#userName').val();
      console.log(p1Name)
    });
    // Allows users to select Player 1 and Player 2 robots
      $('.robotCard').on('click', function() {
        if (players.length == 0) {
          $(this).addClass('p1');
          $(".cardContent", this).html("Player 1");
          var selectedBot = $(this).attr("id");
          p1 = new Robot[selectedBot]();
          players.push(p1);
          console.log("player 1", p1);
        } else if (players.length == 1) {
            $(this).addClass('p2');
            $(".cardContent", this).html("Player 2");
            var selectedBot = $(this).attr("id");
            p2 = new Robot[selectedBot]();
            players.push(p2);
            console.log("player 2", p2);
        } else {
          $('.robotCard').off('click');
        };
      });
  // BATTLEGROUND FUNCTIONS
    function battleCards() {
      printStats(p1, p2);
    };

    function printStats(p1, p2){
      var playerOutput = `<div class="battleCard"><h3>${p1.name}<br><small> Fighting for ${p1Name}</small></h3><br><p>${p1.name} has an attack strenth of ${p1.attack}</p><br>` +
                     `Health: ${p1.health}<br>${p1.img}</div>`;
      $(".p1Stats").html(playerOutput);

      var enemyOutput = `<div class="battleCard"><h3>${p2.name}<br><small> Fighting against mankind!</small></h3><br><p>${p2.name} has an attack strenth of ${p2.attack}</p><br>` +
                     `Health: ${p2.health}<br>${p2.img}</div>`;
      $(".p2Stats").html(enemyOutput);
    }

    $("#attack").on("click", function (){
      console.log("p2 health", p2.health)
      console.log("p2 attack", p2.attack)

      console.log("p1 health", p1.health)
      console.log("p1 attack", p1.attack)
      p2.health = p2.health - p1.attack
      p1.health = p1.health - p2.attack
      printStats(p2, p1)

      if ((p2.health) <= 0) {
        alert("Game over. You win!")
      } else if (p1.health <= 0) {
        alert("Game over. You lose.")
      }
    })



  });
})(Robot || {});

