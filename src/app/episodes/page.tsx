
"use client"

import { api } from "@/api/api"
import EpisodeChulo from "@/components/EpisodeChulo"
import Paginador from "@/components/Paginador"
import { ResultEpisodes } from "../types/episode"
import { useEffect, useState } from "react"
import "./styles.css";



const PageEpisodes = () => {
    const [resultEpisodes, setResultEpisodes] = useState<ResultEpisodes| null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [page, setPage] = useState<number>(1)


    const getEpisodes = async (page?: number) =>{
            try {
                api.get(`/episode?page=${page}`).then((e)=>{
                    const {data}: {data: ResultEpisodes} = e;
                    setResultEpisodes(data);
                    setLoading(false);
                    
                }).finally(()=>{
                setLoading(false)
                })    
            }catch (e: any) {
                setError(String(e))
            }
    
        };

    useEffect(() =>{
        if(error){
            alert(error);
        }
    }, [error]);
    
    useEffect(()=>{
        getEpisodes(page)
    }, [page]);

    if(loading){
        return(<h1> Loading...</h1>)
    }


    return (
        <div className="ContainerEpisodes">
            <h1>Episodios</h1>
            {resultEpisodes && resultEpisodes.results.map((e)=>
                (<EpisodeChulo key={e.id} episode={e}/>)
            )}

            <Paginador
                page={page}
                next={!!resultEpisodes?.info.next}
                prev={!!resultEpisodes?.info.prev}
                setPage={setPage}
            ></Paginador>
        </div>
    )
}
export default PageEpisodes;