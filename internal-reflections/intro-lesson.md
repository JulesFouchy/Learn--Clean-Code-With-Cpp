Quizz: show code samples and ask them to find problems in them. (Some might be "perfect", this is great to spark discussions when ppl try to find problems in them even when there are no obvious ones).
We can go through all the big thematics of this class.

<!-- Buzz words:
- DRY
- responsibilty (SRP)
- Semantics
- Concept
- Dependency
- Composition (there's more to it than *Composition vs Inheritance*. It's also about creating modules that compose well otgether (see Andrei's Alexandrescu's [talk about allocators](https://youtu.be/LIb3L4vKZ7U), or the modules system in CoolLab))
- Change (Easy To Change)
- Intent (express your intent)
- Show intention, not implementation (e.g. create a struct that wraps an unordered_map (for example Cool's Databases), so that at any point you can change the unordered_map for a std::vector if you realize that you are often iterating over the whole collection and a vector would be faster. Beeing able to do the change in one single place is very powerful because it allows you to test, benchmark and compare the two solutions easily). `std::unordered_map` and `std::vector` are implementation-oriented classes, wheras `MyDatabase` is intention-oriented.

Explicit those concepts in the first lesson: they will come back all the time to justify why we do things in a certain way.

**Message of the course: I want you to care about the code you write; I want you to write it mindfully and think about the solutions you are deploying.** -->