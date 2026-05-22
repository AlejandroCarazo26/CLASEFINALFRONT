

import { Character, ResultCharacters, ResultEpisodes } from "@/app/types";
import { api } from "./api"

export const GetOneCharacter = async(link : string)=>{
    const respuesta = await api.get<Character>(link)
    return respuesta;
}