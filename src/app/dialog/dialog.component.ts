import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {TeamService} from '../service/team.service';
import {City} from '../model/city.model';
import {CityService} from '../service/city.service';

export interface DialogData {
  id: number;
  city: City;
  name: string;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  id: number;
  city: City;
  name: string;

  constructor(public dialog: MatDialog) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '250px',
      data: {name: this.name, city: this.city}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.id = null;
      this.city = undefined;
      this.name = undefined;
    });
  }

}

@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialogComponent implements OnInit {
  title;
  cities: City[];

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private teamService: TeamService, private cityService: CityService) {
  }

  ngOnInit() {
    this.cityService.getTeams().subscribe((data: any) => {
      this.cities = data._embedded.cities;
    });
    if (!this.data.id) {
      this.title = 'Новая команда';
    } else {
      this.title = 'Изменить команду';
    }
  }

  onNoClick(): void {
    this.dialogRef.componentInstance.dialogRef.close(this.data);
    console.log(this.data.city.id);
  }

  onYesClick(): void {
    console.log(this.data.city);
    if (!this.data.id) {
      this.teamService.addTeam(this.data.name, this.data.city.id).subscribe(data => {
      });
    } else {
      this.teamService.updateTeam(this.data.id, this.data.name, this.data.city.id).subscribe(data => {
      });
    }
  }

  compareObj(c1: City, c2: City): boolean {
    return c1 && c2 && c1.id === c2.id;
  }

}
