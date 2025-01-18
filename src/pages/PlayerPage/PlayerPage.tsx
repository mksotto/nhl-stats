import { Card, Flex } from "antd";
import { FC, useEffect, useState } from "react";
import { playerPlayerIdLandingGet } from "../../api/api-web.nhle/playerPlayerIdLandingGet";
import { PlayerPlayerIdLandingGet } from "../../types/playerPlayerIdLandingGet";
import styles from './PlayerPage.module.css'

type Props = {
    playerId: number;
}

export const PlayerPage: FC/*<Props>*/ = (/*{playerId}*/) => {
    const [player, setPlayer] = useState<PlayerPlayerIdLandingGet>()
    useEffect(() => {
        try {
            playerPlayerIdLandingGet(8471675).then(r => setPlayer(r))
        } catch (e) {
            console.error(e)
        }
    })
    
    return (
        <Flex justify="center">
            <Card className={styles.layout} title={`${player?.firstName.default} ${player?.lastName.default} ${player?.sweaterNumber}`}>
                <img src={player?.heroImage} className={styles.heroImage} />
                <Flex align="center">
                    <img src={player?.headshot} className={styles.headShot}/>
                    <Flex vertical className={styles.playerCharacteristics}>
                        <div>{`Height: ${player?.heightInCentimeters} cm`}</div>
                        <div>{`Weight: ${player?.weightInKilograms} kg`}</div>
                        <div>{`Birthdate: ${player?.birthDate}`}</div>
                        <div>{`Birthplace: ${player?.birthCity?.default}, ` + (player?.birthStateProvince && `${player?.birthStateProvince.default}, `) + `${player?.birthCountry}`}</div>
                        <div>{`Draft: ${player?.draftDetails?.year}, ${player?.draftDetails?.teamAbbrev} (${player?.draftDetails?.overallPick} overall), ${player?.draftDetails?.round} round, ${player?.draftDetails?.pickInRound} pick`}</div>
                    </Flex>
                </Flex>
                <div>
                    <div>
                        <div>{`${player?.featuredStats?.season} Season`}</div>
                        <div>{`${player?.featuredStats?.regularSeason.subSeason.gamesPlayed}`}</div>
                        <div>{`${player?.featuredStats?.regularSeason.subSeason.goals}`}</div>
                        <div>{`${player?.featuredStats?.regularSeason.subSeason.assists}`}</div>
                        <div>{`${player?.featuredStats?.regularSeason.subSeason.points}`}</div>
                        <div>{`${player?.featuredStats?.regularSeason.subSeason.plusMinus}`}</div>
                    </div>
                    <div>
                        <div>{'Career'}</div>
                        <div>{`${player?.featuredStats?.regularSeason.career.gamesPlayed}`}</div>
                        <div>{`${player?.featuredStats?.regularSeason.career.goals}`}</div>
                        <div>{`${player?.featuredStats?.regularSeason.career.assists}`}</div>
                        <div>{`${player?.featuredStats?.regularSeason.career.points}`}</div>
                        <div>{`${player?.featuredStats?.regularSeason.career.plusMinus}`}</div>
                    </div>
                </div>
            </Card>
        </Flex>
    )
}