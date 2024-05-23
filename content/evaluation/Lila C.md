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

## Clean Code (8 / 12 pts.)

➕ *What you **should** do:*

- 🌞 Write many small functions (<LessonLink slug="write-small-functions"/>)
- 🌞 Write small classes (<LessonLink slug="design-cohesive-classes"/>)
- ☁️ Write small structs (<LessonLink slug="use-structs-to-group-data"/>)
- ☁️ Use strong types (<LessonLink slug="strong-types"/>)
- ❌ Use encapsulation when appropriate (`public` / `private`) (<LessonLink slug="design-cohesive-classes"/>)
- ☁️ Use free functions as often as possible, and methods only when appropriate (<LessonLink slug="prefer-free-functions"/>)
- ☁️ <LessonLink slug="minimize-dependencies"/>

➖ *What you **shouldn't** do:*

- ❌ Hard to understand or misleading names (<LessonLink slug="naming"/>)
- 🌞 Duplicated code (<LessonLink slug="dry-dont-repeat-yourself"/>)
- 🌞 Overly complicated code
- 🌞 Global variables

## C++ Code Quality (2 / 3 pts.)

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

```cpp
void Boids::draw(const p6::Context& ctx, const float square_radius, const float maxspeed, const float minspeed, const Mesh& mesh, const glm::mat4 viewmatrix, const Program& program, float& height, const int& time)
{
    for (auto& i : m_boids)
    {
        i.draw(ctx, mesh, viewmatrix, program, time);
        i.move(square_radius, maxspeed, minspeed, height);
    }
}
```
Le fait que la méthode `draw()` fasse à la fois draw et move peut être confusant. Il faudrait lui donner un nom plus explicite, ou encore mieux, séparer ça en deux fonctions draw() et move().

```cpp
public:
    Boids() = default;
    Boids(const std::vector<Boid> vec);
    Boids(const int number);
    std::vector<Boid> getVect() const; // get le vector de Boids
    int               numberOfBoids() const;
    Boid              getBoid(const int id);
    void              addBoid(const Boid& boid);
    void              deleteBoid();
    void              changeSize(const int boids_number);
    void              draw(const p6::Context& ctx, const float square_radius, const float maxspeed, const float minspeed, const Mesh& mesh, const glm::mat4 viewmatrix, const Program& program, float& height, const int& time); // dessine tous les Boids
    void              alignement(const float neighbor_dist);
    void              cohesion(const float neighbor_dist);
    void              separation(const float avoid_factor);
    void              update(const p6::Context& ctx, const int boids_number, const float square_radius, const float neighbor_dist, const float avoid_factor, const float maxspeed, const float minspeed, const Mesh& mesh, const glm::mat4 viewmatrix, const Program& program, float& height, const int& time);
    std::vector<Boid> otherBoids(const Boid& b);
};
```
La plupart de ces méthodes pourraient être privées.

```cpp
Scene scene;
scene.Init(ctx);
```
Plutôt qu'une méthode Init faites ça directement dans le constructeur.

```cpp
void Scene::cleanupRessources()
{
    m_fish_program.deleteTextureBufferArray();
    m_cube_program.deleteTextureBufferArray();
    m_arpenteur_program.deleteTextureBufferArray();
    m_seaweed_program.deleteTextureBufferArray();
    m_shark_program.deleteTextureBufferArray();
    m_cube.DeleteVboVao();
    m_fish.DeleteVboVao();
    m_fishlow.DeleteVboVao();
    m_fishverylow.DeleteVboVao();
    m_shark.DeleteVboVao();
    m_seaweed.DeleteVboVao();
    m_mushroom.DeleteVboVao();
}
```
Pas besoin de ces méthodes puisque vous avez mis un destructeur aux classes VBO et VAO. Le destructeur sera appelé automatiquement, c'est tout l'intérêt !