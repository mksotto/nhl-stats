import { Flex, Select, Table, TableProps, Typography } from "antd";
import { FC, useEffect, useState } from "react";
import styles from './GameLogs.module.css'
import { usePlayerPlayerIdGameLogNow } from "../../../../../queries/usePlayerPlayerIdGameLogNow";
import { usePlayerPlayerIdGameLogSeasonGameType } from "../../../../../queries/usePlayerPlayerIdGameLogSeasonGameType";
import { GameLog } from "../../../../../types/playerPlayerIdGameLogGet";
import { GOALIE_PARAMS, SKATER_PARAMS } from "./constants";
import {useIsMobile} from "../../../../../hooks/mediaCheckers.ts";

type Props = {
    playerId: number,
    position: string,
}

export const GameLogs: FC<Props> = ({playerId, position}) => {

    const [season, setSeason] = useState<number>();
    const [gameTypeId, setGameTypeId] = useState<number>(2);
    const [tableData, setTableData] = useState<GameLog[]>()
    
    const {data: gameLogNow} = usePlayerPlayerIdGameLogNow(playerId)
    const {data: gameLog} = usePlayerPlayerIdGameLogSeasonGameType(playerId, season, gameTypeId)

    const isMobile = useIsMobile()

    useEffect(() => {
        setSeason(gameLogNow?.seasonId)
        setTableData(gameLogNow?.gameLog)
    }, [gameLogNow])

    useEffect(() => {
        setGameTypeId((gameLogNow?.playerStatsSeasons.find((s) => s.season === season)?.gameTypes.includes(gameTypeId) ? gameTypeId : 2))
    }, [season])

    useEffect(() => {
        setTableData(gameLog?.gameLog)
    }, [gameLog])

    const data = tableData;

    const columns: TableProps<GameLog>['columns'] = (position !== 'G' ? SKATER_PARAMS : GOALIE_PARAMS);

    return (
        <Flex vertical gap={16}>
            <Flex className={styles.container}>
                {!isMobile && <Typography.Text className={styles.title}>
                    Game Logs
                </Typography.Text>}
                <Flex className={styles.selectContainer}>
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
            <Table className={styles.table} columns={columns} dataSource={data} pagination={false} />
        </Flex>
    )
}