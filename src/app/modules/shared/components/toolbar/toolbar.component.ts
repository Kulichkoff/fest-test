import {
    Component,
    Input,
} from '@angular/core';
import { IButton } from '../../../core/models/button.interface';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
})
export class ToolbarComponent {
    @Input() buttonSet!: IButton[];
}
