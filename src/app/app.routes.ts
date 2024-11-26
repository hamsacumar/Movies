import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';

export const routes: Routes = [
    {path:'', redirectTo:'login',pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'movie/:type/:id', component: MovieComponent},
    {path: 'home', component:HomeComponent},
    {path: '**', component:LoginComponent}
];
