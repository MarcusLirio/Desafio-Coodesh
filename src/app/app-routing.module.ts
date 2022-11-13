import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './login/shared/auth/auth/auth.guard';
import { PageComponent } from './page/page.component';

const routes: Routes = [
  {
    path:'', component:LoginComponent
  },
  {
    path:'page', component:PageComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ADMIN,NORMAL'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
