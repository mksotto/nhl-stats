import { FC, useEffect, useState } from "react"
import { Card, Flex, Segmented, List } from "antd"
import { GoalieStatsLeadersCurrentGet } from "../../../../../../types/goalieStatsLeadersCurrentGet"
import { goalieStatsLeadersCurrentGet } from "../../../../../../api/api-web.nhle/goalieStatsLeadersCurrentGet"
import styles from './LeaderGolaies.module.css'
import { LeaderGoalie } from "./LeaderGoalie/LeaderGoalie"
import { PlayerItem } from "../../../../../../components/PlayerItem/PlayerItem"

type CurrentTab = keyof GoalieStatsLeadersCurrentGet

export const LeaderGoalies: FC = () => {
    const [currentTab, setCurrentTab] = useState<CurrentTab>('goalsAgainstAverage')
    const [goalies, setGoalies] =  useState<GoalieStatsLeadersCurrentGet>()
    useEffect(() => {
        try {
            goalieStatsLeadersCurrentGet().then(r => setGoalies(r))
        } catch (e) {
            console.error(e)
        }
    }, [])

    // console.log(goalies)

    // goalies!.goalsAgainstAverage = goalies!.goalsAgainstAverage.map((goalie) => goalie.value = Math.round(goalie.value * 100) / 100)
    

    const [goalie, setGoalie] = useState(goalies?.[currentTab][0])
    
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
                    <Flex vertical justify="center" className={styles.width}>
                        <LeaderGoalie goalie={goalie} removeZero={currentTab === 'savePctg'} />
                    </Flex>
                    <Flex  className={styles.width}>
                        <List className={styles.goaliesTable}>
                            {goalies?.[currentTab].map((goalie, key) => (
                                <List.Item key={goalie.id} onMouseEnter={() => setGoalie(goalie)} className={styles.listItem}>
                                    <PlayerItem 
                                        player={goalie} 
                                        keyOfItem={key+1}
                                        // onMouseEnter={() => {setGoalie(player); setGoalieId(key)}} 
                                        // active={skater?.id === player.id}
                                    />
                                </List.Item>
                            ))}
                        </List>
                    </Flex>
                </Flex>
            </Card>
        </>
    )
}