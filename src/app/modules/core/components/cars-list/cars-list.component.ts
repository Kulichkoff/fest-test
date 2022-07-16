import {
    Component,
    ElementRef,
    OnInit,
    ViewChild,
} from '@angular/core';
import { ICar } from '../../models/car.interface';
import { DataService } from '../../services/data.service';
import {
    catchError,
    EMPTY,
    first,
} from 'rxjs';

@Component({
    selector: 'app-cars-list',
    templateUrl: './cars-list.component.html',
})
export class CarsListComponent implements OnInit {

    public carsList?: ICar[];

    public carsListFullSize = 300;    // this variable I could get from API, but there is no
    public page = 0;

    constructor(
        private readonly dataService: DataService,
    ) { }

    public ngOnInit() {
        this.initCarsList();
    }

    private initCarsList() {
        this.dataService.findAllCars(this.page)
            .pipe(
                first(),
                catchError(err => {
                    console.error(err);
                    return EMPTY;
                }),
            )
            .subscribe((cars) => {
                this.carsList = cars;
            });
    }

    public onPageChange({ page }: any) {
        this.page = page;
        this.initCarsList();
        document.querySelector('app-admin-motors')!.scrollIntoView({ behavior: 'smooth' });
    }
}
