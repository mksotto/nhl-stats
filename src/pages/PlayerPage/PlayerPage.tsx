import { Card, Flex } from "antd";
import { FC, useEffect, useState } from "react";
import styles from './PlayerPage.module.css'
import { useParams } from "react-router-dom";
import { PlayerCharacteristics } from "./components/PlayerCharacteristics/PlayerCharacteristics";
import { FeaturedStats } from "./components/FeaturedStats/FeaturedStats";
import { CardTitle } from "./components/CardTitle/CardTitle";
import { Last5Games } from "./components/Last5Games/Last5Games";
import { Stats } from "./components/Stats/Stats";
import { Description } from "./components/Description/Description";
import { usePlayerPlayerIdLanding } from "../../queries/usePlayerPlayerIdLanding";


export const PlayerPage: FC = () => {
    
    const playerId = Number(useParams().playerId);
    const {data: player} = usePlayerPlayerIdLanding(playerId)

    return (
        <Flex justify="center">
            <Card className={styles.layout} title={(<CardTitle player={player} playerId={playerId} />)}>
                <Flex vertical gap={24}>
                    <Flex style={{backgroundImage: `url(${player?.heroImage})`}} className={styles.heroImage}>
                        <Flex className={styles.playerDescription}>
                            <Flex className={styles.playerInfo}>
                                <img src={player?.headshot} className={styles.headShot} />
                                <PlayerCharacteristics player={player} />
                            </Flex>
                            {player && <FeaturedStats player={player} />}
                        </Flex>
                    </Flex>
                    {player && <Last5Games player={player} />}
                    {player && <Stats player={player} playerId={playerId} />}
                    <Description playerId={playerId} />
                </Flex>
            </Card>
        </Flex>
    )
}