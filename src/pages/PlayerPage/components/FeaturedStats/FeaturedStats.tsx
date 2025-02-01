import { FC } from "react";
import { PlayerPlayerIdLandingGet } from "../../../../types/playerPlayerIdLandingGet";
import styles from './FeaturedStats.module.css'
import {Carousel, Flex} from "antd";
import {StatsRow} from "./components/StatsRow/StatsRow.tsx";
import {curateFeaturedStats} from "./utils/сurateFeaturesStats.ts";

type Props = {
    player: PlayerPlayerIdLandingGet
}

export const FeaturedStats: FC<Props> = ({player}) => {

    const featuredStatsRegularSeason = curateFeaturedStats(player, 'regularSeason', 'subSeason');
    const featuredStatsPlayoffSeason = curateFeaturedStats(player, 'playoffs', 'subSeason');
    const featuredStatsRegularCareer = curateFeaturedStats(player, 'regularSeason', 'career');
    const featuredStatsPlayoffCareer = curateFeaturedStats(player, 'playoffs', 'career');

    return(
        <Carousel
            rootClassName={styles.arrow}
            arrows
            infinite={false}
            dots={false}
        >
            {featuredStatsRegularSeason.stats && featuredStatsRegularCareer.stats &&(
                <Flex className={styles.statsContainer} gap={16}>
                    <StatsRow featuredStats={featuredStatsRegularSeason} />
                    <StatsRow featuredStats={featuredStatsRegularCareer} />
                </Flex>
            )}
            {featuredStatsPlayoffSeason.stats && featuredStatsPlayoffCareer.stats &&(
                <Flex className={styles.statsContainer}>
                    <StatsRow featuredStats={featuredStatsPlayoffSeason} />
                    <StatsRow featuredStats={featuredStatsPlayoffCareer} />
                </Flex>
            )}
        </Carousel>
    )
}