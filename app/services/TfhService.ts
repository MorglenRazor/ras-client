export interface TfhRequest{
    id: number;
}

export const getTfh = async (nameHandbook: string) =>{
    const response = await fetch(`https://localhost:7015/${nameHandbook}`);  
    return response.json();
  };

  export const createTfh = async (nameHandbook: string,tfh: TfhRequest) =>{
    await fetch(`https://localhost:7015/${nameHandbook}`,{
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(tfh),
    });
};

export const updateTfh = async (id: string,nameHandbook: string, tfh: TfhRequest) =>{
    await fetch(`https://localhost:7015/${nameHandbook}/${id}`,{
        method: "PUT",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(tfh),
    });  
};  

export const deleteTfh = async (id:string, nameHandbook: string) =>{
    await fetch(`https://localhost:7015/${nameHandbook}/${id}`, {
        method: "DELETE",
    });
};