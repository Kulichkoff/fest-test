import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent {
    public navigation = [
        { text: 'Catalog', link: '/' },
        { text: 'Shops', link: '/shops' },
        { text: 'Delivery', link: '/delivery' },
    ]
}
