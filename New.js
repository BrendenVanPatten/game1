
let awayTeam = 0
let homeTeam = 0
let awayScore = 0
let homeScore = 0


function speak() {
  awayTeam++
  awayTeam++
  awayTeam++
  awayTeam++
  awayTeam++
  awayTeam++
  document.getElementById('name').innerText = awayTeam
}

function speak2() {
  homeTeam++
  homeTeam++
  homeTeam++
  homeTeam++
  homeTeam++
  homeTeam++
  document.getElementById('name2').innerText = homeTeam
}

function speak3() {
  awayScore++
  awayScore++
  awayScore++
  document.getElementById('name3').innerText = awayScore
}

function speak4() {
  homeScore++
  homeScore++
  homeScore++
  document.getElementById('name4').innerText = homeScore
}