import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarWarListComponent } from './star-war-list/star-war-list.component';
import { provideHttpClient } from '@angular/common/http';
import { StarWarProfileComponent } from './star-war-profile/star-war-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    StarWarListComponent,
    StarWarProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
