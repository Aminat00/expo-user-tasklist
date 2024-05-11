import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";
import { RootStackParamList } from "types";

const prefix = Linking.createURL("/");

export const linking: LinkingOptions<RootStackParamList> = {
	prefixes: [prefix],
	config: {
		screens: {
			root: {
				screens: {
					signUp: "SignUp",
					signIn: "SignIn",
					main: "Main",
					verifyCode: "VerifyCode",
				},
			},
		},
	},
};

export default linking;
