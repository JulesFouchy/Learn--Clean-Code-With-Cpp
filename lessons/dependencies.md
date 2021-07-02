Managing dependencies between the different parts of your application is probably the most difficult challenge as your codebase grows.

## The Singleton attempt

One tempting solution is to resort to the *Singleton* (anti-)pattern. In its simplest form it consists in making your class static so that anyone can access it from anywhere. It has the advantage that you don't need to pass an instance around (which would probably require you to modify the signature of quite a few fonctions to pass the instance to the parts that need it). **This makes the Singleton a really good solution _in the short term_.**

But the Singleton can end up causing a few problems, hence why most people have stopped using it :

- **It prevents you from having multiple instances of the same class**. Obviously you are a reasonable person and you use a Singleton only for classes that you need one single instance of. . . But you might realize later that actually you need to have multiple instancies.
I have a few examples from my personal experience : *an history* seems like it is unique across the application, until you realize that having separate histories for separate system is a useful feature ; . And the argument to rule them all : what if you want to have multiple instances of your application in parallel ? Then you can't have any static data because it would be shared accross the instancies of your application. For example think of a workspace in a drawing application : you might want to have multiple drawings open at once, each with it's own layer system, history, etc.
- **It reduces testability** : each class that depends on a static class cannot be used outside of the application. This is a big problem for testing (and also for reusing your code !). When testing we usually like to create fake instancies of the dependencies of a class to test that class. For example if you depend on a server, it is nice to make your tests with a mock server (for example that returns a dummy answer when you make a request, whithout even making a web call to a service) rather that the production one ! It prevents breaking things or even relying on having a server running. Also you can test different scenarios – like the server beeing down – whithout having to shut down your actual server ! 
This is also why you should depend on interfaces and never on concrete classes. If you depend on an ```IServer``` you can then have different test implementations : ```MockServerRunning```, ```MockServerDown```, ```MockServerLaggy``` etc.
- **It hides dependencies**. Even though it is pain to write each dependency explicitly in the signature of functions, later down the road you will be happy to be able to see at a glance what is required for a given function (when refactoring for example). It will also be easier to reuse the code later on other projects if the only dependencies are at the function boundary (aka in the signature).

## The best practices

**Dependency Injection** Yes, you should receive as parameters all the classes / systems that you depend on. Storing them as members isn't the cleanest either in my opinion (this can be qualified though) ; I would tend to only store a reference to a class if there is a very strong coupling between the two (like a ```CameraController``` and the corresponding ```Camera```), and otherwise I would prefer sending references as parameters to each function that needs them.

If you end up with too many arguments, maybe grouping them in a struct can be a good idea. This should be considered carefully though because it can lead to introducing unnecessary dependencies (if a class X needs 4 out of the 5 classes packaged in a struct Y, it can be tempting to make X depend on Y, although it will grab one unnecessary dependency, which is *bad*).

**Dependency Inversion** (the I of SOLID) The interfaces should be owned by the high level that uses it, not by the low level that implements it.

## To go further

[About the Singleton and alternatives to it](https://www.youtube.com/watch?v=K5c7uvWe_hw)

[About SOLID by Klaus Iglberger](https://www.youtube.com/watch?v=Ntraj80qN2k)