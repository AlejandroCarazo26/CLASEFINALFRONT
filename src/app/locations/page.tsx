"use client";

import { useEffect, useState } from "react";
import { ResultLocations } from "../types/location";
import { api } from "@/api/api";
import LocationChula from "@/components/LocationChula";


const PageLocations = () => {

    const [resultLocations, setResultLocations] = useState<ResultLocations|null>(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [page, setPage] = useState<number>(1);

    const getLocations = async(page?:number)=> {
        try{
            api.get(`location/?page=${page}`).then((e)=> {
                const {data}:{data:ResultLocations} = e;
                setResultLocations(data);
                setLoading(false);
            }).finally(()=>{
                setLoading(false);
            })
        }catch(e){
            setError(String(e));
        }
    } 

    useEffect(()=>{
        getLocations(page);
    }, [page]);

    if(loading){
        return(<h1> Loading... </h1>)
    };


    return(
        <div className="ContainerLocations">
            <h1> Página de Lugares </h1>
            {resultLocations && resultLocations?.results.map((e)=>(
                <LocationChula key={e.id} location={e}/>
            ))}
        </div>
        
    )
};

export default PageLocations;