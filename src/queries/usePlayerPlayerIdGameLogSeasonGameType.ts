import { useQuery } from "react-query";
import { playerPlayerIdGameLogSeasonGameTypeGet } from "../api/api-web.nhle/playerPlayerIdGameLogSeasonGameTypeGet";

export const usePlayerPlayerIdGameLogSeasonGameType = (playerId: number, season: number | undefined, gameType: number | undefined) => useQuery({
    queryKey: ['playerPlayerIdGameLogSeasonGameType', playerId, season, gameType],
    queryFn: () => playerPlayerIdGameLogSeasonGameTypeGet(playerId, season!, gameType!),
    enabled: Boolean(season && gameType),
})