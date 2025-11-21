# Render Deployment Instructions

## Manual Deployment Steps

### Option 1: Using Render Dashboard (Recommended)

1. **Sign in to Render**
   - Go to [https://dashboard.render.com](https://dashboard.render.com)
   - Sign in with your GitHub account

2. **Create New Static Site**
   - Click "New +" button
   - Select "Static Site"

3. **Connect Repository**
   - Choose "Connect GitHub"
   - Select the repository: `arnavsangelkar-pdm/sdhcChatBot`
   - Click "Connect"

4. **Configure Build Settings**
   - **Name**: `sdhc-chat-demo` (or your preferred name)
   - **Branch**: `main`
   - **Root Directory**: Leave empty (or `./` if required)
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`

5. **Environment Variables** (if needed)
   - Click "Advanced"
   - Add environment variable:
     - Key: `NODE_VERSION`
     - Value: `18.x`

6. **Deploy**
   - Click "Create Static Site"
   - Render will automatically build and deploy your site
   - Wait for the build to complete (usually 2-5 minutes)

7. **Get Your URL**
   - Once deployed, you'll get a URL like: `https://sdhc-chat-demo.onrender.com`
   - You can also set a custom domain in the settings

### Option 2: Using render.yaml (Blueprints)

If you want to use the `render.yaml` file:

1. **Go to Render Dashboard**
   - Navigate to [https://dashboard.render.com](https://dashboard.render.com)

2. **Create Blueprint**
   - Click "New +" → "Blueprint"
   - Connect your GitHub repository: `arnavsangelkar-pdm/sdhcChatBot`
   - Render will automatically detect the `render.yaml` file
   - Click "Apply"

3. **Deploy**
   - Render will create the service based on the YAML configuration
   - Wait for deployment to complete

### Option 3: Using Render CLI

1. **Install Render CLI**
   ```bash
   npm install -g render-cli
   ```

2. **Login**
   ```bash
   render login
   ```

3. **Deploy**
   ```bash
   render deploy
   ```

## Post-Deployment

### Custom Domain (Optional)
1. Go to your service settings
2. Click "Custom Domains"
3. Add your domain
4. Follow DNS configuration instructions

### Environment Variables
If you need to add environment variables later:
1. Go to your service settings
2. Click "Environment"
3. Add your variables
4. Save and redeploy

## Troubleshooting

### Build Fails
- Check the build logs in Render dashboard
- Ensure `package.json` has correct build script
- Verify Node version compatibility

### 404 Errors
- Check that `Publish Directory` is set to `dist`
- Verify `vite.config.ts` has correct `base` path

### Assets Not Loading
- Ensure all assets are in the `public` folder
- Check that paths are relative, not absolute

## Auto-Deploy

Render automatically deploys when you push to the `main` branch. To disable:
1. Go to service settings
2. Click "Auto-Deploy"
3. Toggle off

## Manual Redeploy

To manually trigger a redeploy:
1. Go to your service dashboard
2. Click "Manual Deploy"
3. Select branch and click "Deploy"
