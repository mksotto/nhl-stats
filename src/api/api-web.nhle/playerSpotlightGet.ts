import { PlayerSpotlightGet } from "../../types/playerSpotlightGet";
import { makeRequest } from "./base";

export const playerSpotlightGet = () => makeRequest<PlayerSpotlightGet[]>({
    url: '/player-spotlight',
    method: 'GET',
})