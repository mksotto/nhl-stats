import { FC } from "react";
import { Flex, Typography } from "antd";
import Markdown from "marked-react";
import styles from './Description.module.css'
import {useParams} from "react-router-dom";
import {usePlayersId} from "../../../../queries/players/usePlayersId.ts";

export const Description: FC = () => {
    const {id} = useParams();
    const {data: player} = usePlayersId(Number(id));
    if (!player?.description) return;
    return (
        <Flex vertical align="center">
            <Flex className={styles.title}>BIO</Flex>
            <Typography.Text className={styles.name}>{player.description.title}</Typography.Text>
            <div className={styles.main}>
                <Typography.Paragraph className={styles.paragraph}><Markdown>{player.description.biography}</Markdown></Typography.Paragraph>
            </div>
        </Flex>
    );
};