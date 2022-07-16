import { Injectable } from '@angular/core';
import {
    Observable,
    Subject,
} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SpinnerService {

    private _spinner$ = new Subject<boolean>();

    constructor() { }

    public get loading(): Observable<boolean> {
        return this._spinner$.asObservable();
    }

    public startLoading() {
        this._spinner$.next(true);
    }

    public stopLoading() {
        this._spinner$.next(false);
    }
}
