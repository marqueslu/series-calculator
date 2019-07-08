import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { SeriesService } from '../series.service';
import { Serie } from '../../core';

@Injectable({providedIn: 'root'})
export class CalculatorResolver implements Resolve<Observable<Serie>>{
    
    constructor(private seriesService: SeriesService) {}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {        
        return this.seriesService.getSerie(route.params["id"]);
    }
}