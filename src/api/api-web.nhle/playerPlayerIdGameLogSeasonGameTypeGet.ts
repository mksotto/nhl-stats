import { makeRequest } from "./base";

export const playerPlayerIdGameLogSeasonGameTypeGet = (playerId: number, season: string, gameType: number ) => makeRequest({
    url: `/player/${playerId}/game-log/${season}/${gameType}`,
    method: 'GET',
})