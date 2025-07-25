import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { TodoFormComponent } from './shared/components/todo-form/todo-form.component';
import { TodoItemsComponent } from './shared/components/todo-items/todo-items.component';

const routes: Routes = [ 


  {
     path:'',
     redirectTo:'home',
     pathMatch:'full'
  },

{
  path:'home',
  component:HomeComponent
},
{
  path:'services',
component:TodoFormComponent
},

{
  path:'actions',
  component:TodoItemsComponent
}

];  





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  

}





















// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './shared/components/home/home.component';
// import { PostsComponent } from './shared/components/posts/posts.component';
// import { TodosComponent } from './shared/components/todos/todos.component';
// import { PostComponent } from './shared/components/post/post.component';
// import { PostFormComponent } from './shared/components/post-form/post-form.component';

// const routes: Routes = [ 

// {
//   path:'home',
//   component:HomeComponent
// },

// {
//   path:'',  // if the path is empty so use redirectTo property
//   redirectTo:'home',
//   pathMatch:'full'
// },

// {
//   path:'posts',
//   component:PostsComponent
// },

// {
//   path:'posts/addPost',
//   component:PostFormComponent
// },

// {
//    path:'posts/:userId',
//    component:PostComponent
// },

// {
//    path:'posts/:userId/edit',
//    component:PostFormComponent
// },
// {
//   path:'todos',
//   component:TodosComponent
// },


//  ];  
// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { 

  

// }

