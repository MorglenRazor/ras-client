import { ReagentActRequest } from "@/app/services/ReagentService";
import { TfhRequest } from "@/app/services/TfhService";
import { ConverDate } from "@/app/shared/ConverDate";
import { Button, Checkbox, DatePicker, DatePickerProps, Input, List, Select, Tooltip } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { ChangeEvent, useEffect, useState } from "react";

interface Props {
    reagentNames: TfhRequest[];
    manufacturers: TfhRequest[];
    onSetReagets: (newValue: ReagentActRequest) => void;
}


export const AddReagent = ({reagentNames, manufacturers, onSetReagets }: Props) => {

    const defValReagent = {
        numDoc: "",
        dateIssue: [0, 0, 0, 0, 0, 0],
        numWellOrBatch: "",
        countReagent: "",
        numSealOnSample: "",
        accordance: false
    } as ReagentActRequest;

    const [numDoc, setNumDoc] = useState<string>("");
    const [dateIssue, setDateIssue] = useState<[number, number, number, number, number, number]>([0, 0, 0, 0, 0, 0]);
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
    const addReagent = () => {


        reg.numDoc = numDoc;
        reg.dateIssue = dateIssue;
        reg.numWellOrBatch = numWob;
        reg.countReagent = countReagent;
        reg.numSealOnSample = numSos;
        reg.accordance = accordance;

        setReagentValue(reg);

        reagentArr.push(reg);
        setReagentRa([...reagetnRa, reg]);
        onSetReagets(reg)
        setNumDoc("");
        setDateIssue([0, 0, 0, 0, 0, 0]);
        setNumWob("");
        setNumSos("");
        setAccordance(false);
        setCountReagent("");
        setReagentValue({
            numDoc: "",
            reagent: { id: 1, strVar: "" },
            dateIssue: [0, 0, 0, 0, 0, 0],
            numWellOrBatch: "",
            countReagent: "",
            numSealOnSample: "",
            sedLetter: { numSed: "тест", dateToSED: [2024, 2, 21, 10, 10, 10], linkToSED: "ntn" },
            manufactirer: { id: 1, strVar: "" },
            accordance: false
        });
    }

    useEffect(()=>{
        // setMan(manufacturers);
        // setRn(reagentNames);
    });

    const onChangeDateReagent: DatePickerProps['onChange'] = (date) => {
        // if (date == null)
        //     date = dayjs()
        //setDateIss(dayjs(date));
        var dt = dayjs(date).toDate();
        setDateIssue(ConverDate(dt));

    }

    return (
        <div className="reagent_add">
            <div><p>Добавить реагент {reagetnRa.length > 0 ? (reagetnRa.length) : null}</p>  </div>
            <Input
                style={{ marginBottom: 10 }}
                value={numDoc}
                onChange={(e) => setNumDoc?.(e.target.value)}
                placeholder="Номер документа">
            </Input>

            <Select style={{ marginBottom: 10, width: 472 }} placeholder="Наименование реагента">
                {reagentNames.map((rn, index)=>{
                        return <Select.Option key={rn.id}>{rn.strVar}</Select.Option>
                    })}
            </Select>

            <DatePicker
                style={{ marginBottom: 10, width: 472 }}
                placeholder="Дата получения"
                value={dateIss}
                onChange={onChangeDateReagent}></DatePicker>

            

            <Select style={{ marginBottom: 10, width: 472 }} placeholder="Произодитель">
                {manufacturers.map((man, index)=>{
                        return <Select.Option key={man.id}>{man.strVar}</Select.Option>
                    })}
            </Select>

            <Input style={{ marginBottom: 10 }} value={numWob} onChange={(e) => setNumWob?.(e.target.value)} placeholder="Номер пробы">
            </Input>

            <Input style={{ marginBottom: 10 }} value={countReagent} onChange={(e) => setCountReagent?.(e.target.value)} placeholder="Кол-во реагента">
            </Input>

            <Input value={numSos} onChange={(e) => setNumSos?.(e.target.value)} placeholder="Номер партии">
            </Input>

            <div style={{float: "right", marginBottom: 10}}>
                <Tooltip  title="Добавить реагент в коллекцию">
                    <Button   type="primary" onClick={addReagent} shape="round" style={{
                        alignSelf: "end",
                        marginTop: "10px",
                    }}>Добавить</Button>
                </Tooltip>
            </div>
        </div>
    )
}