const Player = require("./Player.js")

test("foo", () => {
  expect(Player.calcBet(
    { toRaise: 1,
      toCall: 1,
      bigBlind: 1 }
  )).toEqual(1);
});
