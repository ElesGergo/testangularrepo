import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ChangeDetectionStrategy
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { GameService } from "../../services/game.service";
import { Observable, VirtualTimeScheduler } from "rxjs";
import { Card } from "../../models/card.model";
@Component({
  selector: "app-game-board",
  templateUrl: "./game-board.component.html",
  styleUrls: ["./game-board.component.scss"],
  changeDetection: ChangeDetectionStrategy.Default
})
export class GameBoardComponent implements OnInit {
  cards: any;
  selectedCards: Card[] = new Array();
  currentTrys: number = 0;
  currentDeckSize: number;
  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    console.log("game");
    this.gameService.suffledDeck.subscribe(res => {
      this.cards = res;
      console.log(res);
    });

    this.route.params.subscribe(url => {
      this.currentDeckSize = url.decksize;
      this.gameService.loadDeck(url.decksize);
    });
  }
  cardClicked(card: Card) {
    this.selectedCards.push(card);
    console.log(this.selectedCards);
    if (this.selectedCards.length !== 2) {
      return;
    }

    if (this.selectedCards[0].img === this.selectedCards[1].img) {
      this.gameService.matchCards([
        this.selectedCards[0].index,
        this.selectedCards[1].index
      ]);
    } else {
      this.gameService.flipCardsBack([
        this.selectedCards[0].index,
        this.selectedCards[1].index
      ]);
    }
    this.selectedCards = new Array();
    this.currentTrys++;
  }
  restartGame() {
    this.gameService.loadDeck(this.currentDeckSize);
  }
  trackItem(index: number, item: any) {
    console.log(index);
    return item.trackId;
  }
}
