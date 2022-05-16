import { FilmesComponent } from './filmes/filmes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { PagesRoutingComponent } from './pages-routing.component';

const routes: Routes = [{
  path:'',component:PagesRoutingComponent,
  children:[
    {
      path:'home',
      component:HomeComponent,
    },
    {
      path:'deatails/:id',
      component:DetailsComponent
    },
    {
      path:'filmes',
      component:FilmesComponent
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
