#!/bin/bash

echo "🏗️  Building Kitchor Website..."

# Build the project
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📁 Creating deployment folder..."
    
    # Create deployment directory
    mkdir -p deployment
    
    # Copy build files
    echo "📋 Copying build files..."
    cp -r build/* deployment/
    
    # Copy .htaccess file
    echo "⚙️  Copying .htaccess file..."
    cp public/.htaccess deployment/
    
    # Create deployment instructions
    echo "📝 Creating deployment instructions..."
    cat > deployment/DEPLOYMENT_INSTRUCTIONS.txt << EOF
KITCHOR WEBSITE DEPLOYMENT INSTRUCTIONS
========================================

1. LOGIN TO YOUR GODADDY ACCOUNT
   - Go to https://godaddy.com
   - Sign in to your account
   - Navigate to "My Products" > "Web Hosting"

2. ACCESS FILE MANAGER
   - Click "Manage" on your hosting plan
   - Open "File Manager" or "cPanel File Manager"
   - Navigate to the "public_html" folder

3. UPLOAD FILES
   - Delete all existing files in public_html (if any)
   - Upload ALL files from this deployment folder to public_html
   - Make sure .htaccess file is uploaded (it's hidden by default)

4. VERIFY DEPLOYMENT
   - Visit your domain name
   - Test all navigation links
   - Test the booking form
   - Check mobile responsiveness

5. TROUBLESHOOTING
   - If you see a blank page, check that .htaccess was uploaded
   - If images don't load, check file permissions
   - Contact GoDaddy support if you need help

TECHNICAL DETAILS:
- Built with React + TypeScript
- Uses Tailwind CSS v4
- Fully responsive design
- Optimized for production

For support, contact: info@kitchor.com
EOF
    
    echo "🎉 Deployment package ready!"
    echo "📦 Files are in the 'deployment' folder"
    echo "📖 See DEPLOYMENT_INSTRUCTIONS.txt for detailed steps"
    echo ""
    echo "Next steps:"
    echo "1. Upload contents of 'deployment' folder to your GoDaddy public_html"
    echo "2. Visit your domain to verify the site works"
    echo "3. Test all functionality and responsiveness"
else
    echo "❌ Build failed!"
    exit 1
fi