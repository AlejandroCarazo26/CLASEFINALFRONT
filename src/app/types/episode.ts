import { Info } from "./character"

export type ResultEpisodes = {
    info: Info,
    results: Episode[]
}
export type Episode = {
    id: number,
      name: string,
      air_date: string,
      episode: string,
      characters: string[],
      url: string,
    created: string

}