import {useQuery} from "react-query";
import {playersIdGet} from "../../api/nhl-stats/players/playersIdGet.ts";

export const usePlayersId = (id: number) => useQuery({
    queryKey: ['playersId', id],
    queryFn: () => playersIdGet(id),
});