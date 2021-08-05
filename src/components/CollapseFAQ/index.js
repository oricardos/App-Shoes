import React from 'react';
import {Text} from 'react-native';
import {ListItem} from "react-native-elements";

export default function CollapseFAQ({ title, text }) {
    const [expanded, setExpanded] = React.useState(false);

    return (
        <>
            <ListItem.Accordion
                content={
                    <>
                        <ListItem.Content>
                            <ListItem.Title><Text>{title}</Text></ListItem.Title>
                        </ListItem.Content>
                    </>
                }
                isExpanded={expanded}
                onPress={() => {
                    setExpanded(!expanded);
                }}
            >
                <ListItem>
                    <ListItem.Content>
                        <ListItem.Subtitle>
                            <Text>
                                {text}
                            </Text>
                        </ListItem.Subtitle>
                    </ListItem.Content>
                    <ListItem.Chevron/>
                </ListItem>
            </ListItem.Accordion>
        </>
    )
};