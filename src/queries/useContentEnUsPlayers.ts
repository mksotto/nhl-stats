import { useQuery } from "react-query";
import { contentEnUsPlayersGet } from "../api/forge-dapi.d3.nhle/contentEnUsPlayersGet";

export const useContentEnUsPlayers = (playerId: number) => 
    useQuery({queryKey: ['contentEnUsPlayers', playerId], queryFn: () => contentEnUsPlayersGet(playerId)})