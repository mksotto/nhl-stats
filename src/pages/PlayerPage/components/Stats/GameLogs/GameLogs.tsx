import { Flex, Select, Table, Typography } from "antd";
import { FC, useState } from "react";
import styles from './GameLogs.module.css'
import { PlayerPlayerIdGameLogGet } from "../../../../../types/playerPlayerIdGameLogGet";

type Props = {
    gameLog: PlayerPlayerIdGameLogGet
}

export const GameLogs: FC<Props> = ({gameLog}) => {

    const [gameTypeId, setGameTypeId] = useState(2);
    const [season, setSeason] = useState(gameLog.seasonId)

    return (
        <Flex vertical gap={16}>
            <Flex justify="space-between" style={{width: '100%'}}>
                <Typography.Text className={styles.title}>
                    Career Stats
                </Typography.Text>
                <Flex gap={8}>
                    <Select
                        options={gameLog.playerStatsSeasons?.map((season) => ({
                            label: `${String(season.season).substring(0, 4)}-${String(season.season).substring(6)}`,
                            value: season.season,
                        }))}
                        value={season}
                        onChange={(v) => setSeason(v)}
                        size='large'
                        className={styles.select}
                    />
                    <Select 
                        options={[{label: 'Regular Season', value: 2}, {label: 'Playoffs', value: 3}]}
                        value={gameTypeId}
                        onChange={(v) => setGameTypeId(v)}
                        size='large'
                        className={styles.select}
                    />
                </Flex>
            </Flex>
            <Table /*columns={columns} dataSource={data}*/ pagination={false} />
        </Flex>
    )
}