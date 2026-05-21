const fs = require("fs");
const path = require("path");

const html404Path = path.join(__dirname, "../build/404.html");
const packageJsonPath = path.join(__dirname, "../package.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
const homepage = packageJson.homepage || "";

let basePath = "/my-portfolio/";
if (homepage) {
  try {
    const url = new URL(homepage);
    basePath = url.pathname;
    if (!basePath.endsWith("/")) {
      basePath += "/";
    }
  } catch (e) {
    basePath = homepage.startsWith("/") ? homepage : `/${homepage}`;
    if (!basePath.endsWith("/")) {
      basePath += "/";
    }
  }
}

const repoPath = basePath.replace(/\/$/, "");

// Minimal 404: no React bundle. Otherwise missing .js chunks receive HTML
// and Safari throws: SyntaxError: Unexpected token '{'.
const minimal404 = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Redirecting…</title>
  <meta http-equiv="refresh" content="0;url=${basePath}" />
</head>
<body>
  <script>
    (function () {
      var repo = "${repoPath}";
      var path = window.location.pathname;
      if (path.indexOf(repo) === 0) {
        path = path.slice(repo.length);
      }
      path = path.replace(/^\\//, "");
      var isAsset = /\\.(js|css|png|jpe?g|gif|svg|ico|json|map|woff2?|ttf|pdf|webp)$/i.test(path);
      if (path && path !== "index.html" && !isAsset && !window.location.hash) {
        window.location.replace(
          repo + "/#/" + path + window.location.search + window.location.hash
        );
      } else if (!isAsset) {
        window.location.replace(repo + "/");
      }
    })();
  </script>
  <p>Redirecting… <a href="${basePath}">Continue to portfolio</a></p>
</body>
</html>
`;

fs.writeFileSync(html404Path, minimal404, "utf8");
console.log("✓ Created minimal 404.html (SPA redirect only, no JS bundle)");
