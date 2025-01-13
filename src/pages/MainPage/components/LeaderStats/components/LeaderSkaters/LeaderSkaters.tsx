import { FC, useEffect, useState } from "react"
import { Card, Flex, Segmented, List } from "antd"
import styles from './LeaderSkaters.module.css'
import { SkaterStatsLeadersCurrentGet } from "../../../../../../types/skaterStatsLeadersCurrentGet"
import { LeaderSkater } from "./LeaderSkater/LeaderSkater"
import { skaterStatsLeadersCurrentGet } from "../../../../../../api/skaterStatsLeadersCurrentGet"

export const LeaderSkaters: FC = () => {
    const [currentTab, setCurrentTab] = useState('points')
    const [skaters, setSkaters] =  useState<SkaterStatsLeadersCurrentGet>()
    useEffect(() => {
        try {
            skaterStatsLeadersCurrentGet().then(r => setSkaters(r.payload))
        } catch (e) {
            console.error(e)
        }
    }, [])

    
    
    
    const [skater, setSkater] = useState(skaters?.assists[0])
    
    return (
        <>
            <Card title={<a href='/' className={styles.title}>Skaters</a>}>
                <Flex>
                    <Segmented 
                        options={[
                            {value: 'points', label: 'Points'},
                            {value: 'goals', label: 'Goals'},
                            {value: 'assists', label: 'Assists'},
                        ]}
                        value={currentTab}
                        onChange={setCurrentTab}
                    />
                </Flex>
                <Flex>
                    <Flex vertical  className={styles.width}>
                        <LeaderSkater skater={skater}/>
                    </Flex>
                    <Flex  className={styles.width}>
                        <List>
                            {skaters?.assists.map(skater => (
                                <List.Item key={skater.id} onMouseEnter={() => setSkater(skater)}>
                                    {skater.firstName.default}
                                </List.Item>
                            ))}
                        </List>
                    </Flex>
                </Flex>
            </Card>
        </>
    )
}