import {FC} from "react";
import {Flex, Select, Typography} from "antd";
import styles from './TeamRosterTitle.module.css';

type Props = {
    seasons?: number[],
    season?: number,
    setSeason: (season: number) => void,
    loading: boolean,
};

export const TeamRosterTitle: FC<Props> = ({seasons, season, setSeason, loading}) => (
    <Flex justify='space-between' align='center'>
        <Typography.Title className={styles.title}>ROSTER</Typography.Title>
        <Flex className={styles.title}>
                <Select
                    options={(seasons && [...seasons].reverse().map((season) => ({
                            value: season,
                            label: `${String(season).substring(0, 4)}-${String(season).substring(6)}`
                        })
                    ))}
                    value={season}
                    onChange={(value) => setSeason(value)}
                    size='large'
                    className={styles.select}
                    loading={loading}
                />
        </Flex>
    </Flex>
);