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
import { AdminMotorsComponent } from './components/admin-motors/admin-motors.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    declarations: [
        MainPageComponent,
        HeaderComponent,
        NotFoundComponent,
        FooterComponent,
        AdminMotorsComponent,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        BrowserAnimationsModule,
        SharedModule,
        ButtonModule,
        RippleModule,
        ToastModule,
        RouterModule.forChild([]),
    ],
    providers: [
        MessageService,
    ],
})
export class CoreModule {
}
