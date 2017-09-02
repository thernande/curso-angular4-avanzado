import { Component} from '@angular/core';

@Component({
	selector: 'store',
	templateUrl: './store.component.html',
	styles: ['h1 {color:blue}']
})

export class StoreComponent {
	public titulo;
	public nombreDelParque:string;

	constructor(){
		this.titulo = "Esta es la tienda";
		this.nombreDelParque = "National Park";
	}

	mostrarNombre(){
		console.log(this.nombreDelParque);
	}
}