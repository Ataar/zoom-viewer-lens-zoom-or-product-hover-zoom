import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { FeatureComponent } from './shared/components/feature/feature.component';
import { ContactComponent } from './shared/components/contact/contact.component';
import { PricingComponent } from './shared/components/pricing/pricing.component';

const routes: Routes = [ 


  {
     path:'',
     redirectTo:'dashboard',
     pathMatch:'full'
  },
  
  {
    path:'dashboard',
    component:DashboardComponent
  },

 
  {
     path:'feature',
     component:FeatureComponent
  },

  {
    path:'pricing',
    component:PricingComponent,
  },

  {
    path:'contact',
    component:ContactComponent
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

