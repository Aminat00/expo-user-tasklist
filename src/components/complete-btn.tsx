import { Pressable, Text } from "react-native";
import { colors } from "theme";
import { CardType } from "./types";
import { CheckMark } from "icons";

export const CompleteBtn: React.FC<{ cardType: CardType }> = ({ cardType }) => {
	return (
		<Pressable
			style={{
				flexDirection: "row",
				alignItems: "center",
				gap: 4,
				borderRadius: 20,
				backgroundColor: colors.lightGray,
				paddingHorizontal: 12,
				paddingVertical: 4,
				borderWidth: 1,
				borderColor: "rgba(75, 85, 99, 0.2)",
			}}>
			{cardType !== CardType.inProgress && <CheckMark />}
			<Text
				style={{
					fontSize: 13,
					lineHeight: 20,
					fontWeight: "500",
					color: colors.textBlue,
				}}>
				Mark as Completed
			</Text>
		</Pressable>
	);
};
