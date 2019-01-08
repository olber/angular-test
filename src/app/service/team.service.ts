import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Team} from '../model/team.model';
import {Observable} from 'rxjs';

@Injectable()
export class TeamService {
  constructor(private http: HttpClient) {
  }

  baseUrl = 'http://localhost:8082/teams?sort=id,asc';

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.baseUrl);
  }

  getTeamsV2(): Observable<Object> {
    return this.http.get(this.baseUrl);
  }


  getTeamById(team: Team) {
    return this.http.get<Team>(team._links.self.href);
  }

  deleteTeamById(team: Team) {
    if (confirm('Удалить?')) {
      return this.http.delete(team._links.self.href);
    }
  }

  addTeam(name: string, city: number) {
    return this.http.post(this.baseUrl + 'add/?city_id=' + city + '&name=' + name, {});
  }

  updateTeam(id: number, name: string, city: number) {
    return this.http.put(this.baseUrl + 'update?id=' + id + '&city_id=' + city + '&name=' + name, {});
  }


  addOrUpdate(team: Team) {
    const params = {};
    params['name'] = team.name;
    params['city'] = team.city._links.self.href;
    console.log(params);
    if (team._links) {
      return this.http.put(team._links.self.href, params);
    } else {
      return this.http.post(this.baseUrl, params);
    }
  }
}
