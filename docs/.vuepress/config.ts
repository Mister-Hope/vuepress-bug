import { defineUserConfig } from "vuepress";
import { commentPlugin } from "vuepress-plugin-comment2";

export default defineUserConfig({
  base: "/",
  plugins: [
    commentPlugin({
      provider: "Giscus",
      repo: "xxxx/xxxxx",
      repoId: "xxxxxxxxxxxxx",
      category: "General",
      categoryId: "xxxxxxxxxxxx",
      inputPosition: "top",
    }),
  ],
});
