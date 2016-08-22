
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


  $('.robotCard').click(function() {
    console.log("You chose", this.id);
  });

})

