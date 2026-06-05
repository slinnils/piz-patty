import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure"; 
import { structure } from "./src/schemaTypes/deskStructure.js";
import { schemaTypes } from "./src/schemaTypes/index.js";

export default defineConfig({
  name: "default",
  title: "piz-patty",

  projectId: "8s3mk80d",
  dataset: "production",

  plugins: [
    structureTool({ structure })
  ],

  schema: {
    types: schemaTypes,
    templates: (prev) => [
      ...prev,
      {
        id: "menu-by-category",
        title: "Menü nach Kategorie",
        schemaType: "menu",
        parameters: [{ name: "categoryId", type: "string" }],
        value: ({ categoryId }) => ({
          category: { _type: "reference", _ref: categoryId },
        }),
      },
    ],
  },
});