import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Navigation } from "navigation";
import Constants from "expo-constants";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "./cache";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import { ActivityIndicator } from "react-native";

function App() {
	const publishableKey = Constants?.expoConfig?.extra?.clerkKey;

	return (
		<ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
			<SafeAreaProvider>
				<Navigation />
			</SafeAreaProvider>
		</ClerkProvider>
	);
}

export default App;
