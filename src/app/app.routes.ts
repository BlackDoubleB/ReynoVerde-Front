import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'Login', component : LoginComponent}
];
