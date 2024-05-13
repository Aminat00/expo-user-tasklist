import { StyleSheet, Text, View } from "react-native";
import React from "react";

export const ActivityScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Activity</Text>
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
});
