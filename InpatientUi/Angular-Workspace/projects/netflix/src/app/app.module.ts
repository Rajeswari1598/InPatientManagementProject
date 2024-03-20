import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NetflixIndexComponent } from './netflix-index/netflix-index.component';
import { NetflixheaderComponent } from './netflixheader/netflixheader.component';
import { NetflixmainComponent } from './netflixmain/netflixmain.component';
import { NetflixregisterComponent } from './netflixregister/netflixregister.component';

@NgModule({
  declarations: [
    AppComponent,
    NetflixIndexComponent,
    NetflixheaderComponent,
    NetflixmainComponent,
    NetflixregisterComponent,
    ReactiveFormsModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [NetflixmainComponent]
})
export class AppModule { }
