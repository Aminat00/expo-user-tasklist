import { StyleSheet, Text, View } from "react-native";
import React from "react";

export const HomeScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Home</Text>
			<View style={styles.separator} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
});
