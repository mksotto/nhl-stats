import { PlayerPlayerIdLandingGet } from "../../types/playerPlayerIdLandingGet";
import { makeRequest } from "./base";

export const playerPlayerIdLandingGet = (playerId: number) => makeRequest<PlayerPlayerIdLandingGet>({
    url: `/player/${playerId}/landing`,
    method: 'GET',
})