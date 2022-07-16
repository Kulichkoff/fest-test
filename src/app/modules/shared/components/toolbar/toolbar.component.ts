import {
    Component,
    EventEmitter,
    Input,
    OnDestroy,
    OnInit,
    Output,
} from '@angular/core';
import { IButton } from '../../../core/models/button.interface';
import { FormControl } from '@angular/forms';
import {
    debounceTime,
    Subject,
    takeUntil,
} from 'rxjs';
import {
    ActivatedRoute,
    Router,
} from '@angular/router';
import { SpinnerService } from '../../../core/services/spinner.service';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
})
export class ToolbarComponent implements OnInit, OnDestroy {
    @Input() buttonSet!: IButton[];
    @Input() showSearchInput = false;

    public searchInputSpinner = false;

    @Output() buttonClicked = new EventEmitter<IButton>();

    public searchInputControl = new FormControl();

    private ngUnsubscribe = new Subject();

    constructor(
        private readonly router: Router,
        private readonly activatedRoute: ActivatedRoute,
        private readonly spinnerService: SpinnerService,
    ) {}

    public ngOnInit() {
        this.searchInputControl.valueChanges
            .pipe(
                debounceTime(600),
                takeUntil(this.ngUnsubscribe),
            )
            .subscribe(newValue => {
                this.addSearchToQuery(newValue);
            });

        this.spinnerService.loading
            .pipe(
                takeUntil(this.ngUnsubscribe),
            )
            .subscribe((loading) => {
                this.searchInputSpinner = loading;
            })
    }

    public ngOnDestroy() {
        this.ngUnsubscribe.next(null);
        this.ngUnsubscribe.complete();
    }

    public onButtonClicked(button: IButton) {
        this.buttonClicked.emit(button);
    }

    public trackById(index: number, item: IButton) {
        return item.id;
    }

    private addSearchToQuery(text: string) {
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: {
                q: text,
            },
            queryParamsHandling: 'merge',
            skipLocationChange: false,
        }).then();
    }
}
