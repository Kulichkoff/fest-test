import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { AdminMotorsComponent } from './components/admin-motors/admin-motors.component';
import { ToastModule } from 'primeng/toast';
import {
    ConfirmationService,
    MessageService,
} from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CarCardComponent } from './components/car-card/car-card.component';
import { CarsListComponent } from './components/cars-list/cars-list.component';
import { PaginatorModule } from 'primeng/paginator';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ImageModule } from 'primeng/image';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CarConfigurationPanelComponent } from './components/car-configuration-panel/car-configuration-panel.component';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../../app-routing.module';


@NgModule({
    declarations: [
        MainPageComponent,
        HeaderComponent,
        NotFoundComponent,
        FooterComponent,
        AdminMotorsComponent,
        CarCardComponent,
        CarsListComponent,
        CarConfigurationPanelComponent,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        SharedModule,
        ButtonModule,
        RippleModule,
        ToastModule,
        PaginatorModule,
        ContextMenuModule,
        ImageModule,
        ConfirmDialogModule,
        InputTextModule,
        AppRoutingModule,
    ],
    providers: [
        MessageService,
        ConfirmationService,
    ],
    exports: [
        MainPageComponent,
    ],
})
export class CoreModule {
}
