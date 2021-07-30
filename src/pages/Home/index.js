import React from "react";
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	Image,
	TouchableOpacity,
	Touchable,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { Button, Menu, Divider, Provider } from "react-native-paper";

import Shoes from "../../component/Shoes";

export default function Home() {
	const navigation = useNavigation();

	const [visible, setVisible] = React.useState(false);
	const openMenu = () => setVisible(true);
	const closeMenu = () => setVisible(false);
	return (
		<Provider>
				<View style={styles.container}>
                    <View style={styles.header}>
						<Image
								source={require("../../assets/banner.png")}
								style={styles.image}
						/>

						<View style={styles.textContainer}>
								<Text style={styles.text}>TÊNIS</Text>
								<Text style={[styles.text, { color: "#DDD", fontSize: 16, alignSelf: 'center' }]}>◉</Text>
								<Text style={[styles.text, { color: "#DDD" }]}>MASCULINO</Text>

								<TouchableOpacity
								style={{ position: "absolute", right: 0, alignSelf: "center" }}
								>
										<Menu
										visible={visible}
										onDismiss={closeMenu}
										anchor={<Button onPress={openMenu}>
												<MaterialIcons name="menu" size={24} color="#000" />
										</Button>}
								>
										
										<Menu.Item onPress={() => navigation.navigate('Ouvir')} title="Ouvir" />
										<Menu.Item onPress={() => navigation.navigate('Perfil')} title="Perfil" />
										<Divider />
										<Menu.Item onPress={() => {}} title="Sneakers" />
								</Menu>
								
								</TouchableOpacity>
                        </View> 
                    </View>

						<View style={styles.line} />

						<ScrollView>
						<Text
								style={[
								styles.text,
								{ paddingHorizontal: "3%", paddingBottom: "3%" },
								]}
						>
								LANÇAMENTOS
						</Text>

						<View
								style={{ flexDirection: "row", justifyContent: "space-around" }}
						>
								<Shoes
								img={{ uri: 'https://images.lojanike.com.br/768x768/produto/tenis-nike-sb-dunk-high-pro-unissex-DB1640-001-1-11624383716.jpg'}}
								cost="R$ 699,99"
								onClick={() => navigation.navigate("Detail")}
								>
								MAIZE AND BLACK
								</Shoes>
								<Shoes
								img={require("../../assets/2.png")}
								cost="R$135,90"
								onClick={() => navigation.navigate("Detail")}
								>
								Nike Air Max
								</Shoes>
						</View>
						<View
								style={{ flexDirection: "row", justifyContent: "space-around" }}
						>
								<Shoes img={require("../../assets/3.png")} cost="R$279,90">
								GALAXY 5 Running
								</Shoes>
								<Shoes img={require("../../assets/4.png")} cost="R$599,90">
								Duramo SL
								</Shoes>
						</View>

						<View
								style={{ flexDirection: "row", justifyContent: "space-around" }}
						>
								<Shoes img={require("../../assets/5.png")} cost="R$279,90">
								NMD 01
								</Shoes>
								<Shoes img={require("../../assets/6.png")} cost="R$169,90">
								Ultraboost
								</Shoes>
						</View>
						</ScrollView>
				</View>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		backgroundColor: "#FFF",
	},
	header: {
		marginBottom: 8,
	},
	image: {
		width: "100%",
	},
	textContainer: {
		flexDirection: "row",
		marginVertical: "5%",
		marginHorizontal: "5%",
	},
	text: {
		fontFamily: "Anton_400Regular",
		fontSize: 26,
		marginHorizontal: "1%",
	},
	line: {
		borderBottomColor: "#D8D8D8",
		borderBottomWidth: 2,
		marginBottom: 20,
	},
});
