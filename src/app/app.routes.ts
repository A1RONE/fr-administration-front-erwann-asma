import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './guards/auth.guard';
import { ListComponent } from './list/list.component';

export const routes: Routes = [
    { path: 'users', component: UsersListComponent, canActivate: [authGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'lists', component: ListComponent },
    { path: '', redirectTo:'login', pathMatch:'full'}
   
];
