import * as React from "react";
import Svg, {
	Defs,
	G,
	LinearGradient,
	Path,
	Rect,
	Stop,
} from "react-native-svg";
import { colors } from "theme";
import { IconProps } from "./types";

export const Add: React.FC<IconProps> = ({
	size = 24,
	color = "current",
	...props
}) => (
	<Svg
		width={size}
		height={size}
		color={colors[color]}
		fill="none"
		viewBox="0 0 106 114"
		{...props}>
		<G filter="url(#filter0_d_1_1374)">
			<Rect
				x="25"
				y="25"
				width="63.2236"
				height="63.2236"
				rx="31.6118"
				fill="url(#paint0_linear_1_1374)"
				shape-rendering="crispEdges"
			/>
			<Rect
				x="27.5"
				y="27.5"
				width="58.2236"
				height="58.2236"
				rx="29.1118"
				stroke="white"
				stroke-width="5"
				shape-rendering="crispEdges"
			/>
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M58.2692 48.375C58.2692 47.4561 57.5243 46.7112 56.6054 46.7112C55.6866 46.7112 54.9417 47.4561 54.9417 48.375V54.9495H48.3661C47.4472 54.9495 46.7023 55.6944 46.7023 56.6133C46.7023 57.5322 47.4472 58.2771 48.3661 58.2771H54.9417V64.8487C54.9417 65.7676 55.6866 66.5125 56.6054 66.5125C57.5243 66.5125 58.2692 65.7676 58.2692 64.8487V58.2771H64.8398C65.7587 58.2771 66.5036 57.5322 66.5036 56.6133C66.5036 55.6944 65.7587 54.9495 64.8398 54.9495H58.2692V48.375Z"
				fill="white"
			/>
		</G>
		<Defs>
			<filter
				id="filter0_d_1_1374"
				x="0.0433006"
				y="0.0433006"
				width="113.137"
				height="113.137"
				filterUnits="userSpaceOnUse"
				color-interpolation-filters="sRGB">
				<feFlood flood-opacity="0" result="BackgroundImageFix" />
				<feColorMatrix
					in="SourceAlpha"
					type="matrix"
					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					result="hardAlpha"
				/>
				<feOffset />
				<feGaussianBlur stdDeviation="12.4783" />
				<feComposite in2="hardAlpha" operator="out" />
				<feColorMatrix
					type="matrix"
					values="0 0 0 0 0.376471 0 0 0 0 0.403922 0 0 0 0 0.462745 0 0 0 0.4 0"
				/>
				<feBlend
					mode="normal"
					in2="BackgroundImageFix"
					result="effect1_dropShadow_1_1374"
				/>
				<feBlend
					mode="normal"
					in="SourceGraphic"
					in2="effect1_dropShadow_1_1374"
					result="shape"
				/>
			</filter>
			<LinearGradient
				id="paint0_linear_1_1374"
				x1="55.7337"
				y1="-111.721"
				x2="-6.7565"
				y2="-89.1417"
				gradientUnits="userSpaceOnUse">
				<Stop stopColor="#4D134B" />
				<Stop offset="1" stop-color="#0B2051" />
			</LinearGradient>
		</Defs>
	</Svg>
);
