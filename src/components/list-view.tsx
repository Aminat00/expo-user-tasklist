import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { colors } from "theme";

export const ListView = () => {
	return (
		<View style={listViewStyle.container}>
			<Text style={listViewStyle.heading}>This Week</Text>
		</View>
	);
};

const listViewStyle = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		backgroundColor: colors.lightGray,
	},
	heading: {
		fontSize: 16,
		lineHeight: 28,
		fontWeight: "700",
		color: colors.textBlue,
	},
});
