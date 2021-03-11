import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Componente de Paginas
import { PagesComponent } from './pages.component';

// Rutas padres
const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        loadChildren: () => import('./child-routes.module').then( m => m.ChildRoutesModule )
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule {}


