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

export const FeaturesStatsRegular: FC<Props> = ({player}) => {

    const seasonString = String(player.featuredStats?.season);

    const featuredStatsRegularSeason = Object.entries(player.featuredStats?.regularSeason.subSeason || {}).filter((item) => FEATURED_STATS[item[0]])
    const featuredStatsRegularCareer = Object.entries(player.featuredStats?.regularSeason.career || {}).filter((item) => FEATURED_STATS[item[0]])


    return (
        <Flex className={styles.statsContainer}>
            <Flex className={styles.container}>
                <Flex className={styles.tableTitle}>
                    <Typography.Text className={styles.title}>{`${seasonString.substring(0, 4)}-${seasonString.substring(6)}`} Season</Typography.Text>
                </Flex>
                <Flex className={styles.featuredStats}>
                    {featuredStatsRegularSeason.map(([key, value]) => (
                        <Flex className={styles.featuredStatsItem}>
                            <Typography.Text type='secondary' className={styles.featuredStatsKey}>{FEATURED_STATS[key]}</Typography.Text>
                            <Typography.Text className={styles.featuredStatsValue}>{value}</Typography.Text>
                        </Flex>
                    ))}
                </Flex>
            </Flex>
            <Flex className={styles.container}>
                <Flex className={styles.tableTitle}>
                    <Typography.Text className={styles.title}>Career</Typography.Text>
                </Flex>
                <Flex className={styles.featuredStats}>
                    {featuredStatsRegularCareer.map(([key, value]) => (
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