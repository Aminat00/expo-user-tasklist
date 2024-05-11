import "dotenv/config";

export default {
	expo: {
		jsEngine: "hermes",
		name: "expo-user-tasklist",
		slug: "expo-user-tasklist",
		scheme: "expo-user-tasklist",
		version: "1.0.0",
		orientation: "portrait",
		icon: "./assets/icon.png",
		userInterfaceStyle: "light",
		splash: {
			image: "./assets/splash.png",
			resizeMode: "contain",
			backgroundColor: "#ffffff",
		},
		ios: {
			supportsTablet: true,
		},
		android: {
			adaptiveIcon: {
				foregroundImage: "./assets/adaptive-icon.png",
				backgroundColor: "#ffffff",
			},
		},
		web: {
			favicon: "./assets/favicon.png",
		},
		plugins: [
			[
				"expo-font",
				{
					fonts: [
						"./assets/fonts/HelveticaNowDisplay-Black.ttf",
						"./assets/fonts/InterTight-Black.ttf",
					],
				},
			],
		],
		extra: {
			clerkKey: process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY,
		},
	},
};
