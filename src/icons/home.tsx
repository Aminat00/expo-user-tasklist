import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { colors } from "theme";
import { IconProps } from "./types";

export const Home: React.FC<IconProps> = ({
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
			d="M7.41602 20.2693C7.41602 17.218 7.41602 15.6924 8.10828 14.4277C8.80055 13.163 10.0653 12.3781 12.5947 10.8082L15.2614 9.15322C17.9352 7.49378 19.2721 6.66406 20.7493 6.66406C22.2266 6.66406 23.5635 7.49378 26.2373 9.15322L28.904 10.8082C31.4334 12.3781 32.6981 13.163 33.3904 14.4277C34.0827 15.6924 34.0827 17.218 34.0827 20.2693V22.2973C34.0827 27.4985 34.0827 30.0991 32.5206 31.7149C30.9585 33.3307 28.4443 33.3307 23.416 33.3307H18.0827C13.0544 33.3307 10.5402 33.3307 8.97811 31.7149C7.41602 30.0991 7.41602 27.4985 7.41602 22.2973V20.2693Z"
			fill="currentColor"
		/>
		<Path
			d="M24.75 28H16.75"
			stroke="white"
			strokeWidth="1.5"
			strokeLinecap="round"
		/>
	</Svg>
);
