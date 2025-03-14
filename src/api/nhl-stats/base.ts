import {makeRequestService} from "../../utils/makeRequestService.ts";
import {NHL_STATS_API_URL} from "../../constants/constants.ts";

export const nhlStatsRequestService = makeRequestService(NHL_STATS_API_URL);