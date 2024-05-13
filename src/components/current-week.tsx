import { ArrowDown } from "icons";
import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { colors } from "theme";
import { returnCurrentWeek } from "utils";
import { LinearGradient } from "expo-linear-gradient";

export const CurrentWeek = () => {
	// Get the current week
	const currentWeek = returnCurrentWeek();

	// Get the current month and year
	const currentDate = new Date();
	const currentMonth = currentDate.toLocaleString("default", {
		month: "long",
	});
	const currentYear = currentDate.getFullYear();

	return (
		<View style={{ alignItems: "flex-start" }}>
			<Pressable style={{ flexDirection: "row", alignItems: "center", gap: 9 }}>
				<Text
					style={{
						fontSize: 20,
						lineHeight: 29,
						fontWeight: "800",
						fontFamily: "InterTight",
					}}>
					{currentMonth} {currentYear}
				</Text>

				{/* Arrow Down Icon */}
				<Pressable style={{ alignSelf: "center" }}>
					<ArrowDown />
				</Pressable>
			</Pressable>
			{/* Display Week */}
			<View style={{ flexDirection: "row", gap: 4 }}>
				{currentWeek.map((day, index) => {
					// Check if the day is the current day
					const isCurrentDay =
						new Date(day).getDate() === currentDate.getDate();

					return (
						<Pressable
							key={index}
							style={{
								flex: 1,
								alignItems: "center",
								paddingVertical: 10,
								gap: 10,
							}}>
							{/* Day of the week */}
							<Text
								style={{
									fontWeight: "500",
									fontSize: 14,
									lineHeight: 20,
									color: colors.textBlue,
								}}>
								{day.toLocaleString("default", { weekday: "short" })}
							</Text>

							{isCurrentDay ? (
								<LinearGradient
									colors={["#4D134B", "#0B2051"]}
									start={{ x: 0, y: 0 }}
									end={{ x: 1, y: 0 }}
									style={weekStyle.dayView}>
									<Text style={[weekStyle.dayTxt, { color: colors.white }]}>
										{day.getDate()}
									</Text>
								</LinearGradient>
							) : (
								<View style={{ padding: 8 }}>
									<Text style={[weekStyle.dayTxt, { color: colors.textBlue }]}>
										{day.getDate()}
									</Text>
								</View>
							)}
						</Pressable>
					);
				})}
			</View>
		</View>
	);
};

const weekStyle = StyleSheet.create({
	dayTxt: {
		fontWeight: "700",
		fontSize: 16,
		lineHeight: 20,
	},

	dayView: {
		borderRadius: 12,
		padding: 8,
	},
});
