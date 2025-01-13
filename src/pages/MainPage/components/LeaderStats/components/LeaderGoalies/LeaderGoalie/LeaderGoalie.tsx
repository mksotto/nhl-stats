import { FC } from "react";
import { LeaderPlayer } from "../../../../../../../types/base";
import { Flex, Image } from "antd";
import styles from './LeaderGoalie.module.css'

type Props = {
    goalie: LeaderPlayer | undefined
}

export const LeaderGoalie: FC<Props> = ({goalie}) => {


    return (
        <>
            <Flex vertical gap={8} align="center">
                {/* <div className={styles.circle} /> */}
                <Image className={styles.circle} width={128} height={128} src={!goalie ? "https://assets.nhle.com/mugs/nhl/20242025/COL/8477492.png" : goalie.headshot} />
                <Flex vertical align="center" className={styles.goalieNames}>
                    <div className={styles.goalieName}>{!goalie ? 'Nikita' : goalie.firstName.default}</div>
                    <div className={styles.goalieName}>{!goalie ? 'Kucherov' : goalie.lastName.default}</div>
                </Flex>
                <Flex gap={2}>
                    <Image className={styles.teamLogo} height={22} src={!goalie ? "https://assets.nhle.com/logos/nhl/svg/MTL_light.svg" : goalie.teamLogo} />
                    <div>{!goalie ? 'FLA' : goalie.teamAbbrev}</div>
                    <div>•</div>
                    <div>{`#${!goalie ? '26' : goalie.sweaterNumber}`}</div>
                    <div>•</div>
                    <div>{!goalie ? 'D' : goalie.position}</div>
                </Flex>
                <Flex className={styles.points} vertical align="center">
                    <div className={styles.pointsName} >POINTS</div>
                    <div className={styles.pointsValue} >{!goalie ? '68' : goalie.value}</div>
                </Flex>
            </Flex>
        </>
    )
}