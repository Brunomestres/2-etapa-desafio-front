import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { PostFormComponent } from './views/post-form/post-form.component';
import { ReadMoreComponent } from './views/read-more/read-more.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'criar', component: PostFormComponent },
  { path: 'read/:id', component: ReadMoreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
