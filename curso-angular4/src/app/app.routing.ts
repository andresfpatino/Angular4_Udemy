import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar componentes
import { HomeComponent } from './home/home.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CochesComponent } from './coches/coches.component';
import { ErrorComponent } from './error404/error.component';
import { PlantillasComponent } from './plantillas/plantillas.component';

const appRoutes: Routes = [
	{path: '', component: HomeComponent}, //Ruta base principal
	{path: 'empleado', component: EmpleadoComponent}, 
	{path: 'fruta', component: FrutaComponent}, 
	{path: 'home', component: HomeComponent}, 
	{path: 'contacto', component: ContactoComponent},
	{path: 'contacto/:page', component: ContactoComponent}, 
	{path: 'coches', component: CochesComponent}, 
	{path: 'plantillas', component: PlantillasComponent},
	
	{path: 'error', component: ErrorComponent}, 
	{path: '**', component: ErrorComponent} //Ruta error 404

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);