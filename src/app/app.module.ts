import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AppTableComponent} from './table/app.table';
import {HttpClientModule} from '@angular/common/http';
import {TeamService} from './service/team.service';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatDialog,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatRadioModule,
  MatSelectModule,
  MatSortModule,
  MatTableModule,
  MatIconModule
} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {DialogComponent} from './dialog/app.dialog';
import {CityService} from './service/city.service';
import {HeaderComponent} from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    AppTableComponent,
    DialogComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule
  ],
  entryComponents: [DialogComponent],
  providers: [TeamService, CityService, MatDialog],
  bootstrap: [AppComponent]
})
export class AppModule {
}
