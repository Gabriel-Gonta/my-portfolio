const fs = require("fs");
const path = require("path");

const indexPath = path.join(__dirname, "../build/index.html");
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
const hashRedirectScript = `
  <script>
    (function () {
      var repo = "${repoPath}";
      var path = window.location.pathname;
      if (path.indexOf(repo) === 0) {
        path = path.slice(repo.length);
      }
      path = path.replace(/^\\//, "");
      if (path && path !== "index.html" && !window.location.hash) {
        window.location.replace(
          repo + "/#/" + path + window.location.search + window.location.hash
        );
      }
    })();
  </script>`;

if (fs.existsSync(indexPath)) {
  let indexContent = fs.readFileSync(indexPath, "utf8");
  indexContent = indexContent.replace("</body>", `${hashRedirectScript}</body>`);
  fs.writeFileSync(html404Path, indexContent, "utf8");
  console.log("✓ Created 404.html with HashRouter redirect");
} else {
  console.error("✗ index.html not found in build folder");
  process.exit(1);
}
