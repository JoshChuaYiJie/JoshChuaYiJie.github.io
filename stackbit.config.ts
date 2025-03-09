import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
    stackbitVersion: "~0.6.0", // Correct placement of stackbitVersion
    contentSources: [
        new GitContentSource({
            rootPath: __dirname,
            contentDirs: ["_posts"], // Directory where your posts are stored
            assetsConfig: { // Add closing brace for assetsConfig
                referenceType: "static", // Use 'static' for local assets or 'git' for Git-managed assets
                staticDir: "public", // Directory where static assets are stored
                uploadDir: "images", // Directory where uploaded assets are stored
                publicPath: "/" // Public path for assets
            }, // Closing brace for assetsConfig
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
            ],
        })
    ],
});