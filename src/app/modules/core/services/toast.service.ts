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
        this.messageService.add({ severity: type, summary: summary, detail: text });
    }
}
