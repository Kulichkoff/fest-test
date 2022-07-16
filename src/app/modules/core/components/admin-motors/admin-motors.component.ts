import { Component } from '@angular/core';
import { IButton } from '../../models/button.interface';
import { ToastService } from '../../services/toast.service';
import { Router } from '@angular/router';

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
        private readonly router: Router,
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
        this.router.navigate(['/cars/config']).then();
    }
}
