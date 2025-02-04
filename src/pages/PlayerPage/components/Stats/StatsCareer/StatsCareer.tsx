import { Flex, Select, Table, TableProps, Typography } from "antd";
import { FC, useState } from "react";
import { PlayerPlayerIdLandingGet, SeasonTotal } from "../../../../../types/playerPlayerIdLandingGet";
import { SKATER_PARAMS, GOALIE_PARAMS } from "./constants";
import styles from './StatsCareer.module.css'

type Props = {
    player: PlayerPlayerIdLandingGet
}

const filteredStats = (seasonTotals: SeasonTotal[], statsLeague: string, gameTypeId: number) => {
    const filterByLeague = statsLeague === 'nhl' ? seasonTotals.filter((season) => season.leagueAbbrev === 'NHL') : seasonTotals;
    return filterByLeague.filter((season) => season.gameTypeId === gameTypeId);
}

export const StatsCareer: FC<Props> = ({player}) => {

    if(!player.seasonTotals) return null;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [statsLeague, setStatsLeague] = useState('nhl')
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [gameTypeId, setGameTypeId] = useState(2)

    const data = filteredStats(player.seasonTotals, statsLeague, gameTypeId)

    const columns: TableProps<SeasonTotal>['columns'] = ( player.position !== 'G' ? SKATER_PARAMS : GOALIE_PARAMS )

    return (
        <Flex vertical gap={16}>
            <Flex justify="space-between" style={{width: '100%'}}>
                <Typography.Text className={styles.title}>
                    Career Stats
                </Typography.Text>
                <Flex gap={8}>
                    <Select
                        options={[{label: 'NHL', value: 'nhl'}, {label: 'All Leagues', value: 'all'}]}
                        value={statsLeague}
                        onChange={(v) => setStatsLeague(v)}
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
            <Table className={styles.table} columns={columns} dataSource={data} pagination={false} />
        </Flex>
    )
}