import { ReagentActRequest } from "@/app/services/ReagentService";
import { ConverDate } from "@/app/shared/ConverDate";
import { Button, Checkbox, DatePicker, DatePickerProps, Input, Tooltip } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { ChangeEvent, useState } from "react";

interface Props{
    onSetReagets: (newValue: ReagentActRequest)=>void;
}


export const AddReagent=({onSetReagets}:Props)=>{

    const defValReagent ={
        numDoc: "",
        dateIssue: [0,0,0,0,0,0],
        numWellOrBatch: "",
        countReagent: "",
        numSealOnSample: "",
        accordance: false 
    } as ReagentActRequest;

    const [numDoc, setNumDoc] = useState<string>("");
    const [dateIssue, setDateIssue] = useState<[number,number,number,number,number,number]>([0,0,0,0,0,0]);
    const [numWob, setNumWob] = useState<string>("");
    const [countReagent, setCountReagent] = useState<string>("");
    const [numSos, setNumSos] = useState<string>("");
    const [accordance, setAccordance] = useState<boolean>(false)
    
    const [reagent, setReagentValue] = useState<ReagentActRequest>(defValReagent);
    const [dateIss, setDateIss] = useState<Dayjs>(dayjs());
   const [reagetnRa, setReagentRa] = useState<ReagentActRequest[]>([]);
 
    let reagentArr: ReagentActRequest[] = new Array();
    let reg: ReagentActRequest = 
            {
                numDoc:"", 
                reagent: {id:1,strVar:""},
                dateIssue: [0,0,0,0,0,0], 
                numWellOrBatch: "", 
                countReagent:"", 
                numSealOnSample: "", 
                sedLetter: {numSed:"тест", dateToSED:[2024,2,21,10,10,10], linkToSED:"ntn"},
                manufactirer: {id:1,strVar:""},
                accordance:false};
    const addReagent = () =>{
        

        reg.numDoc = numDoc;
        reg.dateIssue = dateIssue;
        reg.numWellOrBatch = numWob;
        reg.countReagent =  countReagent;
        reg.numSealOnSample = numSos;
        reg.accordance = accordance;

        setReagentValue(reg);

        reagentArr.push(reg);
        setReagentRa([...reagetnRa, reg]);
        onSetReagets(reg)
        setNumDoc("");
        setDateIssue([0,0,0,0,0,0]);
        setNumWob("");
        setNumSos("");
        setAccordance(false);
        setCountReagent("");
        setReagentValue({
            numDoc:"", 
            reagent: {id:1,strVar:""},
            dateIssue: [0,0,0,0,0,0], 
            numWellOrBatch: "", 
            countReagent:"", 
            numSealOnSample: "", 
            sedLetter: {numSed:"тест", dateToSED:[2024,2,21,10,10,10], linkToSED:"ntn"},
            manufactirer: {id:1,strVar:""},
            accordance:false});
    }

    const onChangeDateReagent: DatePickerProps['onChange'] =(date) =>{
        if(date==null)
            date = dayjs()
        setDateIss(dayjs(date));
        var dt = date.toDate();
        setDateIssue(ConverDate(dt));
       
    }

    return(
        <div className="reagent_add">
            <div><h4>Добавить реагет</h4></div>
            <Input value={numDoc} onChange={(e)=> setNumDoc?.(e.target.value)} placeholder="Номер документа">
            </Input>

            <DatePicker value={dateIss} onChange={onChangeDateReagent}></DatePicker>

            <Input value={numWob} onChange={(e)=>setNumWob?.(e.target.value)} placeholder="Номер пробы">
            </Input>

            <Input value={countReagent} onChange={(e)=>setCountReagent?.(e.target.value)} placeholder="Кол-во реагента">
            </Input>

            <Input value={numSos} onChange={(e)=>setNumSos?.(e.target.value)} placeholder="">
            </Input>
            <div>
            
            {/* <h4>Соответствие <Checkbox checked={accordance} onChange={(e)=>setAccordance?.(e.target.value)}>
                </Checkbox></h4> */}
            </div>
            <div>
                    <Tooltip title="Добавить еще реагент">
                        <Button type="primary" onClick={addReagent} shape="circle" style={{
                            marginTop:"10px",
                        }}>+</Button>
                    </Tooltip>
            </div>
        </div>
    )
}