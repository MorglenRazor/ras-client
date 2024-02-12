"use client"

import { useEffect, useState } from "react";

import Title from "antd/es/typography/Title";
import { ActRequest, createAct, deleteAct, getActs, getDetailsActs, updateAct } from "@/app/services/ActService";
import { Acts } from "@/app/components/Act/Act";

export default function ActsPage(){
    const defaultValues = {
        numAct: "",
        placeCollect: "",
        dateTimeReceipt: [0, 0, 0, 0, 0, 0],
        dateTimeCollect: [0, 0, 0, 0, 0, 0],
        docs: "",
        comment: "",
        sedLetter: {},
        customer: {},
        contractor: {},
        methodObtaining: {},
    } as Act;

    const [values, setValuse] = useState<Act>(defaultValues);
    const [acts, setActs] = useState<ActDetails[]>([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(()=>{
        const getAct = async()=>{
            const acts = await getDetailsActs();
            
            setLoading(false);
            setActs(acts);
        }
        getAct();
    },[]);

    const handleCreateAct = async (request:ActRequest) => {
        await createAct(request);
        const acts = await getActs();
        setActs(acts);
    };

    const handleUpdateAct = async (id:string,request: ActRequest) => {
        await updateAct(id,request);
        const acts = await getActs();
        setActs(acts);
    };

    const handleDeleteAct =async (id:string) => {
        await deleteAct(id);
        const acts = await getActs();
        setActs(acts);
    };

    return (
        <div>
            {
                loading ? (<Title>Loading...</Title>) : <Acts acts={acts}/>
            }
        </div>
    )
}