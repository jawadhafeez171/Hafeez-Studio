const fs = require('fs');
const path = require('path');

// Load environment variables from .env file if it exists
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    envContent.split(/\r?\n/).forEach(line => {
        const trimmedLine = line.trim();
        if (trimmedLine && !trimmedLine.startsWith('#')) {
            const parts = trimmedLine.split('=');
            if (parts.length >= 2) {
                const key = parts[0].trim();
                const value = parts.slice(1).join('=').trim();
                process.env[key] = value;
            }
        }
    });
}

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

// Process tutoring page
const tutoringTemplatePath = path.join(__dirname, 'tutoring.template.html');
const tutoringOutputPath = path.join(__dirname, 'tutoring.html');
if (fs.existsSync(tutoringTemplatePath)) {
    let tutoringHtml = fs.readFileSync(tutoringTemplatePath, 'utf8');
    tutoringHtml = tutoringHtml.replace(/__GOOGLE_SCRIPT_URL__/g, googleScriptUrl);
    fs.writeFileSync(tutoringOutputPath, tutoringHtml, 'utf8');
    console.log('✅ Built tutoring.html');
}

console.log('✅ Build complete! Environment variables injected.');
console.log(`   Google Script URL: ${googleScriptUrl.substring(0, 50)}...`);
