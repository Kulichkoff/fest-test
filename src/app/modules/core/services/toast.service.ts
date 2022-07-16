import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
    providedIn: 'root',
})
export class ToastService {

    constructor(
        private readonly messageService: MessageService,
    ) { }

    public notify(summary: string, text: string, type: 'success' | 'info' = 'success') {
        this.messageService.add({ severity: type, summary, detail: text });
    }

    public error(summary: string, text: string) {
        this.messageService.add({ severity: 'error', summary, detail: text });
    }
}
