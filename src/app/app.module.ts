import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {UsersComponent} from './components/users/users.component';
import {HttpClientModule} from '@angular/common/http';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { UserService } from './service/user.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '',redirectTo:'home',pathMatch:'full'},
      {path:'home',component:HomeComponent},
      {path:'user',component:UsersComponent,
      children:[
        {path:'details/:id',component:UserDetailsComponent}
      ]}
    ])
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
