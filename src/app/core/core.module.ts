import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./components/header/header.component";
import { LandingPageComponent } from "./components/landing-page/landing-page.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [HeaderComponent, LandingPageComponent],
  exports: [HeaderComponent, LandingPageComponent]
})
export class CoreModule {}
