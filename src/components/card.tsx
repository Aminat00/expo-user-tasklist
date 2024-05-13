import React from "react";
import { StyleSheet, View, Text, Platform } from "react-native";
import { CardType } from "./types";
import { colors } from "theme";
import { LinearGradient } from "expo-linear-gradient";
import { Flag } from "icons";
import { CompleteBtn } from "./complete-btn";

type CarProps = {
	cardType: CardType;
	date: string;
	title: string;
	description: string;
	label?: string;
};

const statusMap: Record<CardType, { text: string; color: string }> = {
	[CardType.pending]: { text: "Waiting for Approval", color: colors.darkRed },
	[CardType.inProgress]: { text: "In-Progress", color: colors.yellow },
	[CardType.completed]: { text: "Completed and Approved", color: colors.green },
};

export const Card: React.FC<CarProps> = ({
	cardType,
	title,
	description,
	label,
	date,
}) => {
	const { text: statusText, color: statusColor } = statusMap[cardType];
	const newDate = new Date(date);
	const monthAbbrev = newDate
		.toLocaleDateString("en-US", { month: "short" })
		.toUpperCase();

	const dayOfMonth = newDate.toLocaleDateString("en-US", { day: "2-digit" });

	const dayOfWeekAbbrev = newDate
		.toLocaleDateString("en-US", { weekday: "short" })
		.toUpperCase();
	return (
		<View
			style={[
				cardStyle.card,
				{ opacity: cardType !== CardType.inProgress ? 0.6 : 1 },
			]}>
			<Text style={[cardStyle.status, { color: statusColor }]}>
				{` \u25CF ${statusText.toUpperCase()}`}
			</Text>
			<View style={{ flexDirection: "row", gap: 16, alignItems: "flex-start" }}>
				<View style={cardStyle.dateViewContainer}>
					<LinearGradient
						colors={["rgba(238, 240, 242, 1)", "rgba(255, 255, 255, 0)"]}
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 1 }}
						style={cardStyle.dateView}>
						<Text style={cardStyle.dateTxt}>{monthAbbrev}</Text>
						<Text style={cardStyle.dateTxt}>{dayOfMonth}</Text>
						<Text style={[cardStyle.dateTxt, { fontWeight: "500" }]}>
							{dayOfWeekAbbrev}
						</Text>
					</LinearGradient>
				</View>
				<View style={{ flexDirection: "column", flex: 1, gap: 10 }}>
					<View>
						<Text style={cardStyle.title}>{title}</Text>
						<Text style={cardStyle.description}>{description}</Text>
					</View>
					<View
						style={{ flexDirection: "row", justifyContent: "space-between" }}>
						<View
							style={{
								flexDirection: "row",
								gap: 5,
								alignItems: "center",
								opacity: label ? 1 : 0,
							}}>
							<Flag />
							<Text style={cardStyle.label}>{label}</Text>
						</View>

						<CompleteBtn cardType={cardType} />
					</View>
				</View>
			</View>
		</View>
	);
};

const cardStyle = StyleSheet.create({
	card: {
		borderRadius: 24,
		paddingHorizontal: 16,
		paddingTop: 8,
		paddingBottom: 20,
		backgroundColor: colors.white,
		gap: 10,
	},

	status: {
		fontSize: 12,
		lineHeight: 24,
		fontWeight: "700",
		fontFamily: "Helvetica-Now",
		color: colors.darkRed,
	},

	dateViewContainer: {
		...Platform.select({
			ios: {
				shadowColor: "#0A2151",
				shadowOffset: { width: 1, height: 1 },
				shadowOpacity: 0.5,
				shadowRadius: 2,
			},
			android: {
				elevation: 1,
			},
		}),
	},

	dateView: {
		borderRadius: 8,
		backgroundColor: "#FFF",
		overflow: "hidden",
		borderWidth: 2,
		borderColor: "transparent",
		padding: 3,
		width: 44,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
	dateTxt: {
		fontSize: 12,
		lineHeight: 15,
		fontWeight: "700",
	},
	title: {
		fontSize: 16,
		lineHeight: 20,
		fontWeight: "700",
		fontFamily: "Helvetica-Now",
	},
	description: {
		fontSize: 14,
		lineHeight: 20,
		fontWeight: "500",
		fontFamily: "Helvetica-Now",
		color: colors.gray,
	},
	label: {
		fontSize: 14,
		lineHeight: 24,
		fontFamily: "Helvetica-Now",
		color: colors.darkGray,
	},
});
