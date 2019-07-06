import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { Serie, Season, Episode } from '../core';

const mockDate = '';
const params = new HttpParams().append('mockDate', '2019-03-01');


@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  API = environment.API;

  constructor(private http: HttpClient) { }

  listSeries(){
    return this.http.get<Serie[]>(`${this.API}/series`, {params})
    .pipe(take(1));
  }

  getSerie(idSerie: string){    
    return this.http.get<Serie>(`${this.API}/series/${idSerie}`, {params})
    .pipe(take(1));
  }

  getSeasons(idSerie: string){
    return this.http.get<Season[]>(`${this.API}/series/${idSerie}/seasons`,{params})
    .pipe(take(1));
  }

  getEpisodes(idSerie:string, idSeason: string){
    return this.http.get<Episode[]>(`${this.API}/series/${idSerie}/seasons/${idSeason}/episodes`, {params})
    .pipe(take(1));
  }
}
