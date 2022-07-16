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
        return this.http.get<ICar[]>(`/api/cars?_page=${page + 1}&_limit=${limit}` );
    }

    public findCarsFullTextSearch(text: string) {
    }

    public editCar(car: ICar) {
    }

    public removeCar(car: ICar) {
    }
}
