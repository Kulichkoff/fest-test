import {
    ComponentFixture,
    TestBed,
} from '@angular/core/testing';

import { CarConfigurationPanelComponent } from './car-configuration-panel.component';

describe('CarConfigurationPanelComponent', () => {
    let component: CarConfigurationPanelComponent;
    let fixture: ComponentFixture<CarConfigurationPanelComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CarConfigurationPanelComponent],
        })
            .compileComponents();

        fixture = TestBed.createComponent(CarConfigurationPanelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
