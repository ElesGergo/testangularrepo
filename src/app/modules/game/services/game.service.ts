import { Injectable } from "@angular/core";
import { from, Observable, BehaviorSubject } from "rxjs";
import { Card } from "../models/card.model";
import { toArray } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class GameService {
  private cardNames = [
    "angular.png",
    "d3.png",
    "jenkins.png",
    "postcss.png",
    "react.png",
    "redux.png",
    "scss.png",
    "splendex.png",
    "ts.png",
    "webpack.png"
  ];

  private _suffledDeck: BehaviorSubject<any> = new BehaviorSubject({
    deck: []
  });
  get suffledDeck() {
    return this._rows$;
  }
  private _rows$ = this._suffledDeck.asObservable();

  constructor() {}

  loadDeck(deckSize: number): void {
    let deck = [];
    for (let i = 0; i < deckSize / 2; i++) {
      let card: Card = {
        img: `../../../assets/images/cards/${this.cardNames[i]}`,
        inGame: true,
        filpped: false,
        index: null
      };
      deck.push(card);
      deck.push(card);
    }
    this._suffledDeck.next(shuffle(deck) as Card[]);
  }
  matchCards(indexes: Array<number>) {
    const newState = [...this._suffledDeck.value];

    newState[indexes[0]].inGame = false;
    newState[indexes[1]].inGame = false;
    this._suffledDeck.next(newState);
    console.log(this._suffledDeck.value);
  }
  flipCardsBack(indexes: Array<number>) {
    const newState = [...this._suffledDeck.value];

    newState[indexes[0]].filpped = false;
    newState[indexes[1]].filpped = false;
    this._suffledDeck.next(newState);
  }
}
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
