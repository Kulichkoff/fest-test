import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CardComponent } from './components/card/card.component';


@NgModule({
    declarations: [
        ToolbarComponent,
        CardComponent,
    ],
    imports: [
        CommonModule,
        ButtonModule,
    ],
    exports: [
        ToolbarComponent,
    ],
})
export class SharedModule {
}
