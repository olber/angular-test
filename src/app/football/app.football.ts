import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {TeamService} from '../service/team.service';
import {Team} from '../model/team.model';
import {MatSort, MatSortable, MatTableDataSource, MatPaginator} from '@angular/material';

@Component({
  selector: 'app-football',
  templateUrl: './app.football.html',
  styleUrls: ['./app.football.css']
})
export class AppFootballComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  teams: Team[];
  datasource;
  displayedColumns = ['id', 'name', 'city', 'actions'];

  constructor(private router: Router, private teamService: TeamService) {
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
}
