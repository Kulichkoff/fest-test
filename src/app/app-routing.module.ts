import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes,
} from '@angular/router';
import { MainPageComponent } from './modules/core/components/main-page/main-page.component';
import { NotFoundComponent } from './modules/core/components/not-found/not-found.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: MainPageComponent },
    { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '404' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
