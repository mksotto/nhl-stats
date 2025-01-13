import { FC } from "react";
import { Flex, Image } from "antd";
import styles from './leaderSkater.module.css'
import { LeaderPlayer } from "../../../../../../../types/base";

type Props = {
    skater: LeaderPlayer | undefined
}

export const LeaderSkater: FC<Props> = ({skater}) => {


    return (
        <>
            <Flex vertical gap={8} align="center">
                {/* <div className={styles.circle} /> */}
                <Image className={styles.circle} width={128} height={128} src={!skater ? "https://assets.nhle.com/mugs/nhl/20242025/COL/8477492.png" : skater.headshot} />
                <Flex vertical align="center" className={styles.skaterNames}>
                    <div className={styles.skaterName}>{!skater ? 'Nikita' : skater.firstName.default}</div>
                    <div className={styles.skaterName}>{!skater ? 'Kucherov' : skater.lastName.default}</div>
                </Flex>
                <Flex gap={2}>
                    <Image className={styles.teamLogo} height={22} src={!skater ? "https://assets.nhle.com/logos/nhl/svg/MTL_light.svg" : skater.teamLogo} />
                    <div>{!skater ? 'FLA' : skater.teamAbbrev}</div>
                    <div>•</div>
                    <div>{`#${!skater ? '26' : skater.sweaterNumber}`}</div>
                    <div>•</div>
                    <div>{!skater ? 'D' : skater.position}</div>
                </Flex>
                <Flex className={styles.points} vertical align="center">
                    <div className={styles.pointsName}>POINTS</div>
                    <div className={styles.pointsValue}>{!skater ? '68' : skater.value}</div>
                </Flex>
            </Flex>
        </>
    )
}