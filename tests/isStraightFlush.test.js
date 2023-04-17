const CompareHands = require('../CompareHands');
const Hand = require('../Hand');

test('check if isStraightFlush returns truthy when the hand is a straight flush', () => {
    let hand = new Hand('♣5', '♣6', '♣4', '♣8', '♣7');
    expect(CompareHands.isStraightFlush(hand)).toBeTruthy();
});

test('check that isStraightFlush returns falsey if not straight flush', () => {
    let hand = new Hand('♣2', '♣6', '♥4', '♣8', '♣7');
    expect(CompareHands.isStraightFlush(hand)).toBeFalsy();
});