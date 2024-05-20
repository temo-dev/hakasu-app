import { Routes } from '@angular/router';

// dashboard
import { IndexComponent } from './index';
import { AnalyticsComponent } from './analytics';
import { FinanceComponent } from './finance';
import { CryptoComponent } from './crypto';

// widgets
import { WidgetsComponent } from './widgets';

// tables
import { TablesComponent } from './tables';

// font-icons
import { FontIconsComponent } from './font-icons';

// charts
import { ChartsComponent } from './charts';

// dragndrop
import { DragndropComponent } from './dragndrop';

// layouts
import { AppLayout } from './layouts/app-layout';
import { AuthLayout } from './layouts/auth-layout';

// pages
import { KnowledgeBaseComponent } from './pages/knowledge-base';
import { FaqComponent } from './pages/faq';

export const routes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            // dashboard
            { path: '', component: IndexComponent, title: 'HAKASU - HatSolutions - Lets Create Successful Digital Projects Together' },
            {
                path: 'analytics',
                component: AnalyticsComponent,
                title: 'Analytics Admin | HAKASU - HatSolutions - Lets Create Successful Digital Projects Together',
            },
            { path: 'finance', component: FinanceComponent, title: 'Finance Admin | HAKASU - HatSolutions - Lets Create Successful Digital Projects Together' },
            { path: 'crypto', component: CryptoComponent, title: 'Crypto Admin | HAKASU - HatSolutions - Lets Create Successful Digital Projects Together' },

            //apps
            { path: '', loadChildren: () => import('./apps/apps.module').then((d) => d.AppsModule) },

            // widgets
            { path: 'widgets', component: WidgetsComponent, title: 'Widgets | HAKASU - HatSolutions - Lets Create Successful Digital Projects Together' },

            // components
            { path: '', loadChildren: () => import('./components/components.module').then((d) => d.ComponentsModule) },

            // elements
            { path: '', loadChildren: () => import('./elements/elements.module').then((d) => d.ElementsModule) },

            // forms
            { path: '', loadChildren: () => import('./forms/form.module').then((d) => d.FormModule) },

            // users
            { path: '', loadChildren: () => import('./users/user.module').then((d) => d.UsersModule) },

            // tables
            { path: 'tables', component: TablesComponent, title: 'Tables | HAKASU - HatSolutions - Lets Create Successful Digital Projects Together' },
            { path: '', loadChildren: () => import('./datatables/datatables.module').then((d) => d.DatatablesModule) },

            // font-icons
            {
                path: 'font-icons',
                component: FontIconsComponent,
                title: 'Font Icons | HAKASU - HatSolutions - Lets Create Successful Digital Projects Together',
            },

            // charts
            { path: 'charts', component: ChartsComponent, title: 'Charts | HAKASU - HatSolutions - Lets Create Successful Digital Projects Together' },

            // dragndrop
            { path: 'dragndrop', component: DragndropComponent, title: 'Dragndrop | HAKASU - HatSolutions - Lets Create Successful Digital Projects Together' },

            // pages
            {
                path: 'pages/knowledge-base',
                component: KnowledgeBaseComponent,
                title: 'Knowledge Base | HAKASU - HatSolutions - Lets Create Successful Digital Projects Together',
            },
            { path: 'pages/faq', component: FaqComponent, title: 'FAQ | HAKASU - HatSolutions - Lets Create Successful Digital Projects Together' },
        ],
    },

    {
        path: '',
        component: AuthLayout,
        children: [
            // pages
            { path: '', loadChildren: () => import('./pages/pages.module').then((d) => d.PagesModule) },

            // auth
            { path: '', loadChildren: () => import('./auth/auth.module').then((d) => d.AuthModule) },
        ],
    },
];
