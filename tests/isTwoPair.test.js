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

test('check that isTwoPair returns a higher score for a stronger hand (if two hands but with two pair)', () => {
    let hand1 = new Hand('♥2', '♦2', '♣3', '♠3', '♠T');
    let hand2 = new Hand('♥7', '♦7', '♣3', '♠3', '♠T');
    let hand1Score = CompareHands.isTwoPair(hand1);
    let hand2Score = CompareHands.isTwoPair(hand2);
    expect(hand2Score).toBeGreaterThan(hand1Score);
});