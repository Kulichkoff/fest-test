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

    public findAllCars(page: number, limit: number = 30): Observable<ICar[]> {
        return this.http.get<ICar[]>(`/api/cars?_page=${page + 1}&_limit=${limit}`);
    }

    public findOneCar(id: number): Observable<ICar> {
        return this.http.get<ICar>(`/api/cars/${id}`);
    }

    public findCarsFullTextSearch(text: string) {
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
