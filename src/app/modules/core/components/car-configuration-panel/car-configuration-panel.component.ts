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

    constructor(
        private readonly fb: FormBuilder,
        private readonly toastService: ToastService,
        private readonly dataService: DataService,
    ) { }

    public ngOnInit() {}

    public onSubmit() {
        this.configForm.markAllAsTouched();
        if (!this.configForm.valid) {
            this.toastService.error(
                'Not valid',
                'This form is not valid. May you should be more attentive?',
            );
            return;
        }
        this.dataService.createCar({
            ...this.configFormValue,
            Year: `${this.configFormValue.Year}-01-01`,
        })
            .pipe(
                first(),
            )
            .subscribe(data => {
                console.log(data);
            });
    }

}
