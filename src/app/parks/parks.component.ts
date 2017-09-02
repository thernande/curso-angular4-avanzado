import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parks',
  templateUrl: './parks.component.html',
  styleUrls: ['./parks.component.css']
})
export class ParksComponent implements OnInit {
	@Input() name: string;
	@Input('metros_cuadrados') metrics: number;
	public veggies: string;
	public open: boolean;

  constructor() {
  		this.name = 'parque natural para caballos';
  		this.metrics = 450;
  		this.veggies = 'Alta';
  		this.open = true;
   }

  ngOnInit() {
  }

}
