export interface EmisionResponse{
    animes: Array<EmisionI>;
    pages: number;
}

export interface EmisionI{
    id:string;
    title:string;
    cover:string;
    category:string;
    year:string;
}

export interface LastestAnimeI {
    title: string
    cover: string
    id: string
    episode: string
    type: string
}
export interface AnimeI{
    id?: string;
    title?: string;
    banner?: string;
    type?: string;
    cover?: string;
    sinopsis?: string;
    status?: string;
    date?: string;
    genders?: Array<GenderI>;
    sugestions?: Array<SuggestionI>;
    episodes?: Array<EpisodeI>;
}

export interface GenderI{
    id:string;
    title:string;
}

export interface SuggestionI{
    id?:string;
    title?:string;
    cover?:string;
    year?:number;
}
export interface EpisodeI{
    id?:string;
    number?:string;
}

export interface AnimeSearchI {
    id: string;
    title: string;
    cover: string
    category: string;
    year: number;
}