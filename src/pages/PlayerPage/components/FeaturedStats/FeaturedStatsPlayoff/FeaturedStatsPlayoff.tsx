import {FC} from "react";
import {PlayerPlayerIdLandingGet} from "../../../../../types/playerPlayerIdLandingGet.ts";
import styles from "../FeaturedStats.module.css";
import {Flex, Typography} from "antd";

type Props = {
    player: PlayerPlayerIdLandingGet
}

const FEATURED_STATS: Record<string, string> = {
    'gamesPlayed': 'GP',
    'goals': 'G',
    'assists': 'A',
    'points': 'P',
    'plusMinus': '+/-',
    'wins': 'W',
    'shutouts': 'SO',
    'goalsAgainstAvg': 'GAA',
    'savePctg': 'SV%',
};

export const FeaturesStatsPlayoff: FC<Props> = ({player}) => {

    const seasonString = String(player.featuredStats?.season);

    const featuredStatsPlayoffSeason = Object.entries(player.featuredStats?.playoffs?.subSeason || {}).filter((item) => FEATURED_STATS[item[0]])
    const featuredStatsPlayoffCareer = Object.entries(player.featuredStats?.playoffs?.career || {}).filter((item) => FEATURED_STATS[item[0]])


    return (
        <Flex className={styles.statsContainer}>
            <Flex className={styles.container}>
                <Flex className={styles.tableTitle}>
                    <Typography.Text className={styles.title}>{`${seasonString.substring(0, 4)}-${seasonString.substring(6)}`} Playoffs</Typography.Text>
                </Flex>
                <Flex className={styles.featuredStats}>
                    {featuredStatsPlayoffSeason.map(([key, value]) => (
                        <Flex className={styles.featuredStatsItem}>
                            <Typography.Text type='secondary' className={styles.featuredStatsKey}>{FEATURED_STATS[key]}</Typography.Text>
                            <Typography.Text className={styles.featuredStatsValue}>{value}</Typography.Text>
                        </Flex>
                    ))}
                </Flex>
            </Flex>
            <Flex className={styles.container}>
                <Flex className={styles.tableTitle}>
                    <Typography.Text className={styles.title}>Career Playoffs</Typography.Text>
                </Flex>
                <Flex className={styles.featuredStats}>
                    {featuredStatsPlayoffCareer.map(([key, value]) => (
                        <Flex className={styles.featuredStatsItem}>
                            <Typography.Text type='secondary' className={styles.featuredStatsKey}>{FEATURED_STATS[key]}</Typography.Text>
                            <Typography.Text className={styles.featuredStatsValue}>{value}</Typography.Text>
                        </Flex>
                    ))}
                </Flex>
            </Flex>
        </Flex>
    )
}