import {useQuery} from "react-query";
import {playersIdGamesLogGet} from "../../api/nhl-stats/players/playersIdGamesLogGet.ts";

export const usePlayersIdGamesLog = (id: number, season?: number, gameType?: 2 | 3) => useQuery({
    queryKey: ['playersIdGamesLog', id],
    queryFn: () => playersIdGamesLogGet(id, season, gameType),
});