
import { api } from "./api"
import { Episode } from "@/app/types"

export const getEpisodeById = async (id: number) => {
    const respuesta = await api.get<Episode>(`/episode/${id}`)
    return respuesta
}