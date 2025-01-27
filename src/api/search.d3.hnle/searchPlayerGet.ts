import { SearchPlayerGet } from "../../types/searchPlayerGet";
import { makeRequest } from "./base";

export const searchPlayerGet = (name: string, /*active?: boolean*/) => makeRequest<SearchPlayerGet[]>({
    url: '/search/player',
    method: 'GET',
    params: {
        culture: 'en-us',
        limit: 1000,
        q: name,
        // active: active,
    }
})