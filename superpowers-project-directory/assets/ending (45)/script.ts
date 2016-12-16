let ending = false;
let goingInShell = false;
let goingInShellTimer = 150;

class endingScript extends Sup.Behavior {
  counter = 200;
  update() {
    
     
     if(goingInShell){
          if(goingInShellTimer < 125){
           Sup.getActor("Player").spriteRenderer.stopAnimation();
            Sup.getActor("Player").spriteRenderer.setAnimation("snail-enter-shell-done", false);
          }else {
            Sup.getActor("Player").spriteRenderer.playAnimation();
          }
          //Sup.log("this.goingInShellTimer", goingInShellTimer);
          goingInShellTimer--;
        }
    
    
    if(goingInShellTimer < 0){
      //Sup.log("timer still going");
      goingInShellTimer = 0;
      goingInShell = false;
      Sup.loadScene("Inside");
    }
    
    
    if (ending && !chatShown){
      this.counter--;
      Sup.log(this.counter);
      if(this.counter < 0){
        Sup.getActor("ending prompt").setVisible(true);
        
       
        
        
         if (Sup.Input.wasKeyJustPressed("SPACE")){
          Sup.getActor("ending prompt").setVisible(false);
          goingInShell = true;
           Sup.getActor("Player").spriteRenderer.setAnimation("snail-enter-shell", false);
           Sup.Audio.playSound("sounds/go-in");
           
          
           
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
