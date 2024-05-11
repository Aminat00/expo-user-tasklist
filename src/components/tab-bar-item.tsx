import { View, Text } from "react-native";
import { IconProps } from "icons";
import { colors } from "theme";
type TabBarItemProps = {
	focused: boolean;
	icon: React.FC<IconProps>;
	label: string;
	leftSide?: boolean;
};

export const TabBarItem: React.FC<TabBarItemProps> = ({
	focused,
	icon: Icon,
	label,
	leftSide,
}) => {
	return (
		<View style={{ alignItems: "center", justifyContent: "center" }}>
			<View
				style={{
					marginBottom: leftSide ? -5 : 0,
					marginLeft: leftSide ? 3 : 0,
				}}>
				<Icon color={focused ? "iconBlue" : "gray"} />
			</View>
			<Text
				style={{
					fontFamily: "Helvetica",
					fontWeight: "700",
					fontSize: 12,
					lineHeight: 16,
					color: focused ? colors.iconBlue : colors.gray,
				}}>
				{label}
			</Text>
		</View>
	);
};
