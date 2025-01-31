import { FC } from "react";
import { PlayerPlayerIdLandingGet } from "../../../../types/playerPlayerIdLandingGet";
import styles from './FeaturedStats.module.css'
import {Carousel, Flex} from "antd";
// import {FeaturesStatsRegular} from "./FeaturesStatsRegular/FeaturesStatsRegular.tsx";
// import {FeaturesStatsPlayoff} from "./FeaturedStatsPlayoff/FeaturedStatsPlayoff.tsx";
import {FEATURED_STATS} from "./constants/constants.ts";
import {curatedFeaturedStats} from "./utils/curatedFeaturedStats.ts";
import {StatsRow} from "./components/StatsRow.tsx";
// import {curatedFeaturedStats} from "./utils/curatedFeaturedStats.ts";

type Props = {
    player: PlayerPlayerIdLandingGet
}

export const FeaturedStats: FC<Props> = ({player}) => {

    if (!player.featuredStats) return null

    // const seasonString = String(player.featuredStats?.season);


    const curateFeaturedStats = (
        typeOfSeason: 'regularSeason' | 'playoffs',
        time: 'subSeason' | 'playoffs' | 'career'
    ) => {
        if (!player.featuredStats) return null

        const featuredStats = player.featuredStats[typeOfSeason]?.[time]
        if (!featuredStats) return null
        return Object
            .entries(featuredStats)
            .filter((item) => FEATURED_STATS[item[0]])
            .map(curatedFeaturedStats) as [string, string | number][]
    }

    const featuredStatsRegularSeason = curateFeaturedStats('regularSeason', 'subSeason');
    const featuredStatsPlayoffSeason = curateFeaturedStats('playoffs', 'subSeason');
    const featuredStatsRegularCareer = curateFeaturedStats('regularSeason', 'career');
    const featuredStatsPlayoffCareer = curateFeaturedStats('playoffs', 'career');


    // const featuredStatsRegularSeason = Object.entries(player.featuredStats?.regularSeason.subSeason || {}).filter((item) => FEATURED_STATS[item[0]])
    // const featuredStatsPlayoffSeason = Object.entries(player.featuredStats?.playoffs?.subSeason || {}).filter((item) => FEATURED_STATS[item[0]])
    // const featuredStatsRegularCareer = Object.entries(player.featuredStats?.regularSeason.career || {}).filter((item) => FEATURED_STATS[item[0]])
    // const featuredStatsPlayoffCareer = Object
    //     .entries(player.featuredStats.playoffs.career)
    //     .filter((item) => FEATURED_STATS[item[0]])
    //     .map(curatedFeaturedStats)

    return(
        <Carousel
            rootClassName={styles.arrow}
            // className={styles.arrow}
            arrows
            infinite={false}
            dots={false}
            style={{maxHeight: 208, minWidth: 0}}
        >
            {featuredStatsRegularSeason && featuredStatsRegularCareer &&(
                <Flex className={styles.statsContainer}>
                    <StatsRow featuredStats={featuredStatsRegularSeason} />
                    <StatsRow featuredStats={featuredStatsRegularCareer} />
                </Flex>
            )}
            {featuredStatsPlayoffSeason && featuredStatsPlayoffCareer &&(
                <Flex className={styles.statsContainer}>
                    <StatsRow featuredStats={featuredStatsPlayoffSeason} />
                    <StatsRow featuredStats={featuredStatsPlayoffCareer} />
                </Flex>
            )}
            {/*<FeaturesStatsRegular player={player} />*/}
            {/*<FeaturesStatsPlayoff player={player} />*/}
        </Carousel>
    )
}