import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { colors } from "theme";
import { IconProps } from "./types";

export const Search: React.FC<IconProps> = ({
	size = 18,
	color = "current",
	...props
}) => (
	<Svg
		width={size}
		height={size}
		color={colors[color]}
		fill="none"
		viewBox="0 0 18 18"
		{...props}>
		<Path
			d="M2.07483 7.8629C2.07483 4.64584 4.68277 2.0379 7.89983 2.0379C11.1169 2.0379 13.7248 4.64584 13.7248 7.8629C13.7248 11.08 11.1169 13.6879 7.89983 13.6879C4.68277 13.6879 2.07483 11.08 2.07483 7.8629ZM7.89983 0.0379028C3.5782 0.0379028 0.0748291 3.54127 0.0748291 7.8629C0.0748291 12.1845 3.5782 15.6879 7.89983 15.6879C9.70043 15.6879 11.359 15.0797 12.6813 14.0576L16.2929 17.6692C16.6834 18.0598 17.3166 18.0598 17.7071 17.6692C18.0977 17.2787 18.0977 16.6455 17.7071 16.255L14.0954 12.6433C15.117 11.3211 15.7248 9.663 15.7248 7.8629C15.7248 3.54127 12.2215 0.0379028 7.89983 0.0379028Z"
			fill="currentColor"
			fillRule="evenodd"
			clipRule="evenodd"
		/>
	</Svg>
);
