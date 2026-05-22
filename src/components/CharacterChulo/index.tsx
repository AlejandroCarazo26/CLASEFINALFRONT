"use client"

import { Character } from "@/app/types";
import "./style.css"
import { GetOneCharacter } from "@/api/getOneCharacter";
import { useEffect, useState } from "react";

type Props = {
    character?: Character,
    link?: string
}

const CharacterChulo = ({props}:{props: Props}) =>{
    const [personaje, setPersonaje] = useState<Character | null>(null)
    
    
    useEffect(()=>{
        
        if(props.character){
            setPersonaje(props.character)
           
        }
        else if(props.link){
            GetOneCharacter(props.link!).then((res)=>{
                setPersonaje(res.data)
            })
        }
    }, [])
    if(!personaje){
        return <p>Cargando...</p>
    }
    return(
        <div className="ContainerCharacterChulo">
            <img src={personaje.image}></img>
            <div className="InfoContainer">
                <h1>{personaje!.name}</h1>
                <p>{personaje!.gender}</p>
                <p>{personaje!.location.name}</p>

            </div>
            
        </div>
    )
}
export default CharacterChulo