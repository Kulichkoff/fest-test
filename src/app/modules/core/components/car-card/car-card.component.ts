import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
} from '@angular/core';
import { ICar } from '../../models/car.interface';
import {
    ConfirmationService,
    MenuItem,
} from 'primeng/api';

@Component({
    selector: 'app-car-card',
    templateUrl: './car-card.component.html',
})
export class CarCardComponent implements OnInit {

    @Input() car!: ICar;

    @Output() onEdit = new EventEmitter<ICar>();
    @Output() onRemove = new EventEmitter<ICar>();

    public menuItems!: MenuItem[];

    constructor(
        private readonly confirmationService: ConfirmationService,
    ) {}

    public ngOnInit() {
        this.menuItems = [
            { label: 'Edit', icon: 'pi pi-pencil', command: () => this.onEditBtnClicked() },
            { label: 'Remove', icon: 'pi pi-trash', command: () => this.onRemoveBtnClicked() },
        ];
    }

    public onEditBtnClicked() {
        this.onEdit.emit(this.car);
    }

    public onRemoveBtnClicked() {
        this.onRemove.emit(this.car);
    }
}
