import { PlayerPlayerIdGameLogGet } from "../../types/playerPlayerIdGameLogGet";
import { makeRequest } from "./base";

export const playerPlayerIdGameLogNowGet = (playerId: number) => makeRequest<PlayerPlayerIdGameLogGet>({
    url: `/player/${playerId}/game-log/now`,
    method: 'GET',
})