

let dialogueBoxClear = false;
let dialogueBoxShow = false;
let dialogueBoxClosed = false;
let currentMessageName = "default";
let dialogueBoxContinueArrow = true;



function displayText(dialogueBox, currentMessageObject){
  
  dialogueBox.setVisible(true);
 
  //avatar and avatar animation
//   var avatar = dialogueBox.getChild("avatar");
//   if (currentMessageObject.avatar !== undefined){
//     avatar.setVisible(true);
//     var avatarSprite = avatar.spriteRenderer;
//     var messageImageName = currentMessageObject.avatar.replace("Images/", "");
//     var messageAnimation = currentMessageObject.avatarAnimation;
    
//     if (avatarSprite.getSprite().name != messageImageName) {
//       avatarSprite.setSprite(currentMessageObject.avatar);
//     }
//     if (avatarSprite.getAnimation() != messageAnimation) {
//       avatarSprite.setAnimation(messageAnimation);
//     }
//   } else {
//     avatar.setVisible(false);
//   }
  
  //set the text
  dialogueBox.getChild("dialogueBoxText").textRenderer.setText(currentMessageObject.speaker + ': "' + currentMessageObject.message + '"');
  
  var continueArrow = dialogueBox.getChild("continueArrow");
  var close = dialogueBox.getChild("close");
  
  //choices
  var option0 = dialogueBox.getChild("option0");
  var option1 = dialogueBox.getChild("option1");
  
  if (currentMessageObject.choices){
    playerFreeze = true;
    option0.setVisible(true);
    option1.setVisible(true);
    option0.textRenderer.setText(currentMessageObject.choices[0].displayText);
    option1.textRenderer.setText(currentMessageObject.choices[1].displayText);
    //hide
    continueArrow.setVisible(false);
    close.setVisible(false);
    
    // multiple
  } else if (currentMessageObject.next){
    playerFreeze = false;
    continueArrow.setVisible(true);
    //hide
    close.setVisible(false);
    option0.setVisible(false);
    option1.setVisible(false);
    
    // single
  } else {
    playerFreeze = false;
    close.setVisible(true);
    //hide
    continueArrow.setVisible(false);
    option0.setVisible(false);
    option1.setVisible(false);
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
    avatar: "Images/avatar-mama",
    avatarAnimation: "avatar-mama-talk",
    message : "I am mama, shoe shoe...."
  },
   "owl" : {
    speaker : "Owl",
    avatar: "Images/avatar-owl",
    avatarAnimation: "avatar-owl-talk",
    message : "I am owl, chauka chauka!.",
  },
   "fox" : {
    speaker : "Fox",
    avatar: "Images/avatar-fox",
    avatarAnimation: "avatar-fox-talk",
    message : "I am fox, bow wow wow!."
  },
  "bee" : {
    speaker : "Busy Little Bee",
    avatar: "Images/avatar-bee",
    avatarAnimation: "avatar-bee-talk",
    message : "I am bee, zzz zzz zzZZ!."
  },
  "turtle" : {
    speaker : "Wise old turtle",
    avatar: "Images/avatar-turtle",
    avatarAnimation: "avatar-turtle-talk",
    message : "I am turtle, grup grup...."
  }
};
  
  currentMessageObject  = this.dialogueTree["default"];
  selectedOption = 0;

  update() {
    
    //Sup.log("dialogueBoxClear:",  dialogueBoxClear);
    //Sup.log("dialogueBoxShow:",  dialogueBoxShow);
    //Sup.log("dialogueBoxClosed:",  dialogueBoxClosed)
    //Sup.log("currentMessageName:\n",currentMessageName);
    this.currentMessageObject = this.dialogueTree[currentMessageName];
    //Sup.log("this.currentMessageObject:\n",this.currentMessageObject);
    //Sup.log("dialogueBoxContinueArrow:", dialogueBoxContinueArrow);

    let dialogueBox = Sup.getActor("dialogueBox");
    
    if (dialogueBoxShow && !dialogueBoxClosed){
      displayText(dialogueBox, this.currentMessageObject);
    } else {
      dialogueBox.setVisible(false);
      dialogueBox.getChild("continueArrow").setVisible(false);
    }
    
    if (dialogueBoxClear){
      dialogueBoxShow = false;
    }
    
    if (dialogueBox.getVisible() && this.dialogueTree[currentMessageName].choices !== undefined){      
      if (this.selectedOption === 0){
        dialogueBox.getChild("option0").textRenderer.setColor(highlightColor);
        dialogueBox.getChild("option1").textRenderer.setColor(white);
        if(Sup.Input.wasKeyJustPressed("RIGHT")) {
          Sup.Audio.playSound("sounds/option-select");
          this.selectedOption = 1; 
        }
      }
       if (this.selectedOption === 1){
         dialogueBox.getChild("option0").textRenderer.setColor(white);
        dialogueBox.getChild("option1").textRenderer.setColor(highlightColor);
         if(Sup.Input.wasKeyJustPressed("LEFT")){ 
           Sup.Audio.playSound("sounds/option-select");
           this.selectedOption = 0; 
         }
      }
    }
      
    if(dialogueBox.getVisible() && Sup.Input.wasKeyJustPressed("SPACE")){

      // multiple
      if (dialogueBox.getChild("close").getVisible()){
        Sup.Audio.playSound("sounds/close");
        dialogueBoxClosed = true;
        dialogueBoxClear = true;
      }

      //single
      else if (dialogueBox.getChild("continueArrow").getVisible()){
        Sup.Audio.playSound("sounds/select");
        var current = currentMessageName;
        currentMessageName = this.dialogueTree[current].next;
      } 

      //choices
      else if (dialogueBox.getChild("option0").getVisible()){
        Sup.Audio.playSound("sounds/select");
        var current = currentMessageName;
        currentMessageName = this.dialogueTree[current].choices[this.selectedOption].next;
      } 

      //error
      else {
        Sup.log("some sort of error!"); 
      }
    } 
  }
}

Sup.registerBehavior(DialoguesystemBehavior);