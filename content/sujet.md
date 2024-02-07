---
title: Sujet
---

# BOIDS

## Sujet

Dans ce projet, vous allez coder des *boids*, une technique très connue pour simuler des comportements de groupe comme des nuées d'oiseaux ou des bancs de poissons. Pour découvrir ce que sont les boids, [regardez cette vidéo](https://youtu.be/LltugBg4dtk) ; vous allez implémenter quelque chose de très similaire dans ce projet.

## Infos

- Ce projet sera commun avec les cours de Synthèse d'Image et de Mathématiques. Les profs des matières respectives vous donneront leurs parties du sujet.
- Ce projet se fera par groupes de 2.
  - Des groupes de 3 sont aussi possibles, mais sachez que nous seront plus exigeants et attendront un rendu plus conséquent de votre part, proportionnel à la taille de votre groupe.
  - Des groupes de 1 sont aussi possibles, mais sachez que ce sera + difficile, notamment pour faire la partie Synthèse d'Image seul.e.
- Pour ce cours de C++, j'évaluerai l'entièreté du code du projet, y compris celui de synthèse d'image et de maths.

## Consignes

- Vos boids se déplaceront dans un cube et ne pourront pas en sortir. Pour cela, deux possibilités :
  - Si leur position dépasse le cube, ils seront téléportés de l'autre côté du cube (Par exemple, pour un cube allant de -1 à 1, si le x d'un boid devient 1.2, il faudra transformer sa position x en -0.8.)
  - *Ou alors (un peu plus difficile)*: Les boids considéreront les bords du cube comme des obstacles et tenteront de les éviter. Il vous faudra probablement rajouter une règle de comportement appliquant une force aux boids pour les éloigner des obstacles.
- Vos boids suivront, *a minima*, les trois règles de base (Vous êtes libres d'en rajouter d'autres si vous le souhaitez):
  - Séparation
  - Alignement
  - Cohésion
- Vous proposerez une GUI avec la librairie [*Dear ImGui*](https://julesfouchy.github.io/p6-docs/tutorials/dear-imgui) afin de pouvoir changer les paramètres de la simulation (coefficients des différentes règles, nombre de boids, etc.). Notez que cette librairie est déjà inclue avec p6 et disponible sans avoir rien à faire ; il vous suffit de [suivre le tutoriel](https://julesfouchy.github.io/p6-docs/tutorials/dear-imgui).

## Non-Consignes

Voici des choses que nous ne vous demandons **PAS** de faire :

- On ne vous demande **PAS** d'optimiser la simulation. Vous pouvez faire autant de boucles naïves sur tous les boids que vous voulez. Optimiser ce genre de problème est compliqué (octree, BVH, etc.) et vous avez déjà suffisamment de choses à faire dans ce projet !
(Bien entendu vous pouvez le faire en bonus une fois que vous avez rempli tous les critères obligatoires du sujet, mais soyez prévenu.es que ce n'est pas ce qu'il y a de plus simple à implémenter parfaitement ! D'autant plus que je n'évalue pas votre capacité à faire de l'algorithmie avancée, mais seulement à produire du code clair. Ce n'est donc clairement pas le meilleure piste d'extension du projet si vous cherchez à améliorer votre note !).

## Attendus

[Voici la liste des choses à faire et ne pas faire dans votre projet](/evaluation). Vous serez évalué.es sur votre capacité à respecter un maximum de mes attentes et produire du code simple, compréhensible et maintenable.

## Conseils

- Nous vous recommandons de partir de ce template de projet pour bien démarrer: https://github.com/JulesFouchy/Simple-p6-Setup

- Commencez en 2D avec p6 en attendant que vous ayez les connaissances OpenGL pour faire de la 3D.

- Pour apprendre à utiliser la librairie p6 (évènements clavier / souris, dessin 2D, etc.), [lisez ces tutoriels](https://julesfouchy.github.io/p6-docs/tutorials).

- Vous pouvez utiliser la librairie *glm* pour représenter des vec2, vec3 etc. Elle est inclue automatiquement avec *p6*.

- Quand vous passerez à OpenGL pour faire votre rendu en 3D, il faudra activer le mode OpenGL de p6. Pour cela, allez dans le CMakeLists.txt de votre projet, et sous la ligne `# ---Add p6 library---` ajoutez `set(P6_RAW_OPENGL_MODE ON CACHE BOOL "")`. Puis, faites <kbd>F1</kbd> et utilisez *"CMake: Delete Cache and Reconfigure"*.

## Pour aller plus loin

Voici des consignes optionnelles que vous pouvez suivre afin d'étoffer votre projet. (Vous pouvez aussi rajouter vos propres idées). Ceci dit, avant de vous lancer dans ces nouvelles fonctionalités, n'oubliez pas que **le plus important dans l'évaluation reste d'avoir du code propre**, donc ne commencez pas à rajouter des choses si vous n'êtes pas confiant.es que ce que vous avez déjà est solide.

- Source de nourriture : Ajouter un (ou plusieurs) point vers lequel les boids seront attirés, et qui disparaît une fois que [nombre à choisir par vos soins] boids sont passés dessus. Quand une source de nourriture disparaît, une nouvelle apparaît à une position aléatoire.
- Au lieu que tous les boids aient les même paramètres de comportement, faire deux familles de boids, chacune ayant ses propres paramètres. Faites en sorte qu'il soit facile de rajouter une troisième famille dans le code si on en avait envie.
- Faire des statistiques sur la simulation :
  -  Distance totale parcourue par les boids
  -  Distance minimale entre deux boids jamais atteinte
  -  etc.
- Ajouter des obstacles en forme de cercle (ou sphère quand vous passerez en 3D) que les boids éviteront.
- Tant qu'un bouton de la souris est enfoncé, considérer la souris (ou la caméra si vous êtes en 3D) comme un obstacle.