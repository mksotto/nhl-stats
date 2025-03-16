import { FC } from "react";
import styles from './FeaturedStats.module.css'
import {Carousel, Flex} from "antd";
import {StatsRow} from "./components/StatsRow/StatsRow.tsx";
import {useIsMobile} from "../../../../hooks/mediaCheckers.ts";
import {PlayerAdvanced} from "../../../../types/domain/nhl-stats.ts";

type Props = {
    player: PlayerAdvanced
}

export const FeaturedStats: FC<Props> = ({player}) => {
    const isMobile = useIsMobile();
    return(
        <Carousel
            rootClassName={styles.arrow}
            arrows={!isMobile}
            infinite={false}
            dots={false}
        >
            {player.lastSeasonStats?.season && (
                <Flex className={styles.statsContainer}>
                    <StatsRow title={`${player.lastSeasonStats?.season} season`} stats={player.lastSeasonStats?.regular} />
                    <StatsRow title='Career' stats={player.careerStats?.regular} />
                </Flex>
            )}
            {player.lastSeasonStats?.playoff && (
                <Flex className={styles.statsContainer}>
                    <StatsRow title={`${player.lastSeasonStats?.season} playoff`} stats={player.lastSeasonStats?.playoff} />
                    <StatsRow title='Career playoffs' stats={player.careerStats?.playoff} />
                </Flex>
            )}
        </Carousel>
    );
};