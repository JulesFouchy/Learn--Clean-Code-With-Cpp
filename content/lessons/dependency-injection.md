---
title: Dependency Injection
benefit: 3
easiness: 4
level: 3
tags:
    - Clean Code
---
import GoingFurther from "@site/components/GoingFurther"

## Brief

*Dependency injection* is a fancy way of saying that adding more parameters to your functions is always the right solution to your problems.

Managing dependencies between the different parts of your application is probably the biggest challenge as your codebase grows. Thinking about your architecture carefully, and using dependency injection, can help you handle that complexity.

## The Singleton attempt

One tempting solution would be to resort to the *Singleton* (anti-)pattern: make classes that are `static` and therefore available everywhere! It has the advantage that you don't need to pass an instance around (which would probably require you to modify the signature of quite a few fonctions). This makes the Singleton a really good solution **_in the short term_**.

But the Singleton can end up causing a few problems, hence why most people tend to shy away from it:

- **It prevents you from having multiple instances of the same class**. Obviously you are a reasonable person and you use a Singleton only for classes that you need only one single instance of... But you often end up realizing that your assumptions were wrong and that you actually need multiple instances.<br/>
I have a few examples from my personal experience: *an history* seems like it is unique across the application, until you realize that having separate histories for separate systems is a useful feature.<br/>
And the argument to rule them all: what if you want to have multiple instances of your application in parallel? Then you can't have any static data because it would be shared accross the instancies of your application. For example think of a workspace in a drawing application: you might want to have multiple drawings open at once, each with it's own layer system, history, etc.
- **It reduces testability**: each class that depends on a static class cannot be used outside of the application. This is a big problem for testing (and also for reusing your code!). When testing we usually like to create fake instancies of the dependencies of a class to test that class. For example if you depend on a server, it is nice to make your tests with a mock server rather that the production one! The mock server could for example return a dummy answer when you make a request, whithout even having to make an actual web call. This prevents breaking things in production, or even relying on having a server running. Also you can test different scenarios – like the server beeing down – whithout having to shut down your actual server! This is also why it is nice to depend on interfaces instead of concrete classes. If you depend on an ```IServer``` you can then have different test implementations: ```MockServerRunning```, ```MockServerDown```, ```MockServerLaggy``` etc.
- **It hides dependencies**. Even though it is a pain to write each dependency explicitly in the signature of functions, later down the road you will be happy to be able to see at a glance what is required for a given function (when refactoring for example). It will also be easier to reuse the code later in other projects if the only dependencies are at the function boundary (aka in the signature).

## Dependency Injection

### Brief

**So yes, you should receive all the classes that you depend on as parameters to your functions / methods.**

Using parameters makes your functions independent of how the outside world is structured, which facilitates change.

In the case of a class, receiving the dependencies in the constructor and storing them as members isn't the cleanest solution either, and you should really prefer receiving the dependencies in each method that needs them. This will make clear which parts of your class actually need which dependency.

**Also** if you were to store a reference to the dependency, you would have to make sure that the pointed object outlives the class where the reference is stored; otherwise you would get a dangling reference!<br/>
For example if your dependency lives in a ```std::vector```, and the vector gets resized at some point, all the references to elements of that vector get invalidated! If you stored one such reference, you are in trouble! On the contrary if you pass the reference to the method each time you call it, you will not notice the change of memory address at all.

If you end up with too many arguments to your functions because of all the dependencies, maybe grouping them in a struct can be a good idea. Especially because this probably indicates that those dependencies are related and that there is an abstraction waiting to be discovered and reified into a struct or class. This should be considered carefully though because it could lead to introducing unnecessary dependencies: If a class X needs 4 out of the 5 classes packaged in a struct Y, it can be tempting to make X depend on Y, although it will grab one unnecessary dependency, which is *bad*. But if you craft your abstractions carefully, everything should be alright and beautiful.

To go further, watch [*Import as an antipattern - Demystifying Dependency Injection in modern Python*](https://youtu.be/qkGxy4c64Jg).

### When you have no choice but to store the dependency

An interesting exception to the *do not store your dependencies* rule is if you need your dependency in the destructor of your class (or in an operator like ```+=```): in those cases you cannot pass any arguments because a destructor has no arguments! Therefore you have no other choice but to store the dependency inside the class (or have it global but that would be even worse!).

In such cases[^1], follow the next section's advice and *avoid storing `&`s at all cost!*

[^1]: I met such a case when creating wrapper classes for Vulkan resources: they need a reference to the device to be destroyed, so I had to store a handle to the device in each wrapper class.

### About storing a reference (&)

**Never store a `&`, always store a pointer (`*`) or a [`std::reference_wrapper`](https://en.cppreference.com/w/cpp/utility/functional/reference_wrapper).**

Storing a reference (`&`) is a problem because it makes your type **non-copy-assignable**! That is because when trying to assign to a refence, you are actually assigning to the object behind the reference! You cannot modify where the reference points to after its creation!

Let's have an example :
```cpp
class MyClass {
public:
    // Constructor
    MyClass(const MyDependency& my_dependency) 
        : _my_dependency{my_dependency} // OK: initializes the reference to point to my_dependency
    {}
    // Copy Constructor
    MyClass(const MyClass& o)
        : _my_dependency{o._my_dependency} // OK: initializes the reference to point to o.my_dependency
    {}
    // Copy Assignment operator
    MyClass& operator=(const MyClass& o)
    {
        _my_dependency = o._my_dependency; // Bad! This doesn't change where the reference is pointing to, but instead tries to modify the object that the reference points to!
        return *this;
    }
private:
    const MyDependency& _my_dependency;
};
```

Here is [a nice article about problems around references by Herb Sutter](https://herbsutter.com/2020/02/).

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