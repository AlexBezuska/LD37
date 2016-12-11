class SceneChangeObject extends Sup.Behavior {
  other = "Player";
  sceneToChangeTo = "Overworld";

  update() {
    if (Sup.ArcadePhysics2D.collides(this.actor.arcadeBody2D, Sup.getActor(this.other).arcadeBody2D)) {
        Sup.loadScene(this.sceneToChangeTo);
    }
  }
}
Sup.registerBehavior(SceneChangeObject);
