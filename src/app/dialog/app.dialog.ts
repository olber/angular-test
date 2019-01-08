import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {TeamService} from '../service/team.service';
import {City} from '../model/city.model';
import {CityService} from '../service/city.service';
import {Team} from '../model/team.model';

export interface DialogData {
  team: Team;
}

@Component({
  styleUrls: ['./app.dialog.css'],
  selector: 'app-dialog',
  templateUrl: './app.dialog.html',
})
export class DialogComponent implements OnInit {
  title;
  cities: City[];

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private teamService: TeamService, private cityService: CityService) {
  }

  ngOnInit() {
    this.cityService.getCities().subscribe((data: any) => {
      this.cities = data._embedded.cities;
    });
    if (!this.data.team) {
      this.data.team = new Team();
      this.title = 'Новая команда';
    } else {
      this.title = 'Изменить команду';
    }
  }

  onNoClick(): void {
    this.dialogRef.componentInstance.dialogRef.close(this.data);
  }

  onYesClick(): void {
    this.teamService.addOrUpdate(this.data.team).subscribe();
    this.dialogRef.componentInstance.dialogRef.close(this.data);
  }

  compareObj(c1: City, c2: City): boolean {
    return c1 && c2 && c1._links.self.href === c2._links.self.href;
  }

}
