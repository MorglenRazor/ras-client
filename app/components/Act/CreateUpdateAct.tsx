import { ActRequest } from "@/app/services/ActService";
import { ConverDate } from "@/app/shared/ConverDate";
import { Mode } from "@/app/shared/Mode";
import { Button, DatePicker, Divider, Input, Modal, Select, Tooltip } from "antd";
import { DatePickerProps, DatePickerType } from "antd/es/date-picker";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { AddLetterInAct } from "../SedLetter/AddLetterInAct";
import { SedLetterRequest } from "@/app/services/SedLetterService";
import { AddReagent } from "../Reagent/AddReagents";
import { ReagentActRequest, ReagentRequest } from "@/app/services/ReagentService";
import { TfhRequest, getTfh } from "@/app/services/TfhService";

interface Props {
    mode: Mode;
    values: Act;
    isModalOpen: boolean;
    mo: TfhRequest[];
    cus: TfhRequest[];
    cont: TfhRequest[];
    handleCancel: () => void;
    handleCreateAct: (request: ActRequest) => void;
    handleUpdate: (id: string, request: ActRequest) => void;
}



export const CreateUpdateAct = ({
    mode,
    values,
    isModalOpen,
    mo,
    cus,
    cont,
    handleCancel,
    handleCreateAct,
    handleUpdate
}: Props) => {

    const defValLetter = {
        numSed: "",
        dateToSED: [0, 0, 0, 0, 0, 0],
        linkToSED: ""
    } as SedLetterRequest



    const [showSed, setShowSed] = useState(false);
    const [showReaget, setShowReagent] = useState(false);

    const [sedLetterRequest, setSetterValue] = useState<SedLetterRequest>(defValLetter);

    //хранит состояния Реагента
    const [reagents, setReagentsValue] = useState<ReagentActRequest[]>([]);



    const [numAct, setNumAct] = useState<string>("");
    const [placeCollect, setPlaceCollect] = useState<string>("");
    const [dateTimeCollect, setDateTimeCollect] = useState<[number, number, number, number, number, number]>([0, 0, 0, 0, 0, 0]);
    const [dateTimeReceipt, setDateTimeReceipt] = useState<[number, number, number, number, number, number]>([0, 0, 0, 0, 0, 0]);
    const [docs, setDocs] = useState<string>("");
    const [comment, setComment] = useState<string>("");
    const [mos, setMos] = useState<TfhRequest[]>([]);
    const [customers, setCus] = useState<TfhRequest[]>([]);
    const [contactors, setCont] = useState<TfhRequest[]>([]);

    const [manufacturers, setMan] = useState<TfhRequest[]>([]);
    const [reagetnNames, setRn] = useState<TfhRequest[]>([]);

    const [numSed, setNumSed] = useState<string>("");
    const [linkToSed, setLinkToSed] = useState<string>("");
    const [dateSed, setDateSed] = useState<[number, number, number, number, number, number]>([0, 0, 0, 0, 0, 0]);

    const onChangeDTC: DatePickerProps["onChange"] = (date) => {
        var dt1 = dayjs(date).toDate();
        setDateTimeCollect(ConverDate(dt1));
    };


    const onChangeDTR: DatePickerProps["onChange"] = (date) => {

        var dt2 = dayjs(date).toDate()
        setDateTimeReceipt(ConverDate(dt2));
    };

    const onChangeDateSed: DatePickerProps['onChange'] = (date) => {

        var dt = dayjs(date).toDate()
        setDateSed(ConverDate(dt));
    }

    let reagentArr: ReagentActRequest[] = [];


    const onAddReagent = (reagent: ReagentActRequest) => {
        let reg: ReagentActRequest =
        {
            numDoc: "",
            reagent: { id: 1, strVar: "" },
            dateIssue: [0, 0, 0, 0, 0, 0],
            numWellOrBatch: "",
            countReagent: "",
            numSealOnSample: "",
            sedLetter: { numSed: "тест", dateToSED: [2024, 2, 21, 10, 10, 10], linkToSED: "ntn" },
            manufactirer: { id: 1, strVar: "" },
            accordance: false
        };
        reg.numDoc = reagent.numDoc;
        reg.dateIssue = reagent.dateIssue;
        reg.numWellOrBatch = reagent.numWellOrBatch;
        reg.countReagent = reagent.countReagent;
        reg.numSealOnSample = reagent.numSealOnSample;
        reg.accordance = reagent.accordance;
        reagentArr.push(reg);
        console.log("New reagent - ", reg);
        console.log("Reagetns - ", reagentArr);
    }
  
    useEffect(() => {
        setNumAct(values.numAct);
        setPlaceCollect(values.placeCollect);
        setDateTimeCollect(values.dateTimeCollect);
        setDateTimeReceipt(values.dateTimeReceipt);
        setDocs(values.docs);
        setComment(values.comment);
        setMos(mo);
        setCus(cus);
        setCont(cont);
        const getManufacturers = async()=>{
            const getManufacturers = await getTfh("manufacturers");
            setMan(getManufacturers);
        }
        const getReagentNames = async()=>{
            const reagetnNames = await getTfh("reagents");
            setRn(reagetnNames);
        }
        
        getManufacturers();
        getReagentNames();
    }, [values,mo,cus,cont]);
    
    ///При нажатии на Ок на форме сохраняет значения SedLetter
    const addOnOk = () => {
        sedLetterRequest.numSed = numSed;
        sedLetterRequest.dateToSED = dateSed;
        sedLetterRequest.linkToSED = linkToSed;
        setReagentsValue(reagentArr);
    }

    const handleOnOk = async () => {
        addOnOk();
        console.log(reagents);
        let customer: TfhRequest = { id: 1, strVar: "" };
        let contractor: TfhRequest = { id: 1, strVar: "" };
        let methodObtaining: TfhRequest = { id: 1, strVar: "" };
        const actRequest = {
            numAct,
            placeCollect,
            dateTimeCollect,
            dateTimeReceipt,
            docs,
            comment,
            sedLetterRequest,
            customer,
            contractor,
            methodObtaining,
            reagents
        }
        console.log(actRequest)

        mode == Mode.Create ? handleCreateAct(actRequest) : handleUpdate(values.actId, actRequest)
    }

    const addSed = () => setShowSed(!showSed);
    const addReagetn = () => setShowReagent(!showReaget);

    const showReagent = () => {
        
        return (
            <div>
                <Divider />
                {
                    <AddReagent
                        onSetReagets={onAddReagent} 
                        reagentNames={reagetnNames}
                        manufacturers={manufacturers}/>
                }
                <Divider />
            </div>

        )
    }


    return (
        <Modal
            title={mode === Mode.Create ? "Добавить акт" : "Редактировать акт"}
            open={isModalOpen}
            cancelText={"Отмена"}
            onOk={handleOnOk}
            onCancel={handleCancel}>
            <div className="modal_add_act">
                <Input 
                    style={{ marginBottom: 10 }} 
                    value={numAct} 
                    onChange={(e) => setNumAct(e.target.value)} 
                    placeholder="Номер акта">
                </Input>
                <Input 
                    style={{ marginBottom: 10 }} 
                    value={placeCollect} 
                    onChange={(e) => setPlaceCollect(e.target.value)} 
                    placeholder="Место сбора">
                </Input>
                <DatePicker 
                    showTime 
                    style={{ marginBottom: 10, marginRight: 10, width: 460 / 2 }} 
                    onChange={onChangeDTC} 
                    placeholder="Дата/Время сбора">
                </DatePicker>
                <DatePicker 
                    showTime 
                    style={{ marginBottom: 10, width: 460 / 2 }} 
                    onChange={onChangeDTR} 
                    placeholder="Дата/Время доставки">
                </DatePicker>
                <Select 
                    style={{ marginBottom: 10, width: 472 }} 
                    placeholder="Метод получения">
                    {mos.map((mo, index)=>{
                        return <Select.Option key={mo.id}>{mo.strVar}</Select.Option>
                    })}
                </Select>
                <Select 
                    style={{ marginBottom: 10, width: 472 }} 
                    placeholder="Исполнитель">
                    {customers.map((cus, index)=>{
                        return <Select.Option key={cus.id}>{cus.strVar}</Select.Option>
                    })}
                </Select>
                <Select 
                    style={{ marginBottom: 10, width: 472 }} 
                    placeholder="Заказчик">
                    {contactors.map((cont, index)=>{
                        return <Select.Option key={cont.id}>{cont.strVar}</Select.Option>
                    })}
                </Select>
                <Input 
                    style={{ marginBottom: 10 }} 
                    value={docs} 
                    onChange={(e) => setDocs(e.target.value)} 
                    placeholder="Документ"></Input>
                <Input 
                    style={{ marginBottom: 10 }} 
                    value={comment} 
                    onChange={(e) => setComment(e.target.value)} 
                    placeholder="Примечание"></Input>

                {showSed ? <AddLetterInAct
                    numSed={numSed}
                    onNumSedChange={setNumSed}
                    linkSed={linkToSed}
                    onLinkSedChange={setLinkToSed}

                    onDateSedChange={onChangeDateSed}
                /> : null}

                {
                    showReaget ? showReagent() : null
                }

                <Tooltip title="Прикрепить письмо СЭД">
                    <Button type="primary" onClick={addSed} shape="circle" style={{
                        marginTop: "10px",
                    }}>S</Button>
                </Tooltip>
                <Tooltip title="Добавить реагент">
                    <Button type="primary" onClick={addReagetn} shape="circle" style={{
                        marginTop: "10px",
                        marginLeft: "10px"
                    }}>R</Button>
                </Tooltip>
            </div>
        </Modal>
    )
}
