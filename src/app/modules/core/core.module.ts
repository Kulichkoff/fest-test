import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { RouterModule } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [
        MainPageComponent,
        HeaderComponent,
        NotFoundComponent,
        FooterComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        ButtonModule,
        RippleModule,
        RouterModule.forChild([]),
    ],
})
export class CoreModule {
}
