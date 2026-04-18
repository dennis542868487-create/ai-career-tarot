# Deploy to Vercel

This project is ready to deploy.

## Current status
- Framework: Next.js
- Build check: passed locally with `npm run build`
- No required environment variables yet for the current skeleton MVP

## Fastest deploy path

### Option A: Vercel dashboard (recommended)
1. Push this project to a GitHub repo.
2. Go to https://vercel.com/new
3. Import the GitHub repo.
4. Framework preset should auto-detect as **Next.js**.
5. Leave build settings as default.
6. Click **Deploy**.

After deployment, Vercel will give you a public URL like:
- `https://your-project-name.vercel.app`

## If you need Git commands
Run these inside the project folder:

```bash
cd ai-career-tarot
git init
git add .
git commit -m "Initial MVP skeleton"
```

Then create a GitHub repo and connect it:

```bash
git remote add origin <YOUR_GITHUB_REPO_URL>
git branch -M main
git push -u origin main
```

## Optional project naming ideas
- career-money-tarot
- ai-career-tarot
- money-path-tarot
- next-move-tarot

## Later environment variables
You do not need these yet for first deploy, but likely later:
- `OPENAI_API_KEY`
- `OPENAI_BASE_URL` (optional)
- `OPENAI_MODEL`
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`

## Recommended next step after deploy
Once the public Vercel link works, continue with:
1. interactive 3-card draw
2. AI-generated reading API
3. email unlock flow
4. Supabase persistence
```
