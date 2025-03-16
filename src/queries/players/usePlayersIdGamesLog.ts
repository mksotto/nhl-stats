import {useQuery} from "react-query";
import {playersIdGet} from "../../api/nhl-stats/players/playersIdGet.ts";

export const usePlayersIdGamesLog = (id: number) => useQuery({
    queryKey: ['playersIdGamesLog', id],
    queryFn: () => playersIdGet(id),
});