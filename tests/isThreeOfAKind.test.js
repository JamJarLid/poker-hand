const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Test that threeOfAKind returns truthy is three of a kind', () => {
  let hand = new Hand('♥7', '♦2', '♣7', '♠3', '♠7');
  expect(CompareHands.isThreeOfAKind(hand)).toBeTruthy();
});

test('check that isThreeOfAKind returns falsey if not three of a kind', () => {
  let hand = new Hand('♣2', '♣6', '♥4', '♣8', '♣7');
  expect(CompareHands.isThreeOfAKind(hand)).toBeFalsy();
});

test('check that isThreeOfAKind returns a higher score for a stronger hand (if two hands but with three of a kind)', () => {
  let hand1 = new Hand('♥2', '♦2', '♣8', '♠3', '♠2');
  let hand2 = new Hand('♥7', '♦7', '♣8', '♠3', '♠7');
  let hand1Score = CompareHands.isThreeOfAKind(hand1);
  let hand2Score = CompareHands.isThreeOfAKind(hand2);
  expect(hand2Score).toBeGreaterThan(hand1Score);
});