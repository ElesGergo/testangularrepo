import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { GameComponent } from "./game.component";
import { CardComponent } from "./components/card/card.component";
import { GameBoardComponent } from "./components/game-board/game-board.component";
import { StartGameComponent } from "./components/start-game/start-game.component";
import { Routes, RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
const routes: Routes = [
  { path: "", redirectTo: "startGame", pathMatch: "full" },
  { path: "startGame", component: StartGameComponent },
  { path: "gameBoard/:decksize", component: GameBoardComponent }
];

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild(routes),
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [
    GameComponent,
    CardComponent,
    GameBoardComponent,
    StartGameComponent
  ]
})
export class GameModule {}
