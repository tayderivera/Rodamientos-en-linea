import { Routes } from '@angular/router';
import { MainComponent } from './Componentes/main/main.component';
import { RodamientosComponent } from './Componentes/rodamientos/rodamientos.component';

export const routes: Routes = [
{path: '', component: MainComponent},
{path: 'Rodamiento', component: RodamientosComponent}


];
