import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { PostsComponent } from './shared/components/posts/posts.component';
import { TodosComponent } from './shared/components/todos/todos.component';
import { EvenOddComponent } from './shared/components/even-odd/even-odd.component';

const routes: Routes = [ 

{
  path:'home',
  component:HomeComponent
},

{
  path:'',  // if the path is empty so use redirectTo property
  redirectTo:'home',
  pathMatch:'full'
},

{
  path:'posts',
  component:PostsComponent
},
{
  path:'todos',
  component:TodosComponent
},
{ path: 'even-odd', 
component: EvenOddComponent 
}, // ✅ Add this


 ];  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  

}

