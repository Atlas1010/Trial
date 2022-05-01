import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'design';



const routes: Routes = [
  /*{
    path:'', loadChildren:()=>import('src/app/pages/login page/login/login.module')//.then(m=>m.LoginModule)
    , pathMatch:'full'
  }

*/
{
  path: '', 
  component:HomeComponent
//loadChildren: () => import("./pages/login page/login/login.module").then(m => m.LoginModule)
}  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
