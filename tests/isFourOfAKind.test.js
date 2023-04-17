const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Test that fourOfAKind returns thruthy is four of a kind', () => {
    let hand = new Hand('♥7', '♦7', '♣7', '♠3', '♠7');
    expect(CompareHands.isFourOfAKind(hand)).toBeTruthy();
})

test('check that isFourOfAKind returns falsey if not four of a kind', () => {
    let hand = new Hand('♣2', '♣6', '♥4', '♣8', '♣7');
    expect(CompareHands.isFourOfAKind(hand)).toBeFalsy();
});