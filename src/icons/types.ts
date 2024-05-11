import { SvgProps } from "react-native-svg";
import { colors } from "theme";

export type IconColor = keyof typeof colors;

export type IconProps = SvgProps & {
	color?: IconColor;
	size?: number;
};
