const CompareHands = require('../CompareHands');
const Hand = require('../Hand');

test('Tests if isFullHouse returns truthy when hand is a full house', () => {
    let hand = new Hand('♥7', '♦3', '♣7', '♠3', '♠7');
    expect(CompareHands.isFullHouse(hand)).toBeTruthy();
})

test('check that isFullHouse returns falsey if not a full house', () => {
    let hand = new Hand('♣2', '♣6', '♥4', '♣8', '♣7');
    expect(CompareHands.isFullHouse(hand)).toBeFalsy();
});