import {Card, Flex} from "antd";
import { FC } from "react";
import styles from './PlayerPage.module.css'
import { useParams } from "react-router-dom";
import { PlayerCharacteristics } from "./components/PlayerCharacteristics/PlayerCharacteristics";
import { FeaturedStats } from "./components/FeaturedStats/FeaturedStats";
import { CardTitle } from "./components/CardTitle/CardTitle";
import { Last5Games } from "./components/Last5Games/Last5Games";
import { Stats } from "./components/Stats/Stats";
import { Description } from "./components/Description/Description";
import {useIsExtraLarge, useIsLarge, useIsMobile} from "../../hooks/mediaCheckers.ts";
import {usePlayersId} from "../../queries/players/usePlayersId.ts";

export const PlayerPage: FC = () => {
    const {id} = useParams();
    const {data: player, isLoading: isPlayerLoading} = usePlayersId(Number(id));

    const isMobile = useIsMobile();
    const isLarge = useIsLarge();
    const isExtraLarge = useIsExtraLarge();

    const headshot = <img src={player?.headshot} alt='Player headshot' className={styles.headShot}/>;

    return (
        <Flex justify="center">
            <Card className={styles.layout} title={(isLarge && <CardTitle/>)} loading={isPlayerLoading}>
                <Flex vertical gap={24} align='center'>
                    <Flex style={{backgroundImage: `url(${player?.heroImage})`}} className={styles.heroImage}>
                        {!isMobile ? <Flex className={styles.playerDescription}>
                            <Flex className={styles.playerInfo}>
                                {headshot}
                                <Flex gap={16} vertical style={{width: '100%'}}>
                                    {!isLarge && <CardTitle/>}
                                    <PlayerCharacteristics/>
                                </Flex>
                            </Flex>
                            {isExtraLarge && <FeaturedStats/>}
                        </Flex> : ' '}
                    </Flex>
                    {isMobile && headshot}
                    {isMobile && <CardTitle/>}
                    {!isExtraLarge && <FeaturedStats/>}
                    <Last5Games/>
                    <Stats/>
                    <Description/>
                </Flex>
            </Card>
        </Flex>
    )
}