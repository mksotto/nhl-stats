import { FC } from "react";
import { PlayerPlayerIdLandingGet } from "../../../../types/playerPlayerIdLandingGet";
import { Flex, Select } from "antd";
import styles from './CardTitle.module.css'
import { useNavigate } from "react-router-dom";
import {useIsLarge} from "../../../../hooks/mediaCheckers.ts";

type Props = {
    player: PlayerPlayerIdLandingGet | undefined,
    playerId?: number,
}

export const CardTitle: FC<Props> = ({player, playerId}) => {
    const navigate = useNavigate();
    const options = player?.currentTeamRoster?.map((otherPlayer) => ({
        label: `${otherPlayer?.firstName.default} ${otherPlayer?.lastName.default}`, 
        value: otherPlayer?.playerId
    }));

    const isLarge = useIsLarge()

    return (
        <Flex justify="space-between">
            <Flex className={styles.titleContainer}>
                <div className={styles.titlePlayerInfo}>{`${player?.firstName.default} ${player?.lastName.default}`}</div>
                <Flex align='center' gap={8}>
                    {player?.teamLogo && <img src={player?.teamLogo} className={styles.titleTeamLogo}/>}
                    <div className={styles.titlePlayerInfo}>{`#${player?.sweaterNumber}`}</div>
                    <div className={styles.titlePlayerInfo}>{`${player?.position}`}</div>
                </Flex>
            </Flex>
            {isLarge && player?.isActive && (
                <Flex className={styles.titleContainer}>
                    <div>ROSTER</div>
                    <Select
                        showSearch
                        optionFilterProp="label"
                        options={options}
                        defaultValue={playerId}
                        size="large"
                        onChange={(value) => navigate(`/player/${value}`)}
                        style={{ flex: '1 0' }}
                        className={styles.selectRoster}
                    />
                </Flex>
            )}
        </Flex>
    )
}