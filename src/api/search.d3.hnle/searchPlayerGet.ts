import { SearchPlayerGet } from "../../types/searchPlayerGet";
import { makeRequest } from "./base";

export const searchPlayerGet = (name: string, /*active?: boolean*/) => makeRequest<SearchPlayerGet[]>({
    url: 'https://search.d3.nhle.com/api/v1/search/player',
    method: 'GET',
    params: {
        culture: 'en-us',
        limit: 1000,
        q: name,
        // active: active,
    }
})