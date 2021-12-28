# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Tests

Run the tests with

```bash
deno run tests.ts
```

## TODO

Improve the grader, and give it more documentation since it is designed to be read by students. Most importantly, the "time to learn" is not a linear function of the "easiness". Easinnes = 1 is bonkers hard to master.

Add a way to add bonus points : to reward the investment, the questions asked, the overall high quality / ambition of the project, lessons that are hard but have been partially mastered like *naming*.

Fix the errors in the browser console

TODO 
- remove ThoughtsonTeaching
- write tests for the grader
- retrieve my info from json once Docusaurus supports async