let playerFreeze = false;

class PlayermovementBehavior extends Sup.Behavior {
 
  speed = 0.05;
  
  // array to store multiple bodies
  //solidBodies: Sup.ArcadePhysics2D.Body[] = [];
  
  
  awake() {
    // collect all bodies into a list
    // let solidActors = Sup.getActor("Solids").getChildren();
    // for (let solidActor of solidActors) {
    //   this.solidBodies.push(solidActor.arcadeBody2D);
    // }
     Sup.Audio.playSound("sounds/amb", 1);
    
  }

  update() {
    
    let body = this.actor.arcadeBody2D;
    let velocity = body.getVelocity();
    let sprite = this.actor.spriteRenderer;
    //Sup.log(Sup.ArcadePhysics2D.getAllBodies());

    Sup.ArcadePhysics2D.collides(body, Sup.ArcadePhysics2D.getAllBodies());
    
    
    if (!playerFreeze) {
      if (Sup.Input.isKeyDown("LEFT") || Sup.Input.isKeyDown("A")){ 
        sprite.setHorizontalFlip(true);
        velocity.x = -this.speed;
      } else if (Sup.Input.isKeyDown("RIGHT") || Sup.Input.isKeyDown("D")){ 
        sprite.setHorizontalFlip(false);
        velocity.x = this.speed; 
      } else { 
        velocity.x = 0; 
      }
      
      if (Sup.Input.isKeyDown("UP") || Sup.Input.isKeyDown("W")){ 
        velocity.y = this.speed;  
      } else if (Sup.Input.isKeyDown("DOWN") || Sup.Input.isKeyDown("S")){ 
        velocity.y = -this.speed;
      } else { 
        velocity.y = 0;
      }
      
      if (velocity.x !== 0 || velocity.y !== 0){
      // Sup.log(sprite.getAnimation());
      // sprite.setAnimation("snail-moving", true);
        sprite.playAnimation();
      } else {
        sprite.pauseAnimation();
      }
      
    } else {
      velocity.x = 0; 
      velocity.y = 0;
    }
   
    
  body.setVelocity(velocity);
    

    if (Sup.getActor("foreground-barrier")){
      
       if(Sup.ArcadePhysics2D.collides(body, Sup.getActor("foreground-barrier").arcadeBody2D)) {
        Sup.getActor("foreground").setVisible(true);
      } else {
        Sup.getActor("foreground").setVisible(false);
      }

      if (Sup.ArcadePhysics2D.collides(body, Sup.getActor("picture frame").arcadeBody2D)
        && Sup.getActor("one last thing").getVisible() 
        && Sup.Input.wasKeyJustReleased("SPACE")){
        Sup.getActor("picture frame").setVisible(true);
        Sup.getActor("one last thing").setVisible(false);
        Sup.getActor("space to end").setVisible(true);

      } else if(Sup.ArcadePhysics2D.collides(body, Sup.getActor("picture frame").arcadeBody2D) 
        && !Sup.getActor("picture frame").getVisible()
        && Sup.Input.wasKeyJustReleased("SPACE")) {
        Sup.getActor("one last thing").setVisible(true);
      } else if(Sup.getActor("space to end").getVisible()
        && Sup.Input.wasKeyJustReleased("SPACE")) {
        
        Sup.loadScene("Title");
      }
      
    }
    
   
    
   
    
    
  }
}
Sup.registerBehavior(PlayermovementBehavior);
