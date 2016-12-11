class changeSceneKey extends Sup.Behavior {
  key = "SPACE";
  sceneToChangeTo = "Title";
  update() {
    if (Sup.Input.wasKeyJustReleased(this.key)) {
        Sup.loadScene(this.sceneToChangeTo);
    }
  }
}
Sup.registerBehavior(changeSceneKey);
