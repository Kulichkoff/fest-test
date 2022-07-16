import { Component } from '@angular/core';
import { IButton } from '../../models/button.interface';
import { ToastService } from '../../services/toast.service';

@Component({
    selector: 'app-admin-motors',
    templateUrl: './admin-motors.component.html',
})
export class AdminMotorsComponent {

    public toolbarButtonSet: IButton[] = [
        { label: 'Создать', icon: 'plus', id: 0 },
    ];

    constructor(
        private readonly toastService: ToastService,
    ) { }

    public onToolbarClicked(button: IButton) {
        switch (button.id) {
            case 0:
                return this.addMotors();
            default:
                return console.error(`There is no buttons with id ${button.id}`, button);
        }
    }

    private addMotors() {
        this.toastService.notify('Автомобиль добавлен', 'Успешно добавлен автомобиль');
    }
}
