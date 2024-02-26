interface Act{
    actId: string;
    numAct: string;
    placeCollect: string;
    dateTimeReceipt: [number,number,number,number,number,number];
    dateTimeCollect: [number,number,number,number,number,number];
    docs: string;
    comment: string;
    sedLetter: SedLetter;
    customer: Tfh;
    contractor: Tfh;
    methodObtaining:Tfh;
    reagents: Reagent[];
}