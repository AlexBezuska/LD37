class CameraFollowPlayer extends Sup.Behavior {
  update() {
    let player = Sup.getActor("Player");
    this.actor.setPosition( player.getX(), player.getY(), this.actor.getZ() );
  }
}
Sup.registerBehavior(CameraFollowPlayer);
