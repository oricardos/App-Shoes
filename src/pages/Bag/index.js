import React from "react";
import { ScrollView, Text, Image, StyleSheet, View } from "react-native";
import PageTitle from "../../components/PageTitle";

import { List } from 'react-native-paper';

export default function Bag() {

    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);


  return (
    <ScrollView style={styles.container}>
        <PageTitle title="Bag" />
        <View style={styles.slides}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.slide}>
                <Text style={styles.textPrimary}>Worry-free Returns</Text>
                <Text style={styles.textSecondary}>
                Members, get free 60-day returns.
                </Text>
            </View>
            <View style={styles.slide}>
                <Text style={styles.textPrimary}>Worry-free Returns</Text>
                <Text style={styles.textSecondary}>
                Members, get free 60-day returns.
                </Text>
            </View>
            </ScrollView>
        </View>

        <View style={styles.shoe}>
        <List.Section title="Accordions">
            <List.Accordion
                title="Qty"
                left={props => <List.Icon {...props} icon="folder" />}>
                <List.Item title="1" />
                <List.Item title="2" />
            </List.Accordion>
        </List.Section>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFF",
    paddingHorizontal: "3%",
  },
  slides: {
    borderRadius: 4,
    flexDirection: "row",
    backgroundColor: "#F6F6F6",
    paddingHorizontal: "5%",
    paddingVertical: "5%",
  },
  slide: {
    width: "60%",
    marginRight: 1,
  },
  textPrimary: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: 5,
  },
  textSecondary: {
    fontSize: "1.2rem",
  },
  image: {
    width: "100%",
    marginVertical: "15%",
  },
});
