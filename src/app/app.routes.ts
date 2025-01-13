import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './guards/auth.guard';
import { ListComponent } from './list/list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { AssociationInfoComponent } from './association-info/association-info.component';
import { SelectionIdComponent } from './selection-id/selection-id.component';
import { AddElementComponent } from './add-element/add-element.component';
import { AddAssociationComponent } from './add-association/add-association.component';
import { AddUserComponent } from './add-user/add-user.component';
import { HomeComponent } from './home/home.component';
import { EditAssociationComponent } from './edit-association/edit-association.component';

export const routes: Routes = [
    //{ path: 'users', component: UserInfoComponent, canActivate: [authGuard] },
    { path: 'users/:id', component: UserInfoComponent, canActivate: [authGuard] },
    //{ path: 'associations', component: AssociationInfoComponent, canActivate: [authGuard] },
    { path: 'associations/:id', component: AssociationInfoComponent, canActivate: [authGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'lists', component: ListComponent, canActivate: [authGuard] },
    { path: 'lists/:id', component: ListComponent, canActivate: [authGuard] },
    { path: 'profile', component: UserProfileComponent, canActivate: [authGuard]},
    { path: 'select', component: SelectionIdComponent, canActivate: [authGuard]},
    { path: 'add', component: AddElementComponent, canActivate: [authGuard]},
    { path: 'edit/:id', component: EditAssociationComponent, canActivate: [authGuard]},
    { path: 'add/user', component: AddUserComponent, canActivate: [authGuard]},
    { path: 'add/association', component: AddAssociationComponent, canActivate: [authGuard]},
    { path: 'home', component: HomeComponent, canActivate: [authGuard]},
    { path: '', redirectTo:'login', pathMatch:'full'}
   
];
