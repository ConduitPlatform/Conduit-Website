<p align="center">
<br>
<a href="https://getconduit.dev" target="_blank"><img src="https://getconduit.dev/conduitLogo.svg" alt="logo"/></a>
<br/>
<strong>The only Backend you'll ever need. Written in NodeJS, works with any stack</strong>
</p>

# Conduit Website

This repo contains the website and docs implementations for [Conduit](https://github.com/ConduitPlatform/Conduit).
Check out our project's [website](https://getconduit.dev/) and [docs](https://getconduit.dev/docs/overview/intro).

Feel free to request improvements and submit fixes. 

# Running from source 🔨

Build once and serve:

``` bash
yarn --frozen-lockfile
npx lerna run build
yarn --cwd ./documentation serve
yarn --cwd ./www start
```

Live rebuild and serve on modification:

``` bash
yarn --frozen-lockfile
yarn --cwd ./documentation start
yarn --cwd ./www dev
```
