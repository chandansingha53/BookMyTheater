import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './Home/welcome/welcome.component';
import { MovieListComponent } from './Shows/movie-list/movie-list.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: 'welcome', component: WelcomeComponent},
    {path: 'movies', component: MovieListComponent},
    {path: '', redirectTo: 'welcome', pathMatch: 'full'},
    {path: '**', redirectTo: 'welcome', pathMatch: 'full'},
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
