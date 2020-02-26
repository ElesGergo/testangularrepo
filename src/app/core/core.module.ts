import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./components/header/header.component";
import { LandingPageComponent } from "./components/landing-page/landing-page.component";

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent, LandingPageComponent],
  exports: [HeaderComponent, LandingPageComponent]
})
export class CoreModule {}
