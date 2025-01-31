import {LeaderPlayer} from "../../../../../types/base.ts";
import {PlayerStatsLeadersCurrentGet} from "../../../../../types/playerStatsLeadersCurrentGet.ts";


export const curatedPlayer = (player: LeaderPlayer, currentTab: keyof PlayerStatsLeadersCurrentGet) => {
    if (currentTab === 'savePctg') {
        return {
            ...player,
            value: player.value.toFixed(3).replace(/^0\./, '.')
        }
    }
    if (currentTab === 'goalsAgainstAverage') {
        return {
            ...player,
            value: (Math.round(player.value * 100) / 100).toFixed(2)
        }
    }
    return player
}