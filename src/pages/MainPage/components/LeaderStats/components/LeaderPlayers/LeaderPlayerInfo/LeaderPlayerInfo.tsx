import {FC} from "react";
import { useNavigate } from "react-router-dom";
import { Flex, Image } from "antd";
import styles from './LeaderPlayerInfo.module.css';
import {Leader, Leaders} from "../../../../../../../types/domain/nhl-stats.ts";

type Props = {
    player: Leader;
    currentTab: keyof Leaders;
};

const MAP = {
    points: 'POINTS',
    goals: 'GOALS',
    assists: 'ASSISTS',
    shutouts: 'SHUTOUTS',
    savePctg: 'SV%',
    goalsAgainstAverage: 'GAA',
};

export const LeaderPlayerInfo: FC<Props> = ({player, currentTab}) => {
    const navigate = useNavigate();
    return (
        <Flex gap={8} align="center" className={styles.container}>
            <Flex gap={8} align='center' className={styles.skatersInfo}>
                <Image className={styles.image} src={player.headshot} />
                <Flex
                    vertical
                    className={styles.skaterDescription}
                    onClick={() => {navigate(`/player/${player.id}`)}}
                >
                    <Flex className={styles.skaterNames}>
                        <div className={styles.skaterName}>{player.name}</div>
                    </Flex>
                    <Flex gap={2} className={styles.skaterInfo}>
                        {player.currentTeam?.logo &&
                            <img className={styles.teamLogo} src={player.currentTeam.logo} alt='logo' />}
                        <div>{player.currentTeam?.abbrev}</div>
                        <div>•</div>
                        <div>{`#${player.sweaterNumber}`}</div>
                        <div>•</div>
                        <div>{player.position}</div>
                    </Flex>
                </Flex>
            </Flex>
            <Flex className={styles.points} vertical align="center">
                <div className={styles.pointsName}>{MAP[currentTab]}</div>
                <div className={styles.pointsValue}>{player.value}</div>
            </Flex>
        </Flex>
    )
}