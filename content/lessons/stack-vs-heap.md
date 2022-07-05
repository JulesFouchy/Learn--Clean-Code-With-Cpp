---
title: Stack vs Heap
benefit: 4
easiness: 3
level: good-to-know
tags:
    - Performant Code
---
import GoingFurther from "@site/components/GoingFurther"
import LessonLink from "@site/components/LessonLink"

## Brief

There are two kinds of memory where your variables can be created: the *stack* and the *heap*. Where you choose to create them has a lot of implications, but fear not: the choice is often very easy!

### The Stack

**This is the default**. (And a good one at that). When you say for example `int i = 3;` you are creating a variable on the stack.

### The Heap

When you say `int* i = new int;` you don't get an int, you get *a pointer to an int*. The actual int is created far far away, in the weird country of the heap.

## Prefer the stack

You should _**almost always**_ be using the stack! This is both simpler and more performant.<br/>

### Automatic cleanup

Variables that are on the stack are automatically destroyed when their scope ends:

```cpp title="Stack"
{
    int i = 3;
} // i is destroyed here, no memory can ever leak
```

```cpp title="Heap"
{
    int* i = new int;
} // The pointer is destroyed here, but not the int that it was pointing to! We have a memory leak!

// To fix that we need to do:
{
    int* i = new int;
    delete i;
}
```

### Performance

Allocating on the heap is much slower than allocating on the stack! Also, accessing variables on the heap might be slower because they are more likely to be spread out all over the memory and be in different cache lines. [You can read more about that here](https://stackoverflow.com/a/24057744/15432269).


## When to use the heap

There are a few good reasons to use the heap. But you should always remember that since managing heap memory is complicated you should *always* use standard types that will do the heavy lifting for you. For example `std::vector` and `std::unique_ptr` use heap memory, but since they encapsulate it you don't have to worry about it.<br/>
That's why we can have guidelines like *never write `new`*: if you need to have something allocated on the heap, use a `std::unique_ptr` or a `std::shared_ptr` that will handle the `new` and the `delete` for you.

### For varying-size objects

For the stack to be as efficient as it is, the size of all the variables must be known at compile-time. If for example you need a resizable array (`std::vector`), then you have no choice but to use the heap. `std::string` also allocates on the heap for the same reason.

### For big objects

When you need a lot of memory to store something like an image or a 3D model, it might not fit on the stack. In such case you will need to use the heap (probably through a `std::vector` to store all the pixels or vertices).<br/>
This also has the advantage that all of the data won't be copied when you are returning an image from a function: only the pointer is copied, since the pointed data that lives on the heap doesn't have to move and won't be destroyed when the scope of the function ends.

### For polymorphism

You can't know the size of a polymorphic class at compile time because some child classes could be bigger than the parent class. You therefore have to use the heap[^1].

[^1]: **NB:** actually you can use <LessonLink slug="composition-over-inheritance" anchor="#stdvariant" text="std::variant"/> if you want polymorphic objects on the stack. `std::variant` is basically a better version of inheritance.


```cpp
class ParentClass {
    int x;
};

class ChildClass : public ParentClass {
    int y;
};

ParentClass  my_object = ChildClass{};     // Doesn't compile because you can't fit a ChildClass (two ints) into a ParentClass (one int).
ParentClass* my_object = new ChildClass{}; // Works because the size of a pointer is always the same, no matter the size of the pointed object.
```

## Going further

<GoingFurther resources = {[
    {
        title: "Stack vs Heap Memory in C++",
        author: "The Cherno",
        link: "https://youtu.be/wJ1L2nSIV1s",
        duration: "20min",
    },
]}/>