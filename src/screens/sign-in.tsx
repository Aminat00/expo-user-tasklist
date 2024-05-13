import React from "react";
import {
	KeyboardAvoidingView,
	Platform,
	Pressable,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { useSignIn } from "@clerk/clerk-expo";
import { log } from "logger";
import { OAuthButtons, styles } from "components";
import { useNavigation } from "@react-navigation/native";
import { colors } from "theme";

export const SignInScreen = () => {
	const navigation = useNavigation();
	const { signIn, setSession, isLoaded } = useSignIn();

	const [emailAddress, setEmailAddress] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [errorMessage, setErrorMessage] = React.useState("");

	const onSignInPress = async () => {
		if (!isLoaded) {
			return;
		}

		try {
			const completeSignIn = await signIn.create({
				identifier: emailAddress,
				password,
			});

			await setSession(completeSignIn.createdSessionId);
		} catch (err: any) {
			const errorMessages = err?.errors?.map((error: any) => error.message);
			setErrorMessage(errorMessages.join("\n"));
			log("Error:> " + err?.status || "");
			log("Error:> " + errorMessages);
		}
	};

	const onSignUpPress = () => navigation.navigate("signUp");

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={styles.container}>
			<View style={styles.inputView}>
				<TextInput
					autoCapitalize="none"
					value={emailAddress}
					style={styles.textInput}
					placeholder="Email..."
					placeholderTextColor="#000"
					onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
				/>
			</View>

			<View style={styles.inputView}>
				<TextInput
					value={password}
					style={styles.textInput}
					placeholder="Password..."
					placeholderTextColor="#000"
					secureTextEntry={true}
					onChangeText={(password) => setPassword(password)}
				/>
			</View>

			{errorMessage ? (
				<Text
					style={{
						fontSize: 14,
						lineHeight: 20,
						fontWeight: "700",
						color: colors.darkRed,
						textAlign: "center",
					}}>
					{errorMessage}
				</Text>
			) : null}

			<Pressable style={styles.primaryButton} onPress={onSignInPress}>
				<Text style={styles.primaryButtonText}>Sign in</Text>
			</Pressable>

			<View style={styles.oauthView}>
				<OAuthButtons />
			</View>

			<View style={styles.footer}>
				<Text>Don't have an account?</Text>

				<Pressable style={styles.secondaryButton} onPress={onSignUpPress}>
					<Text style={styles.secondaryButtonText}>Sign up</Text>
				</Pressable>
			</View>
		</KeyboardAvoidingView>
	);
};
