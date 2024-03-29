import pluginWebc from "@11ty/eleventy-plugin-webc";

export default function (eleventyConfig) {
	eleventyConfig.ignores.add("README.md");
	eleventyConfig.addPlugin(pluginWebc, {
		components: ["_components/**/*.webc"],
	});

	return {
		htmlTemplateEngine: "webc",
	};
}
