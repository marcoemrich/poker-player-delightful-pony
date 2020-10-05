const Player = require("./Player.js")

test("raise for large score", () => {
  expect(Player.calcBet(
    { toRaise: 5,
      toCall: 1,
      bigBlind: 7,
      score: 13
    }
  )).toEqual(5);



});

test("call for medium score", () => {
  expect(Player.calcBet(
    { toRaise: 5,
      toCall: 1,
      bigBlind: 7,
      score: 7
    }
  )).toEqual(1);

});

test("fold for low score", () => {
  expect(Player.calcBet(
    { toRaise: 5,
      toCall: 1,
      bigBlind: 7,
      score: 4
    }
  )).toEqual(0);

});


