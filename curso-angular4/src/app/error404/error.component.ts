import { Component } from '@angular/core';

@Component({
	selector: 'pagina-no-encontrada',
	templateUrl: './error.component.html'
})
export class ErrorComponent{
	public titulo = 'Error 404 - Página no encontrada';
}