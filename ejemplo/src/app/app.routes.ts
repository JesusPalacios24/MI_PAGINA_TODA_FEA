import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ExtraComponent } from './extra/extra.component';
import { PaginaComponent } from './pagina/pagina.component';

export const routes: Routes = [
    {path: '', component: PaginaComponent},
    {path: 'pagina', component: PaginaComponent},
    {path: 'extra', component: ExtraComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true }),
    ],
    exports: [RouterModule],
})

export class AppRoutingModule { }