import { SedLetterRequest } from "@/app/services/SedLetterService";
import { ConverDate } from "@/app/shared/ConverDate";
import { DatePicker, DatePickerProps, Divider, Input } from "antd"
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
           <Divider />
            <p>Письмо СЭД</p>
            <Input
                style={{marginBottom: 10}}
                value={numSed}
                onChange={(event) => onNumSedChange?.(event.target.value)}
                placeholder="Номер СЭД"></Input>
            <Input
                style={{marginBottom: 10}}
                
                value={linkSed}
                onChange={(event) => onLinkSedChange?.(event.target.value)}
                placeholder="Ссылка на СЭД"></Input>
            <DatePicker
                showTime
                style={{width: 472}}
                value={dateSed}
                placeholder="Дата/время получения письма СЭД"
                onChange={onDateSedChange}></DatePicker>
            
        </div>
    )
}