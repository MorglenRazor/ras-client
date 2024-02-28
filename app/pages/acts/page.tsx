"use client"

import { Suspense, createContext, useEffect, useState } from "react";

import Title from "antd/es/typography/Title";
import { ActRequest, createAct, deleteAct, getActs, getDetailsActs, updateAct } from "@/app/services/ActService";
import { Acts } from "@/app/components/Act/Act";
import { Mode } from "@/app/shared/Mode";
import { Button } from "antd";
import { CreateUpdateAct } from "@/app/components/Act/CreateUpdateAct";
import { AddLetterInAct } from "@/app/components/SedLetter/AddLetterInAct";
import { TfhRequest, getTfh } from "@/app/services/TfhService";



export default function ActsPage(){
    const defaultValues = {
        numAct: "",
        placeCollect: "",
        dateTimeReceipt: [0, 0, 0, 0, 0, 0],
        dateTimeCollect: [0, 0, 0, 0, 0, 0],
        docs: "",
        comment: "",
        sedLetter: {id:"", numSed:"", dateGetLetterSED:[0,0,0,0,0,0], linkToLetterSED:""}
    } as Act;

    
    const [values, setValuse] = useState<Act>(defaultValues);
    
    const [acts, setActs] = useState<ActDetails[]>([]);
    const [mos, setMos] = useState<TfhRequest[]>([]);
    const [cus, setCus] = useState<TfhRequest[]>([]);
    const [cont, setCont] = useState<TfhRequest[]>([]);

    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [mode, setMode] = useState(Mode.Create);
    
    useEffect(()=>{
        
        const getAct = async()=>{
            const acts = await getDetailsActs();
            
            setLoading(false);
            setActs(acts);
        }
        const getMethodobtainitng = async()=>{
            const getMo = await getTfh("methodsObtaining");
            setMos(getMo);
        }

        const getCustomers = async()=>{
            const getCus = await getTfh("customers");
            setCus(getCus);
        }

        const getContractor = async()=>{
            const getCont = await getTfh("contactors");
            setCont(getCont);
        }
    
        getAct();
        getMethodobtainitng();
        getCustomers();
        getContractor();
    },[]);

    const handleCreateAct = async (request:ActRequest) => {
        await createAct(request);
        const acts = await getActs();
        setActs(acts);
        //closeModal();
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

    const openModal = () =>{
        setMode(Mode.Create);
        setIsModalOpen(true);
    };

    const closeModal = () =>{
        setValuse(defaultValues);
        setIsModalOpen(false);
    };

    const openEditModal = (act:Act) =>{
        setMode(Mode.Edit);
        setValuse(act);
        setIsModalOpen(true);
    };

    return (
        <div>
             <Button type="primary" style={{marginTop:"30px"}} size="large" onClick={openModal}>Добавить акт</Button>
                <CreateUpdateAct
                    mode={mode}
                    values={values}
                    isModalOpen={isModalOpen}
                    handleCreateAct={handleCreateAct}
                    handleUpdate={handleUpdateAct}
                    handleCancel={closeModal}
                    mo={mos}
                    cus={cus}
                    cont={cont}
                ></CreateUpdateAct>
                
                {
                    loading ? (<Title>Loading...</Title>) : 
                    (
                        <Acts acts={acts}
                            handleDelete={handleDeleteAct}
                            handleOpen={openEditModal}
                        />
                        
                    )
                }   
        </div>
    )
}