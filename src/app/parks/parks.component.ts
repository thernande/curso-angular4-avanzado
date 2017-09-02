import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-parks',
  templateUrl: './parks.component.html',
  styleUrls: ['./parks.component.css']
})
export class ParksComponent implements OnChanges {
	@Input() name: string;
	@Input('metros_cuadrados') metrics: number;
	public veggies: string;
	public open: boolean;

	@Output() passTheData = new EventEmitter();

  constructor() {
  		this.name = 'parque natural para caballos';
  		this.metrics = 450;
  		this.veggies = 'Alta';
  		this.open = true;
   }

   emitirEvento(){
   		this.passTheData.emit({
   			'name': this.name = 'parque natural para caballos',
  			'metrics': this.metrics = 450,
  			'veggies': this.veggies = 'Alta',
  			'open': this.open = true
   		});
   }

  ngOnChanges(changes: SimpleChanges) {
	//console.log(changes);
	console.log('a habido cambios en los valores');
  }

}
