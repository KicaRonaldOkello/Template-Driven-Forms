import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  constructor() { }

  user: IUser = {
    name: '',
    email: '',
    password: '',
    repeatPassword: ''
  }

  ngOnInit() {
  }

}

export interface IUser {
  name: String,
  email: String,
  password: String,
  repeatPassword: String
}
