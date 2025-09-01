#!/bin/bash

# Build the app
npm run build

# Create a copy of index.html as 404.html for client-side routing
cp build/index.html build/404.html

# Deploy to GitHub Pages
git add -f build && git commit -m "Build for deployment"
git subtree push --prefix build origin gh-pages
