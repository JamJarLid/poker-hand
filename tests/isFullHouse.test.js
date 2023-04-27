const CompareHands = require('../CompareHands');
const Hand = require('../Hand');

test('Tests if isFullHouse returns truthy when hand is a full house', () => {
    let hand = new Hand('♥7', '♦3', '♣7', '♠3', '♠7');
    expect(CompareHands.isFullHouse(hand)).toBeTruthy();
});

test('check that isFullHouse returns falsey if not a full house', () => {
    let hand = new Hand('♣2', '♣6', '♥4', '♣8', '♣7');
    expect(CompareHands.isFullHouse(hand)).toBeFalsy();
});

test('Check that wrong hand returns zero', () => {
    let hand = new Hand('♣2', '♣6', '♥4', '♣8', '♣7');
    expect(CompareHands.isFullHouse(hand)).toBe(0);
})


test('check that isFullHouse returns a higher score for a stronger hand (if two hands but with full house)', () => {
    let hand1 = new Hand('♥2', '♦2', '♣3', '♠3', '♠2');
    let hand2 = new Hand('♥7', '♦7', '♣3', '♠3', '♠7');
    let hand1Score = CompareHands.isFullHouse(hand1);
    let hand2Score = CompareHands.isFullHouse(hand2);
    expect(hand2Score).toBeGreaterThan(hand1Score);
});