import { makeRequest } from "./base";
import { SearchPlayerGet } from "../types/searchPlayerGet";

export const searchPlayerGet = (name: string) => makeRequest<SearchPlayerGet[]>({
    url: '/search/player',
    method: 'GET',
    params: {
        culture: 'en-us',
        limit: 1000,
        q: name,
    }
})