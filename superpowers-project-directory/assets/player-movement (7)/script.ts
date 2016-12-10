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
    
  }

  update() {
    
    let body = this.actor.arcadeBody2D;
    let velocity = body.getVelocity();
    let sprite = this.actor.spriteRenderer;
    Sup.log(Sup.ArcadePhysics2D.getAllBodies());
    Sup.ArcadePhysics2D.collides(body, Sup.ArcadePhysics2D.getAllBodies());
    
    
    if (!playerFreeze) {
      if (Sup.Input.isKeyDown("LEFT")){ 
        sprite.setHorizontalFlip(true);
        velocity.x = -this.speed;
      } else if (Sup.Input.isKeyDown("RIGHT")){ 
        sprite.setHorizontalFlip(false);
        velocity.x = this.speed;  
      } else { 
        velocity.x = 0; 
      }
      
      if (Sup.Input.isKeyDown("UP")){ 
        velocity.y = this.speed;  
      } else if (Sup.Input.isKeyDown("DOWN")){ 
        velocity.y = -this.speed;    
      } else { 
        velocity.y = 0;
      }

    }
  
    body.setVelocity(velocity);
    
  }
}
Sup.registerBehavior(PlayermovementBehavior);
