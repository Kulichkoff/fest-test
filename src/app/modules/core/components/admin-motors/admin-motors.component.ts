import { Component } from '@angular/core';
import { IButton } from '../../models/button.interface';

@Component({
    selector: 'app-admin-motors',
    templateUrl: './admin-motors.component.html',
})
export class AdminMotorsComponent {
    public toolbarButtonSet: IButton[] = [
        { label: 'Создать', icon: 'plus', method: this.onAddButtonClicked },
    ];

    private onAddButtonClicked() {
    }
}
