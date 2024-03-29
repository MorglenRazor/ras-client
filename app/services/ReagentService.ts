import { SedLetterRequest } from "./SedLetterService";
import { TfhRequest } from "./TfhService";

export interface ReagentRequest{
    numDoc: string;
    dateIssue: [number,number,number,number,number,number];
    numWellOrBacth: string;
    countReagent: string;
    numSealOnSample: string;
    accordance: boolean;
    reagentName: TfhRequest;
    sedLetterReagent: SedLetterRequest;
    manufacturerReagent: TfhRequest;
}

export interface ReagentActRequest{
    numDoc: string;
    reagent: TfhRequest;
    dateIssue: [number,number,number,number,number,number];
    numWellOrBatch: string;
    countReagent: string;
    numSealOnSample: string;
    sedLetter: SedLetterRequest;
    manufactirer: TfhRequest;
    accordance: boolean;
}

export const getReagents = async () =>{
    const response = await fetch("https://localhost:7015/Reagent");  
    return response.json();
  };

  export const getReagent = async (id: string) =>{
    const response = await fetch(`https://localhost:7015/Reagent/${id}`);  
    return response.json();
  };
  
  export const createReagent = async (reagentRequest: ReagentRequest) =>{
      await fetch("https://localhost:7015/Reagent",{
          method: "POST",
          headers: {
              "content-type": "application/json",
          },
          body: JSON.stringify(reagentRequest),
      });
  };

  
  
  export const updateReagent = async (id: string, reagentRequest: ReagentRequest) =>{
      await fetch(`https://localhost:7015/Reagent/${id}`,{
          method: "PUT",
          headers: {
              "content-type": "application/json",
          },
          body: JSON.stringify(reagentRequest),
      });  
  };  
  
  export const deleteReagent = async (id:string) =>{
      await fetch(`https://localhost:7015/Reagent/${id}`, {
          method: "DELETE",
      });
  };