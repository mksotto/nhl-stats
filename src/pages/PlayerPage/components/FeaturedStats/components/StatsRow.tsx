import {FC} from "react";
import {Flex, Typography} from "antd";
import {FEATURED_STATS} from "../constants/constants.ts";
import styles from "../FeaturedStats.module.css";

type Props = {
    featuredStats: [string, string | number][];
}

export const StatsRow:  FC<Props> = ({featuredStats}) => {

    return (
        <Flex className={styles.container}>
            <Flex className={styles.tableTitle}>
                <Typography.Text className={styles.title}>Career</Typography.Text>
            </Flex>
            <Flex className={styles.featuredStats}>
                {featuredStats.map(([key, value]) => (
                    <Flex className={styles.featuredStatsItem}>
                        <Typography.Text type='secondary' className={styles.featuredStatsKey}>{FEATURED_STATS[key]}</Typography.Text>
                        <Typography.Text className={styles.featuredStatsValue}>{value}</Typography.Text>
                    </Flex>
                ))}
            </Flex>
        </Flex>
    )
}