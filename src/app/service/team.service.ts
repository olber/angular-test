import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Team} from '../model/team.model';
import {Observable} from 'rxjs';

@Injectable()
export class TeamService {
  constructor(private http: HttpClient) {
  }

  baseUrl = 'http://localhost:8082/teams/';

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.baseUrl);
  }


  getTeamById(id: number) {
    return this.http.get<Team>(this.baseUrl + '/' + id);
  }

  deleteTeamById(id: number) {
    return this.http.get(this.baseUrl + 'delete?id=' + id);
  }
}