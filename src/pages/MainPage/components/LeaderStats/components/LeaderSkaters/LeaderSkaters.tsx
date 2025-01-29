import { FC, useEffect, useState } from "react"
import {Card, Flex, Tabs, TabsProps} from "antd"
import styles from './LeaderSkaters.module.css'
import { SkaterStatsLeadersCurrentGet } from "../../../../../../types/skaterStatsLeadersCurrentGet"
import { LeaderSkater } from "./LeaderSkater/LeaderSkater"
import { skaterStatsLeadersCurrentGet } from "../../../../../../api/api-web.nhle/skaterStatsLeadersCurrentGet"
import { PlayerItem } from "../../../../../../components/PlayerItem/PlayerItem"
import { LeaderPlayer } from "../../../../../../types/base"

type CurrentTab = keyof SkaterStatsLeadersCurrentGet

export const LeaderSkaters: FC = () => {
    const [currentTab, setCurrentTab] = useState<CurrentTab>('points')
    const [skaters, setSkaters] =  useState<SkaterStatsLeadersCurrentGet>()
    const [skater, setSkater] = useState<LeaderPlayer>()
    const [loader, setLoader] =  useState<boolean>(false) // не работает, надо разобраться
    useEffect(() => {
        setLoader(true)
        try {
            skaterStatsLeadersCurrentGet().then(r => {
                setSkaters(r); 
                setSkater(r[currentTab][0])
            })
        } catch (e) {
            console.error(e)
        } finally {
            setLoader(false)
        }
    }, [])

    const [skaterId, setSkaterId] = useState(0)

    const handleTabChange = (activeKey: CurrentTab) => {
        setCurrentTab(activeKey);
        setSkater(skaters?.[activeKey][skaterId]);
    }

    const items: TabsProps['items'] = [
        {key: 'points', label: 'Points'},
        {key: 'goals', label: 'Goals'},
        {key: 'assists', label: 'Assists'},
    ]

    return (
        <>
            <Card title={<a href='/' className={styles.title}>Skaters</a>} loading={loader}>
                <Tabs
                    items={items}
                    onChange={(activeKey) => handleTabChange(activeKey as CurrentTab)}
                    centered
                    className={styles.tabs}
                />
                <Flex className={styles.container}>
                    <Flex className={styles.playerInfo}>
                        <LeaderSkater skater={skater} currentTab={currentTab}/>
                    </Flex>
                    <Flex vertical gap={8} className={styles.playersList}>
                        {skaters?.[currentTab].map((player, key) => (
                            <PlayerItem
                                key={player.id}
                                onMouseEnter={() => {setSkater(player); setSkaterId(key)}}
                                player={player}
                                keyOfItem={key+1}
                                active={skater?.id === player.id} />
                        ))}
                    </Flex>
                </Flex>
            </Card>
        </>
    )
}