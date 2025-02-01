import {FEATURED_STATS} from "../constants/constants.ts";
import {curateValue} from "./curateValue.ts";
import {PlayerPlayerIdLandingGet} from "../../../../../types/playerPlayerIdLandingGet.ts";

type Props = [
    player: PlayerPlayerIdLandingGet,
    typeOfSeason: 'regularSeason' | 'playoffs',
    time: 'subSeason' | 'playoffs' | 'career',
]
type FeaturedStats = (...props: Props) => { title: string, stats: [string, string | number][] | undefined }

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
        return Object
            .entries(featuredStats)
            .filter((item) => FEATURED_STATS[item[0]])
            .map(curateValue) as [string, string | number][]
    }

    const title = selectTitle()
    const stats = curateStats()

    return {title, stats}
}