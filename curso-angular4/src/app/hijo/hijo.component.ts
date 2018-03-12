import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
	selector: 'componente-hijo',
	template: `
		<p>Este es el {{title}}</p>
		<ul>
			<li> {{propiedad_uno}} </li>
			<li> {{propiedad_dos.id}} </li>
			<li> {{propiedad_dos.web}} </li>
			<li> {{propiedad_dos.tematica}} </li>
		</ul>

		<button (click)="enviar()">Enviar datos a padre</button>
	`
})

export class HijoComponent{
	public title: string;

	@Input('nombre') propiedad_uno: string;
	@Input('edad') propiedad_dos: string;

	@Output() desde_el_hijo = new EventEmitter();

	constructor(){
		this.title ="Componente Hijo";
	}

	ngOnInit(){
		console.log(this.propiedad_uno);
		console.log(this.propiedad_dos);
	}

	enviar(){
		this.desde_el_hijo.emit({
			nombre:'pepito',
			web:'google.com'
		});
	}

}