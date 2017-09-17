import { Component } from '@angular/core';

@Component({
  selector: 'app-save-email',
  template: ` <h4>{{title}}</h4>

  <input type="text" [(ngModel)]="emailContact" />
  <button (click)="saveEmail()">guardar email</button>`,
  styleUrls: ['./save-email.component.css']
})
export class SaveEmailComponent {
	title = "Guardar Email";
	emailContact: string;

  constructor() { }

  saveEmail(){
  	localStorage.setItem('emailContacto', this.emailContact);
  	
  }

}
