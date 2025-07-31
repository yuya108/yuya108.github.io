#!/bin/bash

echo "Building the project..."
npm run build

echo "Copying files from out/ to root directory..."

# Copy all files from out/ to root, excluding directories that shouldn't be overwritten
cp -r out/* .

# Remove the out directory after copying (optional)
# rm -rf out

echo "Deployment files copied successfully!"
echo "Files are ready for GitHub Pages deployment."