import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPostComponent } from './pages/edit-post/edit-post.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NewPostComponent } from './pages/new-post/new-post.component';
import { PostComponent } from './pages/post/post.component';
import { RecoverComponent } from './pages/recover/recover.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'recover', component: RecoverComponent }, 
  { path: 'post', component: PostComponent },
  { path: 'new-post', component: NewPostComponent },
  { path: 'edit-post/:id', component: EditPostComponent },
  { path: 'post/:id', component: PostComponent },
  // { path: 'teste', component: TesteComponent }
  // { loadChildren: () => import('./home/home.module').then( m => m.HomePageModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
