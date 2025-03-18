import { Flex, Select, Table, TableProps, Typography } from "antd";
import { FC, useEffect, useState } from "react";
import styles from './GameLogs.module.css'
import { GOALIE_PARAMS, SKATER_PARAMS } from "./constants";
import {useIsMobile} from "../../../../../hooks/mediaCheckers.ts";
import {usePlayersIdGamesLog} from "../../../../../queries/players/usePlayersIdGamesLog.ts";
import {PlayerGameLog} from "../../../../../types/domain/nhl-stats.ts";
import {GAME_TYPE_ID_OPTIONS} from "../../../../../constants/constants.ts";

type Props = {
    id: number,
    position: string,
}

export const GameLogs: FC<Props> = ({id, position}) => {
    const [season, setSeason] = useState<number>();
    const [gameTypeId, setGameTypeId] = useState< 2 | 3 >();
    const [tableData, setTableData] = useState<PlayerGameLog[] | null>();
    const {data: gamesLog, refetch} = usePlayersIdGamesLog(id, season, gameTypeId);
    useEffect(() => {
        setSeason(gamesLog?.seasonId);
        setGameTypeId(gamesLog?.gameTypeId);
        setTableData(gamesLog?.gamesLog)
    }, [gamesLog]);
    useEffect(() => {
        void refetch();
    }, [season, gameTypeId]);
    const isMobile = useIsMobile();
    const seasonSelectorOptions = gamesLog?.playerStatsSeason
        .map((s) => ({
            label: `${String(s.season).substring(0, 4)}-${String(s.season).substring(6)}`,
            value: s.season,
        }));
    const gameTypeSelectorOptions = GAME_TYPE_ID_OPTIONS
        .filter(({value}) => gamesLog?.playerStatsSeason
            .find((s) => s.season === season)?.gameTypes.includes(value as 2 | 3));
    const columns: TableProps<PlayerGameLog>['columns'] = (position !== 'G' ? SKATER_PARAMS : GOALIE_PARAMS);

    // todo

    // const {data: gameLogNow} = usePlayerPlayerIdGameLogNow(id)
    // const {data: gameLog} = usePlayerPlayerIdGameLogSeasonGameType(id, season, gameTypeId)


    // useEffect(() => {
    //     setSeason(gameLogNow?.seasonId)
    //     setTableData(gameLogNow?.gameLog)
    // }, [gameLogNow])
    //
    useEffect(() => {
        setGameTypeId((gamesLog?.playerStatsSeason.find((s) => s.season === season)?.gameTypes.includes(gameTypeId!) ? gameTypeId : 2))
    }, [season])
    //
    // useEffect(() => {
    //     setTableData(gameLog?.gameLog)
    // }, [gameLog])

    return (
        <Flex vertical gap={16}>
            <Flex className={styles.container}>
                {!isMobile && <Typography.Text className={styles.title}>
                    Game Logs
                </Typography.Text>}
                <Flex className={styles.selectContainer}>
                    <Select
                        options={seasonSelectorOptions}
                        value={season}
                        onChange={setSeason}
                        size='large'
                        className={styles.select}
                    />
                    <Select 
                        options={gameTypeSelectorOptions}
                        value={gameTypeId}
                        onChange={setGameTypeId}
                        size='large'
                        className={styles.select}
                    />
                </Flex>
            </Flex>
            {tableData !== null && <Table className={styles.table} columns={columns} dataSource={tableData} pagination={false}/>}
        </Flex>
    )
}