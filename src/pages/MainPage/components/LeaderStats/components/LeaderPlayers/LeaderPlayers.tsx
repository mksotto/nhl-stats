import {FC, useEffect, useState} from "react";
import { Card, Flex, Tabs, TabsProps } from "antd";
import { LeaderPlayer } from "../../../../../../types/base.ts";
import {PlayerStatsLeadersGet} from "../../../../../../types/playerStatsLeadersGet.ts";
import { skaterStatsLeadersCurrentGet } from "../../../../../../api/api-web.nhle/skaterStatsLeadersCurrentGet.ts";
import { goalieStatsLeadersCurrentGet } from "../../../../../../api/api-web.nhle/goalieStatsLeadersCurrentGet.ts";
import { LeaderPlayerInfo } from "./LeaderPlayerInfo/LeaderPlayerInfo.tsx";
import { PlayersListItem } from "./PlayersListItem/PlayersListItem.tsx";
import styles from './LeaderPlayers.module.css';

type CurrentTab = keyof PlayerStatsLeadersGet
type Props = {
    skater?: boolean,
    goalie?: boolean,
}
const getItems = (skater: boolean | undefined, goalie: boolean | undefined) => {
    if (skater) {
        return [
            {key: 'points', label: 'Points'},
            {key: 'goals', label: 'Goals'},
            {key: 'assists', label: 'Assists'},
        ]
    } else if (goalie) {
        return [
            {key: 'goalsAgainstAverage', label: 'GAA'},
            {key: 'savePctg', label: 'SV%'},
            {key: 'shutouts', label: 'Shutouts'},
        ]
    } else
        return []
}

export const LeaderPlayers: FC<Props> = ({skater, goalie}) => {

    const items: TabsProps['items'] = getItems(skater, goalie)
    const [currentTab, setCurrentTab] = useState<CurrentTab>(items[0].key  as CurrentTab)
    const [players, setPlayers] =  useState<PlayerStatsLeadersGet>()
    const [player, setPlayer] = useState<LeaderPlayer>()
    const [loader, setLoader] =  useState<boolean>(false) // не работает, надо разобраться
    const [playerId, setPlayerId] = useState(0)
    const handleTabChange = (activeKey: CurrentTab) => {
        setCurrentTab(activeKey);
        setPlayer(players?.[activeKey][playerId]);
    }
    useEffect(() => {
        setLoader(true)
        if (skater) {
            try {
                skaterStatsLeadersCurrentGet().then(r => {
                    setPlayers(r);
                    setPlayer(r[currentTab][0])
                })
            } catch (e) {
                console.error(e)
            } finally {
                setLoader(false)
            }
        } else if (goalie) {
            try {
                goalieStatsLeadersCurrentGet().then(r => {
                    setPlayers(r);
                    setPlayer(r[currentTab][0])
                })
            } catch (e) {
                console.error(e)
            } finally {
                setLoader(false)
            }}
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])

    return (
        <Card title={<a href='/public' className={styles.title}>{skater ? 'Skater' : goalie ? 'Goalie' : ''}</a>} loading={loader}>
            <Tabs
                items={items}
                onChange={(activeKey) => handleTabChange(activeKey as CurrentTab)}
                centered
                className={styles.tabs}
            />
            <Flex className={styles.container}>
                <Flex className={styles.playerInfo}>
                    {player && <LeaderPlayerInfo player={player} currentTab={currentTab}/>}
                </Flex>
                <Flex vertical gap={8} className={styles.playersList}>
                    {players?.[currentTab].map((p, key) => (
                        <PlayersListItem
                            key={p.id}
                            onMouseEnter={() => {setPlayer(p); setPlayerId(key)}}
                            player={p}
                            keyOfItem={key+1}
                            active={player?.id === p.id}
                            currentTab={currentTab}
                        />
                    ))}
                </Flex>
            </Flex>
        </Card>
    )
}