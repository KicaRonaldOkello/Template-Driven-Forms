import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  constructor() { }

  @Output() submitForm = new EventEmitter<string>();

  ngOnInit() {
  }
  user: IUser = {
    name: '',
    email: '',
    password: '',
    repeatPassword: ''
  }


  onSubmit(myForm) {
    this.submitForm.emit(myForm);
  }

}

export interface IUser {
  name: String,
  email: String,
  password: String,
  repeatPassword: String
}
