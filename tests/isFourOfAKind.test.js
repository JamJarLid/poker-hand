const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Test that fourOfAKind returns thruthy is four of a kind', () => {
    let hand = new Hand('♥7', '♦7', '♣7', '♠3', '♠7');
    expect(CompareHands.isFourOfAKind(hand)).toBeTruthy();
});

test('check that isFourOfAKind returns falsey if not four of a kind', () => {
    let hand = new Hand('♣2', '♣6', '♥4', '♣8', '♣7');
    expect(CompareHands.isFourOfAKind(hand)).toBeFalsy();
});

test('Check that wrong hand returns zero', () => {
    let hand = new Hand('♣2', '♣6', '♥4', '♣8', '♣7');
    expect(CompareHands.isFourOfAKind(hand)).toBe(0);
})

test('check that isFourOfAKind returns a higher score for a stronger hand (if two hands but with four of a kind)', () => {
    let hand1 = new Hand('♥2', '♦2', '♣2', '♠3', '♠2');
    let hand2 = new Hand('♥7', '♦7', '♣7', '♠3', '♠7');
    let hand1Score = CompareHands.isFourOfAKind(hand1);
    let hand2Score = CompareHands.isFourOfAKind(hand2);
    expect(hand2Score).toBeGreaterThan(hand1Score);
});