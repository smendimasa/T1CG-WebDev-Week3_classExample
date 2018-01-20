
// console.log("Test")
// alert("Hello Sam")

// const trivia = document.getElementById('trivia').addEventListener("click", triviaFunc())


//variables
const trivia = document.getElementById('trivia')
const videoBtn = document.getElementById('videoButton')

//functions
triviaFunc = () => {
  alert("triviaFunc was called")
  if(!(10 > 12)){
    prompt("Enter Name", "John Smith")
  }else {
    alert("Lol, come on dude")
  }
};

toggleVP = (option) =>{
  if(option =="video"){
    videoBtn.display=inline;
  }
  else if(option =="picture"){
  //  trivia.classList.toggle()
    trivia.display=inline;
  }
}

//const trivia = document.getElementById('trivia').onclick=triviaFunc; // this works
//trivia.addEventListener("click", function triviaFunc);
trivia.addEventListener("click", function(){
  triviaFunc();
})

videoBtn.addEventListener("click", function(){
  //toggleVP("video");
  seagalPic.classList.toggle("displayClass");
  seagalVideo.classList.toggle("displayClass");
})
