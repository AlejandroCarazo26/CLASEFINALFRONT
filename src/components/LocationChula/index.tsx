import { Location } from "@/app/types/location";
import "./style.css"

const LocationChula = ({location}:{location: Location}) => {

    return (
      <div className="ContainerLocationChula">
        <div className="InfoContainer">
            <h1>{location.name}</h1>
            <p>{location.type}</p>
            <p>{location.dimension}</p>
            <p>{location.residents.length}</p>
        </div>
      </div>
    )

}  

export default LocationChula;