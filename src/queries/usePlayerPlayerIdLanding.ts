import { useQuery } from "react-query";
import { playerPlayerIdLandingGet } from "../api/api-web.nhle/playerPlayerIdLandingGet.ts";

export const usePlayerPlayerIdLanding = (playerId: number) => 
    useQuery({queryKey: ['playerPlayerIdLanding', playerId], queryFn: () => playerPlayerIdLandingGet(playerId)})