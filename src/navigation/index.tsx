import React from "react";
import {
	BottomTabNavigationOptions,
	createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import {
	ActivityScreen,
	HomeScreen,
	MyTasksScreen,
	SettingsScreen,
	SignInScreen,
	SignUpScreen,
	VerifyCodeScreen,
} from "screens";
import { AddDocument, Home, Settings, Time } from "icons";
import { TabBarItem } from "components";
import { ClerkLoaded, useUser } from "@clerk/clerk-expo";
import * as SplashScreen from "expo-splash-screen";
import { colors } from "theme";
import linking from "./linking-config";
import { fontsMap } from "assets";
import { useFonts } from "expo-font";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const screenOptions: BottomTabNavigationOptions = {
	tabBarShowLabel: false,
	headerShown: false,
	tabBarStyle: {
		position: "absolute",
		bottom: 0,
		right: 0,
		left: 0,
		elevation: 0,
		height: 97,
		backgroundColor: colors.defaultBg,
	},
};

const TabNavigator = () => {
	return (
		<Tab.Navigator screenOptions={screenOptions}>
			<Tab.Screen
				name="Home"
				component={HomeScreen}
				options={{
					tabBarIcon: ({ focused }) => (
						<TabBarItem label="Home" focused={focused} icon={Home} />
					),
				}}
			/>
			<Tab.Screen
				name="My Tasks"
				component={MyTasksScreen}
				options={{
					tabBarIcon: ({ focused }) => (
						<TabBarItem label="My Tasks" focused={focused} icon={AddDocument} />
					),
				}}
			/>
			<Tab.Group
				screenOptions={{
					tabBarItemStyle: {
						marginBottom: -5,
					},
				}}>
				<Tab.Screen
					name="Activity"
					component={ActivityScreen}
					options={{
						tabBarIcon: ({ focused }) => (
							<TabBarItem
								leftSide
								label="Activity"
								focused={focused}
								icon={Time}
							/>
						),
					}}
				/>
				<Tab.Screen
					name="Settings"
					component={SettingsScreen}
					options={{
						tabBarIcon: ({ focused }) => (
							<TabBarItem
								leftSide
								label="Settings"
								focused={focused}
								icon={Settings}
							/>
						),
					}}
				/>
			</Tab.Group>
		</Tab.Navigator>
	);
};

export const Navigation = () => {
	const { isSignedIn, isLoaded } = useUser();

	const [fontsLoaded] = useFonts(fontsMap);

	React.useEffect(() => {
		if (isLoaded || fontsLoaded) {
			SplashScreen.hideAsync();
		}
	}, [isLoaded]);

	return (
		<ClerkLoaded>
			<NavigationContainer linking={linking}>
				<Stack.Navigator screenOptions={{ headerShown: false }}>
					{isSignedIn ? (
						<Stack.Screen name="main" component={TabNavigator} />
					) : (
						<>
							<Stack.Screen name="signUp" component={SignUpScreen} />
							<Stack.Screen name="signIn" component={SignInScreen} />
							<Stack.Screen name="verifyCode" component={VerifyCodeScreen} />
						</>
					)}
				</Stack.Navigator>
			</NavigationContainer>
		</ClerkLoaded>
	);
};
