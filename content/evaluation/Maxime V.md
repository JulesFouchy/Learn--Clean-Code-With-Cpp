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
- ❌ Have a [.clang-format](/lessons/formatting-tool/) file, and apply it to your codebase
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
- ☁️ Use free functions as often as possible, and methods only when appropriate (<LessonLink slug="prefer-free-functions"/>)
- ☁️ <LessonLink slug="minimize-dependencies"/>

➖ *What you **shouldn't** do:*

- ☁️ Hard to understand or misleading names (<LessonLink slug="naming"/>)
- ☁️ Duplicated code (<LessonLink slug="dry-dont-repeat-yourself"/>)
- 🌞 Overly complicated code
- 🌞 Global variables

## C++ Code Quality (2 / 3 pts.)

➕ *What you **should** do:*

- 🌞 Use range-based loops or algorithms, instead of raw loops (<LessonLink slug="stl-algorithms"/>)
- ☁️ Use destructors when things need to be destroyed at the end.
- ☁️ Use `const` when appropriate (<LessonLink slug="const"/>)
- ☁️ Use lambdas when appropriate (<LessonLink slug="lambda"/>)

➖ *What you **shouldn't** do:*

- ☁️ Using `new` instead of a stack allocation or a smart pointer or a standard container (`std::vector`)
- ☁️ Forgetting `#pragma once` in your headers
- ☁️ Using `1` and `0` instead of `true` and `false` for your booleans

## Investment (3 / 4 pts.)

➕ *What you **should** do:*

- ☁️ Ask questions and participate in class
- ☁️ Take my feedback into account, improve your old code if need be
- ☁️ Extend your project with additional features

```cpp
inline glm::vec3 get_position() { return m_position; };
```
Cette méthode peut-être marquée `const`:
```cpp
inline glm::vec3 get_position() const { return m_position; };
```

```cpp
if(m_position.x > 45) m_position.x = -45;
```
Évitez d'hardcoder la taille du cube, surtout qu'elle est utilisée à la fois dans l'arpenteur et dans les boids. Faites plutôt une variable dans un .hpp que vous pouvez inclure là où vous en avez besoin.

```cpp
void Boid::update(float dt, float aspect_ratio, 
std::vector<Boid> boids, float avoidance_multiplicator, float alignement_multiplicator, float centering_multiplicator)
{
    glm::vec3 force = compute_forces(boids, avoidance_multiplicator, alignement_multiplicator, centering_multiplicator);
```
Vous pouvez faire une struct pour grouper les différents multiplicator. Comme ça le jour où vous voudrez en rajouter un, il suffira de changer la struct, plutôt que de devoir changer la signature de toutes les fonctions qui utilisent ces multiplicators (update(), compute_forces(), etc)

```cpp
    value.x = -2*velocity.x;
    value.y = -2*velocity.y;
    value.z = -2*velocity.z;
```
vous pouvez faire les opérations sur es vecteurs directement:
```cpp
    value = -2*velocity;
```

```cpp
class Light
{
    private:
        glm::vec3 m_position;
        glm::vec3 m_intensity;
    public:
        Light(glm::vec3 pos, glm::vec3 intensity) : m_position(pos), m_intensity(intensity){};
        inline glm::vec3 get_position() const {return m_position;};
        inline glm::vec3 get_intensity() {return m_intensity;};
        inline void set_position(glm::vec3 pos) {m_position = pos;};
        inline void set_intensity(glm::vec3 intensity) {m_intensity = intensity;};
};
```
Une classe qui a juste des getters et setters triviaux, ça peut être écrit plus simplement comme une struct : 
```cpp
struct Light
{
    glm::vec3 position;
    glm::vec3 intensity;
};
```

```cpp
    Vbo cube_vbo(1);
    cube_vbo.gen();
```
Si une méthode doit toujours être appelée après la construction de l'objet, alors elle devrait directemennt faire partie du constructeur. Ca évite le risque d'oublier de l'appeler. Une fois qu'un objet est construit `VBO cube_vbo(1);`il est censé être déjà valide et utilisable.

Vous avez beaucoup de code mort, par ex
```cpp
    Force avoidance(params._multiplicator_avoidance); //Tendance à augmenter la distance inter-boids
    Force alignement(params._multiplicator_alignement); //Tendance à former des gros groupes facilement
    Force centering(params._multiplicator_centering); //Tendance à diminuer le rayon d'un groupe de boid
```
qui ne sont utilisées nulle part.

```cpp
std::vector<Boid> e = flock.get_boids();  
```
Attention vous faites une copie qui peut être coûteuse si il y a beaucoup de boids ! Prenez plutôt une référence :
```cpp
const std::vector<Boid>& e = flock.get_boids();  
```