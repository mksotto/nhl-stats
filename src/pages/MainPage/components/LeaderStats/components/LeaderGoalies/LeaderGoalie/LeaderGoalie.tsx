import { FC } from "react";
import { LeaderPlayer } from "../../../../../../../types/base";
import { Flex, Image } from "antd";
import styles from './LeaderGoalie.module.css'

const formatNumber = (num: number) => num.toFixed(3).replace(/^0\./, '.');

// сделать проп один из трех валуе, пихать проп в формат намбер, и в зависимости от него делать че надо

type Props = {
    goalie: LeaderPlayer | undefined;
    removeZero: boolean;
}

export const LeaderGoalie: FC<Props> = ({goalie, removeZero}) => {


    return (
        <Flex vertical gap={8} align="center" justify="center">
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
                <div className={styles.pointsValue} >{!goalie ? '68' : (removeZero ? formatNumber(goalie.value) : goalie.value )}</div>
            </Flex>
        </Flex>
    )
}