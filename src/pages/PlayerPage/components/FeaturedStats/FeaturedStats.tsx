import { FC } from "react";
import styles from './FeaturedStats.module.css'
import {Carousel, Flex} from "antd";
import {StatsRow} from "./components/StatsRow/StatsRow.tsx";
import {useIsMobile} from "../../../../hooks/mediaCheckers.ts";
import {useParams} from "react-router-dom";
import {usePlayersId} from "../../../../queries/players/usePlayersId.ts";

export const FeaturedStats: FC = () => {
    const {id} = useParams();
    const {data: player} = usePlayersId(Number(id));
    const isMobile = useIsMobile();
    return(
        <Carousel
            rootClassName={styles.arrow}
            arrows={!isMobile}
            infinite={false}
            dots={false}
        >
            {player?.lastSeasonStats?.season && (
                <Flex className={styles.statsContainer}>
                    <StatsRow title={`${player.lastSeasonStats?.season} season`} stats={player.lastSeasonStats?.regular} />
                    <StatsRow title='Career' stats={player.careerStats?.regular} />
                </Flex>
            )}
            {player?.lastSeasonStats?.playoff && (
                <Flex className={styles.statsContainer}>
                    <StatsRow title={`${player.lastSeasonStats?.season} playoff`} stats={player.lastSeasonStats?.playoff} />
                    <StatsRow title='Career playoffs' stats={player.careerStats?.playoff} />
                </Flex>
            )}
        </Carousel>
    );
};