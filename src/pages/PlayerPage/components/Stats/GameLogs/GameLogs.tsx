import { Flex, Select, Table, Typography } from "antd";
import { FC, useEffect, useState } from "react";
import styles from './GameLogs.module.css'
import { usePlayerPlayerIdGameLogNow } from "../../../../../queries/usePlayerPlayerIdGameLogNow";
import { usePlayerPlayerIdGameLogGameType } from "../../../../../queries/usePlayerPlayerIdGameLogGameType";

type Props = {
    playerId: number
}

export const GameLogs: FC<Props> = ({playerId}) => {

    const {data: gameLogNow} = usePlayerPlayerIdGameLogNow(playerId)

    const [season, setSeason] = useState<number>();
    const [gameTypeId, setGameTypeId] = useState<number>(2);
    
    const {data: gameLog} = usePlayerPlayerIdGameLogGameType(playerId, season, gameTypeId)
    useEffect(() => {
        setSeason(gameLogNow?.seasonId)
    }, [gameLogNow])
    useEffect(() => {
        setGameTypeId((gameLogNow?.playerStatsSeasons.find((s) => s.season === season)?.gameTypes.includes(gameTypeId) ? gameTypeId : 2))
    }, [season])

    return (
        <Flex vertical gap={16}>
            <Flex justify="space-between" style={{width: '100%'}}>
                <Typography.Text className={styles.title}>
                    Career Stats
                </Typography.Text>
                <Flex gap={8}>
                    <Select
                        options={gameLogNow?.playerStatsSeasons?.map((season) => ({
                            label: `${String(season.season).substring(0, 4)}-${String(season.season).substring(6)}`,
                            value: season.season,
                        }))}
                        value={season}
                        onChange={(v) => setSeason(v)}
                        size='large'
                        className={styles.select}
                    />
                    <Select 
                        options={[{label: 'Regular Season', value: 2}, {label: 'Playoffs', value: 3}].filter(({value}) => gameLogNow?.playerStatsSeasons.find((s) => s.season === season)?.gameTypes.includes(value))}
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