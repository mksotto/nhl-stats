import {FEATURED_STATS_GOALIES, FEATURED_STATS_PLAYER} from "../constants/constants.ts";
import {curateValue} from "./curateValue.ts";
import {PlayerPlayerIdLandingGet} from "../../../../../types/playerPlayerIdLandingGet.ts";

type Props = [
    player: PlayerPlayerIdLandingGet,
    typeOfSeason: 'regularSeason' | 'playoffs',
    time: 'subSeason' | 'playoffs' | 'career',
]
type FeaturedStats = (...props: Props) => { title: string, stats: (string | number)[][] | undefined }

export const curateFeaturedStats: FeaturedStats = (player, typeOfSeason, time) => {

    const seasonString = String(player.featuredStats?.season);

    const selectTitle = () => {
        if (time === 'subSeason') return `${seasonString.substring(0, 4)}-${seasonString.substring(6)} ` + (typeOfSeason === 'playoffs' ? 'Playoff' : 'Season')
        if (time === 'career') return 'Career' + (typeOfSeason === 'playoffs' ? ' Playoffs' : '')
        return ''
    }
    const curateStats = () => {
        if (!player.featuredStats) return undefined
        const featuredStats = player.featuredStats[typeOfSeason]?.[time]
        if (!featuredStats) return undefined
        if (player.position === 'G') {
            return FEATURED_STATS_GOALIES.map((key) => curateValue([key, featuredStats[key]]))
        }
        return FEATURED_STATS_PLAYER.map((key) => curateValue([key, featuredStats[key]]))
    }

    const title = selectTitle()
    const stats = curateStats()

    return {title, stats}
}