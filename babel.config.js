module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          root: ["."],
          extensions: [
            ".ios.ts",
            ".android.ts",
            ".ts",
            ".ios.tsx",
            ".android.tsx",
            ".tsx",
            ".jsx",
            ".js",
            ".json",
          ],
          alias: {
            "@app": "./src",
            "@context": "./src/context",
            "@constants": "./src/constants",
            "@services": "./src/services",
            "@navigations": "./src/navigations",
            "@screens": "./src/screens",
            "@components": "./src/components",
            "@utils": "./src/utils",
            "@config": "./src/config",
          },
        },
      ],
    ],
  };
};
