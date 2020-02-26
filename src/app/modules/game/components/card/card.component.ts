import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  OnChanges,
  ChangeDetectionStrategy
} from "@angular/core";
import { Card } from "../../models/card.model";
import {
  trigger,
  style,
  state,
  transition,
  animate
} from "@angular/animations";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],

  animations: [
    trigger("flipState", [
      state(
        "active",
        style({
          transform: "rotateY(179.9deg)"
        })
      ),
      state(
        "inactive",
        style({
          transform: "rotateY(0)"
        })
      ),
      transition("active => inactive", animate("500ms ease-out")),
      transition("inactive => active", animate("500ms ease-in"))
    ])
  ]
})
export class CardComponent implements OnInit, OnChanges {
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log(changes);
  }
  @Input() card: Card;
  @Input() index: number;
  @Output() cardClicked: EventEmitter<Card> = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  test() {
    console.log(this.card);
  }
  onClick() {
    console.log();
    this.card = {
      ...this.card,
      ...{ filpped: true },
      ...{ index: this.index }
    };
    this.cardClicked.emit(this.card);
    this.toggleFlip();
  }
  flip: string = "inactive";

  toggleFlip() {
    this.flip = this.flip == "inactive" ? "active" : "inactive";
  }
}
