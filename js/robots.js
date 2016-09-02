
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
    this.health = Math.floor(Math.random() * (120 - 60) + 60);
    this.attack = Math.floor(Math.random() * (80 - 50) + 50);
  };
  robot.GoodGuy.prototype = new robot.BaseBot();

  robot.Bender = function(){
    this.name = "Bender";
    this.img = `<img>/../img/bender.png />`;
    this.health += -5;
    this.damage += 5;
  };
  robot.Bender = new robot.GoodGuy();

  robot.Url = function(){
    this.name = "URL";
    this.img = `<img>/../img/url.png />`;
    this.health += 0;
    this.damage += 10;
  };
  robot.Url = new robot.GoodGuy();

  robot.KwanzaaBot = function(){
    this.name = "Kwanzaa Bot";
    this.img = `<img>/../img/kwanzaaBot.png />`;
    this.health += 5;
    this.damage += -10;
  };
  robot.KwanzaaBot = new robot.GoodGuy();

  // EVIL BOTS
  // low health, high attack
  robot.EvilBot = function(){
    this.class = "Evil League"
    this.health = Math.floor(Math.random() * (80 - 50) + 50);
    this.attack = Math.floor(Math.random() * (120 - 60) + 60);
  };
  robot.GoodGuy.prototype = new robot.BaseBot();

  robot.Devil = function(){
    this.name = "Robot Devil";
    this.img = `<img>/../img/robotDevil.png />`;
    this.health += -5;
    this.damage += 5;
  };
  robot.Devil = new robot.EvilBot();

  robot.Santa = function(){
    this.name = "Robot Santa";
    this.img = `<img>/../img/santa.png />`;
    this.health += 0;
    this.damage += 10;
  };
  robot.Santa = new robot.EvilBot();

  robot.Roberto = function(){
    this.name = "Roberto";
    this.img = `<img>/../img/roberto.png />`;
    this.health += 5;
    this.damage += -10;
  };
  robot.Roberto = new robot.EvilBot();

  // BATTLE LEAGUE
  // med health, med attack
  robot.BattleBot = function(){
    this.class = "Battle League"
    this.health = Math.floor(Math.random() * (100 - 55) + 55);
    this.attack = Math.floor(Math.random() * (100 - 55) + 55);
  };
  robot.GoodGuy.prototype = new robot.BaseBot();

  robot.BillionaireBot = function(){
    this.name = "BillionaireBot";
    this.img = `<img>/../img/billionaireBot.png />`;
    this.health += -5;
    this.damage += 5;
  };
  robot.BillionaireBot = new robot.BattleBot();

  robot.Destructor = function(){
    this.name = "Destructor";
    this.img = `<img>/../img/destructor.png />`;
    this.health += 0;
    this.damage += 10;
  };
  robot.Destructor = new robot.BattleBot();

  robot.Clearcutter = function(){
    this.name = "Clearcutter";
    this.img = `<img>/../img/clearcutter.png />`;
    this.health += 5;
    this.damage += -10;
  };
  robot.Clearcutter = new robot.BattleBot();

  return robot;

})(Robot || {});
