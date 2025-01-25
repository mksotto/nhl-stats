import { Flex, Select, Table, TableProps, Typography } from "antd";
import { FC, useState } from "react";
import { PlayerPlayerIdLandingGet, SeasonTotal } from "../../../../../types/playerPlayerIdLandingGet";
import { SKATER_PARAMS, GOALIE_PARAMS } from "./constants";
import styles from './StatsCareer.module.css'

type Props = {
    player: PlayerPlayerIdLandingGet
}

export const StatsCareer: FC<Props> = ({player}) => {

    if(!player.seasonTotals) return null;

    const [statsLeague, setStatsLeague] = useState('nhl')
    const [gameTypeId, setGameTypeId] = useState('2')
    const [filteredStats, setFilteredStats] = useState(player.seasonTotals)

    const data: SeasonTotal[] = filteredStats

    const columns: TableProps<SeasonTotal>['columns'] = ( player.position !== 'G' ? SKATER_PARAMS : GOALIE_PARAMS )

    switch(statsLeague) {
        case 'nhl': player.seasonTotals.filter((season) => season.leagueAbbrev === 'NHL')
            switch(gameTypeId) {
                case '2': player.seasonTotals.filter((season) => season.gameTypeId === 2)
                    break
                case '3': player.seasonTotals.filter((season) => season.gameTypeId === 3)
                    break
            }
            break
        case 'all':
            switch(gameTypeId) {
                case '2': setFilteredStats(player.seasonTotals.filter((season) => season.gameTypeId === 2))
                    break
                case '3': setFilteredStats(player.seasonTotals.filter((season) => season.gameTypeId === 3))
                    break
            }
            break
    }

    return (
        <Flex vertical gap={16}>
            <Flex justify="space-between" style={{width: '100%'}}>
                <Typography.Text className={styles.title}>
                    Career Stats
                </Typography.Text>
                <Flex gap={8}>
                    <Select
                        options={[{label: 'NHL', value: 'nhl'}, {label: 'All Leagues', value: 'all'}]}
                        defaultValue={statsLeague}
                        onChange={(v) => setStatsLeague(v)}
                        size='large'
                        className={styles.select}
                    />
                    <Select 
                        options={[{label: 'Regular Season', value: '2'}, {label: 'Playoffs', value: '3'}]}
                        defaultValue={gameTypeId}
                        onChange={(v) => setGameTypeId(v)}
                        size='large'
                        className={styles.select}
                    />
                </Flex>
            </Flex>
            <Table columns={columns} dataSource={data} pagination={false} />
        </Flex>
    )
}