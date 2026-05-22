import { Info } from "./character";

export type ResultLocations = {
    info: Info;
    results: Location[];
}

export type Location = {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: string[];
    url: string;
}