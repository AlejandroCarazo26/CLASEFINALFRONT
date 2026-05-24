
"use client"

import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Episode, Character } from "@/app/types"
import { getEpisodeById } from "@/api/getEpisodeById"
import { api } from "@/api/api"
import CharacterChulo from "@/components/CharacterChulo"
import "./styles.css"


const PageEpisodeDetail = () => {
    const router = useRouter();

    const { id } = useParams()
    const [episode, setEpisode] = useState<Episode | null>(null)
    const [personajes, setPersonajes] = useState<Character[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string>("")

    useEffect(() => {
        getEpisodeById(Number(id)).then((res) => {
            const episodeData = res.data
            setEpisode(episodeData)

            const ids = episodeData.characters.map(url => url.split("/").pop()).join(",")

            return api.get(`/character/${ids}`)
        }).then((res) => {
            const data = Array.isArray(res.data) ? res.data : [res.data]
            setPersonajes(data)
        }).catch((e) => {
            setError(`Error cargando los datos: ${e.message ? e.message : e}`)
        }).finally(() => {
            setLoading(false)
        })
    }, [id])

    return (
        <div className="ContainerEpisodes">
            {loading && <h1>Cargando...</h1>} 
            {error && <h2>{error}</h2>}

            {episode && (
                <>
                    <h1>{episode.name}</h1>
                    <p>{episode.air_date}</p>
                    <p>{episode.episode}</p>
                    {personajes.map((p) => (
                        <CharacterChulo key={p.id} character={p} />
                    ))}
                </>
            )}
            <button className="backButton" onClick={() => router.back()}> Volver </button>
        </div>
    )
}

export default PageEpisodeDetail