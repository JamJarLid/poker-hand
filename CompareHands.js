module.exports = class CompareHands {

  static suits = '♥♦♣♠';
  static ranks = '23456789TJQKA';

  // return the winning hand
  static comparer(hand1, hand2) {

    let comparers = [
      'isStraightFlush',
      'isFourOfAKind',
      'isFullHouse',
      'isFlush',
      'isStraight',
      'isThreeOfAKind',
      'isTwoPair',
      'isOnePair',
      'isHighestCard'
    ];

    for (let comparer of comparers) {
      let hand1Score = this[comparer](hand1);
      let hand2Score = this[comparer](hand2);
      console.log(comparer, 'hand1Score', hand1Score, 'hand2Score', hand2Score);
      // nobody has this kind combination - continue to next comparer
      if (hand1Score === 0 && hand2Score === 0) { continue; }
      // at least has one hand has this kind of combination
      // which hand won?
      if (hand1Score === hand2Score) { return [hand1, hand2]; }
      else if (hand1Score > hand2Score) { return hand1; }
      else { return hand2; }
    }

  }

  static isStraightFlush(hand) {
    // if not straight or not flush -> 0
    // otherwise score of flush
    return this.isStraight(hand) && this.isFlush(hand);
  }

  static isFourOfAKind(hand) {
    let [ranks, occurences] = this.rankOccurences(hand);
    let rankOfFours = ranks[occurences.indexOf(4)];
    if (!rankOfFours) { return 0; }
    let score = this.rankToPoint(rankOfFours);
    return score;
  }

  static isFullHouse(hand) {
    let [ranks, occurences] = this.rankOccurences(hand);
    let rankOfPair = ranks[occurences.indexOf(2)];
    let rankOfThrees = ranks[occurences.indexOf(3)];
    if (!rankOfThrees || !rankOfPair) { return 0 };
    let score = this.rankToPoint(rankOfPair) * 100
      + this.rankToPoint(rankOfThrees);
    return score;
  }

  static isFlush(hand) {
    let suits = [];
    for (let card of hand.cards) {
      suits.push(card.suit);
    }
    // not a flush -> 0
    if ([...new Set(suits)].length !== 1) {
      return 0;
    }
    // return points depending of strength of flush
    this.sortByRank(hand);
    let score = 0, counter = 0;
    for (let card of hand.cards) {
      score += this.rankToPoint(card.rank) * 10 ** counter;
      counter += 2;
    }
    return score;
  }

  static isStraight(hand) {
    // sort from low to high
    this.sortByRank(hand);
    // get the ranks of the cards
    let ranks = '';
    for (let card of hand.cards) {
      ranks += card.rank;
    }
    // if both 2 and A then place A first
    if (ranks.includes('2') && ranks.includes('A')) {
      ranks = 'A' + ranks.slice(0, 4);
    }
    // not a straight -> 0
    if (!('A' + this.ranks).includes(ranks)) { return 0; };
    // return points depending on strength of straight
    return this.rankToPoint(ranks[4]);
  }

  static isThreeOfAKind(hand) { 
    let [ranks, occurences] = this.rankOccurences(hand);
    let rankOfThrees = ranks[occurences.indexOf(3)];
    if (!rankOfThrees) { return 0; }
    let score = this.rankToPoint(rankOfThrees);
    return score;
  }

  static isTwoPair(hand) {
    let [ranks, occurences] = this.rankOccurences(hand);
    if (occurences.indexOf(2) === occurences.lastIndexOf(2)) { return 0 };
    let rankOfLowestPair = ranks[occurences.indexOf(2)];
    let rankOfHighestPair = ranks[occurences.lastIndexOf(2)];
    let score = this.rankToPoint(rankOfLowestPair) * 100
      + this.rankToPoint(rankOfHighestPair);
    return score;
  }

  static isOnePair(hand) {
    let [ranks, occurences] = this.rankOccurences(hand);
    let rankOfPair = ranks[occurences.indexOf(2)];
    if (!rankOfPair) { return 0; }
    let score = this.rankToPoint(rankOfPair);
    return score;
  }

  static isHighestCard(hand) {
    this.sortByRank(hand);
    let rankOfCard = hand.cards[0].rank;
    return rankOfCard;
  }

  // helper functions below:

  static rankToPoint(rank) {
    return this.ranks.indexOf(rank) + 2;
  }

  static rankOccurences(hand) {
    let ranks = {};
    for (let card of hand.cards) {
      ranks[card.rank] = (ranks[card.rank] || 0) + 1
    }
    return [Object.keys(ranks), Object.values(ranks)];
  }

  static sortByRank(hand) {
    hand.cards = hand.cards.sort((a, b) => {
      return this.rankToPoint(a.rank) < this.rankToPoint(b.rank) ?
        -1 : 1;
    });
  }

}