import { ActRequest } from "@/app/services/ActService";
import { ConverDate } from "@/app/shared/ConverDate";
import { Mode } from "@/app/shared/Mode";
import { Button, DatePicker, Input, Modal, Tooltip } from "antd";
import { DatePickerProps } from "antd/es/date-picker";
import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import { AddLetterInAct } from "../SedLetter/AddLetterInAct";

interface Props{
    mode: Mode;
    values: Act;
    isModalOpen: boolean;
    handleCancel: () => void;
    handleCreateAct: (request: ActRequest) => void;
    handleUpdate: (id: string, request: ActRequest) => void;
}

export const CreateUpdateAct = ({
    mode,
    values,
    isModalOpen,
    handleCancel,
    handleCreateAct,
    handleUpdate
} : Props) =>{

    const defValLetter ={
        numSed: "",
        dateGetLetterSED: [0,0,0,0,0,0],
        linkToLetterSED: ""
    }as SedLetter

    const [showAddAct, setShowAddAct] = useState(false);
    const [letterValue, setSetterValue] = useState<SedLetter>(defValLetter);
    const [numAct, setNumAct] = useState<string>("");
    const [placeCollect, setPlaceCollect] = useState<string>("");
    const [dateTimeCollect, setDateTimeCollect] = useState<[number,number,number,number,number,number]>([0,0,0,0,0,0]);
    const [dateTimeReceipt, setDateTimeReceipt] = useState<[number,number,number,number,number,number]>([0,0,0,0,0,0]);
    const [docs, setDocs] = useState<string>("");
    const [comment, setComment] = useState<string>("");
    //Данные для SedLetterRequest
    // const [numSed, setNumSed] = useState<string>("");
    // const [linkSed, setLinkSed] = useState<string>("");
    // const [dateSed, setDateSed] = useState<[number,number,number,number,number,number]>([0,0,0,0,0,0]);
    // //---------------------------
    // const [idContractor, setContractor] = useState<number>(1);
    // const [idCustomer, setCustomer] = useState<number>(1);
    // const [idMethodObtaining, setMo] = useState<number>(1);
    // //Данные для Reagetn
    // const [reagents, setReaget] = useState<ReagentRequest>()
    

    const[datePick1, setDatePick1] = useState<Dayjs>();
    const[datePick2, setDatePick2] = useState<Dayjs>();

    const onChangeDTC: DatePickerProps["onChange"] = (date) => {
        setDatePick1(date);
        var dtnn = datePick1?.toString();
        var dt1 = dayjs(dtnn).toDate();
        setDateTimeCollect(ConverDate(dt1));

        
    };

    const onChangeDTR: DatePickerProps["onChange"] = (date) =>{
        setDatePick2(date);
        var dtnn = datePick2?.toString();
        var dt2 = dayjs(dtnn).toDate()
        setDateTimeCollect(ConverDate(dt2));
    };

    useEffect(()=>{
        setNumAct(values.numAct);
        setPlaceCollect(values.placeCollect);
        setDateTimeCollect(values.dateTimeCollect);
        setDateTimeReceipt(values.dateTimeReceipt);
        setDocs(values.docs);
        setComment(values.comment);
        //setLetter(values.sedLetter);
    }, [values]);

    const handleOnOk = async () => {
        const actRequest = {
            numAct,
            placeCollect,
            dateTimeCollect,
            dateTimeReceipt,
            docs,
            comment
            // sedLetter,
            // contractor,
            // customer,
            // methodObtaining,
            // reagents
        }

        mode == Mode.Create ? handleCreateAct(actRequest) : handleUpdate(values.actId, actRequest)
    }

    const addSed = () =>{
        setShowAddAct(!showAddAct)
    }

    return(
        <Modal
        title={mode===Mode.Create?"Добавить акт" : "Редактировать акт"}
        open={isModalOpen}
        cancelText={"Отмена"}
        onOk={handleOnOk}
        onCancel={handleCancel}>
            <div className="modal_add_act">
                <Input value={numAct} onChange={(e)=>setNumAct(e.target.value)} placeholder="Номер акта"></Input>
                <Input value={placeCollect} onChange={(e)=>setPlaceCollect(e.target.value)} placeholder="Место сбора"></Input>
                <DatePicker value={datePick1} onChange={onChangeDTC} placeholder="Дата/Время сбора"></DatePicker>
                <DatePicker value={datePick2} onChange={onChangeDTR} placeholder="Дата/Время доставки"></DatePicker>
                <Input value={docs} onChange={(e)=>setDocs(e.target.value)} placeholder="Документ"></Input>
                <Input value={comment} onChange={(e)=>setComment(e.target.value)} placeholder="Примечание"></Input>
                <Tooltip title="Прикрепить письмо СЭД">
                    <Button type="primary" onClick={addSed} shape="circle" style={{
                        marginTop:"10px",
                    }}>+</Button>
                </Tooltip>
                <Tooltip title="Добавить реагент">
                    <Button type="primary" shape="circle" style={{
                        marginTop:"10px",
                        marginLeft:"10px"
                    }}>+</Button>
                </Tooltip>
                { showAddAct ? <AddLetterInAct letterValue={letterValue} /> : null}
                
            </div>
        </Modal>
    )
}
