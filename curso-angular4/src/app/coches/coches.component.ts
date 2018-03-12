import { Component } from '@angular/core';
import { Coche } from './coche';
import { PeticionesServices } from '../services/peticiones.services'

@Component ({
	selector: 'coches',
	templateUrl: './coches.component.html',
	providers: [PeticionesServices]
})

export class CochesComponent{
	public coche: Coche;
	public coches:Array<Coche>;
	public articulos;

	constructor(
		private _peticionesService: PeticionesServices
	){
		this.coche = new Coche("","","");
		this.coches = [
			new Coche("Mazda","1600","Gris"),
			new Coche("Renault","1500","Rojo")
		];
	}

	ngOnInit(){
		this._peticionesService.getArticulos().subscribe(
			result => {
				this.articulos = result;
				if(!this.articulos){
					console.log("Error en el servidor");
				}
			},

			error => {
				var errorMessage = <any>error;
				console.log(errorMessage);
			}
		);
	}

	onSubmit(){
		this.coches.push(this.coche);
		this.coche = new Coche("","","");
	}
}