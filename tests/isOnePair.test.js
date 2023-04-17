const CompareHands = require("../CompareHands");
const Hand = require("../Hand")

test('Test if isOnePair returns truthy is a pair', () => {
    let hand = new Hand('♥7', '♦2', '♣7', '♠3', '♠9');
    expect(CompareHands.isOnePair(hand)).toBeTruthy();
});

test('check that isOnePair returns falsey if not a pair', () => {
    let hand = new Hand('♣2', '♣6', '♥4', '♣8', '♣7');
    expect(CompareHands.isOnePair(hand)).toBeFalsy();
});

test('check that isOnePair returns a higher score for a stronger hand (if two hands but with one pair)', () => {
    let hand1 = new Hand('♥2', '♦2', '♣3', '♠4', '♠T');
    let hand2 = new Hand('♥7', '♦7', '♣3', '♠4', '♠T');
    let hand1Score = CompareHands.isOnePair(hand1);
    let hand2Score = CompareHands.isOnePair(hand2);
    expect(hand2Score).toBeGreaterThan(hand1Score);
});