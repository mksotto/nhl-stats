import { FC, useEffect, useState } from "react"
import { Card, Flex, Segmented, List } from "antd"
import { GoalieStatsLeadersCurrentGet } from "../../../../../../types/goalieStatsLeadersCurrentGet"
import { goalieStatsLeadersCurrentGet } from "../../../../../../api/goalieStatsLeadersCurrentGet"
import styles from './LeaderGolaies.module.css'
import { LeaderGoalie } from "./LeaderGoalie/LeaderGoalie"

export const LeaderGoalies: FC = () => {
    const [currentTab, setCurrentTab] = useState('goalsAgainstAverage')
    const [goalies, setGoalies] =  useState<GoalieStatsLeadersCurrentGet>()
    useEffect(() => {
        try {
            goalieStatsLeadersCurrentGet().then(r => setGoalies(r.payload))
        } catch (e) {
            console.error(e)
        }
    }, [])

    
    
    
    const [goalie, setGoalie] = useState(goalies?.shutouts[0])
    
    return (
        <>
            <Card title={<a href='/' className={styles.title}>Goalies</a>}>
                <Flex>
                    <Segmented 
                        options={[
                            {value: 'goalsAgainstAverage', label: 'GAA'},
                            {value: 'savePctg', label: 'SV %'},
                            {value: 'shutouts', label: 'Shutouts'},
                        ]}
                        value={currentTab}
                        onChange={setCurrentTab}
                    />
                </Flex>
                <Flex>
                    <Flex vertical  className={styles.width}>
                        <LeaderGoalie goalie={goalie}/>
                    </Flex>
                    <Flex  className={styles.width}>
                        <List>
                            {goalies?.shutouts.map(goalie => (
                                <List.Item key={goalie.id} onMouseEnter={() => setGoalie(goalie)}>
                                    {goalie.firstName.default}
                                </List.Item>
                            ))}
                        </List>
                    </Flex>
                </Flex>
            </Card>
        </>
    )
}