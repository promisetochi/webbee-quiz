module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
      [
        "module-resolver",
        {
          alias: {
            "@": "./src",
          },
        },
      ],
