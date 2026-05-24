"use client"

import { Character } from "@/app/types";
import "./style.css"
// import { GetOneCharacter } from "@/api/getOneCharacter";
// import { useEffect, useState } from "react";

// type Props = {
//     character?: Character,
//     link?: string
// }

const CharacterChulo = ({character}:{character?: Character}) =>{
    // const [personaje, setPersonaje] = useState<Character | null>(null)
    
    
    // useEffect(()=>{
        
    //     if(props.character){
    //         setPersonaje(props.character)
           
    //     }
    //     else if(props.link){
    //         GetOneCharacter(props.link!).then((res)=>{
    //             setPersonaje(res.data)
    //         })
    //     }
    // }, [])
    // if(!personaje){
    //     return <p>Cargando...</p>
    // }
    //if (!character) return null;

    return(
        <div className="ContainerCharacterChulo">
            <img src={character?.image}></img>
            <div className="InfoContainer">
                <h1>{character?.name}</h1>
                <p>{character?.gender}</p>
                <p>{character?.location.name}</p>

            </div>
            
        </div>
    )
}
export default CharacterChulo