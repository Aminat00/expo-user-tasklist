import React from "react";
import { Image, ImageSourcePropType, View } from "react-native";

type RoundedImageProps = {
	source: ImageSourcePropType | undefined;
	size?: number;
	borderWidth?: number;
};

export const RoundedImage: React.FC<RoundedImageProps> = ({
	source,
	size = 50,
	borderWidth = 2,
}) => {
	return (
		<View
			style={{
				width: size + borderWidth * 2,
				height: size + borderWidth * 2,
				borderRadius: (size + borderWidth * 2) / 2,
				borderColor: "white",
				borderWidth: borderWidth,
			}}>
			<Image
				source={source}
				style={{
					width: size,
					height: size,
					borderRadius: size / 2,
				}}
			/>
		</View>
	);
};
