import { FC } from "react";
import styles from './Description.module.css'
import { Flex, Typography } from "antd";
import Markdown from "marked-react";
import { ContentEnUsPlayersGet } from "../../../../types/contentEnUsPlayersGet";

type Props = {
    description: ContentEnUsPlayersGet
}

const editedDescription = (description?: string) => {

    return description?.split('\n\n')
}

export const Description: FC<Props> = ({description}) => {

    return (
        <Flex vertical align="center">
            <Flex className={styles.title}>BIO</Flex>
            <Typography.Text className={styles.name}>{description.items[0].tags[0].title}</Typography.Text>
            <div className={styles.main}>{editedDescription(description.items[0].fields.biography)?.map((p) => (
                    <Typography.Paragraph className={styles.paragraph}><Markdown>{p}</Markdown></Typography.Paragraph>
                ))}
            </div>
        </Flex>
        
    )
}