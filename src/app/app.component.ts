import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminNewsComponent } from './admin-news/admin-news.component';
import { CreateNewsComponent } from './create-news/create-news.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChooseTampleteComponent } from "./choose-tamplete/choose-tamplete.component";
import { TamplatesComponent } from "./tamplates/tamplates.component";
import { SingleNewsAfterAddComponent } from "./single-news-after-add/single-news-after-add.component";
import { SingleNewsComponent } from "./single-news/single-news.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AdminNewsComponent, CreateNewsComponent, ChooseTampleteComponent, TamplatesComponent, SingleNewsAfterAddComponent, SingleNewsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'News';
}
