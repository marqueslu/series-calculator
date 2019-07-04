import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Serie } from '../models/serie';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  API = environment.API;

  constructor(private http: HttpClient) { }

  listSeries(){
    return this.http.get<Serie[]>(`${this.API}/series`).pipe(take(1));
  }
}
