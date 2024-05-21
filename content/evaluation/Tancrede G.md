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

## Clean Code (7.5 / 12 pts.)

➕ *What you **should** do:*

- ☁️ Write many small functions (<LessonLink slug="write-small-functions"/>)
- 🌞 Write small classes (<LessonLink slug="design-cohesive-classes"/>)
- ☁️ Write small structs (<LessonLink slug="use-structs-to-group-data"/>)
- ☁️ Use strong types (<LessonLink slug="strong-types"/>)
- 🌞 Use encapsulation when appropriate (`public` / `private`) (<LessonLink slug="design-cohesive-classes"/>)
- ☁️ Use free functions as often as possible, and methods only when appropriate (<LessonLink slug="prefer-free-functions"/>)
- ☁️ <LessonLink slug="minimize-dependencies"/>

➖ *What you **shouldn't** do:*

- 🌞 Hard to understand or misleading names (<LessonLink slug="naming"/>)
- 🌞 Duplicated code (<LessonLink slug="dry-dont-repeat-yourself"/>)
- 🌞 Overly complicated code
- 🌞 Global variables

## C++ Code Quality (2.5 / 3 pts.)

➕ *What you **should** do:*

- 🌞 Use range-based loops or algorithms, instead of raw loops (<LessonLink slug="stl-algorithms"/>)
- 🌞 Use destructors when things need to be destroyed at the end.
- ☁️ Use `const` when appropriate (<LessonLink slug="const"/>)
- ☁️ Use lambdas when appropriate (<LessonLink slug="lambda"/>)

➖ *What you **shouldn't** do:*

- 🌞 Using `new` instead of a stack allocation or a smart pointer or a standard container (`std::vector`)
- 🌞 Forgetting `#pragma once` in your headers
- 🌞 Using `1` and `0` instead of `true` and `false` for your booleans

## Investment (3 / 4 pts.)

➕ *What you **should** do:*

- ☁️ Ask questions and participate in class
- ☁️ Take my feedback into account, improve your old code if need be
- ☁️ Extend your project with additional features



```cpp
    float posX;
    float posY;
    float posZ;
```
Vous auriez pû utiliser un glm::vec3, ça vous aurait simplifié la vie ! Par exemple au lieu de faire
```cpp
    posX += (velocityX * ctx.delta_time()) * speedFactor;
    posY += (velocityY * ctx.delta_time()) * speedFactor;
    posZ += (velocityZ * ctx.delta_time()) * speedFactor;
```
vous auriez pû faire
```cpp
    pos += (velocity * ctx.delta_time()) * speedFactor;
```

```cpp
bool  oscillationDirection = true; // true pour une augmentation, false pour une diminution
```
Si on a besoin d'un commentaire pour comprendre cette variable, c'est qu'elle mériterait d'être mieux nommée. Par exemple : `oscillationsDoIncrease`. Ou alors carrément faire un enum :
```cpp
enum class OscillationDirection
{
    Increase,
    Decrease,
}

OscillationDirection  oscillationDirection = OscillationDirection::Increase;
```

```cpp
    void setLightIntensity(unsigned int index, float intensity)
    {
        if (index < lights.size())
        {
            lights[index].intensity = intensity;
        }
    }
```
Ça peut être bien de remonter une erreur quand l'index est invalide (via une assert, une exception, etc., au choix), plutôt que de silencieusement ne rien faire. Ça vous évitera de passer une heure à debuguer un `setLightIntensity()` qui ne fait rien, tout ça pour vous rendre compte à la fin que c'était juste l'index qui n'était pas bon.

