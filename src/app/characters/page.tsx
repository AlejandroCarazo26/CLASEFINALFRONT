"use client";


import { api } from "@/api/api";
import { useEffect, useState } from "react";
import Paginador from "../../components/Paginador";
import { ResultCharacters } from "../types/character";
import CharacterChulo from "../../components/CharacterChulo";
import "./styles.css";


const PageCharacters = () => {

    const [resultCharacters, setResultCharacters] = useState<ResultCharacters|null> (null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [page, setPage] = useState<number>(1);


    const getCharacters= async (page?: number)=> {
        try{
            api.get(`character/?page=${page}`).then((e)=> {
                const {data}:{data:ResultCharacters} = e;
                setResultCharacters(data); 
                setLoading(false);

            }).finally(()=>{
                setLoading(false);
            })
        }catch(e){
            setError(String(e));
        }
    };

    useEffect(() =>{
        if(error){
            alert(error);
        }
    }, [error]);

    useEffect(()=> {
        getCharacters(page);
    }, [page]);

    if(loading){
        return(<h1> Loading...</h1>)
    }


    return(
        <div className="ContainerCharacters">
            <h1> Personajitos</h1>
            {resultCharacters && resultCharacters?.results.map((e)=>
                (<CharacterChulo key={e.id} props={{character:e}}/>)
            )}

            <Paginador 
                page={page} 
                next={!!resultCharacters?.info.next}
                prev={!!resultCharacters?.info.prev}
                setPage={setPage}
            />
        </div>
    )
};

export default PageCharacters;