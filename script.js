const trivia = document.getElementById('trivia')
const generatebtn = document.getElementById('generatebtn')


generatebtn.addEventListener('click', generateTrivia);

generateTrivia();

async function generateTrivia(){
  const res = await fetch('https://opentdb.com/api.php?amount=50')
  const data = await res.json()

  trivia.innerHTML = data.results[0].question
}
