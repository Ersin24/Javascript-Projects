const team = {
  _players: [
    {firstName: 'Ersin', lastName: 'Göç', age: 30},
    {firstName: 'Mihriban', lastName: 'Göç', age: 28},
    {firstName: 'Kerem', lastName: 'Göç', age: 1}
  ],
  _games: [
    {opponent: 'NYC', teamPoints: 95, opponentPoints: 100},
    {opponent: 'Fenerbahçe Ülker', teamPoints: 118, opponentPoints: 55},
    {opponent: 'Beşiktaş', teamPoints: 90, opponentPoints: 120},
  ],
  get players(){
    return this._players;
  },
  get games(){
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge){
    const player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    };
    this._players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints){
    const game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      OpponentPoints: newOpponentPoints,
    };
    this._games.push(game);
  }
}


team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Titans', 100, 98)
console.log(team)


