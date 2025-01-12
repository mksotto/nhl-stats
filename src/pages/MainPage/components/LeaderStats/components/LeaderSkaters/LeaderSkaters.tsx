import { FC, useState } from "react"
import { Card, Flex, Segmented, List } from "antd"
import styles from './LeaderSkaters.module.css'
import { Skater } from "../../../../../../types/skaterStatsLeaderCurrentGet"
import { LeaderSkater } from "./LeaderSkater/LeaderSkater"

export const LeaderSkaters: FC = () => {
    const [currentTab, setCurrentTab] = useState('points')
    const skaters: Skater[] = []
    const [skater, setSkater] = useState(skaters[0])

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
                    <Flex vertical>
                        <img src="https://assets.nhle.com/mugs/nhl/20242025/COL/8477492.png" />
                        <div>fjfjjf</div>
                        <LeaderSkater skater={skater}/>
                    </Flex>
                    <Flex>
                        <List>
                            {skaters.map(skater => (
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