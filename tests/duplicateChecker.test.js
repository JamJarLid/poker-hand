const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('check that duplicate cards in one hand returns truthy', () => {
    let hand1 = new Hand('♣3', '♣3', '♥5', '♣9', '♥7');
    let hand2 = new Hand('♣2', '♣6', '♥4', '♣8', '♥7');
    expect(CompareHands.duplicateChecker(hand1, hand2)).toBeTruthy();
})

test('check that duplicate cards in two hands returns truthy', () => {
    let hand1 = new Hand('♣3', '♣7', '♥5', '♣9', '♥7');
    let hand2 = new Hand('♣2', '♣6', '♥4', '♣8', '♥7');
    expect(CompareHands.duplicateChecker(hand1, hand2)).toBeTruthy();
})

test('check that all unique cards return falsy', () => {
    let hand1 = new Hand('♣3', '♣7', '♥5', '♣9', '♥K');
    let hand2 = new Hand('♣2', '♣6', '♥4', '♣8', '♥Q');
    expect(CompareHands.duplicateChecker(hand1, hand2)).toBeFalsy();
})