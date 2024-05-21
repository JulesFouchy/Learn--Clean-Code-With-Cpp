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

## Clean Code (6 / 12 pts.)

➕ *What you **should** do:*

- ☁️ Write many small functions (<LessonLink slug="write-small-functions"/>)
- ☁️ Write small classes (<LessonLink slug="design-cohesive-classes"/>)
- ☁️ Write small structs (<LessonLink slug="use-structs-to-group-data"/>)
- ☁️ Use strong types (<LessonLink slug="strong-types"/>)
- ❌ Use encapsulation when appropriate (`public` / `private`) (<LessonLink slug="design-cohesive-classes"/>)
- ☁️ Use free functions as often as possible, and methods only when appropriate (<LessonLink slug="prefer-free-functions"/>)
- ☁️ <LessonLink slug="minimize-dependencies"/>

➖ *What you **shouldn't** do:*

- 🌞 Hard to understand or misleading names (<LessonLink slug="naming"/>)
- ❌ Duplicated code (<LessonLink slug="dry-dont-repeat-yourself"/>)
- ☁️ Overly complicated code
- ☁️ Global variables

## C++ Code Quality (2 / 3 pts.)

➕ *What you **should** do:*

- 🌞 Use range-based loops or algorithms, instead of raw loops (<LessonLink slug="stl-algorithms"/>)
- 🌞 Use destructors when things need to be destroyed at the end.
- ❌ Use `const` when appropriate (<LessonLink slug="const"/>)
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
Object objBoid;
objBoid.setInputfile("jellyfishvf");
objBoid.load();
```
Ça aurait été mieux de faire tout ça dans le constructeur de Object. Ça évite de le dupliquer à chaque fois qu'on fait un Object :
```cpp
Object objBoid("jellyfishvf");
```

:thumbsdown:
Ça aurait été bien d'alléger le *main()* en rangeant le code dans diverses classes / fonctions.

:thumbsup:
```cpp
if (LOD)
{
    vaoLowBoid.bind();
    textureLowBoid.send(uTexture);
    textureLowBoid.bind();
}
else
{
    vaoBoid.bind();
    textureBoid.send(uTexture);
    textureBoid.bind();
};
```
C'est très bien d'avoir loadé à l'avance tous les meshs possibles pour le LOD (ça économise des performances, plutôt que de changer le mesh à chaque fois que le LOD change).
:thumbsdown:
Pour éviter la duplication de code, tu aurais pu faire comme ceci :
```cpp
// D'abord on choisit le bon vao et la bonne texture
const auto& vao     = LOD ? vaoLowBoid : vaoBoid;
const auto& texture = LOD ? textureLowBoid : textureBoid;
// Puis on fait le code potentiellement long et compliqué 
vao.bind();
texture.send(uTexture);
texture.bind();
```

:thumbsdown:
```cpp
public:
    // default constructor
    GroupBoid();
    explicit GroupBoid(int nbrBoid);

    /*METHODS*/

    void                       addBoid(Boid&);
    void                       addBoid(int nbr);
    void                       removeBoid(int nbr);
    void                       moveBoids(float cohesion, float separation, float forceCohesion, float forceSeparation, float mur, float forceMur, float alignement, float forceAlignement);
    std::vector<Boid>          getGroup();
    int                        getSize();
    glm::vec<DIMENSION, float> wallForce(Boid boid, float posWall, int coord, float rayonMur, float forceMur);
    glm::vec<DIMENSION, float> separationForce(glm::vec<DIMENSION, float> vector, float distance, float rayonSeparation, float forceSeparation);
    glm::vec<DIMENSION, float> cohesionForce(glm::vec<DIMENSION, float> vector, float distance, float rayonCohesion, float forceCohesion);
```
La plupart de ces méthodes peuvent être privées, elles ne sont utilisées qu'en interne par moveBoids().

:thumbsup:
```cpp
const int coordX = 0;
const int coordY = 1;
const int coordZ = 2;
```
C'est très bien d'avoir fait ces alias !

:thumbsdown:
```cpp
void GroupBoid::addBoid(Boid& boid)
```
Tu aurais pû mettre la référence const.

:thumbsdown:
```cpp
int GroupBoid::getSize()
{
    int size = 0;
    for (Boid& boid : group)
    {
        size++;
    }
    return size;
}
```
Tu aurais pû utiliser la méthode size() de std::vector !
```cpp
int GroupBoid::getSize()
{
    return static_cast<int>(group.size()); // Conversion vers int car group.size() retourne un size_t. Ou alors (mieux) on aurait pû dire que la méthode getSize() retourne un size_t et non un int.
}
```