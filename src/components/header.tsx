import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { RoundedImage } from "./rounded-image";
import { profileImg } from "assets";
import { colors } from "theme";
import { Search } from "icons";

export const Header: React.FC = () => {
	return (
		<View style={headerStyle.row}>
			<View style={headerStyle.leftColumn}>
				<RoundedImage source={profileImg} />
				<View style={headerStyle.textSection}>
					<Text style={headerStyle.headingTxt}>My Tasks</Text>
					<Text style={headerStyle.descriptionTxt}>120 Total Task</Text>
				</View>
			</View>
			<View style={headerStyle.rightColumn}>
				<Search color="cool" />
				<Text style={headerStyle.searchTxt}>Search</Text>
			</View>
		</View>
	);
};

export const headerStyle = StyleSheet.create({
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	leftColumn: {
		flexDirection: "row",
		gap: 7,
		justifyContent: "center",
	},
	rightColumn: {
		flexDirection: "row",
		gap: 10,
	},
	textSection: {
		flexDirection: "column",
	},
	headingTxt: {
		fontSize: 24,
		lineHeight: 35,
		fontWeight: "800",
		color: colors.textBlue,
	},
	descriptionTxt: {
		fontSize: 16,
		lineHeight: 24,
		fontWeight: "700",
		color: colors.violet,
	},
	searchTxt: {
		fontSize: 16,
		lineHeight: 20,
		fontWeight: "700",
		color: colors.cool,
	},
});
