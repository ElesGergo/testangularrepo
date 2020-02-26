import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-start-game",
  templateUrl: "./start-game.component.html",
  styleUrls: ["./start-game.component.scss"]
})
export class StartGameComponent implements OnInit {
  deckSizeFormControl = new FormControl(3, Validators.required);
  constructor(private router: Router) {}

  ngOnInit() {}

  startGame() {
    if (this.deckSizeFormControl.invalid) {
      console.log("incorrect value");
      return;
    }
    this.router.navigateByUrl(
      `/game/gameBoard/${this.deckSizeFormControl.value}`
    );
  }
}
