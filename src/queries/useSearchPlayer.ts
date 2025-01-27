import { useQuery } from "react-query";
import { searchPlayerGet } from "../api/search.d3.hnle/searchPlayerGet";

export const useSearchPlayer = (name: string) => useQuery({
    queryKey: ['seacrhPlayer', name], 
    queryFn: () => searchPlayerGet(name),
    enabled: Boolean(name),
})