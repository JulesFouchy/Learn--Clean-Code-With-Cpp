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

## Thoughts

---

En fait c'est bien que tout le monde ait pris connaissance des lessons de niveau 1 et 2 assez rapidement ; ça permet de faire des quizz, d'en rediscuter, de s'en servir comme base de discussion pour faire des remarques / issues etc.

Peut-être quil faudrait les faire en CM sur les 1 ou 2 premières séances.

---
DRY = The change happens in one single place
SRP = Each component has only one reason to change

=> Two sides of the same coin: together they mean that components should be a small coherent unit

---

## Conclusion première année 2022-2023

Autonomie extrêmement appréciée. Des petits points de temps en temps ne font pas de mal, mais "à condition d'être rapide et une notion à la fois".

TP Noughts & Crosses peut-être un peu trop dur. Notament les partie maths pour convertir entre mouse coord et position dans la grid ont bloqué bcp de monde. Peut-être avoir un TP avant pour apprendre à utiliser p6?

Essayer de faire plus de liens entre TPs et cours, pointer vers les notions qui vont bien au bon moment.

Trouver l'occasion dans les TPs de faire des "cohesive classes".

Les quizzs c'était cool

Système de notation démotivant: on ne voit pas assez sa progression

Points forts: cours clair, site au top

Certainses parties du cours mériteraient d'être au S1 ou 2 ou 3, ça aide pour les gros projets genre OpenGL

C'était bien d'avoir un cours "chill" pour revoir les notions

Section Progress : mitigé: la moitiié l'adorent, l'autre moitié ne l'ont pas utilisé. 

C'est top d'avoir deux profs. Même si parfois galère si l'un ne sait pas répondre aux questions.

Peut-être focus un peu moins sur clean code et être déjà content que les gens pratiquent et s'en sortent. Pour pas mal de gens qui sont pas hyper chauds en prog ça représente déjà beaucoup, et actuellement ce n'est pas du tout évalué dans le cours.

Trop chiant pour moi de track les leçons lues.

I messed up the "1 single project" feel of the exercises. They are more or less independent.


Other TP idea, to intro p6, easier than Noughts & Crosses: balls go in a straight line in random directions, and you must click on them to destroy them. It gives you the opportunity to make a class for balls (and one for BallsManager ?).

## TODO

- make the lessons sorted again
- Decide what these "coefficient"s in the progress section mean, and what is the coefficient for each section. (NB: students probably prefre to see points on 20. BUT its important to remember than there can be negative points.)