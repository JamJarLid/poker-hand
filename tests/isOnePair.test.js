const CompareHands = require("../CompareHands");
const Hand = require("../Hand")

test('Test if isOnePair returns truthy is a pair', () => {
    let hand = new Hand('♥7', '♦2', '♣7', '♠3', '♠9');
    expect(CompareHands.isOnePair(hand)).toBeTruthy();
})

test('check that isOnePair returns falsey if not a pair', () => {
    let hand = new Hand('♣2', '♣6', '♥4', '♣8', '♣7');
    expect(CompareHands.isOnePair(hand)).toBeFalsy();
});