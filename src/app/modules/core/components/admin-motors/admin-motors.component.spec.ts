import {
    ComponentFixture,
    TestBed,
} from '@angular/core/testing';

import { AdminMotorsComponent } from './admin-motors.component';
import { ToastService } from '../../services/toast.service';
import { MessageService } from 'primeng/api';

describe('AdminMotorsComponent', () => {
    let component: AdminMotorsComponent;
    let fixture: ComponentFixture<AdminMotorsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AdminMotorsComponent],
            providers: [
                ToastService,
                MessageService,
            ],
        })
            .compileComponents();

        fixture = TestBed.createComponent(AdminMotorsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
