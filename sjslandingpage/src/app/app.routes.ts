import { Routes } from '@angular/router';
import { LatarBelakang } from './pages/latar-belakang/latar-belakang';
import { MainPage } from './pages/main-page/main-page';
import { Teams } from './pages/teams/teams';

export const routes: Routes = [
    {
        path: '', component: MainPage
    },
    {
        path: 'background', component: LatarBelakang
    },
    {
        path: "teams", component: Teams
    }
];
