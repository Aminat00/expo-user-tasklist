import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		justifyContent: "center",
		gap: 16,
	},

	upperSection: {
		flex: 1,
	},

	inputView: {
		borderRadius: 16,
		width: "100%",
		height: 45,
		borderColor: "#000",
		borderStyle: "solid",
		borderWidth: 1,
	},

	textInput: {
		height: 50,
		flex: 1,
		padding: 10,
		marginLeft: 20,
	},

	primaryButton: {
		width: "100%",
		borderRadius: 16,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#000",
		color: "#ffffff",
	},

	primaryButtonText: {
		color: "#ffffff",
		fontWeight: "bold",
	},

	titleText: {
		color: "#000",
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 20,
	},

	footer: {
		color: "#000",
		marginTop: 20,
		alignItems: "center",
		width: "100%",
		gap: 10,
	},

	secondaryButton: {
		borderRadius: 16,
		padding: 10,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#ffffff",
		borderWidth: 1,
		borderColor: "#000",
		width: "100%",
	},

	secondaryButtonText: {
		color: "#000",
		fontWeight: "bold",
	},

	oauthView: {
		width: "100%",
		borderTopWidth: 1,
		borderBottomColor: "#000",
		paddingTop: 20,
	},
});
