const Hand = require("../Hand")
const CompareHands = require("../CompareHands");

test('Test that isTwoPairs returns thruthy is two pairs', () => {
    let hand = new Hand('♥7', '♦2', '♣7', '♠3', '♠2');
    expect(CompareHands.isTwoPair(hand)).toBeTruthy();
})

test('check that isTwoPairs returns falsey if two pairs', () => {
    let hand = new Hand('♣2', '♣6', '♥4', '♣8', '♣7');
    expect(CompareHands.isTwoPair(hand)).toBeFalsy();
});