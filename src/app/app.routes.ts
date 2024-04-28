import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'', pathMatch:"full",redirectTo:'home'},
    {path:'home',loadComponent:() =>import('./home/home/home.component').then(home => home.HomeComponent)},
    {path:'aboutus',loadComponent:() =>import('./aboutus/aboutus/aboutus.component').then(aboutus => aboutus.AboutusComponent)}
];
