import {
	ImageBackground,
	Pressable,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import React from "react";
import { Header, ListView } from "components";
import { StatusBar } from "expo-status-bar";
import { headerBg } from "assets";
import { colors } from "theme";

export const MyTasksScreen = () => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={styles.container}>
				<View style={styles.header}>
					<ImageBackground source={headerBg}>
						<StatusBar style="dark" />
						<Header />
					</ImageBackground>
					<View style={styles.tab}>
						<Pressable style={styles.tabItem}>
							<Text style={styles.tabTxt}>List View</Text>
						</Pressable>
						<Pressable
							style={[styles.tabItem, { backgroundColor: colors.white }]}>
							<Text style={[styles.tabTxt, { color: colors.darkSoul }]}>
								Calendar View
							</Text>
						</Pressable>
					</View>
				</View>
				<ListView />
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	header: {
		flexDirection: "column",
		gap: 16,
		padding: 16,
	},
	tab: {
		backgroundColor: colors.white,
		borderColor: colors.lightGray,
		borderWidth: 1,
		borderRadius: 12,
		flexDirection: "row",
		justifyContent: "space-between",
		padding: 5,
	},
	tabItem: {
		borderRadius: 8,
		backgroundColor: colors.darkSoul,
		paddingHorizontal: 12,
		paddingVertical: 10,
		width: "50%",
	},

	tabTxt: {
		fontSize: 14,
		lineHeight: 20,
		fontWeight: "600",
		color: colors.white,
		textAlign: "center",
	},
});
