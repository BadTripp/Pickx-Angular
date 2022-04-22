import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LogInComponentComponent } from './log-in-component/log-in-component.component';
import { SignInComponentComponent } from './sign-in-component/sign-in-component.component';
import { appRoutes } from './app.routing.module';
import { PlayComponentComponent } from './play-component/play-component.component';
import { HomeComponent } from './home/home.component';
import {AngularFirestoreModule} from "@angular/fire/compat/firestore"
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { homeService } from './home.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LogInComponentComponent,
    SignInComponentComponent,
    PlayComponentComponent,
    HomeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [homeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
