import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AppFootballComponent} from './football/app.football';
import {HttpClientModule} from '@angular/common/http';
import {TeamService} from './service/team.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatSortModule, MatPaginatorModule} from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    AppFootballComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
  providers: [TeamService],
  bootstrap: [AppFootballComponent]
})
export class AppModule {
}
