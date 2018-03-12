import { Component } from '@angular/core';

@Component({
	selector: 'fruta',
	templateUrl: './fruta.component.html'
})

export class FrutaComponent{
	public nombre_componente = 'Componente de fruta';
	public listado_frutas = ' Naranja, Manzana, Pera y Sandia';
	// Tipos de datos
	public nombre:string;
	public edad:number;
	public mayordeEdad:boolean ;
	public trabajos:Array<string> = ['Diseñador', 'Programador'];
	comodin:any;

	// Constructor se encargar de asignar un valor a las propiedades del componente fruta
	constructor(){
		this.nombre = "Andrés Felipe";
		this.edad = 21;
		this.mayordeEdad = true;
		this.comodin = "Cualquier cosa";
	}

	// el metodo ngOnInit se carga despues del constructor
	ngOnInit(){
		this.cambiarNombre();
		this.cambiarEdad(23);
		console.log(this.nombre + " Edad: " + this.edad);

		// Variables y alcance diferencia entre let y var
		var uno = 8;
		var dos = 16;

		if(uno === 8){
			let uno = 3;
			var dos = 88;
			console.log("Dentro del if" + " " + uno + " " + dos);
		}
		console.log("Fuera del if" + " " + uno  + " " + dos);
	}

	// definir funciones
	cambiarNombre(){
		this.nombre = "Daniela";
	}
	cambiarEdad(edad){
		this.edad = edad;
	}
	
} 

