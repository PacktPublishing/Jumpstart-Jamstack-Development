# Jumpstart-Jamstack-Development
Hands-on JAMStack for web development, Published by Packt

_Fully customizable blog template with a React.js front-end._

Deployed from [sanity.io/create].

## What you have

- A blazing fast blog with [Gatsby.js]
- Structured content using [Sanity.io]
- Global deployment on [Netlify]

## Quick start

1. Clone this repository
2. `npm install` in the project root folder on local
3. `npm run dev` to start the studio and frontend locally
   4. Your studio should be running on [http://localhost:3333]
   5. Your frontend should be running on [http://localhost:8000]
4. `npm run build` to build to production locally

## Enable real-time content preview on development

1. Go to your [project’s API settings on manage.sanity.io] and create a token with read rights.
2. Rename `.env.development.template` to `.env.development` and paste in the token: `SANITY_READ_TOKEN="yourTokenHere"`.
3. Restart the development server (`ctrl + C` and `npm run dev`).

If you want to turn off preview you can set `watchMode: false` in gatsby-config.js. If you just want to preview published changes you can set `overlayDrafts: false` in gatsby-config.js.

## Deploy changes

Netlify automatically deploys new changes commited to master on GitHub. If you want to change deployment branch, do so in [build & deploy settings on Netlify].

## Stuck? Get help

[(img)]

Join [Sanity’s developer community] or ping us [on twitter].

