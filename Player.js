const GameState = require('./src/GameState');

class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    var game = new GameState(gameState);
    console.log("Game Bet Request");
    console.log(game);

    const raiseLimit = 30;
    const callLimit = 50;
    let betValue;

    if (game.toRaise() < raiseLimit) {
      betValue = game.toRaise();
    } else {
      if (game.toCall() < callLimit) {
        betValue = game.toCall();
      } else {
        betValue = 0;
      }
    }

    console.log("betValue: ", betValue);
    bet(betValue);
  }

  static showdown(gameState) {
  }
}

module.exports = Player;

