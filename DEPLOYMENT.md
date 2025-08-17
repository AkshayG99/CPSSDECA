# GitHub Pages Deployment Guide

## Prerequisites
- GitHub account
- Git installed on your computer
- Node.js and npm installed

## Step-by-Step Deployment

### 1. Create GitHub Repository
1. Go to [GitHub](https://github.com) and create a new repository
2. Name it whatever you prefer (e.g., `cpss-deca`, `deca-website`, etc.)
3. Make it public (required for free GitHub Pages)
4. Don't initialize with README since you already have files

### 2. Connect Local Project to GitHub
```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Make initial commit
git commit -m "Initial commit - CPSS DECA website"

# Add GitHub repository as origin (replace with your username and repo name)
git remote add origin https://github.com/yourusername/your-repo-name.git

# Push to GitHub
git push -u origin main
```

### 3. Update Homepage URL
**IMPORTANT**: Update the `homepage` field in `package.json`:
```json
"homepage": "https://yourusername.github.io/your-repo-name"
```
Replace `yourusername` with your GitHub username and `your-repo-name` with your repository name.

### 4. Deploy to GitHub Pages
```bash
# Deploy the website
npm run deploy
```

This command will:
- Build the React app (`npm run build`)
- Create a `gh-pages` branch
- Push the built files to GitHub Pages

### 5. Enable GitHub Pages
1. Go to your GitHub repository
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **Deploy from a branch**
5. Select **gh-pages** branch and **/ (root)** folder
6. Click **Save**

### 6. Access Your Website
Your website will be available at:
```
https://yourusername.github.io/your-repo-name
```

## Future Updates

To update your deployed website:
1. Make changes to your code
2. Commit and push changes to GitHub:
   ```bash
   git add .
   git commit -m "Update website"
   git push
   ```
3. Deploy updates:
   ```bash
   npm run deploy
   ```

## Troubleshooting

### Common Issues:
1. **404 Error**: Make sure the `homepage` URL in `package.json` matches your GitHub Pages URL exactly
2. **Build Fails**: Run `npm run build` locally first to check for errors
3. **Images Not Loading**: Ensure all image paths are relative and images are in the `public` folder

### Custom Domain (Optional)
To use a custom domain:
1. Add a `CNAME` file to the `public` folder with your domain name
2. Configure DNS settings with your domain provider
3. Enable custom domain in GitHub Pages settings

## Notes
- It may take a few minutes for changes to appear on GitHub Pages
- The website automatically rebuilds when you run `npm run deploy`
- Free GitHub Pages has usage limits but should be sufficient for most websites
