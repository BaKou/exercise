import { Route } from "@angular/router";
import { MenuComponent } from "./menu/menu.component";

export const ROUTES: Array<Route> = [
    {
        path: '',
        redirectTo: 'menu',
        pathMatch: 'full',
    },
    {
        path: 'menu',
        component: MenuComponent
    },
    {
        path: 'convert-to-roman',
        loadChildren: () => import('./number-to-roman/number-to-roman.module').then(m => m.NumberToRomanModule)
    },
    {
        path: 'convert-to-bit',
        loadChildren: () => import('./number-to-bit/number-to-bit.module').then(m => m.NumberToBitModule)
    },
];