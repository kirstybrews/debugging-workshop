
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('joke-form')
  
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    fetchJoke()
  })
  
})

function fetchJoke(){
  fetch('https://icanhazdadjoke.com/', {
    headers: {
      "Accept": "application/json"
    }
  })
  .then(res => res.json())
  .then(jokeData => {
    renderJoke(jokeData.joke)
  })
}

function renderJoke(joke) {
    const jokeList = document.getElementById('joke-list')
    let username = document.querySelector('#name-input').value
    // if(username === "") return;
    const newJokeLi = document.createElement('li')
    newJokeLi.innerHTML = `
    <span class="username">${username} says:</span> ${joke}
    `
    jokeList.appendChild(newJokeLi)
  
}