import { Component } from '@angular/core';
import { TempleteOneComponent } from "./templete-one/templete-one.component";
import { TempleteTwoComponent } from "./templete-two/templete-two.component";
import { TempleteThreeComponent } from "./templete-three/templete-three.component";
import { TempletefourComponent } from "./templetefour/templetefour.component";
import { TempletefiveComponent } from "./templetefive/templetefive.component";
import { TempleteeightComponent } from "./templeteeight/templeteeight.component";
import { TempletesevenComponent } from "./templeteseven/templeteseven.component";
import { TempletesixComponent } from "./templetesix/templetesix.component";
import { QuoteTempleteComponent } from "./quote-templete/quote-templete.component";

@Component({
  selector: 'app-tamplates',
  standalone: true,
  imports: [TempleteOneComponent, TempleteTwoComponent, TempleteThreeComponent, TempletefourComponent, TempletefiveComponent, TempleteeightComponent, TempletesevenComponent, TempletesixComponent, QuoteTempleteComponent],
  templateUrl: './tamplates.component.html',
  styleUrl: './tamplates.component.scss'
})
export class TamplatesComponent {

}
