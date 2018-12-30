import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class CityService {
  constructor(private http: HttpClient) {
  }

  baseUrl = 'http://localhost:8082/cities/';


  getTeams(): Observable<Object> {
    return this.http.get(this.baseUrl);
  }

}
