var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// stackbit.config.ts
var stackbit_config_exports = {};
__export(stackbit_config_exports, {
  default: () => stackbit_config_default
});
module.exports = __toCommonJS(stackbit_config_exports);
var import_types = require("@stackbit/types");
var import_cms_git = require("@stackbit/cms-git");
var stackbit_config_default = (0, import_types.defineStackbitConfig)({
  stackbitVersion: "~0.6.0",
  // Correct placement of stackbitVersion
  contentSources: [
    new import_cms_git.GitContentSource({
      rootPath: "C:\\Users\\Josh\\Desktop\\Josh's webstie\\JoshChuaYiJie.github.io",
      contentDirs: ["_posts"],
      // Directory where your posts are stored
      assetsConfig: {
        // Add closing brace for assetsConfig
        referenceType: "static",
        // Use 'static' for local assets or 'git' for Git-managed assets
        staticDir: "public",
        // Directory where static assets are stored
        uploadDir: "images",
        // Directory where uploaded assets are stored
        publicPath: "/"
        // Public path for assets
      },
      // Closing brace for assetsConfig
      models: [
        {
          name: "Post",
          type: "page",
          urlPath: "/blog/{slug}",
          filePath: "_posts/{year}-{month}-{day}-{slug}.md",
          fields: [
            { name: "date", type: "datetime", required: true },
            { name: "layout", type: "string", required: true, default: "post" },
            { name: "title", type: "string", required: true },
            { name: "subtitle", type: "string", required: false },
            { name: "description", type: "string", required: true },
            { name: "image", type: "image", required: true },
            { name: "optimized_image", type: "image", required: false },
            { name: "category", type: "string", required: true },
            { name: "tags", type: "list", items: { type: "string" }, required: false },
            { name: "author", type: "string", required: false },
            { name: "paginate", type: "boolean", required: false }
          ]
        }
      ]
    })
  ]
});
//# sourceMappingURL=stackbit.config.6M5VKSI6.cjs.map
