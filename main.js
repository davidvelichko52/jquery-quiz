console.log('loaded!')

let firstDiv = $('#first')
let finalScore = $('#score')

let imageBox = $('#image')
let box1 = $('#box1')
let box2 = $('#box2')
let box3 = $('#box3')
let box4 = $('#box4')
let questionBox = $('#question')
let nextBtn = $('#next')
let playerScore = 0
let turn = 0
let questions = [{
    prompt: "Best Chip Brand?",
    answers: ["Doritos", "Hot Cheetos", "lays", "Takis"],
    image: "<img src='chip.jpeg'/>",
    correctAnswerIndex: 0
  }, {
    prompt: "Best Candy",
    answers: ["Snickers", "Gummy Bears", "Starburst", "Skittles"],
    image: "<img src='candy.jpeg' />",
    correctAnswerIndex: 2
  }, { 
    prompt: "Best Fast Food?",
    answers: ["McDonald's", "Wendy's", "Chick-Fil-A", "Jack In The Box"],
    image: "<img src='fast.jpg' />",
    correctAnswerIndex: 3
  }, {
    prompt: "Greatest baked good?",
    answers: ["cake", "cookies", "brownies", "creme brulee"],
    image: "<img src='baked.jpg' />",
    correctAnswerIndex: 1
    }, {
    prompt: "Best Pizza?",
    answers: ["Pepperoni", "Cheese", "Hawaiian", "Meat Lovers"],
    image: "<img src='pizza.jpeg' />",
    correctAnswerIndex: 1
}];
const question = (i) => {
    imageBox.html(questions[i].image)
    questionBox.text(questions[i].prompt)
    box1.text(questions[i].answers[0])
    box2.text(questions[i].answers[1])
    box3.text(questions[i].answers[2])
    box4.text(questions[i].answers[3])
}
const score = (userAnswer) =>{
 let answerIndex = questions[turn].correctAnswerIndex;
  if (userAnswer == questions[turn].answers[answerIndex]) {
    playerScore++
        turnNumber()
        finalScore.text("Score: " + playerScore + " of 5") 
  } else {
      turnNumber()
      
      finalScore.text("Score: " + playerScore + " of 5") 
  }
  finalScore.text("Score: " + playerScore + " of 5") 
}
const turnNumber = () => {
    if (turn < 4) {
        turn++
        question(turn)
  } else if (turn = 4){
      
}}
box1.click((event) => {
// console.log("TURN", turn);
 const userAnswer = event.target.textContent;
 score(userAnswer);
})
box2.click((event) => {
// console.log("TURN", turn);
 const userAnswer = event.target.textContent;
 score(userAnswer);
})
box3.click((event) => {
// console.log("TURN", turn);
 const userAnswer = event.target.textContent;
 score(userAnswer);
})
box4.click((event) => {
// console.log("TURN", turn);
 const userAnswer = event.target.textContent;
 score(userAnswer);
})
question(0)


const resetGame = () => {
    location.reload();
};
$("#reset").click(resetGame);



