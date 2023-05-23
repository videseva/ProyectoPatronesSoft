import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarComponent } from './componentes/consultar/consultar.component';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';

const routes: Routes = [

  {path: 'inicio', component: InicioComponent},
  {path: 'consultar', component: ConsultarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
