import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './pages/login page/login/login.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
   /* RouterModule.forRoot([
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login',  loadChildren: () => import('./pages/login page/login/login.module').then(x => x.LoginModule)},
      { path: '**', redirectTo: '404' }
    ]),*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
