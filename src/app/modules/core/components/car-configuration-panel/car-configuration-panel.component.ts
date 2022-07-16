import {
    Component,
    OnInit,
} from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    Validators,
} from '@angular/forms';
import { ToastService } from '../../services/toast.service';
import { ICar } from '../../models/car.interface';
import { DataService } from '../../services/data.service';
import { first } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-car-configuration-panel',
    templateUrl: './car-configuration-panel.component.html',
})
export class CarConfigurationPanelComponent implements OnInit {

    public configForm: FormGroup = this.fb.group({
        Name: [
            '',
            Validators.compose([
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(50),
            ]),
        ],
        Price: [
            1000,
            Validators.required,
        ],
        Currency: [
            'USD',
            Validators.required,
        ],
        Year: [
            1885,
            Validators.compose([
                Validators.required,
                Validators.min(1885),
            ]),
        ],
        Horsepower: 0,
        Acceleration: 0,
        Cylinders: 0,
        Displacement: 0,
        Miles_per_Gallon: 0,
        Origin: '',
        Weight_in_lbs: 0,
    });

    public currencyDropdown = [
        { code: 'EUR', name: 'Euro' },
        { code: 'USD', name: 'US Dollar' },
    ];

    public get configFormValue(): ICar {
        return this.configForm.value as ICar;
    }

    public currentCarId?: ICar['id'];
    public currentCar?: ICar;

    public title = 'Create new car';

    constructor(
        private readonly fb: FormBuilder,
        private readonly toastService: ToastService,
        private readonly dataService: DataService,
        private readonly activatedRoute: ActivatedRoute,
    ) { }

    public ngOnInit() {
        this.currentCarId = this.activatedRoute.snapshot.params['id'];
        if (this.currentCarId) {
            this.initCurrentCar();
        }
    }

    private initCurrentCar() {
        this.dataService.findOneCar(this.currentCarId!)
            .pipe(
                first(),
            )
            .subscribe((car) => {
                this.currentCar = car;
                this.configForm.patchValue({ ...car, Year: car.Year.slice(0, 4) });
                this.title = `Edit "${car.Name}", ${car.id} ID`;
            });
    }

    public onSubmit() {
        this.configForm.markAllAsTouched();
        if (!this.configForm.valid) {
            this.toastService.error(
                'Not valid',
                'This form is not valid. May you should be more attentive?',
            );
            return;
        }

        if (this.currentCar) {
            this.updateCar();
        } else {
            this.createCar();
        }
    }

    private createCar() {
        this.dataService.createCar({
            ...this.configFormValue,
            Year: `${this.configFormValue.Year}-01-01`,
        })
            .pipe(
                first(),
            )
            .subscribe(() => {
                this.toastService.notify('Successfully created a car', '');
            });
    }

    private updateCar() {
        this.dataService.editCar(
            this.currentCar!, {
                ...this.configFormValue,
                Year: `${this.configFormValue.Year}-01-01`,
            })
            .pipe(
                first(),
            )
            .subscribe(() => {
                this.toastService.notify('Successfully updated a car', '');
            });
    }
}
