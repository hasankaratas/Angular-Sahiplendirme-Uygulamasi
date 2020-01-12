import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SahiplendirmeComponent } from './sahiplendirme/sahiplendirme.component';
import { NavbarComponent } from './sahiplendirme/navbar/navbar.component';
import { LoginComponent } from './sahiplendirme/login/login.component';
import { RouterModule,Routes } from '@angular/router';
import { RegisterComponent } from './sahiplendirme/register/register.component';

const appRoutes: Routes=[
  {path:'sahiplendirme', component:SahiplendirmeComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'**', redirectTo:'/sahiplendirme'}
]
@NgModule({
  declarations: [
    AppComponent,
    SahiplendirmeComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  go(){
  }
}
