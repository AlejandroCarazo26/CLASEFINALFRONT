import Link from "next/link";
import "./style.css";


const Navigator = () =>{

    type NavigationLink = {
        name: string,
        link: string
    }

    const links: NavigationLink[]= [
        {
            link: "/",
            name: "Home"
        },

        {
            link:"/characters",
            name:"Personajitos"
        },

        {
            link:"/locations",
            name:"Lugarcitos"
        },

        {
            link:"/episodes",
            name:"Episodios"
        }
    ] 

    return(
        <div className="NavigatorContainer">
            {links.map((e) =>(
                <Link className="NavigateLink" key={e.link} href={e.link}> {e.name} </Link>
            ))}
        </div>
    )
}   

export default Navigator; 