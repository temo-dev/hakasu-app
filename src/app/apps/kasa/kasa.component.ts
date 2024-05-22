import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
    moduleId: module.id,
    templateUrl: './kasa.component.html',
})
export class KasaComponent {
    constructor() {}
    isShowTable = false;
    isShowAddItem = false;
    tableData = [
        {
            id: 1,
            code: 1001,
            item: 'Bun Bo Hue',
            price: 1000,
            qty: 1,
        },
        {
            id: 2,
            code: 1002,
            item: 'Pho Ha Noi',
            price: 1000,
            qty: 3,
        },
        {
            id: 1,
            code: 1001,
            item: 'Bun Bo Hue',
            price: 1000,
            qty: 1,
        },
        {
            id: 2,
            code: 1002,
            item: 'Pho Ha Noi',
            price: 1000,
            qty: 3,
        },
        {
            id: 1,
            code: 1001,
            item: 'Bun Bo Hue',
            price: 1000,
            qty: 1,
        },
        {
            id: 2,
            code: 1002,
            item: 'Pho Ha Noi',
            price: 1000,
            qty: 3,
        },
        {
            id: 1,
            code: 1001,
            item: 'Bun Bo Hue',
            price: 1000,
            qty: 1,
        },
        {
            id: 2,
            code: 1002,
            item: 'Pho Ha Noi',
            price: 1000,
            qty: 3,
        },
        {
            id: 1,
            code: 1001,
            item: 'Bun Bo Hue',
            price: 1000,
            qty: 1,
        },
        {
            id: 2,
            code: 1002,
            item: 'Pho Ha Noi',
            price: 1000,
            qty: 3,
        },
        {
            id: 1,
            code: 1001,
            item: 'Bun Bo Hue',
            price: 1000,
            qty: 1,
        },
        {
            id: 2,
            code: 1002,
            item: 'Pho Ha Noi',
            price: 1000,
            qty: 3,
        },
        {
            id: 2,
            code: 1002,
            item: 'Pho Ha Noi',
            price: 1000,
            qty: 3,
        },
        {
            id: 1,
            code: 1001,
            item: 'Bun Bo Hue',
            price: 1000,
            qty: 1,
        },
        {
            id: 2,
            code: 1002,
            item: 'Pho Ha Noi',
            price: 1000,
            qty: 3,
        },
    ];

    tab: string = 'home';
    category: string = 'menu';
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
}
