import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {TeamService} from '../service/team.service';
import {Team} from '../model/team.model';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {DialogComponent} from '../dialog/app.dialog';
import {City} from '../model/city.model';
import {CityService} from '../service/city.service';

@Component({
  selector: 'app-table',
  templateUrl: './app.table.html',
  styleUrls: ['./app.table.css']
})
export class AppTableComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  datasource;
  displayedColumns = ['name', 'city', 'actions', 'actions2'];
  city: City;
  team: Team;
  teams: Team[];

  constructor(private router: Router, private teamService: TeamService, private cityService: CityService, public dialog: MatDialog) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '300px',
      data: {team: this.team}
    });
    console.log('The dialog was opened');
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
    this.team = null;
  }

  ngOnInit() {
    this.teamService.getTeamsV2().subscribe((data: any) => {
      this.teams = (data._embedded.teams);
      this.datasource = new MatTableDataSource(this.teams);
      this.datasource.sort = this.sort;
      this.datasource.paginator = this.paginator;
    });
  }

  onClickDelete(team: Team): void {
    this.teamService.deleteTeamById(team).subscribe(data => {
      this.ngOnInit();
    });
  }

  onClickUpdate(team: Team): void {
    this.cityService.getCity(team._links.city.href).subscribe((cityData: any) => {
      team.city = cityData;
    });
    this.team = team;
    this.openDialog();
  }
}
