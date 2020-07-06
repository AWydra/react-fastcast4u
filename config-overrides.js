module.exports = function override(config) {
  const swPrecacheConfig = config.plugins.find(plugin => plugin.constructor.name === 'GenerateSW');
  const blacklist = swPrecacheConfig.config.navigateFallbackBlacklist;
  // URLs to being cached by the service worker
  blacklist.push(
    /^(?!.?order|.?radio-directory|.?alexa-skill|.?login|.?ticket|.?contact|.?tos|.?privacy).*/,
  );
  return config;
};
