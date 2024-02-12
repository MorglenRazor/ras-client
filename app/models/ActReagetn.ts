interface ActDetails{
    actId: string;
    sedNum: string;
    dateSed: string;
    contractorName: string;
    dateTimeReceipt: [number,number,number,number,number,number];
    numAct: string;
    customerName: string;
    methodObtainingName: string
    placeCollect: string;
    dateTimeCollect: [number,number,number,number,number,number];
    docs: string;
    sedLink: string;
    comment: string;
    reagents?: Reagent[];
}