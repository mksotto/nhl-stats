import {FC} from "react";
import { useNavigate } from "react-router-dom";
import { Flex, Image } from "antd";
import { LeaderPlayer } from "../../../../../../../types/base.ts";
import {PlayerStatsLeadersGet} from "../../../../../../../types/playerStatsLeadersGet.ts";
import styles from './LeaderPlayerInfo.module.css'
import {curatedPlayer} from "../../../utils/cureatedPlayer.ts";

type Props = {
    player: LeaderPlayer;
    currentTab: keyof PlayerStatsLeadersGet
}

const MAP = {
    points: 'POINTS',
    goals: 'GOALS',
    assists: 'ASSISTS',
    shutouts: 'SHUTOUTS',
    savePctg: 'SV%',
    goalsAgainstAverage: 'GAA',
    goalsSh: '',
    plusMinus: '',
    goalsPp: '',
    faceoffLeaders: '',
    penaltyMins: '',
    toi: '',
    wins: '',
}

export const LeaderPlayerInfo: FC<Props> = ({player, currentTab}) => {

    const navigate = useNavigate();

    const playerModified = curatedPlayer(player, currentTab)
    return (
        <Flex gap={8} align="center" className={styles.container}>
            <Flex gap={8} className={styles.skatersInfo}>
                <Image className={styles.image} src={playerModified.headshot} />
                <Flex
                    vertical
                    className={styles.skaterDescription}
                    onClick={() => {navigate(`/player/${playerModified.id}`)}}
                >
                    <Flex className={styles.skaterNames}>
                        <div className={styles.skaterName}>{playerModified.firstName.default}</div>
                        <div className={styles.skaterName}>{playerModified.lastName.default}</div>
                    </Flex>
                    <Flex gap={2} className={styles.skaterInfo}>
                        <img className={styles.teamLogo} src={playerModified.teamLogo} alt='' />
                        <div>{playerModified.teamAbbrev}</div>
                        <div>•</div>
                        <div>{`#${playerModified.sweaterNumber}`}</div>
                        <div>•</div>
                        <div>{playerModified.position}</div>
                    </Flex>
                </Flex>
            </Flex>
            <Flex className={styles.points} vertical align="center">
                <div className={styles.pointsName}>{MAP[currentTab]}</div>
                <div className={styles.pointsValue}>{playerModified.value}</div>
            </Flex>
        </Flex>
    )
}