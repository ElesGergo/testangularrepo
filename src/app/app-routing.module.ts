import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingPageComponent } from "./core/components/landing-page/landing-page.component";

const routes: Routes = [
  { path: "", redirectTo: "landing-page", pathMatch: "full" },
  { path: "landing-page", component: LandingPageComponent },
  {
    path: "game",
    loadChildren: () =>
      import("./modules/game/game.module").then(m => m.GameModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
