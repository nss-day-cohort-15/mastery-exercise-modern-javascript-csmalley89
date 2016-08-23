
$(document).ready(function(){
    var robot;

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
      case "weaponPage":
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

      var p1Name = $('#userName').val();
      console.log(p1Name)
  });


// Allows users to select Player 1 and Player 2 robots
  $('.robotCard').on('click', function(a){
    $(this).addClass('p1');
    $(".cardContent", this).html("Player 1");
    console.log("Player 1 is", this.id);
    $('.robotCard').on("click", function(b){
      $(this).removeClass('p1')
      $(this).addClass('p2');
      $(".cardContent", this).html("Player 2");
      console.log("Player 2 is", this.id);
    });
    $('.robotCard').click(function(){
      $('.robotCard').off('click');
    });
  });




})

