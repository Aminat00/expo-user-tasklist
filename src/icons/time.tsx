import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { colors } from "theme";
import { IconProps } from "./types";

export const Time: React.FC<IconProps> = ({
	size = 35,
	color = "current",
	...props
}) => (
	<Svg
		width={size}
		height={size}
		color={colors[color]}
		fill="none"
		viewBox="0 0 41 40"
		{...props}>
		<Path
			d="M27.4161 13.9974C27.4161 21.3612 21.4465 27.3307 14.0827 27.3307C6.71893 27.3307 0.74939 21.3612 0.74939 13.9974C0.74939 6.6336 6.71893 0.664062 14.0827 0.664062C21.4465 0.664062 27.4161 6.6336 27.4161 13.9974Z"
			fill="currentColor"
		/>
		<Path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M14.0827 7.66406C14.635 7.66406 15.0827 8.11178 15.0827 8.66406V13.5832L18.1232 16.6236C18.5137 17.0141 18.5137 17.6473 18.1232 18.0378C17.7326 18.4284 17.0995 18.4284 16.7089 18.0378L13.3756 14.7045C13.1881 14.517 13.0827 14.2626 13.0827 13.9974V8.66406C13.0827 8.11178 13.5304 7.66406 14.0827 7.66406Z"
			fill="white"
		/>
	</Svg>
);
