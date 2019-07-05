import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Serie } from 'src/app/models/serie';
import { Observable } from 'rxjs';
import { SeriesService } from '../series.service';

@Injectable({providedIn: 'root'})
export class CalculatorResolver implements Resolve<Observable<Serie>>{
    
    constructor(private seriesService: SeriesService) {
        
        
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {        
        return this.seriesService.getSerie(route.params["id"]);
    }
}