import {FC, useEffect, useState} from "react";
import { Card, Flex, Tabs, TabsProps } from "antd";
import { LeaderPlayerInfo } from "./LeaderPlayerInfo/LeaderPlayerInfo.tsx";
import { PlayersListItem } from "./PlayersListItem/PlayersListItem.tsx";
import styles from './LeaderPlayers.module.css';
import {usePlayersLeaders} from "../../../../../../queries/players/usePlayersLeaders.ts";
import {Leader, Leaders} from "../../../../../../types/domain/nhl-stats.ts";

type CurrentTab = keyof Leaders;

type Props = {
    skater?: boolean,
    goalie?: boolean,
};

const getItems = (skater: boolean | undefined, goalie: boolean | undefined) => {
    if (skater) {
        return [
            {key: 'points', label: 'Points'},
            {key: 'goals', label: 'Goals'},
            {key: 'assists', label: 'Assists'},
        ];
    }
    if (goalie) {
        return [
            {key: 'goalsAgainstAverage', label: 'GAA'},
            {key: 'savePctg', label: 'SV%'},
            {key: 'shutouts', label: 'Shutouts'},
        ];
    }
    return [];
};

const getTitle = (skater: boolean | undefined, goalie: boolean | undefined) => {
    if (skater) {
        return 'Skater';
    }
    if (goalie) {
        return 'Goalie';
    }
};

export const LeaderPlayers: FC<Props> = ({skater, goalie}) => {
    const items: TabsProps['items'] = getItems(skater, goalie);
    const [currentTab, setCurrentTab] = useState<CurrentTab>(items[0].key  as CurrentTab);
    const {data: leaders, isLoading: isLeadersLoading} = usePlayersLeaders();
    const [player, setPlayer] = useState<Leader>();
    const [listItemId, setListItemId] = useState(0);
    const handleTabChange = (activeKey: CurrentTab) => {
        setCurrentTab(activeKey);
        setPlayer(leaders?.[activeKey][listItemId]);
    };
    useEffect(() => {
        setPlayer(leaders?.[currentTab][0]);
    }, [leaders]);
    return (
        <Card title={<a href='/' className={styles.title}>{getTitle(skater, goalie)}</a>} loading={isLeadersLoading}>
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
                    {leaders?.[currentTab].map((leader, key) => (
                        <PlayersListItem
                            key={leader.id}
                            onMouseEnter={() => {setPlayer(leader); setListItemId(key)}}
                            player={leader}
                            keyOfItem={key+1}
                            active={player?.id === leader.id}
                        />
                    ))}
                </Flex>
            </Flex>
        </Card>
    );
};