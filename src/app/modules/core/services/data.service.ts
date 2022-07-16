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

    public findAllCars(): Observable<ICar[]> {
        const query = window.location.href.split('?')[1] || '';
        if (query) {
            return this.http.get<ICar[]>(`/api/cars?${query}`);
        } else {
            return this.http.get<ICar[]>(`/api/cars`);
        }
    }

    public findOneCar(id: number): Observable<ICar> {
        return this.http.get<ICar>(`/api/cars/${id}`);
    }

    public createCar(car: ICar): Observable<ICar> {
        return this.http.post<ICar>('/api/cars', car);
    }

    public editCar(before: ICar, after: ICar): Observable<ICar> {
        return this.http.patch<ICar>(`/api/cars/${before.id}`, after);
    }

    public removeCar(car: ICar): Observable<any> {
        return this.http.delete(`/api/cars/${car.id}`);
    }
}
