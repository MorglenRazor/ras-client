import { useState } from "react";

interface Props{
    reagentValue: Reagent;
    handleCancel: ()=> void;
}

export const AddReagentInAct=({reagentValue,handleCancel}:Props)=>{
    const [numDoc, setNumDoc] = useState<string>("");
    const [dateIssue, setDateIssue] = useState<[number, number, number, number, number, number]>([0,0,0,0,0,0]);
    const [nWoB, setNwob] = useState("");
    const [countReagent , setCr] = useState("");
    const [nSos, setNsos] = useState("");
    const [acc, setAcc] = useState(false);
    const [idReagent, setIdReagent] = useState(0);
    const [idMan, setIdMan] = useState(0);
}