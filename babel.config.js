module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
      "nativewind/babel",
      [
        "module-resolver",
        {
          alias: {
            "@": "./src",
          },
        },
      ],
