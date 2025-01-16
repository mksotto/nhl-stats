import { FC } from "react";
import { PlayerSpotlightGet } from "../../types/playerSpotlightGet";
import { Flex } from "antd";

type Props = {
    player: PlayerSpotlightGet;
    onClick: React.MouseEventHandler<HTMLElement>
}

export const SearchResult: FC<Props> = ({player, onClick}) => {
   
    return (
        <Flex onClick={onClick}>
            <img src={player.headshot}/> 
            {player.name.default}
            {player.position}
            {player.sweaterNumber}
            {player.teamTriCode}
            {/* <img src={player.teamLogo} /> */}
        </Flex>
    )
} 