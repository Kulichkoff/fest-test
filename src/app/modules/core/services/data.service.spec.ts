import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { ICar } from '../models/car.interface';
import { RouterTestingModule } from '@angular/router/testing';

describe('DataService', () => {
    let service: DataService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                RouterTestingModule,
            ],
        });
        service = TestBed.inject(DataService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('#findAllCars', () => {
        it('should return an Observable<ICar[]>', () => {
            const dummyCars = [
                { id: 0, Name: 'chevrolet camaro' },
                { id: 1, Name: 'dodge challenger' },
            ];

            service.findAllCars()
                .subscribe(cars => {
                    expect(cars.length).toBe(2);
                    expect(cars).toEqual(dummyCars as ICar[]);
                });

            const req = httpMock.expectOne('/api/cars');
            expect(req.request.method).toBe('GET');
            req.flush(dummyCars);
        });
    });
});
