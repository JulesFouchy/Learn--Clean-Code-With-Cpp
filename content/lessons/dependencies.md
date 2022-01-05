---
title: Dependencies
benefit: 5
easiness: 1
order: 3
tags:
    - Clean Code
---
import GoingFurther from "@site/components/GoingFurther"

Managing dependencies between the different parts of your application is probably the most difficult challenge as your codebase grows.

## The Singleton attempt

One tempting solution is to resort to the *Singleton* (anti-)pattern. In its simplest form it consists in making your class static [^1] so that anyone can access it from anywhere. It has the advantage that you don't need to pass an instance around (which would probably require you to modify the signature of quite a few fonctions to pass the instance to the parts that need it). **This makes the Singleton a really good solution _in the short term_.**

[^1]: Or rather have a static instance available through a ```MyClass::get()``` method, because it gives you control over the instanciation and destruction order, which is important when you have dependencies between your singletons, and when you use multithreading.

But the Singleton can end up causing a few problems, hence why most people have stopped using it :

- **It prevents you from having multiple instances of the same class**. Obviously you are a reasonable person and you use a Singleton only for classes that you need one single instance of. . . But you might realize later that actually you need to have multiple instancies.
I have a few examples from my personal experience : *an history* seems like it is unique across the application, until you realize that having separate histories for separate systems is a useful feature. And the argument to rule them all : what if you want to have multiple instances of your application in parallel ? Then you can't have any static data because it would be shared accross the instancies of your application. For example think of a workspace in a drawing application : you might want to have multiple drawings open at once, each with it's own layer system, history, etc.
- **It reduces testability** : each class that depends on a static class cannot be used outside of the application. This is a big problem for testing (and also for reusing your code !). When testing we usually like to create fake instancies of the dependencies of a class to test that class. For example if you depend on a server, it is nice to make your tests with a mock server (for example that returns a dummy answer when you make a request, whithout even making a web call to a service) rather that the production one ! It prevents breaking things or even relying on having a server running. Also you can test different scenarios – like the server beeing down – whithout having to shut down your actual server ! 
This is also why you should depend on interfaces and never on concrete classes. If you depend on an ```IServer``` you can then have different test implementations : ```MockServerRunning```, ```MockServerDown```, ```MockServerLaggy``` etc.
- **It hides dependencies**. Even though it is a pain to write each dependency explicitly in the signature of functions, later down the road you will be happy to be able to see at a glance what is required for a given function (when refactoring for example). It will also be easier to reuse the code later in other projects if the only dependencies are at the function boundary (aka in the signature).

## The best practices

### Dependency Injection
Yes, you should receive as parameters all the classes / systems that you depend on. Storing them as members isn't the cleanest either in my opinion (this can be qualified though) ; ~~I would tend to only store a reference to a class if there is a very strong coupling between the two (like a ```CameraController``` and the corresponding ```Camera```)~~ (EDIT : I would **almost never** store references because it makes copying and assigning pretty troublesome / impossible).

You should always send references as parameters to each function that needs them : it prevents you from introducing extra member variables, and makes it clearer which parts of your class actually need or act upon a dependency.

If you end up with too many arguments, maybe grouping them in a struct can be a good idea. This should be considered carefully though because it can lead to introducing unnecessary dependencies (if a class X needs 4 out of the 5 classes packaged in a struct Y, it can be tempting to make X depend on Y, although it will grab one unnecessary dependency, which is *bad*).

https://youtu.be/qkGxy4c64Jg

#### About storing a reference to a dependency

Storing *a reference* is a problem because it makes your type more complex than it needs to be. I realized that after a 1 hour debugging session filled with cryptic template error messages. 
Having a reference in your type will make it **non-copy-assignable** ! That is because when trying to assign to a refence, you are actually assigning to the object behind the reference ! You cannot modify where the reference points to after its creation !

Let's have an example :
```cpp
class MyClass {
public:
    // Constructor
    MyClass(const MyDependency& my_dependency) 
        : _my_dependency{my_dependency} // OK : initializes the reference to point to my_dependency
    {}
    // Copy Constructor
    MyClass(const MyClass& o)
        : _my_dependency{o._my_dependency} // OK : initializes the reference to point to o.my_dependency
    {}
    // Copy Assignment operator
    MyClass& operator=(const MyClass& o)
    {
        _my_dependency = o._my_dependency; // Bad ! This doesn't change where the reference is pointing to, but instead tries to modify the object that the reference points to ! Here this is a compile error because _my_dependency is a const&, but if it was not const, that would be a silent bug modifying the object pointed to by _my_dependency!!!
        return *this;
    }
private:
    const MyDependency& _my_dependency;
};
```

Here is a nice article about problems around references by Herb Sutter : https://herbsutter.com/2020/02/

**Also** when you store a reference or a pointer, you must make sure that the pointed object outlives the class where the reference is stored ; otherwise you will get a dangling reference or pointer !
For example if your dependency lives in a ```std::vector```, and the vector gets resized at some point, all the references to elements of that vector get invalidated ! If you stored one such reference, you are in trouble ! On the contrary if you pass a reference each frame, you will not notice the change of adress in memory at all.

#### When you have no choice but to store the dependency

An interesting exception to the *do not store your dependencies* rule is if you need your dependency in the destructor of your class (or in an operator like ```+=```) : in those cases, you cannot pass any arguments ! Therefore you have no other choice but to store the dependency inside the class (or have it global but that would be even worse !)

In such cases[^2], you can use a [`std::reference_wrapper`](https://en.cppreference.com/w/cpp/utility/functional/reference_wrapper): it will act like a reference, but still be copyable.

[^2]: I met such a case when creating wrapper classes for Vulkan resources: they need a reference to the device to be destructed, so I had to store a handle to the device in each wrapper class.

### Dependency Inversion (the D of SOLID)

The interfaces should be owned by the high level that uses it, not by the low level that implements it.

## Concepts vs Interfaces

Concepts are better than interfaces because they can also require the existance of free functions, not only methods.

For example if you want to require that each shape is drawable, with an interface it would require that ```draw()``` be a method of each ```Shape``` class. With concepts you can require that a free function ```draw(Shape const auto& shape)``` exists for each type following the ```Shape``` concept. And free functions are great for many reasons ! (Single Responsibility Principle, Open-Close Principle, etc. See [Free your functions](https://www.youtube.com/watch?v=WLDT1lDOsb4))

## Going further

<GoingFurther resources = {[
    {
        title: "Retiring the Singleton Pattern: Concrete Suggestions for What to use Instead",
        author: "Peter Muldoon",
        link: "https://youtu.be/K5c7uvWe_hw",
        duration: "1h",
        description: "About the Singleton and alternatives to it"
    },
    {
        title: "Breaking Dependencies: The SOLID Principles",
        author: "Klaus Iglberger",
        link: "https://youtu.be/Ntraj80qN2k",
        duration: "1h",
    },
]}/>