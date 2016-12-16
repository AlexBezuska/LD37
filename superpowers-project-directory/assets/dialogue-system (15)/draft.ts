// let dialogueBoxClear = false;
// let dialogueBoxShow = false;
// let dialogueBoxClosed = false;
let currentMessageName = "default";
// let dialogueBoxContinueArrow = true;
let chatShown = false;
let shouldCloseChat = false;
//let dialogueBoxHasFocus = false;
let wasJustOpened = false;
// let highlightColor = new Sup.Color(0xe8ea4c);
// let white = new Sup.Color(0xffffff);

class DialoguesystemBehavior extends Sup.Behavior {

    dialogueTree = {
        "default": {
            speaker: "swystem_message.exe has errodge",
            message: "I am error. Nobody should ever see this \n fire the developer."
        },
      
      
        "mama->owl": {
            speaker: "You",
            avatar: "images/avatar-mama-snail",
            avatarAnimation: "avatar-mama-talk",
            message: "Mama, why don't we have a nice home like the \n other animals in the forest?",
            next: "mama->owl 2"
        },
      
        "mama->owl 2": {
            speaker: "Your Mother",
            avatar: "images/avatar-mama-snail",
            avatarAnimation: "avatar-mama-talk",
            message: "There, there little one, I assure you we do have \n great homes, everything in the forest has it's place, \n and in our case our place has us...",
            next: "mama->owl 3"
        },
        "mama->owl 3": {
            speaker: "Your Mother",
            avatar: "images/avatar-mama-snail",
            avatarAnimation: "avatar-mama-talk",
            message: "Maybe you should talk to the owl down the bend and see what \n kind of home they like to live in..."
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
            message: "I see you live in a great big tree, high above the \n busyness of the forest floor",
            next: "owl3"
        },
        "owl3": {
            speaker: "Owl",
            avatar: "images/avatar-owl",
            avatarAnimation: "avatar-owl-talk",
            message: "My home IS fantastic, our tree hole protects us and lets \n us look down at everything happening below.",
            next: "owl4"
        },
        "owl4": {
            speaker: "You",
            avatar: "images/avatar-owl",
            avatarAnimation: "avatar-owl-talk",
            message: "I have no home to keep me safe high above, \n I have no place to look down from..."
        },
      
      
      
      
         "mama->wombat": {
            speaker: "You",
            avatar: "images/avatar-mama-snail",
            avatarAnimation: "avatar-mama-talk",
            message: "Mama, why don't we have a home up high, to keep us safe and \n watch from the sky?",
            next: "mama->wombat 2"
        },
      
        "mama->wombat 2": {
            speaker: "Your Mother",
            avatar: "images/avatar-mama-snail",
            avatarAnimation: "avatar-mama-talk",
            message: "There, there little one, I assure you we do have \n great homes, everything in the forest has it's place, \n and in our case our place has us...",
            next: "mama->wombat 3"
        },
        "mama->wombat 3": {
            speaker: "Your Mother",
            avatar: "images/avatar-mama-snail",
            avatarAnimation: "avatar-mama-talk",
            message: "Maybe you should talk to the wombat down the way \n and see where they like to stay..."
        },
      
      
      
      
         "wombat": {
            speaker: "Wombat",
            avatar: "images/avatar-wombat",
            avatarAnimation: "avatar-wombat-talk",
            message: "Oh hello tiny one, what brings you by our den today?",
            next: "wombat2"
        },
        "wombat2": {
            speaker: "You",
            avatar: "images/avatar-wombat",
            avatarAnimation: "avatar-wombat-talk",
            message: "...a den... \n I want to learn about your home...",
            next: "wombat3"
        },
        "wombat3": {
            speaker: "Wombat",
            avatar: "images/avatar-wombat",
            avatarAnimation: "avatar-wombat-talk",
            message: "Inside the ground is where me and my brothers call home. \n My mama was thorough when she dug out our burrow. \n We share our space and keep each other safe.",
            next: "wombat4"
        },
        "wombat4": {
            speaker: "You",
            avatar: "images/avatar-wombat",
            avatarAnimation: "avatar-wombat-talk",
            message: "I have no brothers to share my space, \n there is only one room in my place."
        },
      
      
      
      
        "mama->bee": {
            speaker: "You",
            avatar: "images/avatar-mama-snail",
            avatarAnimation: "avatar-mama-talk",
            message: "Mama, why don't we have a burrow that fits \n a whole family with lots of space?",
            next: "mama->bee 2"
        },
      
        "mama->bee 2": {
            speaker: "Your Mother",
            avatar: "images/avatar-mama-snail",
            avatarAnimation: "avatar-mama-talk",
            message: "There, there little one, I assure you we do have \n great homes, everything in the forest has it's place, \n and in our case our place has us...",
            next: "mama->bee 3"
        },
        "mama->bee 3": {
            speaker: "Your Mother",
            avatar: "images/avatar-mama-snail",
            avatarAnimation: "avatar-mama-talk",
            message: "Maybe you should talk to a bee near the old grove \n and see about what they call home..."
        },
      
      
      
      
      
        "bee": {
            speaker: "Bee",
            avatar: "images/avatar-bee",
            avatarAnimation: "avatar-bee-talk",
            message: "Hail queen Claire! \n Oh hello I didn't zzzee you down there.... ",
            next: "bee2"
        },
        "bee2": {
            speaker: "You",
            avatar: "images/avatar-bee",
            avatarAnimation: "avatar-bee-talk",
            message: "I hear in this forest you bees buzz and thrive, \n why may I ask, does it have to do with your hive?",
            next: "bee3"
        },
        "bee3": {
            speaker: "Bee",
            avatar: "images/avatar-bee",
            avatarAnimation: "avatar-bee-talk",
            message: "Well for those of us that buzz we each have a task, \n we work hard to do what the queen may ask.",
            next: "bee5"
        },
       "bee5": {
            speaker: "Bee",
            avatar: "images/avatar-bee",
            avatarAnimation: "avatar-bee-talk",
            message: "Upon waxy beds we each lay our heads! \n It's hexagonal chambers protect us from dangers! \n What it secreets is golden and sweet.",
            next: "bee6"
        },
        "bee6": {
            speaker: "You",
            avatar: "images/avatar-bee",
            avatarAnimation: "avatar-wombat-talk",
            message: "Thank you kind bee - you've done me a favor, \n now I will let you get back to your labor."
        },
      
      
      
      
      
      
        "mama->turtle": {
            speaker: "You",
            avatar: "images/avatar-mama-snail",
            avatarAnimation: "avatar-mama-talk",
            message: "Mama, why don't we have a queen to serve, \n sweets to eat, and jobs to complete?",
            next: "mama->turtle 2"
        },
      
        "mama->turtle 2": {
            speaker: "Your Mother",
            avatar: "images/avatar-mama-snail",
            avatarAnimation: "avatar-mama-talk",
            message: "There, there little one, I assure you we do have \n great homes, everything in the forest has it's place, and in our case \n our place has us...",
            next: "mama->turtle 3"
        },
        "mama->turtle 3": {
            speaker: "Your Mother",
            avatar: "images/avatar-mama-snail",
            avatarAnimation: "avatar-mama-talk",
            message: "Maybe you should talk to the old turtle by the lake \n but don't fall in for goodness\' sake..."
        },
      
      
      
      
       "turtle": {
            speaker: "Turtle",
            avatar: "images/avatar-turtle",
            avatarAnimation: "avatar-turtle-talk",
            message: "Hello little one, what are you up to today?",
            next: "turtle1"
        },
      
      "turtle1": {
            speaker: "You",
            avatar: "images/avatar-turtle",
            avatarAnimation: "avatar-turtle-talk",
            message: "Hello turtle, would you tell me about your home in the pond?",
            next: "turtle2"
        },
      "turtle2": {
            speaker: "Turtle",
            avatar: "images/avatar-turtle",
            avatarAnimation: "avatar-turtle-talk",
            message: "Being at the pond IS fun, but \n tomorrow I reckon I'll be on the run...",
            next: "turtle3"
        },
        "turtle3": {
            speaker: "You",
            avatar: "images/avatar-turtle",
            avatarAnimation: "avatar-turtle-talk",
            message: "Oh no... don't you have a place to call your own?",
            next: "turtle4"
        },
        "turtle4": {
            speaker: "Turtle",
            avatar: "images/avatar-turtle",
            avatarAnimation: "avatar-turtle-talk",
            message: "Let me explain - \n Folks like us are one in the same! \n Our shell is our home, it allows us to roam.",
            next: "turtle5"
        },
      
        "turtle5": {
            speaker: "Turtle",
            avatar: "images/avatar-turtle",
            avatarAnimation: "avatar-turtle-talk",
            message: "It takes me places and I bring it along. \n It's part of us, and us part of home.",
            next: "turtle6"
        },
        "turtle6": {
            speaker: "You",
            pavatar: "images/avatar-snail-happy",
            avatar: "images/avatar-turtle",
            avatarAnimation: "avatar-turtle-talk",
            message: "....!"
        },
      
      
      
      
      
      
        "mama": {
          speaker: "You",
          pavatar: "images/avatar-snail-happy",
          avatar: "images/avatar-mama-snail",
          avatarAnimation: "avatar-mama-talk",
          message: "Mama, mama! I need to tell you what the wise turtle told me.",
          next: "mama 2"
        },
        "mama 2": {
          speaker: "Your Mother",
          pavatar: "images/avatar-snail-happy",
          avatar: "images/avatar-mama-snail",
          avatarAnimation: "avatar-mama-talk",
          message: "Oh? Well tell me what you've learned!",
          next: "mama 3"
        },
        "mama 3": {
          speaker: "You",
          pavatar: "images/avatar-snail-happy",
          avatar: "images/avatar-mama-snail",
          avatarAnimation: "avatar-mama-talk",
          message: "I may not live in a hive of royalty, \n but a noisy home isn't right for me.",
          next: "mama 4"
        },
          
        "mama 4": {
          speaker: "You",
          pavatar: "images/avatar-snail-happy",
          avatar: "images/avatar-mama-snail",
          avatarAnimation: "avatar-mama-talk",
          message: "A burrow with fuzzy brothers sounds comfy, \n but having my own spot to recharge is lovely.",
          next: "mama 5"
        },
      
        "mama 5": {
          speaker: "You",
          pavatar: "images/avatar-snail-happy",
          avatar: "images/avatar-mama-snail",
          avatarAnimation: "avatar-mama-talk",
          message: "I've had a great home all along, now I see!",
          next: "mama 6"
        },
       "mama 6": {
          speaker: "You",
         pavatar: "images/avatar-snail-happy",
          avatar: "images/avatar-mama-snail",
          avatarAnimation: "avatar-mama-talk",
          message: "It gives me the freedom to crawl and explore, \n and you know I always want to see more.",
          next: "mama 7"
        },
      
        "mama 7": {
          speaker: "You",
          pavatar: "images/avatar-snail-happy",
          avatar: "images/avatar-mama-snail",
          avatarAnimation: "avatar-mama-talk",
          message: "It may be humble, it may be small... \n but I am tiny after all!",
          next: "mama 8"
        },

        "mama 8": {
          speaker: "You",
          pavatar: "images/avatar-snail-happy",
          avatar: "images/avatar-mama-snail",
          avatarAnimation: "avatar-mama-talk",
          message: "Everything in the forest has it's place, \n and my shell is my own space!",
          next: "mama 9"
        },

        "mama 9": {
          speaker: "You",
          pavatar: "images/avatar-snail-happy",
          avatar: "images/avatar-mama-snail",
          avatarAnimation: "avatar-mama-talk",
          message: "I'm part of it and it's part of me \n and thats the only way I would want it to be!",
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

    selectedOption = 0;
    soundPlayed = false;
    messageType = "none";
    dialogueBox = Sup.getActor("dialogueBox");
    avatar = this.dialogueBox.getChild("avatar");
    pavatar = this.dialogueBox.getChild("player-avatar");
  
     awake() {
        
      
     }


    update() {
       
      

        // if (Sup.Input.wasKeyJustPressed("LEFT") && this.dialogueTree[currentMessageName].previous) {
        //      currentMessageName = this.dialogueTree[currentMessageName].previous;
        // }
      
        if (chatShown && Sup.Input.wasKeyJustPressed("SPACE")) {
          if (this.dialogueTree[currentMessageName].next) {
             currentMessageName = this.dialogueTree[currentMessageName].next;
          } else {
            chatShown = false;
            wasJustOpened = true;
            this.soundPlayed = false;
          }
        }
      
        
      

        if (chatShown) {
          playerFreeze = true;

          //play the audio
          if (!this.soundPlayed){
            Sup.Audio.playSound("sounds/" + this.dialogueTree[currentMessageName].speaker);
            this.soundPlayed = true;
          }
          
  
          this.dialogueBox.setVisible(true);

          //avatar stuff
          var 
          if (this.dialogueTree[currentMessageName].avatar !== undefined) {
              this.avatar.setVisible(true);
              var avatarSprite = this.avatar.spriteRenderer;
              var messageImageName = this.dialogueTree[currentMessageName].avatar.replace("images/", "");
              if (avatarSprite.getSprite().name !== messageImageName) {
                  avatarSprite.setSprite(this.dialogueTree[currentMessageName].avatar);
              }
          } else {
              this.avatar.setVisible(false);
          }

          // player avatar stuff
          if (this.dialogueTree[currentMessageName].pavatar !== undefined) {

              var pavatarSprite = this.pavatar.spriteRenderer;
              var pmessageImageName = this.dialogueTree[currentMessageName].pavatar.replace("images/", "");

              if (pavatarSprite.getSprite().name !== pmessageImageName) {
                  pavatarSprite.setSprite(this.dialogueTree[currentMessageName].pavatar);
              }
          } 

          //set the text
          this.dialogueBox.getChild("dialogueBoxText").textRenderer.setText(this.dialogueTree[currentMessageName].speaker + ': "' + this.dialogueTree[currentMessageName].message + '"');

          
          if (this.dialogueTree[currentMessageName].next) {
            //dialogueBoxHasFocus = true;
            this.messageType = "multiple";
          } else {
            this.messageType = "single";
          }



        } else {
          playerFreeze = false;
          this.dialogueBox.setVisible(false);
        }
    }

}

Sup.registerBehavior(DialoguesystemBehavior);




            
            // var continueArrow = dialogueBox.getChild("continueArrow");
            // var close = dialogueBox.getChild("close");

            //choices
            // var option0 = dialogueBox.getChild("option0");
            // var option1 = dialogueBox.getChild("option1");

            // if (this.dialogueTree[currentMessageName].choices) {
            //   this.messageType = "choices";
            //   dialogueBoxHasFocus = true;
            //   playerFreeze = true;
            //   option0.setVisible(true);
            //   option1.setVisible(true);
            //   option0.textRenderer.setText(this.dialogueTree[currentMessageName].choices[0].displayText);
            //   option1.textRenderer.setText(this.dialogueTree[currentMessageName].choices[1].displayText);
            //   //hide
            //   continueArrow.setVisible(false);
            //   close.setVisible(false);
            // } else
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