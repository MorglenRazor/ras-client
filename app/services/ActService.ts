import { ReagentActRequest, ReagentRequest } from "./ReagentService";
import { SedLetterRequest } from "./SedLetterService";
import { TfhRequest } from "./TfhService";

export interface ActRequest{
    numAct: string;
    placeCollect: string;
    dateTimeReceipt: [number,number,number,number,number,number];
    dateTimeCollect: [number,number,number,number,number,number];
    docs: string;
    comment: string;
    sedLetterRequest: SedLetterRequest;
    customer: TfhRequest;
    contractor: TfhRequest;
    methodObtaining:TfhRequest;
    reagents: ReagentActRequest[];
}

export interface ActRequestDetails{
    numAct: string;
    placeCollect: string;
    dateTimeReceipt: [number,number,number,number,number,number];
    dateTimeCollect: [number,number,number,number,number,number];
    docs: string;
    comment: string;
    sedLetter: SedLetterRequest;
    customer: TfhRequest;
    contractor: TfhRequest;
    methodObtaining:TfhRequest;
    reagents: ReagentRequest[];
}

export const getActs = async () =>{
  const response = await fetch("https://localhost:7015/Act");  
  return response.json();
};

export const getDetailsActs = async () =>{
    const response = await fetch("https://localhost:7015/details/acts");  
    return response.json();
  };

export const createAct = async (actRequest: ActRequest) =>{
    await fetch("https://localhost:7015/Act",{
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(actRequest),
    });
};

export const updateAct = async (id: string, actRequest: ActRequest) =>{
    await fetch(`https://localhost:7015/Act/${id}`,{
        method: "PUT",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(actRequest),
    });  
};  

export const deleteAct = async (id:string) =>{
    await fetch(`https://localhost:7015/Acts/${id}`, {
        method: "DELETE",
    });
};