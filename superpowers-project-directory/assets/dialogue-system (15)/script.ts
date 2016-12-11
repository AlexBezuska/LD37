// let dialogueBoxClear = false;
// let dialogueBoxShow = false;
// let dialogueBoxClosed = false;
let currentMessageName = "default";
// let dialogueBoxContinueArrow = true;
let chatShown = false;
let shouldCloseChat = false;
let dialogueBoxHasFocus = false;
let wasJustOpened = false;
let highlightColor = new Sup.Color(0xe8ea4c);
let white = new Sup.Color(0xffffff);

class DialoguesystemBehavior extends Sup.Behavior {

    dialogueTree = {
        "default": {
            speaker: "swystem_message.exe has errodge",
            message: "I am error. Nobody should ever see this \n\n fire the developer."
        },
      
      
      
        "mama->owl": {
            speaker: "You",
            avatar: "images/avatar-mama-snail",
            avatarAnimation: "avatar-mama-talk",
            message: "Mama, why don't we have a home like the \n\n other animals in the forest?",
            next: "mama->owl 2"
        },
      
        "mama->owl 2": {
            speaker: "Your Mother",
            avatar: "images/avatar-mama-snail",
            avatarAnimation: "avatar-mama-talk",
            message: "There there little one, I assure you we do have \n\n homes, everything in the forest has its place, \n\n and in our case our place has us...",
            next: "mama->owl 3"
        },
        "mama->owl 3": {
            speaker: "Your Mother",
            avatar: "images/avatar-mama-snail",
            avatarAnimation: "avatar-mama-talk",
            message: "Maybe you should talk to the owl and see what \n\n kind of home they have..."
        },
      
      
      
      
      
        "owl": {
            speaker: "Owl",
            avatar: "images/avatar-owl",
            avatarAnimation: "avatar-owl-talk",
            message: "Hello there slow poke, what brings you by our great oak?",
            next: "owl2"
        },
        "owl2": {
            speaker: "You",
            avatar: "images/avatar-owl",
            avatarAnimation: "avatar-owl-talk",
            message: "I see you live in a great big tree, high above the mess and \n\n sprawl of the forest floor",
            next: "owl3"
        },
        "owl3": {
            speaker: "Owl",
            avatar: "images/avatar-owl",
            avatarAnimation: "avatar-owl-talk",
            message: "My home IS fantastic, our tree hole protects us and lets \n\n us look all everything happening below.",
            next: "owl4"
        },
        "owl4": {
            speaker: "You",
            avatar: "images/avatar-owl",
            avatarAnimation: "avatar-owl-talk",
            message: "I have no home to keep me safe high above the mess and \n\n sprawl, I have no place to look out from..."
        },
      
      
      
      
         "mama->wombat": {
            speaker: "You",
            avatar: "images/avatar-mama-snail",
            avatarAnimation: "avatar-mama-talk",
            message: "Mama, why don't we have a home up high, to keep us safe and \n\n watch from the sky?",
            next: "mama->wombat 2"
        },
      
        "mama->wombat 2": {
            speaker: "Your Mother",
            avatar: "images/avatar-mama-snail",
            avatarAnimation: "avatar-mama-talk",
            message: "There there little one, I assure you we do have \n\n homes, everything in the forest has its place, \n\n and in our case our place has us...",
            next: "mama->wombat 3"
        },
        "mama->wombat 3": {
            speaker: "Your Mother",
            avatar: "images/avatar-mama-snail",
            avatarAnimation: "avatar-mama-talk",
            message: "Maybe you should talk to a wombat down the way \n\n and see where they like to stay..."
        },
      
      
      
      
         "wombat": {
            speaker: "wombat",
            avatar: "images/avatar-wombat",
            avatarAnimation: "avatar-wombat-talk",
            message: "Oh hello tiny one, what brings you by our den today?",
            next: "wombat2"
        },
        "wombat2": {
            speaker: "You",
            avatar: "images/avatar-wombat",
            avatarAnimation: "avatar-wombat-talk",
            message: "...",
            next: "wombat3"
        },
        "wombat3": {
            speaker: "wombat",
            avatar: "images/avatar-wombat",
            avatarAnimation: "avatar-wombat-talk",
            message: "Inside the ground is where me and my brothers call home. \n\n My mama was thourough when she dug out our burrow. \n\n We share our space and keep each other safe.",
            next: "wombat4"
        },
        "wombat4": {
            speaker: "You",
            avatar: "images/avatar-wombat",
            avatarAnimation: "avatar-wombat-talk",
            message: "I have no brothers to share my space, my one room can only fit just me."
        },
      
      
      
      
        "mama->bee": {
            speaker: "You",
            avatar: "images/avatar-mama-snail",
            avatarAnimation: "avatar-mama-talk",
            message: "Mama, why don't we have a burrow with lots of space",
            next: "mama->bee 2"
        },
      
        "mama->bee 2": {
            speaker: "Your Mother",
            avatar: "images/avatar-mama-snail",
            avatarAnimation: "avatar-mama-talk",
            message: "There there little one, I assure you we do have \n\n homes, everything in the forest has its place, \n\n and in our case our place has us...",
            next: "mama->bee 3"
        },
        "mama->bee 3": {
            speaker: "Your Mother",
            avatar: "images/avatar-mama-snail",
            avatarAnimation: "avatar-mama-talk",
            message: "Maybe you should talk to a bee near the old grove \n\n see about what they call home..."
        },
      
      
      
      
      
        "bee": {
            speaker: "bee",
            avatar: "images/avatar-bee",
            avatarAnimation: "avatar-bee-talk",
            message: "Hail queen esther! \n\n Oh hello I didn't zzzee you down there.... ",
            next: "bee2"
        },
        "bee2": {
            speaker: "You",
            avatar: "images/avatar-bee",
            avatarAnimation: "avatar-bee-talk",
            message: "I hear in this forest you bees buzz and thrive, \n\n why may I ask if it has to do with your hive?",
            next: "bee3"
        },
        "bee3": {
            speaker: "bee",
            avatar: "images/avatar-bee",
            avatarAnimation: "avatar-bee-talk",
            message: "Well for those of us that buzz we each have a task, \n\n and do what the queen asked it is our duty to serve.",
            next: "bee5"
        },
       "bee5": {
            speaker: "bee",
            avatar: "images/avatar-bee",
            avatarAnimation: "avatar-bee-talk",
            message: "Upon waxy beds we each lay our head... \n\n It's hexagonal chambers protect us from dangers.... \n\n What it secreets is golden and sweet.",
            next: "bee6"
        },
        "bee6": {
            speaker: "You",
            avatar: "images/avatar-bee",
            avatarAnimation: "avatar-wombat-talk",
            message: "Thank you kind bee - for all you've taught me, \n\n I'm sure you must get back to work!"
        },
      
      
      
      
      
      
        "mama->turtle": {
            speaker: "You",
            avatar: "images/avatar-mama-snail",
            avatarAnimation: "avatar-mama-talk",
            message: "Mama, why don't we have a queen to serve, \n\n sweets to eat, and jobs to do?",
            next: "mama->turtle 2"
        },
      
        "mama->turtle 2": {
            speaker: "Your Mother",
            avatar: "images/avatar-mama-snail",
            avatarAnimation: "avatar-mama-talk",
            message: "There there little one, I assure you we do have \n\n homes, everything in the forest has its place, and in our case \n our place has us...",
            next: "mama->turtle 3"
        },
        "mama->turtle 3": {
            speaker: "Your Mother",
            avatar: "images/avatar-mama-snail",
            avatarAnimation: "avatar-mama-talk",
            message: "Maybe you should talk to the old turtle by the lake \n\n but don't fall in for goodness\' sake..."
        },
      
      
      
      
      
      "turtle": {
            speaker: "You",
            avatar: "images/avatar-turtle",
            avatarAnimation: "avatar-turtle-talk",
            message: "Hello turtle, would you tell me about your pond?",
            next: "turtle2"
        },
      "turtle2": {
            speaker: "turtle",
            avatar: "images/avatar-turtle",
            avatarAnimation: "avatar-turtle-talk",
            message: "Hello there little one, being by the pong IS fun, but \n\n tomorrow I'll be on the run...",
            next: "turtle3"
        },
        "turtle3": {
            speaker: "You",
            avatar: "images/avatar-turtle",
            avatarAnimation: "avatar-turtle-talk",
            message: "Don't you have a place to call your own?",
            next: "turtle4"
        },
        "turtle4": {
            speaker: "wombat",
            avatar: "images/avatar-turtle",
            avatarAnimation: "avatar-turtle-talk",
            message: "Let me will explain - \n\n Folks like us are one in the same! \n\n Our shell is our home, it allows us to roam.",
            next: "turtle5"
        },
      
        "turtle5": {
            speaker: "wombat",
            avatar: "images/avatar-turtle",
            avatarAnimation: "avatar-turtle-talk",
            message: "It takes me places and I bring it along. \n\n It's part of us, and us part of home.",
            next: "turtle6"
        },
        "turtle6": {
            speaker: "You",
            avatar: "images/avatar-turtle",
            avatarAnimation: "avatar-turtle-talk",
            message: "....!"
        },
      
      
      
      
      
      
        "mama": {
          speaker: "You",
          avatar: "images/avatar-mama-snail",
          avatarAnimation: "avatar-mama-talk",
          message: "Mama, mama! I need to tell you what the wise turtle told me.",
          next: "mama 2"
        },
        "mama 2": {
          speaker: "Your Mother",
          avatar: "images/avatar-mama-snail",
          avatarAnimation: "avatar-mama-talk",
          message: "Oh, well tell me what you've learned!",
          next: "mama 3"
        },
        "mama 3": {
          speaker: "You",
          avatar: "images/avatar-mama-snail",
          avatarAnimation: "avatar-mama-talk",
          message: "I may not live in a hive of royalty, \n\na burrow with fuzzy brothers, \n\nor a perch up high in a tree...",
          next: "mama 4"
        },

        "mama 4": {
          speaker: "You",
          avatar: "images/avatar-mama-snail",
          avatarAnimation: "avatar-mama-talk",
          message: "But I do have a home I can take along with me!",
          next: "mama 5"
        },
       "mama 5": {
          speaker: "You",
          avatar: "images/avatar-mama-snail",
          avatarAnimation: "avatar-mama-talk",
          message: "It gives me the freedom to travel and explore, \n\nand you know I always want to see more.",
          next: "mama 6"
        },
      
        "mama 6": {
          speaker: "You",
          avatar: "images/avatar-mama-snail",
          avatarAnimation: "avatar-mama-talk",
          message: "It may be small, but I'm tiny after all...",
          next: "mama 7"
        },

        "mama 7": {
          speaker: "You",
          avatar: "images/avatar-mama-snail",
          avatarAnimation: "avatar-mama-talk",
          message: "It may be humble but \n\nI'm part of it and It's part of me \n\nand thats the only way I would want it to be!",
        },
      
      
      
      
      
        "i-should-talk-to-mama": {
            speaker: "You",
            message: "I should talk to mama!",
        },
        "i-should-talk-to-owl": {
            speaker: "You",
            message: "I should talk to the owl!",
        },
        "i-should-talk-to-wombat": {
            speaker: "You",
            message: "I should talk to the wombat!",
        },
        "i-should-talk-to-bee": {
            speaker: "You",
            message: "I should talk to the bee!",
        },
        "i-should-talk-to-turtle": {
            speaker: "You",
            message: "I should talk to the turtle!",
        }
    };

