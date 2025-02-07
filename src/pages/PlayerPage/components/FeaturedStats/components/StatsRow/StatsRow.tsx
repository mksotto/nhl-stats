import {FC} from "react";
import {Flex, Typography} from "antd";
import {FEATURED_STATS} from "../../constants/constants.ts";
import styles from './StatsRow.module.css'
import {useIsMobile} from "../../../../../../hooks/mediaCheckers.ts";

type Props = {
    featuredStats: {title: string, stats: (string | number)[][] | undefined};
}

export const StatsRow:  FC<Props> = ({featuredStats: {title, stats}}) => {

    if (!stats) return

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const isMobile = useIsMobile()

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
                    {stats.map(([key, value]) => (
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