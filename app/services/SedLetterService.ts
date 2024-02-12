export interface SedLetterRequest{
    id: string;
    numSed: string;
    linkToLetterSED: string;
    dateGetLetterSED: [number,number,number,number,number,number];
}


export const getAllLetters = async () => {
    const response = await fetch("https://localhost:7015/SedLetter");

    return response.json();
}

export const getLetter = async (nameHandbook: string) => {
    const response = await fetch(`https://localhost:7015/SedLetter/${nameHandbook}`);

    return response.json();
}