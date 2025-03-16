import { Flex, Select, Table, TableProps, Typography } from "antd";
import { FC, useState } from "react";
import {SKATER_PARAMS, GOALIE_PARAMS, GAME_TYPE_ID_OPTIONS, LEAGUE_OPTIONS} from "./constants";
import styles from './StatsCareer.module.css'
import {useIsMobile} from "../../../../../hooks/mediaCheckers.ts";
import {PlayerAdvanced, PlayerSeasonTotal} from "../../../../../types/domain/nhl-stats.ts";

type Props = {
    player: PlayerAdvanced;
};

const filteredStats = (seasonTotals: PlayerSeasonTotal[], statsLeague: string, gameTypeId: number) => (
    (statsLeague === 'nhl' ? seasonTotals.filter((season) => season?.leagueAbbrev === 'NHL') : seasonTotals)
        .filter((season) => season?.gameTypeId === gameTypeId)
);

export const StatsCareer: FC<Props> = ({player}) => {

    if(!player.seasonTotal) return null;

    const [league, setLeague] = useState(LEAGUE_OPTIONS[0].value);
    const [gameTypeId, setGameTypeId] = useState(GAME_TYPE_ID_OPTIONS[0].value);

    const isMobile = useIsMobile();

    const data = filteredStats(player.seasonTotal, league, gameTypeId)

    const columns: TableProps<PlayerSeasonTotal>['columns'] = ( player.position !== 'G' ? SKATER_PARAMS : GOALIE_PARAMS )

    return (
        <Flex vertical gap={16}>
            <Flex className={styles.container}>
                {!isMobile && <Typography.Text className={styles.title}>
                    Career Stats
                </Typography.Text>}
                <Flex className={styles.selectContainer}>
                    <Select
                        options={LEAGUE_OPTIONS}
                        value={league}
                        onChange={(v) => setLeague(v)}
                        size='large'
                        className={styles.select}
                    />
                    <Select 
                        options={GAME_TYPE_ID_OPTIONS}
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