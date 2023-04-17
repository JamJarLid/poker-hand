const Hand = require("../Hand")
const CompareHands = require("../CompareHands");

test('Test if isHighestCard returns truthy is high card', () => {
    let hand = new Hand('♣2', '♣6', '♥4', '♣8', '♣7');
    expect(CompareHands.isHighestCard(hand)).toBeTruthy();
});

test('check that isHighestCard returns a higher score for a stronger hand (if two hands but with high card)', () => {
    let hand1 = new Hand('♣2', '♣6', '♥3', '♣8', '♣7');
    let hand2 = new Hand('♣K', '♣6', '♥4', '♣8', '♣7');
    let hand1Score = CompareHands.isHighestCard(hand1);
    let hand2Score = CompareHands.isHighestCard(hand2);
    expect(hand2Score).toBeGreaterThan(hand1Score);
});