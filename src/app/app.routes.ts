import { Routes } from '@angular/router';

import { ProductDetailComponent } from './domains/products/pages/product-detail/product-detail.component';
import { ListComponent } from './domains/products/pages/list/list.component';
import { AboutComponent } from './domains/info/pages/about/about.component';
import { NotFoundComponent } from '@info/pages/not-found/not-found.component';
import { LayoutComponent } from '@shared/components/layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                component: ListComponent
            },
            {
                path: 'about',
                component: AboutComponent
            },
        ]
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
