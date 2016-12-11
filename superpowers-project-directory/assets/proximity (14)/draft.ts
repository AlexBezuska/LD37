//real
let talkTo = ["mama->owl", "owl", "mama->wombat", "wombat", "mama->bee", "bee", "mama->turtle", "turtle", "mama", "ending"];
//debug
 /talkTo = ["mama", "ending", "wombat", "bee", "turtle"];

function inProximity(actor1, actor2, radius){
  var circle1 = {radius: radius, x: actor1.getX(), y: actor1.getY()};
  var circle2 = {radius: radius, x: actor2.getX(), y: actor2.getY()};

  var dx = circle1.x - circle2.x;
  var dy = circle1.y - circle2.y;
  var distance = Math.sqrt(dx * dx + dy * dy);

  if (distance < circle1.radius + circle2.radius) {
    return true;
  }else {
    return false;
  }
}

class ProximityMessage extends Sup.Behavior {
  radius = 0.5;
  message = "default";
  
  awake() {}

  update() {
      
      if (talkTo[0] === "ending"){
        Sup.log("ending:", ending);
        ending = true;
      } else {
        
        if (Sup.Input.wasKeyJustPressed("Q")){
          Sup.log("you need to talk to:", talkTo[0].split("->", 1)[0]);
        }
        //Sup.log("dialogueBoxHasFocus", dialogueBoxHasFocus);
        if (inProximity(this.actor, Sup.getActor("Player"), this.radius) && !dialogueBoxHasFocus && !goingInShell) {

          if(!wasJustOpened) {
            //Sup.log("was just openend = false.");
            if(Sup.Input.wasKeyJustPressed("SPACE")){
            //Sup.log("pressed in proximity.");
            if (talkTo[0].indexOf(this.message) === 0){
                chatShown = true;
                Sup.log("Injecting:", talkTo[0]);
                currentMessageName = talkTo[0];
                talkTo.shift();
              } else {
                chatShown = true;
                currentMessageName = "i-should-talk-to-" + talkTo[0].split("->", 1)[0];
              }

            }
          } else {
            wasJustOpened = false;
            //Sup.log("was just openend = true.");
          }

        } 
        
      }
    
      
   
    
  }
}
Sup.registerBehavior(ProximityMessage);
