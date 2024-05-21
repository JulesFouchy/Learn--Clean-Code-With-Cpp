import StudentsDropdown from "@site/components/evaluation/StudentsDropdown"
import LessonLink from "@site/components/LessonLink"

<StudentsDropdown/>

<br/>

# Evaluation

:::tip CAPTIONS
☁️ > I haven't seen enough of your code yet to tell if you are doing well.<br/>
🌞 > You are doing great.<br/>
🌈 > You are doing amazing.<br/>
❌ > I am not happy and you should prioritize working on that point.
:::

## Tools (3 / 3 pts.)

➕ *What you **should** do:*

- 🌞 Follow [the good practices of the Git lesson](/lessons/git#good-practices)
- 🌞 Have a [.clang-format](/lessons/formatting-tool/) file, and apply it to your codebase
- 🌞 Have a [.clang-tidy](/lessons/static-analysers/) file, and fix the problems it shows you, or ask the teacher if you don't understand what the warning means or don't know how to fix it.

➖ *What you **shouldn't** do:*

- 🌞 Committing unwanted files like your *build* folder (see [.gitignore](/lessons/git#gitignore))
- 🌞 Making no commits until near the end of the semester

## Clean Code (11 / 12 pts.)

➕ *What you **should** do:*

- 🌞 Write many small functions (<LessonLink slug="write-small-functions"/>)
- 🌞 Write small classes (<LessonLink slug="design-cohesive-classes"/>)
- 🌞 Write small structs (<LessonLink slug="use-structs-to-group-data"/>)
- ☁️ Use strong types (<LessonLink slug="strong-types"/>)
- 🌞 Use encapsulation when appropriate (`public` / `private`) (<LessonLink slug="design-cohesive-classes"/>)
- 🌞 Use free functions as often as possible, and methods only when appropriate (<LessonLink slug="prefer-free-functions"/>)
- ☁️ <LessonLink slug="minimize-dependencies"/>

➖ *What you **shouldn't** do:*

- ☁️ Hard to understand or misleading names (<LessonLink slug="naming"/>)
- ☁️ Duplicated code (<LessonLink slug="dry-dont-repeat-yourself"/>)
- 🌞 Overly complicated code
- 🌞 Global variables

## C++ Code Quality (3 / 3 pts.)

➕ *What you **should** do:*

- 🌞 Use range-based loops or algorithms, instead of raw loops (<LessonLink slug="stl-algorithms"/>)
- 🌞 Use destructors when things need to be destroyed at the end.
- 🌞 Use `const` when appropriate (<LessonLink slug="const"/>)
- ☁️ Use lambdas when appropriate (<LessonLink slug="lambda"/>)

➖ *What you **shouldn't** do:*

- 🌞 Using `new` instead of a stack allocation or a smart pointer or a standard container (`std::vector`)
- 🌞 Forgetting `#pragma once` in your headers
- 🌞 Using `1` and `0` instead of `true` and `false` for your booleans

## Investment (2 / 4 pts.)

➕ *What you **should** do:*

- ☁️ Ask questions and participate in class
- ☁️ Take my feedback into account, improve your old code if need be
- ☁️ Extend your project with additional features

:thumbsup:
```cpp
if (coeffs.isLowPoly)
{
    star_boid_low.change_color(b.get_color());
    star_boid_low.set_position(b.get_position());
    boids_program.render_game_object(star_boid_low, view_matrix, proj_matrix);
}
else
{
    star_boid.change_color(b.get_color());
    star_boid.set_position(b.get_position());
    boids_program.render_game_object(star_boid, view_matrix, proj_matrix);
}
```
C'est très bien d'avoir loadé à l'avance tous les meshs possibles pour le LOD (ça économise des performances, plutôt que de changer le mesh à chaque fois que le LOD change).
:thumbsdown:
Pour éviter la duplication de code, vous auriez pu faire comme ceci :
```cpp
// D'abord on choisit le bon objet
const auto& star = coeffs.isLowPoly ? star_boid_low : star_boid;
// Puis on fait le code potentiellement long et compliqué 
star.change_color(b.get_color());
star.set_position(b.get_position());
boids_program.render_game_object(star, view_matrix, proj_matrix);
```

:thumbsdown:
```cpp
set_factors({1.0f, 1.0f, 1.0f}, {0.5f, 0.5f, 0.5f}, 64.0f);
```
Le nom de cette fonction n'est pas clair du tout ! `factor` c'est un terme ultra générique ! `set_material` ou `set_lighting_factors` aurait été mieux.