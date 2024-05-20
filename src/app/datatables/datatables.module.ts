import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// datatable
import { DataTableModule } from '@bhplugin/ng-datatable';

// apexchart
import { NgApexchartsModule } from 'ng-apexcharts';

// tippy
import { NgxTippyModule } from 'ngx-tippy-wrapper';

// headlessui
import { MenuModule } from 'headlessui-angular';

// jsontoexcel
import { AngJson2excelBtnModule } from 'ang-json2excel-btn';

// icon
import { IconModule } from 'src/app/shared/icon/icon.module';

import { BasicDatatableComponent } from './basic';
import { AdvancedDatatableComponent } from './advanced';
import { SkinDatatableComponent } from './skin';
import { OrderSortingDatatableComponent } from './order-sorting';
import { ColumnsFilterDatatableComponent } from './columns-filter';
import { MultiColumnDatatableComponent } from './multi-column';
import { MultiTablesComponent } from './multiple-tables';
import { AltPaginationDatatableComponent } from './alt-pagination';
import { CheckboxDatatableComponent } from './checkbox';
import { RangeSearchDatatableComponent } from './range-search';
import { ExportDatatableComponent } from './export';
import { StickyHeaderDatatableComponent } from './sticky-header';
import { CloneHeaderDatatableComponent } from './clone-header';
import { ColumnChooserDatatableComponent } from './column-chooser';

const routes: Routes = [
    {
        path: 'datatables/basic',
        component: BasicDatatableComponent,
        title: 'Basic Table | HAKASU - HatSolutions - Lets Create Successful Digital Projects Together',
    },
    {
        path: 'datatables/advanced',
        component: AdvancedDatatableComponent,
        title: 'Advanced Table | HAKASU - HatSolutions - Lets Create Successful Digital Projects Together',
    },
    {
        path: 'datatables/skin',
        component: SkinDatatableComponent,
        title: 'Skin Table | HAKASU - HatSolutions - Lets Create Successful Digital Projects Together',
    },
    {
        path: 'datatables/order-sorting',
        component: OrderSortingDatatableComponent,
        title: 'Order Sorting Table | HAKASU - HatSolutions - Lets Create Successful Digital Projects Together',
    },
    {
        path: 'datatables/columns-filter',
        component: ColumnsFilterDatatableComponent,
        title: 'Columns Filter Table | HAKASU - HatSolutions - Lets Create Successful Digital Projects Together',
    },
    {
        path: 'datatables/multi-column',
        component: MultiColumnDatatableComponent,
        title: 'Multi Column Table | HAKASU - HatSolutions - Lets Create Successful Digital Projects Together',
    },
    {
        path: 'datatables/multiple-tables',
        component: MultiTablesComponent,
        title: 'Multiple Tables | HAKASU - HatSolutions - Lets Create Successful Digital Projects Together',
    },
    {
        path: 'datatables/alt-pagination',
        component: AltPaginationDatatableComponent,
        title: 'Alternative Pagination | HAKASU - HatSolutions - Lets Create Successful Digital Projects Together',
    },
    {
        path: 'datatables/checkbox',
        component: CheckboxDatatableComponent,
        title: 'Checkbox Table | HAKASU - HatSolutions - Lets Create Successful Digital Projects Together',
    },
    {
        path: 'datatables/range-search',
        component: RangeSearchDatatableComponent,
        title: 'Range Search Table | HAKASU - HatSolutions - Lets Create Successful Digital Projects Together',
    },
    {
        path: 'datatables/export',
        component: ExportDatatableComponent,
        title: 'Export Table | HAKASU - HatSolutions - Lets Create Successful Digital Projects Together',
    },
    {
        path: 'datatables/sticky-header',
        component: StickyHeaderDatatableComponent,
        title: 'Sticky Header | HAKASU - HatSolutions - Lets Create Successful Digital Projects Together',
    },
    {
        path: 'datatables/clone-header',
        component: CloneHeaderDatatableComponent,
        title: 'Clone Header Table | HAKASU - HatSolutions - Lets Create Successful Digital Projects Together',
    },
    {
        path: 'datatables/column-chooser',
        component: ColumnChooserDatatableComponent,
        title: 'Column Chooser Table | HAKASU - HatSolutions - Lets Create Successful Digital Projects Together',
    },
];
@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DataTableModule,
        NgApexchartsModule,
        NgxTippyModule,
        MenuModule,
        AngJson2excelBtnModule,
        IconModule,
    ],
    declarations: [
        BasicDatatableComponent,
        AdvancedDatatableComponent,
        SkinDatatableComponent,
        OrderSortingDatatableComponent,
        ColumnsFilterDatatableComponent,
        MultiColumnDatatableComponent,
        MultiTablesComponent,
        AltPaginationDatatableComponent,
        CheckboxDatatableComponent,
        RangeSearchDatatableComponent,
        ExportDatatableComponent,
        StickyHeaderDatatableComponent,
        CloneHeaderDatatableComponent,
        ColumnChooserDatatableComponent,
    ],
    providers: [],
})
export class DatatablesModule {}
