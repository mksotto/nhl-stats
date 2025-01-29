import { FC } from "react";
import { PlayerPlayerIdLandingGet } from "../../../../types/playerPlayerIdLandingGet";
// import { Flex, Typography } from "antd";
// import styles from './FeaturedStats.module.css'
import {FeaturesStatsRegular} from "./FeaturesStatsRegular/FeaturesStatsRegular.tsx";
import {FeaturesStatsPlayoff} from "./FeaturedStatsPlayoff/FeaturedStatsPlayoff.tsx";

type Props = {
    player: PlayerPlayerIdLandingGet
}

// const FEATURED_STATS: Record<string, string> = {
//     'gamesPlayed': 'GP',
//     'goals': 'G',
//     'assists': 'A',
//     'points': 'P',
//     'plusMinus': '+/-',
//     'wins': 'W',
//     'shutouts': 'SO',
//     'goalsAgainstAvg': 'GAA',
//     'savePctg': 'SV%',
// };

export const FeaturedStats: FC<Props> = ({player}) => {

    // const seasonString = String(player.featuredStats?.season);

    // const featuredStatsRegularSeason = Object.entries(player.featuredStats?.regularSeason.subSeason || {}).filter((item) => FEATURED_STATS[item[0]])
    // const featuredStatsPlayoffSeason = Object.entries(player.featuredStats?.playoffs?.subSeason || {}).filter((item) => FEATURED_STATS[item[0]])
    // const featuredStatsRegularCareer = Object.entries(player.featuredStats?.regularSeason.career || {}).filter((item) => FEATURED_STATS[item[0]])
    // const featuredStatsPlayoffCareer = Object.entries(player.featuredStats?.playoffs?.career || {}).filter((item) => FEATURED_STATS[item[0]])

    return(
        <>
            <FeaturesStatsRegular player={player} />
            <FeaturesStatsPlayoff player={player} />
        </>
    )
}