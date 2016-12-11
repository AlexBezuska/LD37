class FixDrawOrder extends Sup.Behavior {
  awake() {
    
  }

  update() {
    this.actor.setZ( -this.actor.getY() );
  }
}
Sup.registerBehavior(FixDrawOrder);
