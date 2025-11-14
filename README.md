This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Quick deploy steps

- **Via Vercel dashboard:** Push your repo to GitHub (or GitLab/Bitbucket) and import the project in the Vercel dashboard. Vercel will detect this as a Next.js app and use `npm run build` automatically.
- **Via Vercel CLI:** Install the CLI and run a one-off deploy:

```bash
npm i -g vercel
vercel login
vercel --prod
```

### Local build verification

Run the production build locally to verify there are no build-time errors before deploying:

```bash
npm run build
```

If you encounter build errors related to Turbopack, try building without Turbopack by updating the `build` script in `package.json` to `next build` (remove `--turbopack`).

### Environment variables

- Add any required environment variables in the Vercel project settings after import, or set them via the Vercel CLI with `vercel env add`.

### Notes

- This repo includes a minimal `vercel.json` at the project root for future configuration.
- If you want zero-configuration previews and automatic deployments on push, connect your Git provider in the Vercel dashboard.
