const GameState = require('./src/GameState');

class Player {
  static get VERSION() {
    return '0.1';
  }

  static calcBet({ toRaise, toCall, bigBlind, score }) {
    console.log("score: ", score);

    let betValue;

    if (score > 8) {
      betValue = toRaise;
    } else {
      if (score == 8) {
        betValue = toCall;
      } else {
        betValue = 0;
      }
    }

    return betValue;
  }

  static oldCalc({ toRaise, toCall, bigBlind, score }) {
    let betValue;
    const raiseLimit = bigBlind * 3;
    const callLimit = bigBlind * 5;

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

  static betRequest(gameState, bet) {
    var game = new GameState(gameState);

    try {
      console.log("Game Bet Request");
      console.log("game", game);
      console.log("me", game.me());

      let betValue = Player.calcBet({
        toRaise: game.toRaise(),
        toCall: game.toCall(),
        bigBlind: game.bigBlind(),
        score: game.me().score()
      });
      console.log("betValue: ", betValue);
      bet(betValue);
    } catch (e) {
      console.log(e);
      bet(Player.oldCalc({
        toRaise: game.toRaise(),
        toCall: game.toCall(),
        bigBlind: game.bigBlind(),
        score: 10
      }));
    }
  }



  static showdown(gameState) {
  }
}

module.exports = Player;

