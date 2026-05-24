import { Episode } from "@/app/types";
import "./style.css"
import { useRouter } from "next/navigation";

const EpisodeChulo = ({episode}:{episode : Episode}) =>{
    
    const Router = useRouter();

    return(
        <div className="ContainerEpisodeChulo">
            <div className="InfoContainer">
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