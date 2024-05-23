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

## Clean Code (9 / 12 pts.)

➕ *What you **should** do:*

- 🌞 Write many small functions (<LessonLink slug="write-small-functions"/>)
- 🌞 Write small classes (<LessonLink slug="design-cohesive-classes"/>)
- ❌ Write small structs (<LessonLink slug="use-structs-to-group-data"/>)
- ☁️ Use strong types (<LessonLink slug="strong-types"/>)
- ❌ Use encapsulation when appropriate (`public` / `private`) (<LessonLink slug="design-cohesive-classes"/>)
- 🌞 Use free functions as often as possible, and methods only when appropriate (<LessonLink slug="prefer-free-functions"/>)
- ☁️ <LessonLink slug="minimize-dependencies"/>

➖ *What you **shouldn't** do:*

- 🌞 Hard to understand or misleading names (<LessonLink slug="naming"/>)
- ❌ Duplicated code (<LessonLink slug="dry-dont-repeat-yourself"/>)
- 🌞 Overly complicated code
- 🌞 Global variables

## C++ Code Quality (2 / 3 pts.)

➕ *What you **should** do:*

- 🌞 Use range-based loops or algorithms, instead of raw loops (<LessonLink slug="stl-algorithms"/>)
- ☁️ Use destructors when things need to be destroyed at the end.
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
    Light lightCharacter(1, shader);
    Light lightFixed(2, shader);
    Light lightDir(3, shader);
```
Plutôt que de spécifier manuellement l'index pour chaque light, vous pouvez utiliser une variable static dans le constructeur de Light, qui incrémente à chaque fois qu'une Light est créée :
```cpp
static int next_index()
{
    static int index{0};
    index++;
    return index;
}

Light(const p6::Shader& shader)
    : index(next_index()), color(randUniform(1.0f, 1.0f), randUniform(1.0f, 1.0f), randUniform(1.0f, 1.0f)), position(0.0f, 0.0f, 0.0f), uKdLocation(0), uKsLocation(0), uShininessLocation(0), uLightPosLocation(0), uLightIntensityLocation(0)
{
    setup(shader);
}
```

```cpp
if (index == 1)
{
    uKdLocation             = glGetUniformLocation(shader.id(), "uKd");
    uKsLocation             = glGetUniformLocation(shader.id(), "uKs");
    uShininessLocation      = glGetUniformLocation(shader.id(), "uShininess");
    uLightPosLocation       = glGetUniformLocation(shader.id(), "uLightPos_vs");
    uLightIntensityLocation = glGetUniformLocation(shader.id(), "uLightIntensity");
}
else if (index == 2)
{
    uKdLocation             = glGetUniformLocation(shader.id(), "uKd2");
    uKsLocation             = glGetUniformLocation(shader.id(), "uKs2");
    uShininessLocation      = glGetUniformLocation(shader.id(), "uShininess2");
    uLightPosLocation       = glGetUniformLocation(shader.id(), "uLightPos_vs2");
    uLightIntensityLocation = glGetUniformLocation(shader.id(), "uLightIntensity2");
}
else if (index == 3)
{
    uKdLocation             = glGetUniformLocation(shader.id(), "uKd3");
    uKsLocation             = glGetUniformLocation(shader.id(), "uKs3");
    uShininessLocation      = glGetUniformLocation(shader.id(), "uShininess3");
    uLightPosLocation       = glGetUniformLocation(shader.id(), "uLightPos_vs3");
    uLightIntensityLocation = glGetUniformLocation(shader.id(), "uLightIntensity3");
}
```
Pour éviter la duplication de code :
```cpp
uKdLocation             = glGetUniformLocation(shader.id(), "uKd" + std::to_string(index));
uKsLocation             = glGetUniformLocation(shader.id(), "uKs" + std::to_string(index));
uShininessLocation      = glGetUniformLocation(shader.id(), "uShininess" + std::to_string(index));
uLightPosLocation       = glGetUniformLocation(shader.id(), "uLightPos_vs" + std::to_string(index));
uLightIntensityLocation = glGetUniformLocation(shader.id(), "uLightIntensity" + std::to_string(index));
```

```cpp
if (context.getIsLowPoly())
{
    character.draw(uMVPMatrixLocation, uMVMatrixLocation, uNormalMatrixLocation, ProjMatrix, viewMatrix, boid_lod);
    boids.draw(uMVPMatrixLocation, uMVMatrixLocation, uNormalMatrixLocation, ProjMatrix, viewMatrix, boid_lod);
}
else
{
    character.draw(uMVPMatrixLocation, uMVMatrixLocation, uNormalMatrixLocation, ProjMatrix, viewMatrix, boid);
    boids.draw(uMVPMatrixLocation, uMVMatrixLocation, uNormalMatrixLocation, ProjMatrix, viewMatrix, boid);
}
```
Plutôt que de dupliquer le code, vous pouvez faire comme ça :
```cpp
// On choisit le bon mesh en fonction du LOD
const auto& boid_mesh = context.getIsLowPoly() ? boid_lod : boid;

// On en fait le code qu'une seule fois, en utilisant la référence de mesh précédemment déterminée
character.draw(uMVPMatrixLocation, uMVMatrixLocation, uNormalMatrixLocation, ProjMatrix, viewMatrix, boid_mesh);
boids.draw(uMVPMatrixLocation, uMVMatrixLocation, uNormalMatrixLocation, ProjMatrix, viewMatrix, boid_mesh);
```

```cpp
boid.~Mesh();
decor.~Mesh();
character.~Character();
```
Pas besoin d'appeler manuellement le destructeur, c'est fait automatiquement !! C'est tout l'intérêt d'un destructeur. Ne rien écrire aurait fait exactement la même chose.

```cpp
void Boid::drawMesh(GLuint uMVPMatrixLocation, GLuint uMVMatrixLocation, GLuint uNormalMatrixLocation, glm::mat4 ProjMatrix, glm::mat4 viewMatrix, Mesh mesh) const
{
    glm::mat4 MVMatrix = viewMatrix * glm::translate(glm::mat4{1.f}, position) * glm::scale(glm::mat4{1.f}, glm::vec3(0.015f));

    glm::mat4 NormalMatrix = glm::transpose(glm::inverse(MVMatrix));

    glUniformMatrix4fv(uMVPMatrixLocation, 1, GL_FALSE, glm::value_ptr(ProjMatrix * MVMatrix));
    glUniformMatrix4fv(uMVMatrixLocation, 1, GL_FALSE, glm::value_ptr(MVMatrix));
    glUniformMatrix4fv(uNormalMatrixLocation, 1, GL_FALSE, glm::value_ptr(NormalMatrix));

    mesh.draw(position, scale, ProjMatrix, viewMatrix, uMVPMatrixLocation, uMVMatrixLocation, uNormalMatrixLocation, rotation);
}
```
Vous auriez pu faire une struct pour grouper tous les paramètres dupliqués entre Boid::drawMesh() et mesh.draw() (et aussi Character::draw() etc.).

```cpp
void Mesh::draw(glm::vec3 pos, glm::vec3 scale, glm::mat4 ProjMatrix, glm::mat4 viewMatrix, GLuint uMVPMatrixLocation, GLuint uMVMatrixLocation, GLuint uNormalMatrixLocation, float angle)
{
    // ...
    setBuffers();
    // ...
}
```
Attention vous recréez vos buffers à chaque frame !! C'est une grosse perte de performance ! (Et aussi une memory leak puisque vous ne deletez pas l'ancien buffer).

La plupart des méthodes de la classe Mesh auraient pu être privées, elles ne sont utilisées que par Mesh en interne.

