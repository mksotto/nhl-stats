import { FC } from "react";
import { PlayerPlayerIdLandingGet } from "../../../../types/playerPlayerIdLandingGet";
import { Flex } from "antd";
import dayjs from "dayjs";
import styles from './PlayerCharacteristics.module.css';


type Props = {
    player: PlayerPlayerIdLandingGet | undefined
}

export const PlayerCharacteristics: FC<Props> = ({player}) => {

    return (
        <Flex vertical className={styles.playerCharacteristics}>
            <Flex gap={8}>
                <div className={styles.playerCharacteristicKey}>Height:</div>
                <div>{`${player?.heightInCentimeters} cm`}</div>
            </Flex>
            <Flex gap={8}>
                <div className={styles.playerCharacteristicKey}>Weight:</div>
                <div>{`${player?.weightInKilograms} kg`}</div>
            </Flex>
            <Flex gap={8}>
                <div className={styles.playerCharacteristicKey}>Birthdate:</div>
                <div>{`${(player?.birthDate ? dayjs(player?.birthDate).format('DD MMMM YYYY') : '')}`} (Age:&nbsp;{`${(player?.birthDate ? new Date(Date.now() - Date.parse(player?.birthDate)).getFullYear() - 1970 : '')}`})</div>
            </Flex>
            <Flex gap={8}>
                <div className={styles.playerCharacteristicKey}>Birthplace:</div>
                <div>{`${player?.birthCity?.default}, ` + (player?.birthStateProvince ? `${player?.birthStateProvince.default}, ` : '') + `${player?.birthCountry}`}</div>
            </Flex>
            <Flex gap={8}>
                <div className={styles.playerCharacteristicKey}>Draft:</div>
                <div>{(player?.draftDetails ? `${player?.draftDetails?.year}, ${player?.draftDetails?.teamAbbrev} (${player?.draftDetails?.overallPick} overall), ${player?.draftDetails?.round} round, ${player?.draftDetails?.pickInRound} pick` : 'Undrafted')}</div>
            </Flex>
        </Flex>
    )
}