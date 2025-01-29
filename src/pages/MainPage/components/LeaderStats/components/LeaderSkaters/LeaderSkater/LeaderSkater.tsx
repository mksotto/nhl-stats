import { FC } from "react";
import { Flex, Image } from "antd";
import styles from './leaderSkater.module.css'
import { LeaderPlayer } from "../../../../../../../types/base";
import { SkaterStatsLeadersCurrentGet } from "../../../../../../../types/skaterStatsLeadersCurrentGet";
import { useNavigate } from "react-router-dom";

type Props = {
    skater: LeaderPlayer | undefined;
    currentTab: keyof SkaterStatsLeadersCurrentGet
}

const MAP = {
    points: 'POINTS',
    goals: 'GOALS',
    assists: 'ASSISTS',
    goalsSh: '',
    plusMinus: '',
    goalsPp: '',
    faceoffLeaders: '',
    penaltyMins: '',
    toi: '',
}

export const LeaderSkater: FC<Props> = ({skater, currentTab}) => {

    const navigate = useNavigate()

    return (
        <Flex gap={8} align="center" className={styles.container}>
            <Flex gap={8} className={styles.skatersInfo}>
                <Image className={styles.image} src={skater?.headshot} />
                <Flex
                    vertical
                    className={styles.skaterDescription}
                    onClick={() => {navigate(`/player/${skater?.id}`)}}
                >
                    <Flex className={styles.skaterNames}>
                        <div className={styles.skaterName}>{skater?.firstName.default}</div>
                        <div className={styles.skaterName}>{skater?.lastName.default}</div>
                    </Flex>
                    <Flex gap={2} className={styles.skaterInfo}>
                        <img className={styles.teamLogo} src={skater?.teamLogo} />
                        <div>{skater?.teamAbbrev}</div>
                        <div>•</div>
                        <div>{`#${skater?.sweaterNumber}`}</div>
                        <div>•</div>
                        <div>{skater?.position}</div>
                    </Flex>
                </Flex>
            </Flex>
            <Flex className={styles.points} vertical align="center">
                <div className={styles.pointsName}>{MAP[currentTab]}</div>
                <div className={styles.pointsValue}>{skater?.value}</div>
            </Flex>
        </Flex>
    )
}