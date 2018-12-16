import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {TeamService} from '../service/team.service';

export interface DialogData {
  id: number;
  city: string;
  name: string;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  id: number;
  city: string;
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
      this.id = result.id;
      this.city = result.city;
      this.name = result.name;
    });
  }

}

@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private teamService: TeamService) {
  }

  onNoClick(): void {
    this.dialogRef.componentInstance.dialogRef.close(this.data);
  }

  onYesClick(): void {
    console.log(this.data.id);
    if (!this.data.id) {
      console.log('i am in if');
      this.teamService.addTeam(this.data.name, this.data.city).subscribe(data => {
      });
    } else {
      console.log('i am in else');
      this.teamService.updateTeam(this.data.id, this.data.name, this.data.city).subscribe(data => {
      });
    }
  }

}
