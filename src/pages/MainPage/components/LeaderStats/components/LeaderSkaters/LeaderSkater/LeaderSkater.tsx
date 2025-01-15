import { FC } from "react";
import { Flex, Image } from "antd";
import styles from './leaderSkater.module.css'
import { LeaderPlayer } from "../../../../../../../types/base";
import { SkaterStatsLeadersCurrentGet } from "../../../../../../../types/skaterStatsLeadersCurrentGet";

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

    return (
        <>
            <Flex gap={8} align="center" className={styles.container}>
                <Flex gap={8} className={styles.skatersInfo}>
                    <Image className={styles.image} src={!skater ? "https://assets.nhle.com/mugs/nhl/20242025/COL/8477492.png" : skater.headshot} />
                    <Flex vertical className={styles.skaterDescription}>
                        <Flex className={styles.skaterNames}>
                            <div className={styles.skaterName}>{!skater ? 'Nikita' : skater.firstName.default}</div>
                            <div className={styles.skaterName}>{!skater ? 'Kucherov' : skater.lastName.default}</div>
                        </Flex>
                        <Flex gap={2} className={styles.skaterInfo}>
                            <Image className={styles.teamLogo} src={!skater ? "https://assets.nhle.com/logos/nhl/svg/MTL_light.svg" : skater.teamLogo} />
                            <div>{!skater ? 'FLA' : skater.teamAbbrev}</div>
                            <div>•</div>
                            <div>{`#${!skater ? '26' : skater.sweaterNumber}`}</div>
                            <div>•</div>
                            <div>{!skater ? 'D' : skater.position}</div>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex className={styles.points} vertical align="center">
                    <div className={styles.pointsName}>{MAP[currentTab]}</div>
                    <div className={styles.pointsValue}>{!skater ? '68' : skater.value}</div>
                </Flex>
            </Flex>
        </>
    )
}