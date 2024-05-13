import * as React from "react";
import {
	KeyboardAvoidingView,
	Platform,
	Pressable,
	Text,
	TextInput,
	View,
} from "react-native";
import { useSignUp } from "@clerk/clerk-expo";
import { log } from "logger";
import { OAuthButtons, styles } from "components";
import { useNavigation } from "@react-navigation/native";
import { colors } from "theme";
import { SafeAreaView } from "react-native-safe-area-context";

export const SignUpScreen = () => {
	const { isLoaded, signUp } = useSignUp();
	const [firstName, setFirstName] = React.useState("");
	const [lastName, setLastName] = React.useState("");
	const [emailAddress, setEmailAddress] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [errorMessage, setErrorMessage] = React.useState("");
	const { navigate } = useNavigation();

	const onSignUpPress = async () => {
		if (!isLoaded) {
			return;
		}

		try {
			await signUp.create({
				firstName,
				lastName,
				emailAddress,
				password,
			});

			// https://docs.clerk.dev/popular-guides/passwordless-authentication
			await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

			navigate("verifyCode");
		} catch (err: any) {
			const errorMessages = err?.errors?.map((error: any) => error.message);
			setErrorMessage(errorMessages.join("\n"));
			log("Error:> " + err?.status || "");
			log("Error:> " + errorMessages);
		}
	};

	const onSignInPress = () => navigate("signIn");

	return (
		<SafeAreaView style={{ flex: 1, padding: 10 }}>
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "padding" : "height"}
				style={styles.container}>
				<View style={styles.inputView}>
					<TextInput
						value={firstName}
						style={styles.textInput}
						placeholder="First name..."
						placeholderTextColor="#000"
						onChangeText={(firstName) => setFirstName(firstName)}
					/>
				</View>

				<View style={styles.inputView}>
					<TextInput
						value={lastName}
						style={styles.textInput}
						placeholder="Last name..."
						placeholderTextColor="#000"
						onChangeText={(lastName) => setLastName(lastName)}
					/>
				</View>

				<View style={styles.inputView}>
					<TextInput
						autoCapitalize="none"
						value={emailAddress}
						style={styles.textInput}
						placeholder="Email..."
						placeholderTextColor="#000"
						onChangeText={(email) => setEmailAddress(email)}
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

				<Pressable style={styles.primaryButton} onPress={onSignUpPress}>
					<Text style={styles.primaryButtonText}>Sign up</Text>
				</Pressable>

				<View style={styles.oauthView}>
					<OAuthButtons />
				</View>

				<View style={styles.footer}>
					<Text>Have an account?</Text>

					<Pressable style={styles.secondaryButton} onPress={onSignInPress}>
						<Text style={styles.secondaryButtonText}>Sign in</Text>
					</Pressable>
				</View>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
};
