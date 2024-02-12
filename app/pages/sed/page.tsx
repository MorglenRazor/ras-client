"use client"
import { useEffect, useState } from "react"
import Title from "antd/es/typography/Title";
import { SedLetters } from "@/app/components/SedLetter/SedLetter";
import { getAllLetters } from "@/app/services/SedLetterService";


export default function SedLetterPage() {
    const defaultValue = {
        numSed: "",
        linkToLetterSED: "",
        dateGetLetterSED: [0, 0, 0, 0, 0, 0]} as SedLetter;

    const [value, setValue] = useState<SedLetter>(defaultValue);
    const [sedLetters, setLetters] = useState<SedLetter[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        const getLetters = async() =>{
            const letters = await getAllLetters();
            setLoading(false);
            setLetters(letters);
        }
        getLetters();
    }, []);

    return (
        <div>
            {
                loading ? (<Title>Loading...</Title>) : <SedLetters letters={sedLetters}/>
            }
        </div>
    )

}