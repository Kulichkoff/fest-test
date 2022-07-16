import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes,
} from '@angular/router';
import { NotFoundComponent } from './modules/core/components/not-found/not-found.component';
import { AdminMotorsComponent } from './modules/core/components/admin-motors/admin-motors.component';
import { CarConfigurationPanelComponent } from './modules/core/components/car-configuration-panel/car-configuration-panel.component';


const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'cars' },
    {
        path: 'cars', children: [
            { path: '', component: AdminMotorsComponent },
            { path: 'config', component: CarConfigurationPanelComponent },
        ],
    },

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
