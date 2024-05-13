module.exports = function (api) {
	api.cache(true);
	return {
		presets: ["babel-preset-expo"],
		plugins: [
			[
				"module-resolver",
				{
					alias: {
						assets: "./src/assets",
						components: "./src/components",
						env: "./src/env.ts",
						icons: "./src/icons",
						logger: "./src/logger.ts",
						navigation: "./src/navigation",
						theme: "./src/theme",
						types: "./src/types.ts",
						hooks: "./src/hooks.tsx",
						utils: "./src/utils.ts",
					},
				},
			],
		],
	};
};
