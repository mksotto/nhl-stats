import { PlayerPlayerIdGameLogGet } from "../../types/playerPlayerIdGameLogGet";
import { makeRequest } from "./base";

export const playerPlayerIdGameLogSeasonGameTypeGet = (playerId: number, season: number, gameType: number ) => makeRequest<PlayerPlayerIdGameLogGet>({
    url: `/player/${playerId}/game-log/${season}/${gameType}`,
    method: 'GET',
})