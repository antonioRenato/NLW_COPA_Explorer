function createGame(player1, hour, player2) {
  return `
    <li>
            <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
            <strong>${hour}</strong>
            <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
          </li>
  `
}

function createCard (date, day, games) {
  return `
    <div class="card">
        <h2>${date} <span>${day}</span></h2>
        <ul>
          ${games}
        </ul>
    </div>
  `
}

document.querySelector('#app').innerHTML = `
<header>
      <img src="./assets/logo.svg" alt="">
    </header>
    <main id="cards">
      ${createCard("24/11","Quinta", 
        createGame('brazil', '16:00', 'serbia') + 
        createGame('argentina', '16:00', 'hungary') +
        createGame('portugal', '16:00', 'ghana'))}
      ${createCard("26/11","Sábado", 
        createGame('cameroon', '13:00', 'brazil') + 
        createGame('india', '16:00', 'armenia'))}
      ${createCard("27/11","Domingo", 
        createGame('brazil', '15:00', 'switzerland') + 
        createGame('colombia', '16:00', 'japan'))}
    </main>
`