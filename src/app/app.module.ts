import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AppFootballComponent} from './football/app.football';
import {HttpClientModule} from '@angular/common/http';
import {TeamService} from './service/team.service';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule, MatSortModule, MatPaginatorModule, MatFormFieldModule} from '@angular/material';
import {MatDialogModule, MatDialog, MatInputModule} from '@angular/material';
import {DialogComponent, DialogOverviewExampleDialogComponent} from './dialog/dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    AppFootballComponent,
    DialogComponent,
    DialogOverviewExampleDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  entryComponents: [DialogOverviewExampleDialogComponent],
  providers: [TeamService, MatDialog],
  bootstrap: [AppFootballComponent]
})
export class AppModule {
}
