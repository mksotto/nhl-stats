import { FC } from "react";
import styles from './Description.module.css'
import { Flex, Typography } from "antd";
import Markdown from "marked-react";
import {PlayerDescription} from "../../../../types/domain/nhl-stats.ts";

type Props = {
    description: PlayerDescription | null;
};

export const Description: FC<Props> = ({description}) => {
    if (!description) return;
    return (
        <Flex vertical align="center">
            <Flex className={styles.title}>BIO</Flex>
            <Typography.Text className={styles.name}>{description.title}</Typography.Text>
            <div className={styles.main}>
                <Typography.Paragraph className={styles.paragraph}><Markdown>{description.biography}</Markdown></Typography.Paragraph>
            </div>
        </Flex>
    )
}