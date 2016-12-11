

// let dialogueBoxClear = false;
// let dialogueBoxShow = false;
// let dialogueBoxClosed = false;
let currentMessageName = "default";
// let dialogueBoxContinueArrow = true;
let chatShown = false;

function displayText(dialogueBox, currentMessageObject){
  
  dialogueBox.setVisible(true);
 
  //avatar and avatar animation
  var avatar = dialogueBox.getChild("avatar");
  if (currentMessageObject.avatar !== undefined){
    avatar.setVisible(true);
    var avatarSprite = avatar.spriteRenderer;
    var messageImageName = currentMessageObject.avatar.replace("images/", "");
    // var messageAnimation = currentMessageObject.avatarAnimation;
    
    if (avatarSprite.getSprite().name !== messageImageName) {
      avatarSprite.setSprite(currentMessageObject.avatar);
    }
    // if (avatarSprite.getAnimation() != messageAnimation) {
    //   avatarSprite.setAnimation(messageAnimation);
    // }
  } else {
    avatar.setVisible(false);
  }
  
  //set the text
  dialogueBox.getChild("dialogueBoxText").textRenderer.setText(currentMessageObject.speaker + ': "' + currentMessageObject.message + '"');
  
  var continueArrow = dialogueBox.getChild("continueArrow");
  var close = dialogueBox.getChild("close");
  
  //choices
  var option0 = dialogueBox.getChild("option0");
  var option1 = dialogueBox.getChild("option1");
  
  if (currentMessageObject.choices !== undefined){
    this.currentMessageType = "choices";
    playerFreeze = true;
    option0.setVisible(true);
    option1.setVisible(true);
    option0.textRenderer.setText(currentMessageObject.choices[0].displayText);
    option1.textRenderer.setText(currentMessageObject.choices[1].displayText);
    //hide
    continueArrow.setVisible(false);
    close.setVisible(false);
    if( Sup.Input.wasKeyJustPressed("SPACE")){
      Sup.Audio.playSound("sounds/boop");
      var current = currentMessageName;
      currentMessageName = this.dialogueTree[current].choices[this.selectedOption].next;
      Sup.log("this should go to next");
    }
    
    // multiple
  } else if (currentMessageObject.next){
    this.currentMessageType = "multiple";
    playerFreeze = true;
    continueArrow.setVisible(true);
    //hide
    close.setVisible(false);
    option0.setVisible(false);
    option1.setVisible(false);
    if( Sup.Input.wasKeyJustPressed("SPACE")){
      Sup.Audio.playSound("sounds/boop");
      var current = currentMessageName;
      currentMessageName = this.dialogueTree[current].next;
      Sup.log("this should go to next");
    }
    
    // single
  } else {
    playerFreeze = true;
    close.setVisible(true);
    //hide
    continueArrow.setVisible(false);
    option0.setVisible(false);
    option1.setVisible(false);
   if( Sup.Input.wasKeyJustPressed("SPACE")){
      Sup.Audio.playSound("sounds/boop");
    }
  }
  
}

let highlightColor = new Sup.Color(0xe8ea4c);
let white = new Sup.Color(0xffffff);

class DialoguesystemBehavior extends Sup.Behavior {
  
dialogueTree = {
   "default" : {
    speaker : "system",
    message : "I am error."
  },
  "mama" : {
    speaker : "Your Mother",
    avatar: "images/avatar-mama-snail",
    avatarAnimation: "avatar-mama-talk",
    message : "I am mama, shoe shoe little one...."
  },
   "owl" : {
    speaker : "Owl",
    avatar: "images/avatar-owl",
    avatarAnimation: "avatar-owl-talk",
    message : "I am owl, chauka chauka!.",
  },
   "wombat" : {
    speaker : "wombat",
    avatar: "images/avatar-wombat",
    avatarAnimation: "avatar-wombat-talk",
    message : "I am wombat, bow wow wow!."
  },
  "bee" : {
    speaker : "Busy Little Bee",
    avatar: "images/avatar-bee",
    avatarAnimation: "avatar-bee-talk",
    message : "I am bee, zzz zzz zzZZ!."
  },
  "turtle" : {
    speaker : "Wise old turtle",
    avatar: "images/avatar-turtle",
    avatarAnimation: "avatar-turtle-talk",
    message : "I am turtle, grup grup...."
  },
  "i-should-talk-to-mama" : {
    speaker : "You",
    message : "I should talk to the mama!",
  },
  "i-should-talk-to-owl" : {
    speaker : "You",
    message : "I should talk to the owl!",
  },
  "i-should-talk-to-wombat" : {
    speaker : "You",
    message : "I should talk to the wombat!",
  },
   "i-should-talk-to-bee" : {
    speaker : "You",
    message : "I should talk to the bee!",
  },
  "i-should-talk-to-turtle" : {
    speaker : "You",
    message : "I should talk to the turtle!",
  }
};
  
  currentMessageObject  = this.dialogueTree[currentMessageName];
  selectedOption = 0;

  update() {

    let dialogueBox = Sup.getActor("dialogueBox");
    
    if (chatShown){
      displayText(dialogueBox, this.currentMessageObject);
    } else {
        playerFreeze = false;
        dialogueBox.setVisible(false);
      }
    }

  }

Sup.registerBehavior(DialoguesystemBehavior);


//Sup.log("dialogueBoxClear:",  dialogueBoxClear);
    //Sup.log("dialogueBoxShow:",  dialogueBoxShow);
    //Sup.log("dialogueBoxClosed:",  dialogueBoxClosed);
    //Sup.log("currentMessageName:\n",currentMessageName);
    //this.currentMessageObject = this.dialogueTree[currentMessageName];
    //Sup.log("this.currentMessageObject:\n",this.currentMessageObject);
    //Sup.log("dialogueBoxContinueArrow:", dialogueBoxContinueArrow);

    
    
    
    // } else {
    //   dialogueBox.setVisible(false);
    //   dialogueBox.getChild("continueArrow").setVisible(false);
    // }
    
    
    // if (dialogueBox.getVisible() && this.dialogueTree[currentMessageName].choices !== undefined){      
    //   if (this.selectedOption === 0){
    //     dialogueBox.getChild("option0").textRenderer.setColor(highlightColor);
    //     dialogueBox.getChild("option1").textRenderer.setColor(white);
    //     if(Sup.Input.wasKeyJustPressed("RIGHT")) {
    //       Sup.Audio.playSound("sounds/option-select");
    //       this.selectedOption = 1; 
    //     }
    //   }
    //    if (this.selectedOption === 1){
    //      dialogueBox.getChild("option0").textRenderer.setColor(white);
    //     dialogueBox.getChild("option1").textRenderer.setColor(highlightColor);
    //      if(Sup.Input.wasKeyJustPressed("LEFT")){ 
    //        Sup.Audio.playSound("sounds/option-select");
    //        this.selectedOption = 0; 
    //      }
    //   }
    // }