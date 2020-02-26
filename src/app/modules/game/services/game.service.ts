import { Injectable } from "@angular/core";
import { from, Observable } from "rxjs";

interface Deck {
  deck: Array<Card>;
}
interface Card {
  img: string;
  inGame: boolean;
  filipped: boolean;
}

@Injectable({
  providedIn: "root"
})
export class GameService {
  private cardNames = [
    "angular.png",
    "d3.png",
    "jenkins.png",
    "postcss.png",
    "redux.png",
    "scss.png",
    "splendex.png",
    "ts.png",
    "webpack.png"
  ];

  constructor() {}

  /* loadDeck(deckSize:number):Observable<Deck>{
    
    return from()
  } */
}
