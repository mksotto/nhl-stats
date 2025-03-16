import {FC} from "react";
import {Flex, Typography} from "antd";
import {FEATURED_STATS} from "../../constants/constants.ts";
import styles from './StatsRow.module.css'
import {useIsMobile} from "../../../../../../hooks/mediaCheckers.ts";
import {PlayerStatsBySeason} from "../../../../../../types/domain/nhl-stats.ts";

type Props = {
    title: string;
    stats: PlayerStatsBySeason | undefined;
};

export const StatsRow: FC<Props> = ({title, stats}) => {
    if (!stats) return;
    const isMobile = useIsMobile();
    return (
        <>
            {isMobile && <Flex  className={styles.tableTitle}>
                <Typography.Text className={styles.title}>{title}</Typography.Text>
            </Flex>}
            <Flex className={styles.container}>
                {!isMobile && <Flex className={styles.tableTitle}>
                    <Typography.Text className={styles.title}>{title}</Typography.Text>
                </Flex>}
                <Flex className={styles.featuredStats}>
                    {Object.entries(stats).map(([key, value]) => (
                        <Flex className={styles.featuredStatsItem}>
                            <Typography.Text type='secondary'>{FEATURED_STATS[key]}</Typography.Text>
                            <Typography.Text className={styles.featuredStatsValue}>{value}</Typography.Text>
                        </Flex>
                    ))}
                </Flex>
            </Flex>
        </>
    )
}