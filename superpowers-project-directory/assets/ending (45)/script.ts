let ending = false;

class endingScript extends Sup.Behavior {
  counter = 200;
  update() {
    if (ending && !chatShown){
      this.counter--;
      Sup.log(this.counter);
      if(this.counter < 0){
        Sup.getActor("ending prompt").setVisible(true);
         if (Sup.Input.wasKeyJustPressed("SPACE")){
          Sup.getActor("ending prompt").setVisible(false);
          Sup.loadScene("Inside");
           
          //cleanup for replays
          ending = false;
          this.counter = 0;
          talkTo = ["mama->owl", "owl", "mama->wombat", "wombat", "mama->bee", "bee", "mama->turtle", "turtle", "mama", "ending"];
        }
      }
      
    } 
  }
}
Sup.registerBehavior(endingScript);
