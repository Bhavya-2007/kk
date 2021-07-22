class Quiz {
    constructor() {

    }
    getState() {
      var gameStateRef = database.ref('gameState');
      gameStateRef.on("value", function (data) {
        gameState = data.val();
      })
  
    }
  
    update(state) {
      database.ref('/').update({
        gameState:state
      });
    }
  
    start() {
      if (gameState === 0) {
        player = new Player();
        player.getCount();
        form = new Forming();
        form.display();
      }
    }
    play(){
        form.hide();
        background("Green");
        text("QUIZO RESULTS",100,120);
        Player.playerinfo();
        if (allContestant !== undefined) {
         fill("blue")
         textSize()
         text("hii",130,230)
         for (var plr in allContestant) {
             var CorrectAns= "2"
            if (correctAns === allContestant[plr].answer) 
            fill("Green")
            else 
            fill("Red");
        }
    } 
}
}