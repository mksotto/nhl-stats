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
            skaterStatsLeadersCurrentGet().then(r => setSkaters(r))
        } catch (e) {
            console.error(e)
        }
    }, [])
    
    
    
    const [skater, setSkater] = useState(skaters?.points[0])
    
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
                    <Flex vertical justify="center" className={styles.width}>
                        <LeaderSkater skater={skater}/>
                    </Flex>
                    <Flex  className={styles.width}>
                        <List className={styles.skatersTable}>
                            {skaters?.points.map(skater => (
                                <List.Item key={skater.id} onMouseEnter={() => setSkater(skater)}>
                                    <Flex justify='space-between' className={styles.skatersTable}>
                                        <div>
                                            {skater.firstName.default} {skater.lastName.default}
                                        </div>
                                        {skater.value}
                                    </Flex>
                                </List.Item>
                            ))}
                        </List>
                    </Flex>
                </Flex>
            </Card>
        </>
    )
}