class Form {
    constructor() {
        this.input=createInput('Enter your name')
        this.textbox=createInput('Enter the option')
        this.button=createButton('Submit')
    }
  
    display(){
      var title = createElement('h1')
      title.html("QuizoNator");
      title.position(300, 0);


      var question= createElement('h2')
      question.html("Question: What starts and end with the letter 'E', but has only one letter")
      question.position(40,50)


     // options for the question
      var option1= createElement('h3')
      option1.html("1.Everyone")
      option1.position(50,80)


      var option2=createElement('h3')
      option2.html("2.Envelope")
      option2.position(50,100)


      var option3= createElement('h3')
      option3.html("3.Estimate")
      option3.position(50,120)


      var option4=createElement('h3')
      option4.html("4.Example")
      option4.position(50,140)
      
      this.input.position(50, 200);
      this.textbox.position(270,200)
      this.button.position(280, 260);
  
      this.button.mousePressed(function(){
        

  
    //   player.name=this.input.value();
        
      //  ContestantCount+=1;
       // contestant.index=ContestantCount;
       // Contestant.update()
       // Contestant.updateCount();
    
      });
  
    }
  }
  