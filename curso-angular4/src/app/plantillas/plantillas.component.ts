import { Component } from '@angular/core';

@Component ({
	selector: 'Plantillas',
	templateUrl: './plantillas.component.html',
})

export class PlantillasComponent{
	public titulo;
	public administrador;

	public dato_externo = "Daniela";
	public identity = {
		id: 1,
		web: 'www.felipepatino.com',
		tematica : 'Desarrollo web'
	};
	
	constructor(){
		this.titulo = "Plantillas ngTemplate en Angular4";
		this.administrador = true;
	}
	cambiar(value){
		this.administrador = value
	}

	public datos_del_hijo;

	recibirDatos(event){
		console.log(event);
		this.datos_del_hijo = event;
	}
}