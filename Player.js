const GameState = require('./src/GameState');

class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    var game = new GameState(gameState);
    console.log("Game Bet Request");
    console.log(game);

    let betValue = calcBet({
      toRaise: game.toRaise(),
      toCall: game.toCall(),
      bigBlind: game.bigBlind()
    });

    console.log("betValue: ", betValue);
    bet(betValue);
  }

  static calcBet({toRaise, toCall, bigBlind}) {
    const raiseLimit = bigBlind * 3;
    const callLimit = bigBlind * 5;
    let betValue;

    if (toRaise < raiseLimit) {
      betValue = toRaise;
    } else {
      if (toCall < callLimit) {
        betValue = toCall;
      } else {
        betValue = 0;
      }
    }

    return betValue;
  }

  static showdown(gameState) {
  }
}

module.exports = Player;

