const GameState = require('./src/GameState');

class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    var game = new GameState(gameState);
    console.log("Hello");
    console.log(game);

    const raiseLimit = 30;
    const callLimit = 50;

    if (game.toRaise() < raiseLimit) {
      bet(game.toRaise());
    } else {
      if (game.toCall() < callLimit) {
        bet(game.toCall());
      } else {
        bet(0);
      }
    }

  }

  static showdown(gameState) {
  }
}

module.exports = Player;

