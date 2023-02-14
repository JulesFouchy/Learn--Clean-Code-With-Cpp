---
title: Sujet
---

# BOIDS

## Sujet

Dans ce projet, vous allez coder des *boids*, une technique très connue pour simuler des comportements de groupe comme des nuées d'oiseaux ou des bancs de poissons. Pour découvrir ce que sont les boids, [regardez cette vidéo](https://youtu.be/LltugBg4dtk) ; vous allez implémenter quelque chose de très similaire dans ce projet.

## Consignes

- Vos boids se déplaceront dans un cube et ne pourront pas en sortir. Pour cela, deux possibilités :
  - Si leur position dépasse le cube, ils seront téléportés de l'autre côté du cube (Par exemple, pour un cube allant de -1 à 1, si le x d'un boid devient 1.2, il faudra transformer sa position x en -0.8.)
  - *Ou alors (un peu plus difficile)*: Les boids considéreront les bords du cube comme des obstacles et tenteront de les éviter. Il vous faudra probablement rajouter une règle de comportement appliquant une force aux boids pour les éloigner des obstacles.
- Vos boids suivront, *a minima*, les trois règles de base (Vous êtes libres d'en rajouter d'autres si vous le souhaitez):
  - Séparation
  - Alignement
  - Cohésion
- Vous proposerez une GUI avec la librairie [*Dear ImGui*](https://julesfouchy.github.io/p6-docs/tutorials/dear-imgui) afin de pouvoir changer les paramètres de la simulation (coefficients des différentes règles, nombre de boids, etc.). Notez que cette librairie est déjà inclue avec p6 et disponible sans avoir rien à faire ; il vous suffit de [suivre le tutoriel](https://julesfouchy.github.io/p6-docs/tutorials/dear-imgui).

## Attendus

Voici la liste des choses à faire et ne pas faire dans votre projet: https://julesfouchy.github.io/Learn--Clean-Code-With-Cpp/progress/. Vous serez évalué.e.s sur votre capacité à respecter un maximum de mes attentes et produire du code simple, compréhensible et maintenable.

## Conseils

- Nous vous recommandons de partir de ce template de projet pour bien démarrer: https://github.com/JulesFouchy/Simple-p6-Setup

- Commencez en 2D avec p6 en attendant que vous ayez les connaissances OpenGL pour faire de la 3D.

- Faites les choses au plus simple pour commencer. Vous aurez tout le temps par la suite de revisiter votre code pour le conformer aux exigeances de qualité que nous verrons dans ce cours.

## Pour aller plus loin

Voici des consignes optionnelles que vous pouvez suivre afin d'étoffer votre projet. (Vous pouvez aussi rajouter vos propres idées). Ceci dit, avant de vous lancer dans ces nouvelles fonctionalités, n'oubliez pas que **le plus important dans l'évaluation reste d'avoir du code propre**, donc ne commencez pas à rajouter des choses si vous n'êtes pas confiant.e.s que ce que vous avez déjà est solide.

- Source de nourriture : Ajouter un (ou plusieurs) point vers lequel les boids seront attirés, et qui disparaît une fois que [nombre à choisir par vos soins] boids sont passés dessus. Quand une source de nourriture disparaît, une nouvelle apparaît à une position aléatoire.
- Au lieu que tous les boids aient les même paramètres de comportement, faire deux familles de boids, chacune ayant ses propres paramètres. Faites en sorte qu'il soit facile de rajouter une troisième famille dans le code si on en avait envie.
- Faire des statistiques sur la simulation :
  -  Distance totale parcourue par les boids
  -  Distance minimale entre deux boids jamais atteinte
  -  etc.
- Ajouter des obstacles en forme de cercle (ou sphère quand vous passerez en 3D) que les boids éviteront.
- Tant qu'un bouton de la souris est enfoncé, considérer la souris (ou la caméra si vous êtes en 3D) comme un obstacle.