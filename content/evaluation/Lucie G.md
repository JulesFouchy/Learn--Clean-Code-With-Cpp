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

## Tools (2 / 3 pts.)

➕ *What you **should** do:*

- 🌞 Follow [the good practices of the Git lesson](/lessons/git#good-practices)
- ☁️ Have a [.clang-format](/lessons/formatting-tool/) file, and apply it to your codebase
- ☁️ Have a [.clang-tidy](/lessons/static-analysers/) file, and fix the problems it shows you, or ask the teacher if you don't understand what the warning means or don't know how to fix it.

➖ *What you **shouldn't** do:*

- 🌞 Committing unwanted files like your *build* folder (see [.gitignore](/lessons/git#gitignore))
- 🌞 Making no commits until near the end of the semester

## Clean Code (11 / 12 pts.)

➕ *What you **should** do:*

- 🌞 Write many small functions (<LessonLink slug="write-small-functions"/>)
- 🌞 Write small classes (<LessonLink slug="design-cohesive-classes"/>)
- ☁️ Write small structs (<LessonLink slug="use-structs-to-group-data"/>)
- ☁️ Use strong types (<LessonLink slug="strong-types"/>)
- ☁️ Use encapsulation when appropriate (`public` / `private`) (<LessonLink slug="design-cohesive-classes"/>)
- ☁️ Use free functions as often as possible, and methods only when appropriate (<LessonLink slug="prefer-free-functions"/>)
- ☁️ <LessonLink slug="minimize-dependencies"/>

➖ *What you **shouldn't** do:*

- ☁️ Hard to understand or misleading names (<LessonLink slug="naming"/>)
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

## Investment (2 / 4 pts.)

➕ *What you **should** do:*

- ☁️ Ask questions and participate in class
- ☁️ Take my feedback into account, improve your old code if need be
- ☁️ Extend your project with additional features

:thumbsup:
```cpp
Object3D turtle(VaoType::Classic);
turtle
    .loadObj("assets/models/Turtle.obj")
    .loadTexture("assets/textures/turtle_texture.png")
    .setProgram(renderer, "shaders/singleObject.vs.glsl", "shaders/texture.fs.glsl")
    .setTransform(
        glm::vec3(0.0, -4.5, 0.0),
        glm::vec3(0.0),
        glm::vec3(1.0));
```
Très bonne API.

:thumbsdown:
```cpp
constexpr size_t N = 500;
```
C'est quoi N ? Un nom plus explicite aurait été mieux.

:thumbsdown:
```cpp
    auto isProgramLoaded(
        std::filesystem::path const& vert,
        std::filesystem::path const& frag
    ) const -> std::optional<size_t>;
```
Le nom donne l'impression que la fonction renvoie un booléen. Il aurait mieux valu l'appeler qqch comme `maybeProgramIndex`.

:thumbsdown:
```cpp
auto uniform0to1() -> float {
    thread_local std::default_random_engine gen{std::random_device{}()};
    thread_local auto distrib = std::uniform_real_distribution<float>{0.0, 1.0};

    return distrib(gen);
}

auto duniform0to1() -> double {
    thread_local std::default_random_engine gen{std::random_device{}()};
    thread_local auto distrib = std::uniform_real_distribution<double>{0.0, 1.0};

    return distrib(gen);
}
```
Ces deux fonctions pourraient partager le même `std::default_random_engine`, ça éviterait d'en créer trop :
```cpp
static auto random_engine() -> std::default_random_engine&
{
    thread_local std::default_random_engine gen{std::random_device{}()};
    return gen;
}

auto uniform0to1() -> float {
    thread_local auto distrib = std::uniform_real_distribution<float>{0.0, 1.0};

    return distrib(random_engine());
}

auto duniform0to1() -> double {
    thread_local auto distrib = std::uniform_real_distribution<double>{0.0, 1.0};

    return distrib(random_engine());
}
```

:thumbsdown:
```cpp
void Object3D::render(Renderer const &renderer) {
    if (!this->glProgramIndex) {
        return;
    }
```
C'est bien de générer une erreur (assert ou exception, ici une assert est plus adapté) pour vous aider à débuguer le jour où votre mesh ne s'affichera pas parce que vous avez oublié de set le programme.