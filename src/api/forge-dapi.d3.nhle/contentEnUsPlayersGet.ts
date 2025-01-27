import { ContentEnUsPlayersGet } from "../../types/contentEnUsPlayersGet"
import { makeRequest } from "./base"

export const contentEnUsPlayersGet = (playerId: number) => makeRequest<ContentEnUsPlayersGet>({
    url: `/content/en-us/players`,
    method: 'GET',
    params: {
        'tags.slug': `playerid-${playerId}`,
    }
})