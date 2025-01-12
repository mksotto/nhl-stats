import { FC } from "react";
import { Skater } from "../../../../../../../types/skaterStatsLeaderCurrentGet";
import { Flex } from "antd";

type Props = {
    skater: Skater
}

export const LeaderSkater: FC<Props> = ({skater}) => {


    return (
        <>
            <Flex>
                {skater.firstName.default}
            </Flex>
        </>
    )
}