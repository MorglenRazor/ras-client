interface Reagent{
    id: string;
    numDoc: string;
    dateIssue: [number,number,number,number,number,number];
    numWellOrBacth: string;
    countReagent: string;
    numSealOnSample: string;
    accordance: boolean;
    reagentName: Tfh;
    sedLetterReagent: SedLetter;
    manufacturerReagent: Tfh;
}