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

test('check that isStraightFlush returns a higher score for a stronger hand (if two hands but with straight flush)', () => {
    let hand1 = new Hand('♣5', '♣6', '♣4', '♣8', '♣7');
    let hand2 = new Hand('♣A', '♣K', '♣Q', '♣J', '♣T');
    let hand1Score = CompareHands.isStraightFlush(hand1);
    let hand2Score = CompareHands.isStraightFlush(hand2);
    expect(hand2Score).toBeGreaterThan(hand1Score);
});