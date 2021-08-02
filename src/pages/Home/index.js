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

import { Button, Menu, Divider, Provider, TextInput } from "react-native-paper";

import Shoes from "../../component/Shoes";
import LatestStories from "../../component/LatestStories";

export default function Home() {
	return (
		<Provider>
			<ScrollView style={styles.container}>
				{/* text */}
				<View style={styles.textContainer}>
					<Text style={styles.text}>
						Discover
					</Text>
					<Text style={[styles.text],{fontSize: 18, color: '#ccc'}}>
						Monday, 31 May
					</Text>
				</View>

				{/* Latest stories */}
				<View style={{ marginTop: 50}}>
					<Text style={styles.titleSection}>
							Latest stories
					</Text>
				</View>
				<View style={{ flexDirection: "row", marginBottom: 30, marginTop: 10 }}>
        			<ScrollView horizontal showsHorizontalScrollIndicator={false} >
						<LatestStories />
						<LatestStories />
						<LatestStories />
						<LatestStories />
					</ScrollView>
				</View>

				{/* Main img */}
				<View style={styles.img}>

				</View>

				{/* news */}
				<View>
					<Text style={styles.titleSection}>
						What's new
					</Text>
					<Text style={{ fontSize: 35, color: '#ccc' }}>
						The latest arrivals from Nike
					</Text>
				</View>
				<View style={{ flexDirection: "row", marginBottom: 30, marginTop: 10 }}>
					<ScrollView horizontal showsHorizontalScrollIndicator={false} >
						<Shoes />
						<Shoes />
						<Shoes />
						<Shoes />
					</ScrollView>
				</View>

				<View style={styles.img}>

				</View>


			</ScrollView>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		backgroundColor: "#FFF",
		paddingHorizontal: "3%",
	},
	textContainer: {
		marginTop: "20%",
		
	},
	text: {
		color: '#000',
		fontSize: 26,
		marginBottom: "3%"
	},
	section: {
		marginVertical: "20%"
	},
	titleSection: {
		fontSize: 18,
		fontWeight: 'bold'
	},
	img: {
		height: 400,
		width: '100%',
		backgroundColor: 'red',
		marginVertical: "20%"
	}
});
