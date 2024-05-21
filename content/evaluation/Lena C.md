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

## Tools (2.5 / 3 pts.)

➕ *What you **should** do:*

- 🌞 Follow [the good practices of the Git lesson](/lessons/git#good-practices)
- 🌞 Have a [.clang-format](/lessons/formatting-tool/) file, and apply it to your codebase
- 🌞 Have a [.clang-tidy](/lessons/static-analysers/) file, and fix the problems it shows you, or ask the teacher if you don't understand what the warning means or don't know how to fix it.

➖ *What you **shouldn't** do:*

- ❌ Committing unwanted files like your *build* folder (see [.gitignore](/lessons/git#gitignore))
- 🌞 Making no commits until near the end of the semester

## Clean Code (6.5 / 12 pts.)

➕ *What you **should** do:*

- ☁️ Write many small functions (<LessonLink slug="write-small-functions"/>)
- 🌞 Write small classes (<LessonLink slug="design-cohesive-classes"/>)
- ❌ Write small structs (<LessonLink slug="use-structs-to-group-data"/>)
- ☁️ Use strong types (<LessonLink slug="strong-types"/>)
- 🌞 Use encapsulation when appropriate (`public` / `private`) (<LessonLink slug="design-cohesive-classes"/>)
- ☁️ Use free functions as often as possible, and methods only when appropriate (<LessonLink slug="prefer-free-functions"/>)
- ☁️ <LessonLink slug="minimize-dependencies"/>

➖ *What you **shouldn't** do:*

- 🌞 Hard to understand or misleading names (<LessonLink slug="naming"/>)
- ☁️ Duplicated code (<LessonLink slug="dry-dont-repeat-yourself"/>)
- 🌞 Overly complicated code
- 🌞 Global variables

## C++ Code Quality (1.5 / 3 pts.)

➕ *What you **should** do:*

- 🌞 Use range-based loops or algorithms, instead of raw loops (<LessonLink slug="stl-algorithms"/>)
- ❌ Use destructors when things need to be destroyed at the end.
- ❌ Use `const` when appropriate (<LessonLink slug="const"/>)
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
void Boid::draw(GLuint vao, GLsizei vertexCount, glm::vec3 scale, float rotation, glm::mat4 viewMatrix, glm::mat4 ProjMatrix, glm::mat4& NormalMatrix, ObjectProgram& ObjectProgram, GLuint textureID, float coefLight, int typeLight)
{
    renderObject(vao, vertexCount, position, scale, rotation, viewMatrix, ProjMatrix, NormalMatrix, ObjectProgram, textureID, coefLight, typeLight);
}
```
Vous auriez pu grouper tous ces paramètres dans une struct, pour éviter de les avoir dupliqués entre `Boid::draw()` et `renderObject()`.

```cpp
if (falling == true)
```
Préférez écrire plus simplement :
```cpp
if (falling)
```

```cpp
glm::vec3 averageAngle(0.0f, 0.0f, 0.0f);
```
Le nom de cette variable est bizarre, car un vec3 ne peut pas être un angle.

```cpp
    Model Carl;
    Carl.load_model("assets/models/carl_doug.obj");
```
Plutôt que de faire une méthode load_model() vous auriez dû faire ça dans le constructeur.

```cpp
    glDeleteBuffers(1, &vboBench);
    glDeleteBuffers(1, &vboBoid);
    glDeleteBuffers(1, &vboFloor);
    glDeleteBuffers(1, &vboCube);
    glDeleteBuffers(1, &vboBoidCube);
    glDeleteBuffers(1, &vboCarl);
    glDeleteBuffers(1, &vboHouse3D);
    glDeleteBuffers(1, &vboRocks);
    glDeleteBuffers(1, &vboTree1);
    glDeleteBuffers(1, &vboTree2);
```
Vous auriez pu faire une classe VBO avec un destructeur qui appelle glDeleteBuffers automatiquement.

```cpp
switch (loi)
{
case 1: // Loi binomiale de Bernoulli
    return p * (1 - p);
case 2: // Loi exponentielle
    return 1 / (p * p);
case 3: // Loi uniforme
    return ((q - p) * (q - p)) / 12;
case 4: // Loi normale
    return q * q;
case 5: // Loi de Laplace
    return 2 * q * q;
default:
    return -1; // Type de loi invalide
}
```
Vous auriez pu utiliser un enum :
```cpp
enum class Law{
    Binomiale,
    Exponentielle,
    Uniforme,
    Normale,
    Laplace,
};
float esperance(Law loi, float p, float q)
{
    switch (loi)
    {
    case Law::Binomiale: 
        return p * (1 - p);
    case Law::Exponentielle: 
        return 1 / (p * p);
    case Law::Uniforme: 
        return ((q - p) * (q - p)) / 12;
    case Law::Normale: 
        return q * q;
    case Law::Laplace: 
        return 2 * q * q;
    default:
        return -1; // Type de loi invalide
    }
}
```