# Giv's Website

## Introduction

Hey, this is my website! You will be able to know what I'm good on and how to contact me through there.

## Technology Stack

- React
- TypeScript
- Vite

## How to access?

- Thanks to NineTailed, the deploy is available [here](https://givfnz.com)
- If you want to check the source code, visit the project repo on [Gitea](https://git.pontusmail.org/GivFNZ/my-website).

## Contributions

Any contribution is welcome. If you want to test the website in your own machine to help on this, make sure you have Node.js installed, then clone the project repo and run the following commands:

### NPM

- `npm i` - Install dependencies
- `npm run dev` - Run dev server

### Bun

- `bun install` - Install dependencies
- `bun dev` - Run dev server

The development server will be available at http://localhost:5173.

### Environment Variables

**The LastFM feature is disabled, and this environment variable is not required yet.**

To run the project, you need to set up the following environment variables:

| Variable                    | Description              |
|-----------------------------|--------------------------|
| `VITE_LASTFM_API_KEY`       | Your [Last.fm API Key]() |

Create a `.env` file in the root of the project and add the required variables like so:

```env
VITE_LASTFM_API_KEY=your-lastfm-api-key-here
```

## Special Thanks

- [Aidan](https://github.com/ihatenodejs)
- [lucmsilva](https://github.com/lucmsilva651/)
- NineTailedFox

**Enjoy!**
