import { PlayerPlayerIdLandingGet } from "../types/playerPlayerIdLandingGet";
import { makeRequest } from "./base";

export const playerPlayerIdLandingGet = (playerId: string) => makeRequest<PlayerPlayerIdLandingGet>({
    url: `/player/${playerId}/landing`,
    method: 'GET',
})