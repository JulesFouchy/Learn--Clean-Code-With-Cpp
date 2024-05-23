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
- ☁️ Write small structs (<LessonLink slug="use-structs-to-group-data"/>)
- 🌞 Use strong types (<LessonLink slug="strong-types"/>)
- 🌞 Use encapsulation when appropriate (`public` / `private`) (<LessonLink slug="design-cohesive-classes"/>)
- 🌞 Use free functions as often as possible, and methods only when appropriate (<LessonLink slug="prefer-free-functions"/>)
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
- ❌ Use `const` when appropriate (<LessonLink slug="const"/>)
- 🌞 Use lambdas when appropriate (<LessonLink slug="lambda"/>)

➖ *What you **shouldn't** do:*

- 🌞 Using `new` instead of a stack allocation or a smart pointer or a standard container (`std::vector`)
- 🌞 Forgetting `#pragma once` in your headers
- 🌞 Using `1` and `0` instead of `true` and `false` for your booleans

## Investment (4 / 4 pts.)

➕ *What you **should** do:*

- 🌞 Ask questions and participate in class
- ☁️ Take my feedback into account, improve your old code if need be
- 🌞 Extend your project with additional features

```cpp
auto get_stats_force = [&spawner] {
    switch (which_force) {
    case AVOID:
        return spawner.stats().forces.avoid;
    case MATCH:
        return spawner.stats().forces.match;
    case CENTER:
        return spawner.stats().forces.center;
    case BIAS:
        return spawner.stats().forces.bias;
    }
    return std::vector<float>();
};
```
N'oublie pas les const ! C'est un des gros avantages des IIFE, de pouvoir avoir une variable const qui est le résultat d'un switch
```cpp
const auto get_stats_force = [&spawner] {
    // ...
};
```

```cpp
void Boid::setParameters(const BoidForceParameters& forces) {
    _avoid_force = forces.avoid;
    _match_force = forces.match;
    _center_force = forces.center;
    _bias_force = forces.bias;
}
```
Si les forces étaient aussi stockées sous forme de struct dans la classe Boid, tu aurais juste à faire
```cpp
void Boid::setParameters(const BoidForceParameters& forces) {
    _forces = forces;
}
```