import {useQuery} from "react-query";
import {playersSpotlightGet} from "../../api/nhl-stats/players/playersSpotlightGet.ts";

export const usePlayersSpotlight = () => useQuery({
    queryKey: ['playersSpotlight'],
    queryFn: playersSpotlightGet,
});