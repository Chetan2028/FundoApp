import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NoteComponent } from './components/note/note.component';

const routes: Routes = [

  {path:'register' , component:RegisterComponent},
  {path:'login' , component:LoginComponent},
  {
    path: 'dashboard', component: DashboardComponent,
    
    children: [

      {
        path: '', redirectTo: 'note', pathMatch: 'full'
      },

      { path: 'note', component: NoteComponent }
    ]

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
