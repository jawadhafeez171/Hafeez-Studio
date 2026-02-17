const fs = require('fs');
const path = require('path');

// Read the template file
const templatePath = path.join(__dirname, 'index.template.html');
const outputPath = path.join(__dirname, 'index.html');

let html = fs.readFileSync(templatePath, 'utf8');

// Get the Google Script URL from environment variable
const googleScriptUrl = process.env.GOOGLE_SCRIPT_URL || 'YOUR_GOOGLE_SCRIPT_URL_HERE';

// Replace the placeholder with the actual URL
html = html.replace('__GOOGLE_SCRIPT_URL__', googleScriptUrl);

// Write the output file
fs.writeFileSync(outputPath, html, 'utf8');

console.log('✅ Build complete! Environment variables injected.');
console.log(`   Google Script URL: ${googleScriptUrl.substring(0, 50)}...`);
