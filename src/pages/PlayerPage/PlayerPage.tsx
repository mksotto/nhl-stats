import {Card, Flex, Spin} from "antd";
import { FC } from "react";
import styles from './PlayerPage.module.css'
import { useParams } from "react-router-dom";
import { PlayerCharacteristics } from "./components/PlayerCharacteristics/PlayerCharacteristics";
import { FeaturedStats } from "./components/FeaturedStats/FeaturedStats";
import { CardTitle } from "./components/CardTitle/CardTitle";
import { Last5Games } from "./components/Last5Games/Last5Games";
import { Stats } from "./components/Stats/Stats";
import { Description } from "./components/Description/Description";
import { usePlayerPlayerIdLanding } from "../../queries/usePlayerPlayerIdLanding";
import {useIsExtraLarge, useIsLarge, useIsMobile} from "../../hooks/mediaCheckers.ts";
import {LoadingOutlined} from "@ant-design/icons";
import {useContentEnUsPlayers} from "../../queries/useContentEnUsPlayers.ts";


export const PlayerPage: FC = () => {
    
    const playerId = Number(useParams().playerId);
    const {data: player} = usePlayerPlayerIdLanding(playerId);
    const {data: description} = useContentEnUsPlayers(playerId);

    const isMobile = useIsMobile()
    const isLarge =  useIsLarge();
    const isExtraLarge = useIsExtraLarge()

    return (
        <Flex justify="center">
            <Card className={styles.layout} title={(isLarge && <CardTitle player={player} playerId={playerId} />)}>
                <Flex vertical gap={24} align='center'>
                    <Flex style={{backgroundImage: `url(${player?.heroImage})`}} className={styles.heroImage}>
                        {!isMobile ? <Flex className={styles.playerDescription}>
                            <Flex className={styles.playerInfo}>
                                <img src={player?.headshot} className={styles.headShot}/>
                                <Flex gap={16} vertical style={{width: '100%'}}>
                                    {!isLarge && <CardTitle player={player}/>}
                                    <PlayerCharacteristics player={player}/>
                                </Flex>
                            </Flex>
                            {isExtraLarge && player ? <FeaturedStats player={player}/> :
                                <Spin indicator={<LoadingOutlined spin/>} size="large"/>}
                        </Flex> : ' '}
                    </Flex>
                    {isMobile && <img src={player?.headshot} className={styles.headShot}/>}
                    {isMobile && <CardTitle player={player}/>}
                    {!isExtraLarge && player && <FeaturedStats player={player}/>}
                    {player && <Last5Games player={player}/>}
                    {player && <Stats player={player} playerId={playerId}/>}
                    {description?.items[0] && <Description description={description}/>}
                </Flex>
            </Card>
        </Flex>
    )
}