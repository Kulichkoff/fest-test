import {
    Component,
    Input,
} from '@angular/core';
import { ICar } from '../../models/car.interface';

@Component({
    selector: 'app-car-card',
    templateUrl: './car-card.component.html',
})
export class CarCardComponent {
    @Input() car!: ICar;
}
