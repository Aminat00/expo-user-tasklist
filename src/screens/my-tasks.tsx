import {
	ImageBackground,
	Pressable,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import React from "react";
import {
	CalendarView,
	Card,
	CurrentWeek,
	Header,
	ListView,
	allTasks,
} from "components";
import { StatusBar } from "expo-status-bar";
import { colors } from "theme";
import { getCurrentWeekText } from "utils";
import { SafeAreaView } from "react-native-safe-area-context";

const headerBgURl = "https://i.ibb.co/RvDnD7b/header-bg-image.png";

export const MyTasksScreen = () => {
	const [isCalendarView, setCalendarView] = React.useState(false);

	const toggleView = () => {
		setCalendarView(!isCalendarView);
	};

	return (
		<View style={styles.container}>
			<ImageBackground source={{ uri: headerBgURl }}>
				<SafeAreaView>
					<View style={styles.header}>
						<StatusBar style="dark" />
						<Header />

						<View style={styles.tab}>
							<Pressable
								style={[
									styles.tabItem,
									{
										backgroundColor: isCalendarView
											? colors.white
											: colors.darkSoul,
									},
								]}
								onPress={toggleView}>
								<Text
									style={[
										styles.tabTxt,
										{ color: isCalendarView ? colors.darkSoul : colors.white },
									]}>
									List View
								</Text>
							</Pressable>
							<Pressable
								style={[
									styles.tabItem,
									{
										backgroundColor: isCalendarView
											? colors.darkSoul
											: colors.white,
									},
								]}
								onPress={toggleView}>
								<Text
									style={[
										styles.tabTxt,
										{ color: isCalendarView ? colors.white : colors.darkSoul },
									]}>
									Calendar View
								</Text>
							</Pressable>
						</View>
					</View>
				</SafeAreaView>
			</ImageBackground>
			<View style={styles.listViewContainer}>
				<ScrollView
					contentContainerStyle={{ gap: 16, paddingBottom: 60 }}
					showsVerticalScrollIndicator={false}>
					{isCalendarView ? <CalendarView /> : <ListView />}
				</ScrollView>
			</View>
		</View>
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
		paddingHorizontal: 12,
		paddingVertical: 10,
		width: "50%",
	},

	tabTxt: {
		fontSize: 14,
		lineHeight: 20,
		fontWeight: "600",
		textAlign: "center",
	},

	listViewContainer: {
		flex: 1,
		padding: 16,
		backgroundColor: colors.lightGray,
	},
});
