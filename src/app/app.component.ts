import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'templateDrivenForms';

  receiveForm(event): void {
    console.log('form received', event);
  }
}