    currentMessageObject = this.dialogueTree["default"];
    selectedOption = 0;

    update() {
        this.currentMessageObject = this.dialogueTree[currentMessageName];
        let dialogueBox = Sup.getActor("dialogueBox");

        if (chatShown) {
          

            dialogueBox.setVisible(true);

            //avatar and avatar animation
            var avatar = dialogueBox.getChild("avatar");
            if (this.dialogueTree[currentMessageName].avatar !== undefined) {
                avatar.setVisible(true);
              //Sup.Audio.playSound("sounds/subtle-blip");
                var avatarSprite = avatar.spriteRenderer;
                var messageImageName = this.dialogueTree[currentMessageName].avatar.replace("images/", "");
                // var messageAnimation = currentMessageObject.avatarAnimation;

                if (avatarSprite.getSprite().name !== messageImageName) {
                    avatarSprite.setSprite(this.dialogueTree[currentMessageName].avatar);
                }
                // if (avatarSprite.getAnimation() != messageAnimation) {
                //   avatarSprite.setAnimation(messageAnimation);
                // }
            } else {
                avatar.setVisible(false);
            }

            //set the text
            dialogueBox.getChild("dialogueBoxText").textRenderer.setText(this.dialogueTree[currentMessageName].speaker + ': "' + this.dialogueTree[currentMessageName].message + '"');

            var continueArrow = dialogueBox.getChild("continueArrow");
            var close = dialogueBox.getChild("close");

            //choices
            var option0 = dialogueBox.getChild("option0");
            var option1 = dialogueBox.getChild("option1");

            if (this.dialogueTree[currentMessageName].choices) {
                dialogueBoxHasFocus = true;
                playerFreeze = true;
                option0.setVisible(true);
                option1.setVisible(true);
                option0.textRenderer.setText(this.dialogueTree[currentMessageName].choices[0].displayText);
                option1.textRenderer.setText(this.dialogueTree[currentMessageName].choices[1].displayText);
                //hide
                continueArrow.setVisible(false);
                close.setVisible(false);
                if (Sup.Input.wasKeyJustPressed("SPACE")) {
                    //Sup.Audio.playSound("sounds/subtle-blip");
                    var current = currentMessageName;
                    currentMessageName = this.dialogueTree[current].choices[this.selectedOption].next;
                    //Sup.log("this should go to next");
                    // dont allow it to close
                    
                }

                // multiple
                //Sup.log(this.dialogueTree[currentMessageName]);
            } else if (this.dialogueTree[currentMessageName].next) {
                dialogueBoxHasFocus = true;
                playerFreeze = true;
                continueArrow.setVisible(true);
                //hide
                close.setVisible(false);
                option0.setVisible(false);
                option1.setVisible(false);
                if (Sup.Input.wasKeyJustPressed("SPACE")) {
                    //Sup.Audio.playSound("sounds/subtle-blip");
                    var current = currentMessageName;

                    currentMessageName = this.dialogueTree[current].next;
                    //Sup.log("this should go to next");
                    // dont allow it to close
                   
                }

                // single
            } else {
                playerFreeze = true;
                close.setVisible(true);
                //hide
                continueArrow.setVisible(false);
                option0.setVisible(false);
                option1.setVisible(false);
                if (Sup.Input.wasKeyJustPressed("SPACE")) {
                    //Sup.Audio.playSound("sounds/boop");
                    //Sup.log("this should close.");
                    chatShown = false;
                    wasJustOpened = true;
                  dialogueBoxHasFocus = false;
                }
            }


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