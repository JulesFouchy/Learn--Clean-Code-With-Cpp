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

## Clean Code (7 / 12 pts.)

➕ *What you **should** do:*

- 🌞 Write many small functions (<LessonLink slug="write-small-functions"/>)
- ☁️ Write small classes (<LessonLink slug="design-cohesive-classes"/>)
- ☁️ Write small structs (<LessonLink slug="use-structs-to-group-data"/>)
- ☁️ Use strong types (<LessonLink slug="strong-types"/>)
- 🌞 Use encapsulation when appropriate (`public` / `private`) (<LessonLink slug="design-cohesive-classes"/>)
- 🌞 Use free functions as often as possible, and methods only when appropriate (<LessonLink slug="prefer-free-functions"/>)
- ☁️ <LessonLink slug="minimize-dependencies"/>

➖ *What you **shouldn't** do:*

- 🌞 Hard to understand or misleading names (<LessonLink slug="naming"/>)
- ❌ Duplicated code (<LessonLink slug="dry-dont-repeat-yourself"/>)
- 🌞 Overly complicated code
- 🌞 Global variables

## C++ Code Quality (1.5 / 3 pts.)

➕ *What you **should** do:*

- ❌ Use range-based loops or algorithms, instead of raw loops (<LessonLink slug="stl-algorithms"/>)
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

```cpp
inline void gen() { glGenVertexArrays(1, &this->id); };
```
Plutôt qu'une méthode gen(), vous auriez pu mettre ce code directement dans le constructeur. Ça vous aurait évité de devoir ensuite appeler gen() sur absolument tous les objets que vous créez.

```cpp
class IBO {
std::vector<uint32_t> indices;
inline void fill() { glBufferData(GL_ELEMENT_ARRAY_BUFFER, this->indices.size() * sizeof(uint32_t), this->indices.data(), GL_STATIC_DRAW); };
// ...
};
```
Vous n'avez pas besoin de stocker les indices dans la classe, il ne servent qu'au moment de la construction. Il aurait mieux valu passer les indices en paramètre au constructeur, qui se serait ensuite chargé de faire le code de fill().

```cpp
for (size_t i = 0; i < allBoids.size(); i++)
```
Vous auriez pu faire une boucle foreach :
```cpp
for (auto& boid : allBoids)
```

```cpp
if (this->flock[i].getRadius() == this->radiusLittleFish)
{
    texLittleFish.activate();
    texLittleFish.bind();
    this->flock[i].run(this->flock, this->separationCoeff, this->alignmentCoeff, this->cohesionCoeff, wallSize, ctx, camMVMatrix, uniMVP, uniMV, uniNormal, fishVertices);
    texLittleFish.unbind();
}
else if (this->flock[i].getRadius() == this->radiusMediumFish)
{
    texMediumFish.activate();
    texMediumFish.bind();
    this->flock[i].run(this->flock, this->separationCoeff, this->alignmentCoeff, this->cohesionCoeff, wallSize, ctx, camMVMatrix, uniMVP, uniMV, uniNormal, fishVertices);
    texMediumFish.unbind();
}
else
{
    texBigFish.activate();
    texBigFish.bind();
    this->flock[i].run(this->flock, this->separationCoeff, this->alignmentCoeff, this->cohesionCoeff, wallSize, ctx, camMVMatrix, uniMVP, uniMV, uniNormal, fishVertices);
    texBigFish.unbind();
}
```
Pour éviter de dupliquer le code vous auriez pu faire comme ça :
```cpp
// D'abord on récupère une référence vers la bonne texture
auto& texture = this->flock[i].getRadius() == this->radiusLittleFish
                  ? texLittleFish
                : this->flock[i].getRadius() == this->radiusMediumFish
                  ? texMediumFish
                  : texBigFish;

// Et ensuite on fait le code qui utilise la texture
texture.activate();
texture.bind();
this->flock[i].run(this->flock, this->separationCoeff, this->alignmentCoeff, this->cohesionCoeff, wallSize, ctx, camMVMatrix, uniMVP, uniMV, uniNormal, fishVertices);
texture.unbind();
```