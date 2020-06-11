const pluginPingendo = require("pingendo-11ty");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginPingendo);
  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.setDynamicPermalinks(true);

  return {
    templateFormats: [
      "md",
      "njk",
      "html",
      "liquid"
    ],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "build",
      data: "../data" // ⚠️ This value is relative to your input directory.
    }
  };

};