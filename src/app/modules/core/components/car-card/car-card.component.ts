import {
    Component,
    Input,
} from '@angular/core';
import { ICar } from '../../models/car.interface';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-car-card',
    templateUrl: './car-card.component.html',
})
export class CarCardComponent {

    @Input() car!: ICar;

    public menuItems: MenuItem[] = [
        { label: 'Edit', icon: 'pi pi-pencil', command: () => this.onEditBtnClicked() },
        { label: 'Remove', icon: 'pi pi-trash', command: () => this.onRemoveBtnClicked() },
    ];

    public onEditBtnClicked() {
        console.log('edit', this.car.id);
    }

    public onRemoveBtnClicked() {
        console.log('remove', this.car.id);
    }
}
