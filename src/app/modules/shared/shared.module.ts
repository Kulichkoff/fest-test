import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CardComponent } from './components/card/card.component';
import { InputTextModule } from 'primeng/inputtext';
import {
    FormsModule,
    ReactiveFormsModule,
} from '@angular/forms';


@NgModule({
    declarations: [
        ToolbarComponent,
        CardComponent,
    ],
    imports: [
        CommonModule,
        ButtonModule,
        InputTextModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [
        ToolbarComponent,
        CardComponent,
    ],
})
export class SharedModule {
}
