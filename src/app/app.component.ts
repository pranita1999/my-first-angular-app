import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-angular-app';
  myNextProject = 'a portfolio website.';

  showPurpleBoxShadow = true;

 get boxShadow() {
 if (this.showPurpleBoxShadow) return 'purple-box-shadow';

 return 'pink-box-shadow';
  }
}
