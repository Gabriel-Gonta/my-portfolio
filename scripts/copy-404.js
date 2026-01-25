const fs = require('fs');
const path = require('path');

// Read the built index.html
const indexPath = path.join(__dirname, '../build/index.html');
const html404Path = path.join(__dirname, '../build/404.html');
const redirectJsPath = path.join(__dirname, '../public/404-redirect.js');
const buildRedirectJsPath = path.join(__dirname, '../build/404-redirect.js');

// Read package.json to get homepage
const packageJsonPath = path.join(__dirname, '../package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
const homepage = packageJson.homepage || '';

// Extract the base path from homepage (e.g., /my-portfolio from https://user.github.io/my-portfolio)
let basePath = '';
if (homepage) {
  try {
    const url = new URL(homepage);
    basePath = url.pathname;
    if (basePath && !basePath.endsWith('/')) {
      basePath += '/';
    }
  } catch (e) {
    // If homepage is just a path
    basePath = homepage.startsWith('/') ? homepage : '/' + homepage;
    if (!basePath.endsWith('/')) {
      basePath += '/';
    }
  }
}

if (fs.existsSync(indexPath)) {
  let indexContent = fs.readFileSync(indexPath, 'utf8');
  
  // With HashRouter, we don't need the redirect script anymore
  // Just copy index.html to 404.html as-is
  
  // Write to 404.html
  fs.writeFileSync(html404Path, indexContent, 'utf8');
  console.log('✓ Created 404.html from index.html');
} else {
  console.error('✗ index.html not found in build folder');
  process.exit(1);
}
