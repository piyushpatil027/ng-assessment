
import { IPizzaDashboardLabel } from './../data-model/model';

export const DASHBOARD_LABEL: IPizzaDashboardLabel = {
    section1: {
        headerLabel: 'New Order',
        customerName: 'Customer Name',
        btnLabel: 'Place Order'
    },
    section2: {
        headerLabel: 'Open Orders',
        orderNumberLabel: 'Order Number',
        toppingsLabel: 'Toppings',
        btnLabel: 'Send to Kitchen'
    },
    section3: {
        headerLabel: 'Ready for Delivery',
        orderNumberLabel: 'Order Number',
        driverLabel: 'Driver Name',
        btnLabel: 'Assign'
    },
    section4: {
        headerLabel: 'Delivered',
        orderNumberLabel: 'Order Number',
        toppingsLabel: 'Toppings',
        driverLabel: 'Driver'
    }
}


