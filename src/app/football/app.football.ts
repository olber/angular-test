import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {TeamService} from '../service/team.service';
import {Team} from '../model/team.model';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {DialogOverviewExampleDialogComponent} from '../dialog/dialog.component';

@Component({
  selector: 'app-football',
  templateUrl: './app.football.html',
  styleUrls: ['./app.football.css']
})
export class AppFootballComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  datasource;
  displayedColumns = ['id', 'name', 'city', 'actions', 'actions2'];
  id: number;
  city: string;
  name: string;

  constructor(private router: Router, private teamService: TeamService, public dialog: MatDialog) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '250px',
      data: {id: this.id, name: this.name, city: this.city}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
    });
  }

  ngOnInit() {
    this.teamService.getTeams().subscribe(data => {
      this.datasource = new MatTableDataSource(data);
      this.datasource.sort = this.sort;
      this.datasource.paginator = this.paginator;
    });
  }

  onClickDelete(team: Team): void {
    this.teamService.deleteTeamById(team.id).subscribe(data => {
      this.ngOnInit();
    });
  }

  onClickUpdate(team: Team): void {
    this.teamService.getTeamById(team.id).subscribe(data => {
      this.id = data.id;
      this.name = data.name;
      this.city = data.city;
      this.openDialog();
    });
  }
}
