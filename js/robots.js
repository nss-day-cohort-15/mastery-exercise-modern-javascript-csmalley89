
var Robot = (function(robot){


  // Base Robot Function
  robot.BaseBot = function() {
    this.name = null;
    this.img = null;
    this.class = null;
    this.health = 0;
    this.attack = 0;
  };

  // GOOD GUY BOTS
  // high heath, low attack
  robot.GoodGuy = function(){
    this.class = "Good Guy League"
    this.health = Math.floor(Math.random() * (120 - 60) + 60)*2;
    this.attack = Math.floor(Math.random() * (80 - 50) + 50)/2;
  };
  robot.GoodGuy.prototype = new robot.BaseBot();

  robot.Bender = function(){
    this.name = "Bender";
    this.img = `<img src="/../img/bender.png">`;
    this.health += -5;
    this.attack += 5;
  };
  robot.Bender.prototype = new robot.GoodGuy();


  robot.Url = function(){
    this.name = "URL";
    this.img = `<img src="/../img/url.png">`;
    this.health += 0;
    this.attack += 10;
  };
  robot.Url.prototype = new robot.GoodGuy();


  robot.KwanzaaBot = function(){
    this.name = "Kwanzaa Bot";
    this.img = `<img src="/../img/kwanzaaBot.png">`;
    this.health += 5;
    this.attack += -10;
  };
  robot.KwanzaaBot.prototype = new robot.GoodGuy();


  // EVIL BOTS
  // low health, high attack
  robot.EvilBot = function(){
    this.class = "Evil League"
    this.health = Math.floor(Math.random() * (80 - 50) + 50)*2;
    this.attack = Math.floor(Math.random() * (120 - 60) + 60)/2;
  };
  robot.GoodGuy.prototype = new robot.BaseBot();

  robot.Devil = function(){
    this.name = "Robot Devil";
    this.img = `<img src="/../img/robotDevil.png">`;
    this.health += -5;
    this.attack += 5;
  };
  robot.Devil.prototype = new robot.EvilBot();


  robot.Santa = function(){
    this.name = "Robot Santa";
    this.img = `<img src="/../img/santa.png">`;
    this.health += 0;
    this.attack += 10;
  };
  robot.Santa.prototype = new robot.EvilBot();

  robot.Roberto = function(){
    this.name = "Roberto";
    this.img = `<img src="/../img/roberto.png">`;
    this.health += 5;
    this.attack += -10;
  };
  robot.Roberto.prototype = new robot.EvilBot();


  // BATTLE LEAGUE
  // med health, med attack
  robot.BattleBot = function(){
    this.class = "Battle League"
    this.health = Math.floor(Math.random() * (100 - 55) + 55)*2;
    this.attack = Math.floor(Math.random() * (100 - 55) + 55)/2;
  };
  robot.GoodGuy.prototype = new robot.BaseBot();


  robot.BillionaireBot = function(){
    this.name = "BillionaireBot";
    this.img = `<img src="/../img/billionaireBot.png">`;
    this.health += -5;
    this.attack += 5;
  };
  robot.BillionaireBot.prototype = new robot.BattleBot();


  robot.Destructor = function(){
    this.name = "Destructor";
    this.img = `<img src="/../img/destructor.png">`;
    this.health += 0;
    this.attack += 10;
  };
  robot.Destructor.prototype = new robot.BattleBot();



  robot.Clearcutter = function(){
    this.name = "Clearcutter";
    this.img = `<img src="/../img/clearcutter.png">`;
    this.health += 5;
    this.attack += -10;
  };
  robot.Clearcutter.prototype = new robot.BattleBot();


  return robot;


})(Robot || {});
