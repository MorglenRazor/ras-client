// import { ActRequest } from "@/app/services/ActService";
// import { Mode } from "@/app/shared/Mode";
// import { DatePickerProps, DatePickerType } from "antd/es/date-picker";
// import dayjs from "dayjs";
// import { useEffect, useState } from "react";

// interface Props{
//     mode: Mode;
//     values: Act;
//     isModalOpen: boolean;
//     handleCreateAct: (request: ActRequest) => void;
//     handleCancel: () => void;
//     handleUpdate: (id: string, request: ActRequest) => void;
// }

// export const CreateUpdateAct = ({
//     mode,
//     values,
//     isModalOpen,
//     handleCancel,
//     handleCreateAct,
//     handleUpdate
// } : Props) =>{
//     const [numAct, setNumAct] = useState<string>("");
//     const [placeCollect, setPlaceCollect] = useState<string>("");
//     const [dateTimeCollect, setDateTimeCollect] = useState<[number,number,number,number,number,number]>([0,0,0,0,0,0]);
//     const [dateTimeReceipt, setDateTimeReceipt] = useState<[number,number,number,number,number,number]>([0,0,0,0,0,0]);
//     const [docs, setDocs] = useState<string>("");
//     const [comment, setComment] = useState<string>("");

//     const[datePick1, setDatePick1] = useState<DatePickerType>();
//     const[datePick2, setDatePick2] = useState<DatePickerType>();

//     const onChangeDTC: DatePickerProps["onChange"] = (date: DatePickerType) => {
//         setDatePick1(date);
//         var dt1 = dayjs(datePick1?.toString()).toDate();
//         setDateTimeCollect(dateToStringCFormat(dt1));

        
//     };

//     const onChangeDTR: DatePickerProps["onChange"] = (date: DatePickerType) =>{
//         setDatePick2(date);
//         var dt2 = dayjs(datePick2?.toString()).toDate()
//         setDateTimeCollect(dateToStringCFormat(dt2));
//     };

//     useEffect(()=>{
//         setNumAct(values.numAct);
//         setPlaceCollect(values.placeCollect);
//         setDateTimeCollect(values.dateTimeCollect);
//         setDateTimeReceipt(values.dateTimeReceipt);
//         setDocs(values.docs);
//         setComment(values.comment);
//     }, [values]);

//     const handleOnOk = async () => {
//         const actRequest = {
//             numAct,
//             placeCollect,
//             dateTimeCollect,
//             dateTimeReceipt,
//             docs,
//             comment
//         }

//         mode == Mode.Create ? handleCreateAct(actRequest) : handleUpdate(values.actId, actRequest)
//     }
// }




// function dateToStringCFormat(date: Date): import("react").SetStateAction<[number, number, number, number, number, number]> {
//     var day = date.getDate();       // yields date
//         var month = date.getMonth() + 1;       
//         var year = date.getFullYear();  // yields year
//         var hour = date.getHours();     // yields hours 
//         var minute = date.getMinutes(); // yields minutes
//         var second = date.getSeconds(); // yields seconds

//         var time = day + "/" + month + "/" + year + " " + hour + ':' + minute + ':' + second;
//         return [year,month, day, hour, minute, second];
// }