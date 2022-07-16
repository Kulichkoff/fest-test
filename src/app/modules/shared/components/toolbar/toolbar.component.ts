import {
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import { IButton } from '../../../core/models/button.interface';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
})
export class ToolbarComponent {
    @Input() buttonSet!: IButton[];

    @Output() buttonClicked = new EventEmitter<IButton>();

    public onButtonClicked(button: IButton) {
        this.buttonClicked.emit(button);
    }

    public trackById(index: number, item: IButton) {
        return item.id;
    }
}
