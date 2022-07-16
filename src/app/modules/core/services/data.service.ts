import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICar } from '../models/car.interface';

@Injectable({
    providedIn: 'root',
})
export class DataService {

    constructor(
        private readonly http: HttpClient,
    ) { }

    public findAllCars(): Observable<ICar> {
        return this.http.get<ICar>('/api/cars');
    }
}
