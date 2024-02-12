"use client"

import { useEffect, useState } from "react";

import Title from "antd/es/typography/Title";
import { ReagentRequest, createReagent, deleteReagent, getReagents, updateReagent } from "@/app/services/ReagentService";
import { Reagents } from "@/app/components/Reagent/Reagent";


export default function ReagentPage(){
    const defaultValue = {
        numDoc: "",
        dateIssue: [0, 0, 0, 0, 0, 0],
        numWellOrBacth: "",
        countReagent: "",
        numSealOnSample: "",
        accordance: false,
        sedLetterReagent: {},
        manufacturerReagent: {}
    } as Reagent;

    const [values, setValuse] = useState<Reagent>(defaultValue);
    const [reagents, setReagents] = useState<Reagent[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        const getReagent = async()=>{
            const reagetns = await getReagents();
            
            setLoading(false);
            setReagents(reagetns);
        }
        getReagent();
    },[]);

    const handleCreateReagent = async (request:ReagentRequest) => {
        await createReagent(request);
        const reagents = await getReagents();
        setReagents(reagents);
    };

    const handleUpdateReagent = async (id:string,request: ReagentRequest) => {
        await updateReagent(id,request);
        const reagents = await getReagents();
        setReagents(reagents);
    };

    const handleDeleteReagent =async (id:string) => {
        await deleteReagent(id);
        const reagents = await getReagents();
        setReagents(reagents);
    };

    return (
        <div>
            {
                loading ? (<Title>Loading...</Title>) : <Reagents reagents={reagents}/>
            }
        </div>
    )
}


