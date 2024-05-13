import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { colors } from "theme";
import { IconProps } from "./types";

export const CheckMark: React.FC<IconProps> = ({
	size = 13,
	color = "current",
	...props
}) => (
	<Svg
		width={size}
		height={size}
		color={colors[color]}
		fill="none"
		viewBox="0 0 13 8"
		{...props}>
		<Path
			d="M1.40686 4.57517L3.48765 6.95862L8.68962 1"
			stroke="#1C274C"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<Path
			d="M12 1.04138L6.32496 7L6.04138 6.62759"
			stroke="#1C274C"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</Svg>
);
