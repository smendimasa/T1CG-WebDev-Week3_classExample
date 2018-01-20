
// console.log("Test")
// alert("Hello Sam")

// const trivia = document.getElementById('trivia').addEventListener("click", triviaFunc())


//variables
const trivia = document.getElementById('trivia')
const videoBtn = document.getElementById('videoButton')

//const tableBtn = document.querySelector('tableButton')
const tableBtn = document.getElementById('tableButton')
const movieTable= document.getElementById("movieTable")
let movieTitle = document.querySelector('titleInput')
let movieYear = document.querySelector('yearInput')

//functions
// addMovie = () =>{
//   console.log("In add Movie");
//   let row =movieTable.insertRow(-1);
//   let cell1 = row.insertCell(0);
//   let cell2 = row.insertCell(1);
//
//   cell1.innerHTML = movieTitle.innerHTML;
//   cell2.innerHTML = movieYear.innerHTML;
//   movieTitle.innerHTML = "";
//   movieYear.innerHTML = "";
// }
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

tableButton.addEventListener("click", function(){
  console.log("In add Movie");
  let row =movieTable.insertRow(1);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);

  cell1.innerHTML = movieTitle.value;
  cell2.innerHTML = movieYear.value;
  movieTitle.innerHTML = "";
  movieYear.innerHTML = "";
})

function clickCounter() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}

//tableBtn.onclick=addMovie;
