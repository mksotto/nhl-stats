import {LeaderPlayer} from "../../../../../types/base.ts";
import {PlayerStatsLeadersGet} from "../../../../../types/playerStatsLeadersGet.ts";


export const curatedPlayer = (player: LeaderPlayer, currentTab: keyof PlayerStatsLeadersGet) => {
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