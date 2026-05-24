import { Episode } from "@/app/types";
import "./style.css"
import CharacterChulo from "../CharacterChulo";
import { GetOneCharacter } from "@/api/getOneCharacter";
import { useRouter } from "next/navigation";



const EpisodeChulo = ({episode}:{episode : Episode}) =>{
    
    const Router = useRouter();

    return(
        <div className="ContainerCharacterChulo">
            <div className="infoContainer">
                <h1>{episode.name}</h1>
                <p>{episode.url}</p>
                <p>{episode.air_date}</p>
                <p>{episode.episode}</p>
                <button onClick={() => Router.push(`/episodes/${episode.id}`)}>
                    Ver personajes
                </button>
            </div>
            
        </div>
    )
}
export default EpisodeChulo