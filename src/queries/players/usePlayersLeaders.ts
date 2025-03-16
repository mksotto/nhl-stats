import {useQuery} from "react-query";
import {playersLeadersGet} from "../../api/nhl-stats/players/playersLeadersGet.ts";

export const usePlayersLeaders = (season?: number, gameType?: 2 | 3) => useQuery({
    queryKey: ['playersLeaders', season, gameType],
    queryFn: () => playersLeadersGet(season, gameType),
});