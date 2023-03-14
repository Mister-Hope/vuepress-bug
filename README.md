# Bug report

- With pnpm (`pnpm i`), `pnpm docs:build` works fine.
- With npm (`npm i`), `npm run docs:build` gets the following error:

```bash
Error [ERR_MODULE_NOT_FOUND]: Cannot find package '@internal/pagesData' imported from C:\Users\mister-hope\Downloads\vuepress-theme-hope-hajzbt\node_modules\@vuepress\client\dist\chunk-X6BS2PXP.js
    at new NodeError (node:internal/errors:393:5)
    at packageResolve (node:internal/modules/esm/resolve:860:9)
    at moduleResolve (node:internal/modules/esm/resolve:909:20)
    at defaultResolve (node:internal/modules/esm/resolve:1124:11)
    at nextResolve (node:internal/modules/esm/loader:163:28)
    at ESMLoader.resolve (node:internal/modules/esm/loader:841:30)
    at ESMLoader.getModuleJob (node:internal/modules/esm/loader:424:18)
    at ModuleWrap.<anonymous> (node:internal/modules/esm/module_job:76:40)
    at link (node:internal/modules/esm/module_job:75:36)
```
