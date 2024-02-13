import { ConverDate } from "@/app/shared/ConverDate";
import { DatePicker, DatePickerProps, Input } from "antd"
import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react"

interface Props{
    letterValue: SedLetter;
}

export const AddLetterInAct=({letterValue}:Props) =>{

    const[numSed, setNumSed] = useState<string>("");
    const[dateLetter, setDateLetter] = useState<[number, number, number, number, number, number]>([0,0,0,0,0,0]);
    const[linkLetter, setLink] = useState<string>("");
    const[datePick, setDatePick] = useState<Dayjs>();

    const onChange: DatePickerProps['onChange'] = (date) => {
        setDatePick(date);
        var datesss= datePick?.toString();
        var dt = dayjs(datesss).toDate()
        setDateLetter(ConverDate(dt));
    }

    useEffect(()=>{
        setNumSed(letterValue.numSed);
        setLink(letterValue.linkToLetterSED);
        setDateLetter(letterValue.dateGetLetterSED);
    },[letterValue])

    return (
        
        <div className="letter_add_to_act" >
           
            <p>Письмо СЭД</p>
            <Input
                value={numSed}
                onChange={(e)=>setNumSed(e.target.value)}
                placeholder="Номер СЭД"></Input>
            <Input
                value={linkLetter}
                onChange={(e)=>setLink(e.target.value)}
                placeholder="Ссылка на СЭД"></Input>
            <DatePicker
                value={datePick}
                onChange={onChange}></DatePicker>
        </div>
    )
}