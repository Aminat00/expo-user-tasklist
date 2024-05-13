import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { colors } from "theme";
import { IconProps } from "./types";

export const ArrowDown: React.FC<IconProps> = ({
	size = 14,
	color = "current",
	...props
}) => (
	<Svg
		width={size}
		height={size}
		color={colors[color]}
		fill="none"
		viewBox="0 0 14 18"
		{...props}>
		<Path
			d="M12.5996 1.2L6.99961 6.8L1.39961 1.2"
			stroke="#0F172A"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</Svg>
);
