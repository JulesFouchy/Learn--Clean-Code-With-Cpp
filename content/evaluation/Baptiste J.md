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

## Clean Code (10 / 12 pts.)

➕ *What you **should** do:*

- 🌞 Write many small functions (<LessonLink slug="write-small-functions"/>)
- 🌞 Write small classes (<LessonLink slug="design-cohesive-classes"/>)
- 🌞 Write small structs (<LessonLink slug="use-structs-to-group-data"/>)
- ☁️ Use strong types (<LessonLink slug="strong-types"/>)
- 🌞 Use encapsulation when appropriate (`public` / `private`) (<LessonLink slug="design-cohesive-classes"/>)
- 🌞 Use free functions as often as possible, and methods only when appropriate (<LessonLink slug="prefer-free-functions"/>)
- 🌞 <LessonLink slug="minimize-dependencies"/>

➖ *What you **shouldn't** do:*

- 🌞 Hard to understand or misleading names (<LessonLink slug="naming"/>)
- ☁️ Duplicated code (<LessonLink slug="dry-dont-repeat-yourself"/>)
- 🌞 Overly complicated code
- 🌞 Global variables

## C++ Code Quality (2.5 / 3 pts.)

➕ *What you **should** do:*

- 🌞 Use range-based loops or algorithms, instead of raw loops (<LessonLink slug="stl-algorithms"/>)
- ☁️ Use destructors when things need to be destroyed at the end.
- 🌞 Use `const` when appropriate (<LessonLink slug="const"/>)
- ☁️ Use lambdas when appropriate (<LessonLink slug="lambda"/>)

➖ *What you **shouldn't** do:*

- 🌞 Using `new` instead of a stack allocation or a smart pointer or a standard container (`std::vector`)
- 🌞 Forgetting `#pragma once` in your headers
- 🌞 Using `1` and `0` instead of `true` and `false` for your booleans

## Investment (3 / 4 pts.)

➕ *What you **should** do:*

- 🌞 Ask questions and participate in class
- ☁️ Take my feedback into account, improve your old code if need be
- ☁️ Extend your project with additional features

:thumbsdown:
```cpp
    if (position.x <= params.bounds.x[0] + params.bounds_force_range)
    {
        float approach            = position.x - params.bounds.x[0];
        float approach_normalised = approach / params.bounds_force_range;
        velocity += glm::vec3(map_to_max_speed(approach_normalised, params.max_speed), 0, 0);
    }

    if (position.x >= params.bounds.x[1] - params.bounds_force_range)
    {
        float approach            = params.bounds.x[1] - position.x;
        float approach_normalised = approach / params.bounds_force_range;
        velocity -= glm::vec3(map_to_max_speed(approach_normalised, params.max_speed), 0, 0);
    }

    if (position.y <= params.bounds.y[0] + params.bounds_force_range)
    {
        float approach            = position.y - params.bounds.y[0];
        float approach_normalised = approach / params.bounds_force_range;
        velocity += glm::vec3(0, map_to_max_speed(approach_normalised, params.max_speed), 0);
    }

    if (position.y >= params.bounds.y[1] - params.bounds_force_range)
    {
        float approach            = params.bounds.y[1] - position.y;
        float approach_normalised = approach / params.bounds_force_range;
        velocity -= glm::vec3(0, map_to_max_speed(approach_normalised, params.max_speed), 0);
    }

    if (position.z <= params.bounds.z[0] + params.bounds_force_range)
    {
        float approach            = position.z - params.bounds.z[0];
        float approach_normalised = approach / params.bounds_force_range;
        velocity += glm::vec3(0, 0, map_to_max_speed(approach_normalised, params.max_speed));
    }

    if (position.z >= params.bounds.z[1] - params.bounds_force_range)
    {
        float approach            = params.bounds.z[1] - position.z;
        float approach_normalised = approach / params.bounds_force_range;
        velocity -= glm::vec3(0, 0, map_to_max_speed(approach_normalised, params.max_speed));
    }
```
Beaucoup de code dupliqué.

:thumbsdown:
```cpp
GLuint texture_id;
```
Vous auriez faire une classe wrapper pour Texture, comme vous l'avez fait pour VAO et VBO. Ça vous aurait évité d'oublier de détruire la texture dans le destructeur de Mesh.

:thumbsup:
```cpp
{
    add_uniform_variable("uMVPMatrix");
    add_uniform_variable("uMVMatrix");
    add_uniform_variable("uNormalMatrix");

    // add the texture uniform
    add_uniform_variable("uText");

    // add the light uniform
    add_uniform_variable("uKd");
    add_uniform_variable("uKs");
    add_uniform_variable("uShininess");

    add_light_uniforms(0);
    add_light_uniforms(1);
    add_light_uniforms(2);

    setup_mesh();
}
```
C'est très bien d'avoir fait des fonctions pour simplifier l'écriture de votre constructeur

```cpp
void Mesh::change_mesh(const std::filesystem::path& obj_path, const std::filesystem::path& texture_path)
```
Ce n'est pas idéal de reloader le mesh à chaque fois que vous voulez en changer, car ça prend du temps. Il aurait été plus performant de loader à l'avance tous les meshs que vous comptez utiliser, et de juste choisir le mesh à utiliser en fonction d'un booléen, ou d'un pointeur vers le mesh courant.