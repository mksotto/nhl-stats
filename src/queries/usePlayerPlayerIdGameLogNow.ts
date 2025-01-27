import { useQuery } from "react-query";
import { playerPlayerIdGameLogNowGet } from "../api/api-web.nhle/playerPlayerIdGameLogNowGet";

export const usePlayerPlayerIdGameLogNow = (playerId: number) => useQuery({
    queryKey: ['playerPlayerIdGameLogNow', playerId],
    queryFn: () => playerPlayerIdGameLogNowGet(playerId)
})