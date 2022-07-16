import {
    ComponentFixture,
    TestBed,
} from '@angular/core/testing';

import { ToolbarComponent } from './toolbar.component';

describe('ToolbarComponent', () => {
    let component: ToolbarComponent;
    let fixture: ComponentFixture<ToolbarComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ToolbarComponent],
        })
            .compileComponents();

        fixture = TestBed.createComponent(ToolbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should run button.method', () => {
        let counter = 0;
        const func = () => counter++;

        component.buttonSet = [{ label: '', icon: '', method: func }];

        fixture.detectChanges();
        const button: HTMLElement = fixture.debugElement.nativeElement.querySelector('button');

        button.click();
        expect(counter)
            .withContext('method called once')
            .toBe(1);

        button.click();
        expect(counter)
            .withContext('method called twice')
            .toBe(2);
    });
});
