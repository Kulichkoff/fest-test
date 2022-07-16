import {
    Component,
    OnInit,
} from '@angular/core';
import { ICar } from '../../models/car.interface';
import { DataService } from '../../services/data.service';
import {
    catchError,
    EMPTY,
    first,
} from 'rxjs';
import { ConfirmationService } from 'primeng/api';
import { ToastService } from '../../services/toast.service';
import {
    ActivatedRoute,
    Router,
} from '@angular/router';

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
        private readonly confirmationService: ConfirmationService,
        private readonly toastService: ToastService,
        private readonly router: Router,
        private readonly activatedRoute: ActivatedRoute,
    ) { }

    public ngOnInit() {
        this.initCarsList();
    }

    private initCarsList() {
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: {
                _page: this.page + 1,
                _limit: 24,
            },
            queryParamsHandling: 'merge',
            skipLocationChange: false,
        }).then(() => {
            this.dataService.findAllCars()
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
        });
    }

    public onPageChange({ page }: any) {
        this.page = page;
        this.initCarsList();
        document.querySelector('app-admin-motors')!.scrollIntoView({ behavior: 'smooth' });
    }

    public onCarEdit(car: ICar) {
        this.router.navigate(['/cars/config', car.id]).then();
    }

    public onCarRemove(car: ICar) {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to remove this car?',
            accept: () => {
                this.dataService.removeCar(car)
                    .pipe(
                        first(),
                    )
                    .subscribe(() => {
                        this.initCarsList();
                        this.toastService.notify(
                            'Car was removed',
                            `${car.Name} with id ${car.id} was removed`,
                        );
                    });
            },
        });
    }
}
