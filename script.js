const jokes = document.getElementById('joke')
const btn = document.getElementById('jokeBtn')

btn.addEventListener('click', generate)

generate()

// USING ASYNC/AWAIT
async function generate() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  const res = await fetch('https://icanhazdadjoke.com', config)

  const data = await res.json()

  jokes.innerHTML = data.joke
}