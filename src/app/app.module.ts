import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from  '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './Home/welcome/welcome.component';
import { MovieListComponent } from './Shows/movie-list/movie-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StarComponent } from './Shared/star/star.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MovieListComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
