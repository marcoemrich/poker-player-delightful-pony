const GameState = require('./src/GameState');

class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    var game = new GameState(gameState);
    console.log("Game Bet Request");
    console.log(game);

    const bigBlind = game.bigBlind();
    const raiseLimit = bigBlind * 3;
    const callLimit = bigBlind * 5;
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

  static calcBet({toRaise, toCall, bigBlind}) {
    return 4;
  }

  static showdown(gameState) {
  }
}

module.exports = Player;

