import { SedLetterRequest } from "@/app/services/SedLetterService";
import { ConverDate } from "@/app/shared/ConverDate";
import { DatePicker, DatePickerProps, Input } from "antd"
import dayjs, { Dayjs } from "dayjs";
import { createContext, useEffect, useState } from "react"

interface Props{
    numSed?: string;
    linkSed?: string;
    dateSed?: Dayjs;
    onNumSedChange?: (newType: string) => void;
    onLinkSedChange?: (newType: string) => void;
    onDateSedChange?: (newType: Dayjs, dates: string | string[]) => void
};


export const AddLetterInAct=({numSed,linkSed,dateSed,
    onNumSedChange,onLinkSedChange,onDateSedChange}:Props) =>{


    // useEffect(()=>{
    //     setNumSed(letterValue.numSed);
    //     setLink(letterValue.linkToLetterSED);
    //     setDateLetter(letterValue.dateGetLetterSED);
    // },[letterValue])

   
    return (
        
        <div className="letter_add_to_act" >
           
            <p>Письмо СЭД</p>
            <Input
                value={numSed}
                onChange={(event) => onNumSedChange?.(event.target.value)}
                placeholder="Номер СЭД"></Input>
            <Input
                value={linkSed}
                onChange={(event) => onLinkSedChange?.(event.target.value)}
                placeholder="Ссылка на СЭД"></Input>
            <DatePicker
                value={dateSed}
                onChange={onDateSedChange}></DatePicker>
        </div>
    )
}