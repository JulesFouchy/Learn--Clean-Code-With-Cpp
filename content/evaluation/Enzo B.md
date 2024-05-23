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
- ☁️ <LessonLink slug="minimize-dependencies"/>

➖ *What you **shouldn't** do:*

- ☁️ Hard to understand or misleading names (<LessonLink slug="naming"/>)
- 🌞 Duplicated code (<LessonLink slug="dry-dont-repeat-yourself"/>)
- 🌞 Overly complicated code
- 🌞 Global variables

## C++ Code Quality (1.5 / 3 pts.)

➕ *What you **should** do:*

- 🌞 Use range-based loops or algorithms, instead of raw loops (<LessonLink slug="stl-algorithms"/>)
- ❌ Use destructors when things need to be destroyed at the end.
- ☁️ Use `const` when appropriate (<LessonLink slug="const"/>)
- ☁️ Use lambdas when appropriate (<LessonLink slug="lambda"/>)

➖ *What you **shouldn't** do:*

- 🌞 Using `new` instead of a stack allocation or a smart pointer or a standard container (`std::vector`)
- 🌞 Forgetting `#pragma once` in your headers
- 🌞 Using `1` and `0` instead of `true` and `false` for your booleans

## Investment (2.5 / 4 pts.)

➕ *What you **should** do:*

- ☁️ Ask questions and participate in class
- ☁️ Take my feedback into account, improve your old code if need be
- ☁️ Extend your project with additional features


```cpp
struct Scene {
float cubeBaseSize = 10.f; // for reference only, do not touch
float groundBaseSize = 2.f;  // for reference only, do not touch
```
si ces valeurs ne doivent pas être changées, plutôt que de les mettre dans la struct vous auriez pu les mettre en constantes :
```cpp
static constexpr float cubeBaseSize = 10.f; 
static constexpr float groundBaseSize = 2.f;  
struct Scene {
```
Même remarque pour
```cpp
class Flock {
// ...
    std::vector<std::string> _skinList = {"_red", "_orange", "_blue", "_green", "_blue", "_grey", "_monochrome"};
```
Cette _skinList est une constante partagée par toutes les flocks, pas besoin d'en stocker une copie dans chaque Flock.

```cpp
Object3D::Object3D(const std::string& name, const std::string& vertexShaderPath, const std::string& fragmentShaderPath)
    : _model(name), _texture(name), _shader(vertexShaderPath, fragmentShaderPath)
{
    defineVBO();
    defineVAO();
};

Object3D::Object3D(const std::string& name, const std::string& vertexShaderPath, const std::string& fragmentShaderPath, const std::string& skinID, const std::string& lodID)
    : _model(name + lodID), _texture(name + skinID), _shader(vertexShaderPath, fragmentShaderPath)
{
    defineVBO();
    defineVAO();
}
```
Plutôt que de dupliquer le constructeur, vous pouvez faire en sorte que l'un appelle l'autre, en rajoutant un troisième constructeur qui prend en paramètre model_name et texture_name. Et les deux autres peuvent déléguer à celui-là.

```cpp
void Object3D::clear()
{
    glDeleteBuffers(1, &_vbo);      // Delete the vertex buffer
    glDeleteVertexArrays(1, &_vao); // Delete the vertex array
}
```
Faites plutôt un destructeur, qui sera appelé automatiquement au bon moment.

```cpp
_renderer.clearAll();
```
C'est confusant que vous utilisiez parfois le terme "clear" pour désigner une méthode qui détruit les objets, et d'autres fois pour désigner une méthode qui reset la couleur de l'écran et bind des choses.