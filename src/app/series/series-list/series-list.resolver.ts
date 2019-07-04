import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Serie } from 'src/app/models/serie';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SeriesService } from '../series.service';

@Injectable({providedIn: 'root'})
export class SeriesListResolver implements Resolve<Observable<Serie[]>>{    
    constructor(private seriesSerivce: SeriesService) {        
        
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        return this.seriesSerivce.listSeries();
    }
}