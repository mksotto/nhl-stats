import {useQuery} from "react-query";
import {playersSearchNameGet} from "../../api/nhl-stats/players/playersSearchNameGet.ts";

export const usePlayersSearchName = (name: string, active?: boolean) => useQuery({
    queryKey: ['playersSearchName', name, active],
    queryFn: () => playersSearchNameGet(name, active),
    enabled: Boolean(name),
});