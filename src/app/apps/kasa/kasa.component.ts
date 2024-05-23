import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCoffee, faCutlery, faBus, faBlind } from '@fortawesome/free-solid-svg-icons';
interface Items {
    id: string;
    name: string;
    code: string;
    qty: number;
}

interface Order {
    id: number;
    tableId: number;
    tableName: string;
    items: Items[];
}

interface Category {
    id: string;
    name: string;
    icon: string;
    items: Items[];
}
@Component({
    moduleId: module.id,
    templateUrl: './kasa.component.html',
})
export class KasaComponent {
    constructor(library: FaIconLibrary) {
        library.addIcons(faCoffee);
    }
    faCafe = faCoffee;
    faCutlery = faCutlery;
    faBus = faBus;
    faBlind = faBlind;
    isShowTable = false;
    isShowAddItem = false;
    tableData: Items[] = [];
    categories: Category[] = [
        {
            id: '1',
            name: 'menu',
            icon: 'menu',
            items: [
                {
                    id: '1',
                    name: 'combo-1',
                    code: '1',
                    qty: 1,
                },
                {
                    id: '1',
                    name: 'combo 2',
                    code: '1',
                    qty: 1,
                },
                {
                    id: '1',
                    name: 'combo 3',
                    code: '1',
                    qty: 1,
                },
            ],
        },
        {
            id: '2',
            name: 'tea',
            icon: 'tea',
            items: [
                {
                    id: '1',
                    name: 'Hong Tra',
                    code: '1',
                    qty: 1,
                },
                {
                    id: '1',
                    name: 'Thanh Tra',
                    code: '1',
                    qty: 1,
                },
                {
                    id: '1',
                    name: 'OLong Tra',
                    code: '1',
                    qty: 1,
                },
            ],
        },
        {
            id: '1',
            name: 'coffee',
            icon: 'coffee',
            items: [
                {
                    id: '1',
                    name: 'Zorro Coffee',
                    code: '1',
                    qty: 1,
                },
                {
                    id: '1',
                    name: 'Bac Xiu',
                    code: '1',
                    qty: 1,
                },
                {
                    id: '1',
                    name: 'Latte',
                    code: '1',
                    qty: 1,
                },
            ],
        },
        {
            id: '1',
            name: 'milk-tea',
            icon: 'milk-tea',
            items: [
                {
                    id: '1',
                    name: 'Tran Chau Duong Den',
                    code: '1',
                    qty: 1,
                },
                {
                    id: '1',
                    name: 'Chivas',
                    code: '1',
                    qty: 1,
                },
                {
                    id: '1',
                    name: 'Orreo',
                    code: '1',
                    qty: 1,
                },
            ],
        },
    ];
    tables = [
        {
            id: 1,
            name: 'home',
            code: 'home',
            icon: this.faCutlery,
            items: [
                {
                    id: 1,
                },
                {
                    id: 2,
                },
                {
                    id: 3,
                },
                {
                    id: 4,
                },
            ],
        },
        {
            id: 2,
            name: 'garden',
            code: 'garden',
            icon: this.faCafe,
            items: [
                {
                    id: 1,
                },
                {
                    id: 2,
                },
                {
                    id: 3,
                },
                {
                    id: 4,
                },
            ],
        },
        {
            id: 3,
            name: 'to go',
            code: 'to-go',
            icon: this.faBlind,
            items: [],
        },
        {
            id: 4,
            name: 'delivery',
            code: 'delivery',
            icon: this.faBus,
            items: [],
        },
    ];
    typeOfOrder: string = 'home';
    category: string = 'menu';
    order: Order = Object();
    showPayment() {
        Swal.fire({
            icon: 'question',
            title: '<i>QRCode</i>',
            html: 'You can pay by <b>QRCode</b>',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: 'Yes, I can!',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            cancelButtonText: ' Cancel',
            cancelButtonAriaLabel: 'Thumbs down',
            padding: '2em',
            customClass: 'sweet-alerts',
            showDenyButton: true,
            denyButtonText: 'Pay Normal',
        }).then((result) => {
            console.log('result', result);
            if (result.isConfirmed) {
                console.log('Da Thanh Toan');
            } else if (result.isDismissed) {
                this.isShowTable = false;
                console.log('Tu Choi thanh Toan');
            } else if (result.isDenied) {
                this.isShowTable = false;
                console.log('Thanh Toan Binh Thuong');
            }
        });
    }
    onAddItem(item: Items) {
        this.order.items.push(item);
    }
    createTable(code: string) {
        this.tables.map((zone) => {
            if (zone.code === code) {
                zone.items.push({
                    id: 3,
                });
            }
        });
    }
    openOrder(code: number, zone: any) {
        this.order = {
            id: 1,
            tableId: code,
            tableName: zone.name,
            items: [],
        };
        this.isShowAddItem = true;
        this.tableData = this.order.items;
    }
}
