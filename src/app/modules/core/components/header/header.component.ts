import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent {
    public navigation = [
        { text: 'Каталог', link: '/' },
        { text: 'Магазины', link: '/shops' },
        { text: 'Доставка', link: '/delivery' },
    ]
}
