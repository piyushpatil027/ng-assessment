export interface IPizzaDashboardLabel {
    section1: Section1;
    section2: Section2;
    section3: Section3;
    section4: Section4;
}


export interface Section1 {
    headerLabel: string;
    customerName: string;
    btnLabel: string;
}

export interface Section2 {
    headerLabel: string;
    orderNumberLabel: string;
    toppingsLabel: string;
    btnLabel: string;
}

export interface Section3 {
    headerLabel: string;
    orderNumberLabel: string;
    driverLabel: string;
    btnLabel: string;
}

export interface Section4 {
    headerLabel: string;
    orderNumberLabel: string;
    toppingsLabel: string;
    driverLabel: string;
}
