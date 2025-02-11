import { useQuery } from "react-query";
import { searchPlayerGet } from "../api/search.d3.hnle/searchPlayerGet";

export const useSearchPlayer = (name: string, active: boolean) => useQuery({
    queryKey: ['seacrhPlayer', name, active],
    queryFn: () => searchPlayerGet(name, active),
    enabled: Boolean(name),
})