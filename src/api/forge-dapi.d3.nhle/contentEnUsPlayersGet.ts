import { ContentEnUsPlayersGet } from "../../types/contentEnUsPlayersGet"
import { makeRequest } from "./base"

// https://forge-dapi.d3.nhle.com/v2/content/en-us/players?tags.slug=playerid-8478427;

export const contentEnUsPlayersGet = (playerId: number) => makeRequest<ContentEnUsPlayersGet>({
    url: `/content/en-us/players`,
    method: 'GET',
    params: {
        'tags.slug': `playerid-${playerId}`,
    }
})