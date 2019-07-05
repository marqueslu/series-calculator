import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Serie } from '../models/serie';
import { take } from 'rxjs/operators';
import { Season } from '../models/season';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  API = environment.API;

  constructor(private http: HttpClient) { }

  listSeries(){
    return this.http.get<Serie[]>(`${this.API}/series`)
    .pipe(take(1));
  }

  getSerie(idSerie: string){    
    return this.http.get<Serie>(`${this.API}/series/${idSerie}`)
    .pipe(take(1));
  }

  getSeasons(idSerie: string){
    return this.http.get<Season>(`${this.API}/series/${idSerie}/seasons`)
    .pipe(take(1));
  }

  getEpisodes(idSerie:string, idSeason: string){
    return this.http.get<Season>(`${this.API}/series/${idSerie}/seasons/${idSeason}/episodes`)
    .pipe(take(1));
  }
}
