import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {
	public title = 'Animal';

  constructor() { }

  ngOnInit() {
  	console.log('keeper.component cargado!!!');
  }

}
