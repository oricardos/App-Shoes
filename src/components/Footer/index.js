import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Shoes from "../Shoes";

export default function Footer() {
    return (
        <View>
        <Text style={styles.text}>VOCÊ TAMBÉM PODE GOSTAR</Text>
        <View style={{ flexDirection: "row", marginBottom: 30 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={{ marginHorizontal: 10}}>
                    <Shoes
                        img={require("../../assets/1.png")}
                        cost="R$159,90"
                        onClick={() => navigation.navigate("Detail")}
                    >
                        AIR FORCE 1
                    </Shoes>
                </View>
                
                <View style={{ marginHorizontal: 10}}>
                    <Shoes
                        style={{ marginHorizontal: 10}}
                        img={require("../../assets/2.png")}
                        cost="R$135,90"
                        onClick={() => navigation.navigate("Detail")}
                    >
                        Nike Air Max
                    </Shoes>
                </View>

                <View style={{ marginHorizontal: 10}}>
                    <Shoes 
                        img={require('../../assets/3.png')} 
                        cost="R$279,90"
                        onClick={() => navigation.navigate("Detail")}
                        >
                            GALAXY 5 Running
                    </Shoes>
                </View>
                
                
            </ScrollView>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "Anton_400Regular",
        paddingHorizontal: "2%",
        fontSize: 22,
        marginVertical: '5%'
    },
});
