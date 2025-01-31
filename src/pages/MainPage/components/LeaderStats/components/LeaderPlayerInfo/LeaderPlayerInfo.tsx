import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Flex, Image } from "antd";
import { LeaderPlayer } from "../../../../../../types/base";
import {PlayerStatsLeadersCurrentGet} from "../../../../../../types/playerStatsLeadersCurrentGet.ts";
import styles from './LeaderPlayerInfo.module.css'

type Props = {
    player: LeaderPlayer | undefined;
    currentTab: keyof PlayerStatsLeadersCurrentGet
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

    if (player) {
        switch (currentTab) {
            case 'savePctg':
                player.value = player.value && Number(player.value).toFixed(3).replace(/^0\./, '.')
                break
            case 'goalsAgainstAverage':
                player.value = player.value && (Math.round(Number(player.value) * 100) / 100).toFixed(2)
                break
        }
    }

    return (
        <Flex gap={8} align="center" className={styles.container}>
            <Flex gap={8} className={styles.skatersInfo}>
                <Image className={styles.image} src={player?.headshot} />
                <Flex
                    vertical
                    className={styles.skaterDescription}
                    onClick={() => {navigate(`/player/${player?.id}`)}}
                >
                    <Flex className={styles.skaterNames}>
                        <div className={styles.skaterName}>{player?.firstName.default}</div>
                        <div className={styles.skaterName}>{player?.lastName.default}</div>
                    </Flex>
                    <Flex gap={2} className={styles.skaterInfo}>
                        <img className={styles.teamLogo} src={player?.teamLogo} />
                        <div>{player?.teamAbbrev}</div>
                        <div>•</div>
                        <div>{`#${player?.sweaterNumber}`}</div>
                        <div>•</div>
                        <div>{player?.position}</div>
                    </Flex>
                </Flex>
            </Flex>
            <Flex className={styles.points} vertical align="center">
                <div className={styles.pointsName}>{MAP[currentTab]}</div>
                <div className={styles.pointsValue}>{player?.value}</div>
            </Flex>
        </Flex>
    )
}