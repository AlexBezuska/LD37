let fps = {
    startTime : 0,
    frameNumber : 0,
    getFPS : function() {
        this.frameNumber++;
        let d = new Date().getTime();
        let currentTime = ( d - this.startTime ) / 1000;
        let result = Math.floor( ( this.frameNumber / currentTime ) );
        
        if( currentTime > 1 ) {
            this.startTime = new Date().getTime();
            this.frameNumber = 0;
        }
        return result;
    }
};

class RenderFPS extends Sup.Behavior {
  awake() {
    
  }

  update() {
    this.actor.textRenderer.setText("FPS:" + fps.getFPS());
  }
}
Sup.registerBehavior(RenderFPS);
