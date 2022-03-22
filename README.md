## Cloning

In order to clone with the submodules use
```console
git clone --recursive https://github.com/JulesFouchy/Learn--Clean-Code-With-Cpp
```

## Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```console
cd ./Teaching-Toolbox/website
npm install
```

### Local Development

```console
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Tests

Run the tests with

```console
deno run tests.ts
```

### Deployment

The site is built and deployed automatically whenever you push to the *main* branch.
You can check that the deployment succeeded in the [actions tab of GitHub](https://github.com/JulesFouchy/Learn--Clean-Code-With-Cpp/actions), and see the live website at https://julesfouchy.github.io/Learn--Clean-Code-With-Cpp/.

## ToDo list

- Improve the grader, and give it more documentation since it is designed to be read by students. Most importantly, the "time to learn" is not a linear function of the "easiness". Easiness = 1 is bonkers hard to master.

- Add a way to add bonus points : to reward the investment, the questions asked, the overall high quality / ambition of the project, lessons that are hard but have been partially mastered like *naming*.

- write tests for the grader
- Replace easiness with difficulty, and change difficulty calculation when I compute the points for each lesson

- **Final "project"? Chess game? To see how they do when they have no guided steps at all and no correction available.**

## Things many students get wrong

- forgetting `#pragma once` in the headers
- Putting too many things in the headers; especially the declaration of functions that are only used in the .cpp. Instead they could declare them at the top of the .cpp if they still want them to be accessible in the whole .cpp and not dependant of the order they are implemented in.
- booleans: don't use 0 and 1, use true and false


## Questionnaire

- Alternance Guillaume et moi VS avoir un seul prof
- + de CMs ?
- + de quizzs ?