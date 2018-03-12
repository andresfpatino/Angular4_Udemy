import  { Component } from '@angular/core';
import { Empleado } from './empleados';

@Component({
	selector: 'empleado',
	templateUrl: './empleado.component.html'
})

export class EmpleadoComponent{
	public titulo = "Componente Empleados";
	public empleado:Empleado;
	public trabajadores:Array<Empleado>;
	public trabajador_externo:boolean;
	public color:string;
	public color_seleccionado:string;

	constructor(){
		this.empleado = new Empleado('Andrés Felipe Patiño' , 22, 'Diseñador Multimedial', true);
		this.trabajadores = [
			new Empleado('Pepito Perez' , 29, 'Diseñador Industrial', false),
			new Empleado('Simon Martinez' , 28, 'Ingeniero', true),
			new Empleado('Luciana Lopez' , 42, 'Gerente', true),
		];

		this.trabajador_externo = true;
		this.color = 'green';
		this.color_seleccionado = "#ccc";
	}

	ngOnInit(){
		console.log(this.empleado);
		console.log(this.trabajadores);
	}

	// cambiamos el valor del trabajador_externo de forma reactiva en la vista
	cambiarExterno(valor){
		this.trabajador_externo = valor;
	}

	logColorSeleccionado(){
		console.log(this.color_seleccionado);
	}

} 

